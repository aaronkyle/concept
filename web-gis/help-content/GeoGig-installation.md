As a beta software, it is advisable to install per user rather than making it system-wide.

*Dependencies:*
* Java 7 or above


*Steps to install:*

1. If you don't already have Java (at Java 7 or above), install a [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html). 


1. Create GeoGig folder somewhere meaningful within the applicaton user account:
    * `src-user@server:~$ mkdir geogig`

1. Download GeoGig and unzip to your installation directory:
    * `cd geogig && wget http://sourceforge.net/projects/geogig/files/latest/download`

1. Unzip:
    * `unzip geogig-cli-app-1.0-beta1.zip`

1. `echo` your PATH variable into the user's `.bashrc`
    * `echo 'PATH="$PATH:~/geogig/bin"' >> .bashrc`

1. Verify that your PATH was written appropriately:
    * `. .bashrc`
        * NOTE: the dot command `.` simply executes or opens a file

**...and that's it!** 

To verify that geogig is installed, run the command `geogig --version`

```
         Project Version : 1.0-beta1
              Build Time : August 14, 2014 at 17:44:46 ART
         Build User Name : Gabriel Roldan
        Build User Email : gabriel.roldan@gmail.com
              Git Branch : r1.0-beta1
           Git Commit ID : 9aae709f4f451802a09c14293c92a46372c868bd
         Git Commit Time : August 14, 2014 at 17:43:33 ART
  Git Commit Author Name : Gabriel Roldan
 Git Commit Author Email : gabriel.roldan@gmail.com
      Git Commit Message : Set version to 1.0-beta1
```

