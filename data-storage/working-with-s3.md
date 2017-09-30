## About S3

Amazon S3 is a cloud storage provided by Amazon Web Services (AWS).


### Root user


### User accounts

[Granting Applications that Run on Amazon EC2 Instances Access to AWS Resources](http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html)

[Administering Access Keys for IAM Users](http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html#Using_CreateAccessKey)

[And I created users via the Identity and Access Management console:](https://console.aws.amazon.com/iam/#home)


## Working with S3

### Gaining terminal access with s3cmd

A popular and simple Amazon S3 command line tool is **s3cmd**, (written in python).  **s3cmd** is not only helpful for active maintenance; it can be deployed run scripted [cron](http://en.wikipedia.org/wiki/Cron) jobs such as daily backups.

#### s3cmd installation

To install s3cmd on Ubuntu or Debian:

`sudo apt-get install s3cmd`

#### s3cmd configuration

You need to configure s3cmd before using it for the first time by running `s3cmd --configure`. You'll be prompted with series of questions:

*    access key and secret key for AWS S3
*    encryption password for encrypted data transfer to and from AWS S3.
*    path to GPG program used to encrypt data (e.g., /usr/bin/gpg)
*    whether to use HTTPS protocol
*    name and port of HTTP proxy if used 

Configuration will then be saved as a plain text in `~/.s3cfg`.

#### Basic Usage of s3cmd

* http://xmodulo.com/how-to-access-amazon-s3-cloud-storage-from-command-line-in-linux.html

#### Copying without redundancy

* [man page](http://s3tools.org/usage)
* [quick examples for file syncing](http://s3tools.org/s3cmd-sync)

`s3cmd sync -r --skip-existing . s3://foldername/`

### Mounting S3 to your file system

http://cloud-engineering.forthscale.com/2011/04/mounting-s3-as-file-system-on-linux.html

### Configuring AWS users and giving them access to S3

In order to access S3 resources securely, we use AWS users who are granted access through their policies so that they can read and write to appropriate buckets. The credentials for these users are stored in secret.py files associated with the relevant Django settings to ensure that the credential information is kept secret.

The policies are kept as simple as possible, so for example the cccs-docs user set up to access the cccs S3 document repository on behalf of the cccs production website has the following policy:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": [
        "arn:aws:s3:::cccs-docs",
        "arn:aws:s3:::cccs-docs/*"
      ]
    }
  ]
}
```

This policy grants the duly authenticated cccs-docs user the ability to carry out all s3 operations on the cccs-docs bucket and its contents.

The visibility of this policy here in no way affects security. Full details on modifying the policies as necessary are available (here)[http://docs.aws.amazon.com/IAM/latest/UserGuide/policy-reference.html].
