## A brief note about QGIS Server:

[QGIS Server](http://hub.qgis.org/projects/quantum-gis/wiki/QGIS_Server_Tutorial) provides a web map service (WMS) using the same libraries as the Quantum GIS (QGIS) desktop application. Maps and print templates created in QGIS desktop can be published as web maps simply by copying the QGIS project file into the server directory. The resulting web maps look exactly the same as in the desktop.

## [Installation for Debian/Ubuntu Linux](http://hub.qgis.org/projects/quantum-gis/wiki/QGIS_Server_Tutorial)

CAVEAT: QGIS Server is usually run as CGI/FastCGI module within the Apache Webserver.  The official QGIS documentation therefore describes an installation process bound to Apache.  CCCS uses Nginx.  These installation instructions are modified accordingly.

To setup QGIS Server with Apache 2 mod_fastcgi, the following packages are required:

   `sudo apt-get install qgis-mapserver libapache2-mod-fcgid`

Note that libapache2-mod-fcgid and libapache2-mod-fastcgi are different packages and require different configurations.


### Scratch notes for figuring out an appropriate nginx config:

Noticing how the QGIS server users `mod_fastcgi` with Appache, we are currently searching the internet to see if we can find some clues for now to configure our nginx settings to work for QGIS.  The followings notes come from the documentation and discussions around `trac`.  These materials are for reference (and re-editing) only.
  
#### [Trac with FastCGI](https://trac.osgeo.org/qgis/wiki/TracFastCgi)

FastCGI interface allows Trac to remain resident much like with mod_python. It is faster than external CGI interfaces which must start a new process for each request. However, unlike mod_python, FastCGI supports  Apache SuEXEC, i.e. run with different permissions than web server. Additionally, it is supported by much wider variety of web servers. 

### Nginx Configuration

1. Nginx configuration snippet - confirmed to work on 0.6.32

```
    server {
        listen       10.9.8.7:443;
        server_name  trac.example;

        ssl                  on;
        ssl_certificate      /etc/ssl/trac.example.crt;
        ssl_certificate_key  /etc/ssl/trac.example.key;

        ssl_session_timeout  5m;

        ssl_protocols  SSLv2 SSLv3 TLSv1;
        ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
        ssl_prefer_server_ciphers   on;

        # (Or ``^/some/prefix/(.*)``.
        if ($uri ~ ^/(.*)) {
             set $path_info /$1;
        }

        # You can copy this whole location to ``location [/some/prefix]/login``
        # and remove the auth entries below if you want Trac to enforce
        # authorization where appropriate instead of needing to authenticate
        # for accessing the whole site.
        # (Or ``location /some/prefix``.)
        location / {
            auth_basic            "trac realm";
            auth_basic_user_file /home/trac/htpasswd;

            # socket address
            fastcgi_pass   unix:/home/trac/run/instance.sock;

            # python - wsgi specific
            fastcgi_param HTTPS on;

            ## WSGI REQUIRED VARIABLES
            # WSGI application name - trac instance prefix.
	    # (Or ``fastcgi_param  SCRIPT_NAME  /some/prefix``.)
            fastcgi_param  SCRIPT_NAME        "";
            fastcgi_param  PATH_INFO          $path_info;

            ## WSGI NEEDED VARIABLES - trac warns about them
            fastcgi_param  REQUEST_METHOD     $request_method;
            fastcgi_param  SERVER_NAME        $server_name;
            fastcgi_param  SERVER_PORT        $server_port;
            fastcgi_param  SERVER_PROTOCOL    $server_protocol;

            # for authentication to work
            fastcgi_param  AUTH_USER          $remote_user;
            fastcgi_param  REMOTE_USER        $remote_user;
        }
    }
```

2. Modified trac.fcgi:

```
#!/usr/bin/env python
import os
sockaddr = '/home/trac/run/instance.sock'
os.environ['TRAC_ENV'] = '/home/trac/instance'

try:
     from trac.web.main import dispatch_request
     import trac.web._fcgi

     fcgiserv = trac.web._fcgi.WSGIServer(dispatch_request, 
          bindAddress = sockaddr, umask = 7)
     fcgiserv.run()

except SystemExit:
    raise
except Exception, e:
    print 'Content-Type: text/plain\r\n\r\n',
    print 'Oops...'
    print
    print 'Trac detected an internal error:'
    print
    print e
    print
    import traceback
    import StringIO
    tb = StringIO.StringIO()
    traceback.print_exc(file=tb)
    print tb.getvalue()
```

3. reload nginx and launch `trac.fcgi`:

```
trac@trac.example ~ $ ./trac-standalone-fcgi.py 
```

The above assumes that:

 * There is a user named 'trac' for running trac instances and keeping trac environments in its home directory.
 * `/home/trac/instance` contains a trac environment
 * `/home/trac/htpasswd` contains authentication information
 * `/home/trac/run` is owned by the same group the nginx runs under and if your system is Linux the `/home/trac/run` has setgid bit set (chmod g+s run) and patch from ticket [#T7239](http://trac.edgewall.org/ticket/7239) is applied, or you'll have to fix the socket file permissions every time 

Unfortunately nginx does not support variable expansion in fastcgi_pass directive. Thus it is not possible to serve multiple trac instances from one server block.

If you worry enough about security, run trac instances under separate users.

Another way to run trac as a FCGI external application is offered in ticket [#T6224](http://trac.edgewall.org/ticket/6224)

------

### Additional resources of fast_cgi with nginx:

   * http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html