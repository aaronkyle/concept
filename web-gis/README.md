WORK IN PROGRESS

# Introduction
CCCS needs to present many complex annotated maps. These maps require interactive features akin to google maps where layers are shown/hidden, features are highlighted and spatial analysis may be performed.

[QGIS](http://www.qgis.org/en/site/) is a tool that creates interactive map projects. The maps are presented and analysed within the QGIS tool. Its presentation is adequate for CCCS presentation but it needs to be presented on a web page rather than within the QGIS desktop.

Using the procedure described below, you can work locally in QGIS desktop, modifying or creating maps as necessary and see the results presented on the website.

## Issues

QGIS Server presents a single QGIS project as a [WMS](http://en.wikipedia.org/wiki/Web_Map_Service) so that the CCCS website can use [QGIS-Web-Client](https://github.com/qgis/QGIS-Web-Client) to present the map information. As this only works for a single project, a new service needs to be set up for each new QGIS map. Thus the process involves three distinct steps which are detailed below.

## Procedure

### Add the QGIS project to the repository

Add the QGIS project in its own appropriately named folder together with any dependent files under qgis/projects. The folder name is also the project name and it will be used for the url so keep it lower case and use underscores or hyphens to separate the words as necessary.

Your project should only contain one qgs file for use on the web site. This qgs project file must be the only qgs file in the root folder of the project. Its name does not matter.

All datasources in the project must reference items accessible to the CCCS server (edit the qgs file as necessary making sure that there are no links to local resources that are not part of the repository and ensure that the project opens and runs in QGIS desktop once in set up in your local working copy).

Once done, push your changes (to staging, preferably). Here is an example [commit](https://github.com/cccs-web/core/commit/db69c20e995515cffc373c12a3168ebe5c785e7f).

You can work on the project locally, as necessary using QGIS desktop making whatever use of Git suits your work. Once done, you can push your changes to the server and deploy them to either the staging or the production site as appropriate.

### Add a QGIS server to serve your project

This, and the remaining steps only have to be done once for each service.

To set up the server you must create an upstart job to launch the service and associate the service with an appropriate URL in the Nginx configuration.

#### Create the upstart job

The upstart job is needed to ensure that the QGIS server for your project is launched and restarted appropriately when the server restarts. This service must be created on the server that will serve the web site.

Create your service by copying the highest existing port number (the port number is included in the job name for convenience).

As these scripts potentially run very early during the server startup, they cannot be linked so you have to make a suitable copy:

```
~ $ sudo -i
~ # cd /etc/init
/etc/init # ls -l | grep qgis_server
-rw-r--r-- 1 root root  359 Dec 16 15:02 qgis_server_staging_9990.conf
/etc/init # cp qgis_server_9990.conf qgis_server_staging_9991.conf 
```

Edit the new file to point at your qgis project directory and to use the port number you specified (by adding one to the highest numbered existing qgis_server). Remember the port number because we need it to hook up Nginx.

Launch the service and check its status:
```
/etc/init # service qgis_server_staging_9991 start
qgis_server_staging_9991 start/running, process 16549
/etc/init # service qgis_server_staging_9991 status
qgis_server_staging_9991 start/running, process 16549
```

You now have a QGIS fcgi service running for your project. Currently it is available on the port you specified so the next step is to hook this up to an appropriate URL using nginx.

 If you have any trouble with this stage, read the [upstart documentation](http://upstart.ubuntu.com/cookbook/).

#### Configure Nginx to serve your QGIS project

As Nginx is run later in the process, you need to edit the relevant Nginx configuration (initially [staging](https://github.com/cccs-web/core/blob/master/deploy/staging/nginx.conf), and eventually [production](https://github.com/cccs-web/core/blob/master/deploy/production/nginx.conf)) in the repository and then make sure that Nginx is reloaded after your changes are deployed.

You can copy and paste in an appropriate url by copying an existing entry, such as:
```
    location /wms/helloworld {
        fastcgi_pass  localhost:9990;
        include fastcgi_params;
    }
```

Set the Url to /wms/ followed by the name of your qgis project folder (this is just a convention) and the port to pass the fcgi commands to to the port you specified when you created your service.

Once you deploy this, reload Nginx and, as long as your service is running, you can test the result by accessing your service.

A good way to do this is through QGIS desktop because it will allow you to see that all the layers etc. are available as expected. Create a new project and go to the WMS connection button in the Browser panel. Add a connection using the URL you specified (e.g. http://dev/wms/helloworld). When you click connect, you should be able to review the data in the drop down. If that works, you are all done with setting up the WMS. You can also use this technique to make use of the information in your project in another project.



