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


<!--
## [Using Bucket Policies and User Policies](http://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html)


Bucket policy and user policy are two of the access policy options available for you to grant permission to your Amazon S3 resources. Both use JSON-based access policy language. The topics in this section describe the key policy language elements, with emphasis on Amazon S3–specific details, and provide example bucket and user policies.

Important

We recommend you first review the introductory topics that explain the basic concepts and options available for you to manage access to your Amazon S3 resources. For more information, see Introduction to Managing Access Permissions to Your Amazon S3 Resources. 



...

Topics

  * [Access Policy Language Overview](http://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html)

The topics in this section describe the basic elements used in bucket and user policies as used in Amazon S3. For complete policy language information, see the Overview of AWS IAM Policies and the AWS IAM Policy Reference topics in the Using IAM.
Common Elements in an Access Policy

In its most basic sense, a policy contains the following elements:

    Resources – Buckets and objects are the Amazon S3 resources for which you can allow or deny permissions. In a policy, you use the Amazon Resource Name (ARN) to identify the resource.

    Actions – For each resource, Amazon S3 supports a set of operations. You identify resource operations you will allow (or deny) by using action keywords (see Specifying Permissions in a Policy).

    For example, the s3:ListBucket permission will allow the user permission to the Amazon S3 GET Bucket (List Objects) operation.

    Effect – What the effect will be when the user requests the specific action—this can be either allow or deny.

    If you do not explicitly grant access to (allow) a resource, access is implicitly denied. You can also explicitly deny access to a resource, which you might do in order to make sure that a user cannot access it, even if a different policy grants access.

    Principal – The account or user who is allowed access to the actions and resources in the statement. You specify principal only in a bucket policy. It is the user, account, service, or other entity who is the recipient of this permission. In a user policy, the user to which the policy is attached is the implicit principal.

The following example bucket policy shows the preceding common policy elements. The policy allows Dave, a user in account Account-ID, s3:GetBucketLocation, s3:ListBucket and s3:GetObject Amazon S3 permissions on the examplebucket bucket.

{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Sid": "ExampleStatement1",
         "Effect": "Allow",
         "Principal": {
            "AWS": "arn:aws:iam::Account-ID:user/Dave"
         },
         "Action": [
            "s3:GetBucketLocation",
            "s3:ListBucket",
             "s3:GetObject"
         ],
         "Resource": [
            "arn:aws:s3:::examplebucket"
         ]
      }
   ]
}

Because this is a bucket policy, it includes the Principal  element, which specifies who gets the permission.

For more information about the access policy elements, see the following topics:

    Specifying Resources in a Policy

    Specifying a Principal in a Policy

    Specifying Permissions in a Policy

    Specifying Conditions in a Policy

The following topics provide additional policy examples:


    [Bucket Policy Examples](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html)



    [User Policy Examples](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-policies-s3.html)




..




http://docs.aws.amazon.com/gettingstarted/latest/swh/getting-started-create-bucket.html

When you first create an Amazon S3 bucket, only you can access the bucket and its contents. This default behavior ensures that you do not accidentally expose your data to other users. The point of a website, however, is to be visited, so we'll apply a policy to the root domain and subdomain buckets that anyone to view their contents.

Bucket policies control user access to both a bucket and the objects in it. The policies provide a fine granularity of access control for Amazon S3 resources. The policies also allow you to set permissions for a large number of objects with one statement. For more information, see Using Bucket Policies in the Amazon Simple Storage Service Developer Guide.

To set access permissions on your S3 bucket

1.    In the Amazon S3 console, in the Buckets pane, right-click the root domain bucket you created (in this guide, we used example.com) and then click Properties. In the details pane, click Permissions. 


1. Under Permissions, click Add bucket policy.

1.The following policy gives everyone permission to view any file in the example.com bucket. A bucket policy is a collection of JavaScript Object Notation (JSON) statements written in the access policy language. Copy the text from this document, and then paste it into the Bucket Policy Editor. Replace example.com with the name of your bucket. For more information about bucket policies, see Access Control in the Amazon Simple Storage Service Developer Guide.


````````

{
  "Version":"2012-10-17",
  "Statement": [{
    "Sid": "Allow Public Access to All Objects",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::example.com/*"
  }
 ]
}

````````


1.When you have finished revising the policy for your bucket, in the Bucket Policy Editor, click Save. In the Amazon S3 bucket, under Permissions, click Save.



## [Configuring the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)



This section explains how to configure settings that the AWS Command Line Interface uses when interacting with AWS, such as your security credentials and the default region.

Topics

    Configuration Settings and Precedence
    Configuring Credentials
    Configuring the AWS Region
    Configuring Command Output
    Setting and Using Named Profiles
    Using an HTTP Proxy
    Command Completion

Configuration Settings and Precedence

To connect to any of the supported services with the AWS CLI, you must provide your AWS credentials. The AWS CLI uses a provider chain to look for AWS credentials in a number of different places, including system or user environment variables and local AWS configuration files.

For information on creating access keys for your account, see Managing Access Keys in the IAM User Guide.

The AWS CLI looks for credentials and configuration settings in the following order:

    Environment Variables – AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.

    The AWS credential profiles file – located at ~/.aws/credentials on Linux, OS X, or Unix, or at C:\Users\USERNAME\.aws\credentials on Windows. This file can contain multiple named profiles in addition to a default profile.

    The CLI configuration file – typically located at ~/.aws/config on Linux, OS X, or Unix, or at C:\Users\USERNAME\.aws\config on Windows. This file can contain a default profile, named profiles, and CLI specific configuration parameters for each.

    Instance profile credentials – these credentials can be used on EC2 instances with an assigned instance role, and are delivered through the Amazon EC2 metadata service.

Configuring Credentials

Setting your credentials for use by the AWS CLI can be done in a number of ways, but here are the recommended approaches:

    Use the AWS CLI to set credentials with the following command:

    $ aws configure

    Enter your access key and secret key when prompted. Pressing the enter key without typing a value will keep any previously configured value or assign a default if no value currently exists.

    Tip

    Use aws configure --profile PROFILE_NAME to configure a named profile. For information about using a named profile when executing an AWS CLI command, see Using Profiles with the AWS CLI.

    The CLI will store credentials that are specified with aws configure in a local file, typically ~/.aws/config on Linux, OS X, or Unix and C:\Users\USERNAME\.aws\config on Windows. If a profile is configured in both this file and the AWS credentials file, the profile in the AWS credentials file will take precedence.

    The default CLI config file location can be overridden by setting the AWS_CONFIG_FILE environmental variable to another local path. If this variable is set, aws configure will write to the specified file, and the CLI will attempt to read profiles from there instead of the default path. Regardless of the location of the config file, if a credentials file exists, it takes precedence when the CLI looks for credentials.

    Set credentials in the AWS credentials profile file on your local system, located at:

        ~/.aws/credentials on Linux, OS X, or Unix

        C:\Users\USERNAME\.aws\credentials on Windows

    This file should contain lines in the following format:

    [default]
    aws_access_key_id = your_access_key_id
    aws_secret_access_key = your_secret_access_key

    Substitute your own AWS credentials values for the values your_access_key_id and your_secret_access_key.

    Set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables.

    To set these variables in Linux, OS X, or Unix, use export:

    export AWS_ACCESS_KEY_ID=your_access_key_id
    export AWS_SECRET_ACCESS_KEY=your_secret_access_key

    To set these variables in Windows, use set:

    set AWS_ACCESS_KEY_ID=your_access_key_id
    set AWS_SECRET_ACCESS_KEY=your_secret_access_key

    To use the CLI from an EC2 instance, create a role that has access to the resources needed and assign that role to the instance when it is launched. Credentials will be configured automatically and CLI commands will work without any additional setup. For more information, see Granting Applications that Run on Amazon EC2 Instances Access to AWS Resources in Using IAM.

Important

The AWS CLI does not allow you to specify credentials on an AWS CLI command (aws s3 ..., and so forth). You must provide credentials using one of the preceding methods before running any AWS CLI commands.
Setting Temporary Security Tokens

If you are using a temporary security token to access AWS, you have a number of options:

    Edit the CLI config file and add the security token to the default profile. For example:

    [default]
    aws_access_key_id=AKIAIOSFODNN7EXAMPLE
    aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    aws_session_token=example123324

    Configure the environment variable AWS_SESSION_TOKEN with your temporary security token. For example:

    $ export AWS_SESSION_TOKEN=example123324

Configuring the AWS Region

You must specify an AWS region when using the AWS CLI. For a list of services and available regions, see Regions and Endpoints. To specify the region, you have the following options:

    Configure the region setting using the aws configure command:

    $ aws configure

    Here's an example where the user is changing the default region from us-west-2 to us-east-1.

    AWS Access Key ID [********************]:
    AWS Secret Access Key [********************]:
    Default region name [us-west-2]: us-east-1
    Default output format [None]:

    Specify the region in the AWS_DEFAULT_REGION environment variable.

    Use the --region option with an AWS CLI command. The following example lists the Amazon SQS queues for the us-west-2 region.

    $ aws sqs list-queues --region us-west-2

Configuring Command Output

The default response output format for the AWS CLI is JSON. This format provides the complete response information and can be processed by tools such as jq. An ASCII table format and a tab-delimited text format are also available. To change the default output format (json, table, or text) you have the following options:

Option #1: Configure the default format using the aws configure command:

$ aws configure

Here's an example where the user sets the default output format to text.

AWS Access Key ID [********************]:
AWS Secret Access Key [********************]:
Default region name [us-west-2]:
Default output format [None]: text

Option #2: Specify the format in the AWS_DEFAULT_OUTPUT environment variable.

Option #3: Use the --output option with an AWS CLI command. The following example lists the Amazon EBS volumes in a table format.

$ aws ec2 describe-volumes --output table

Setting and Using Named Profiles

The AWS CLI and SDKs support named profiles stored in the CLI config file. The following example shows a config file with two profiles:

[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
region=us-east-1

[profile test-user]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
region=us-west-2

Each profile uses different credentials—perhaps from two different IAM users—and can also use different regions and output formats.

Important

The AWS credentials file uses a different naming format than the CLI config file for named profiles. Do not include the 'profile ' prefix when configuring a named profile in the AWS credentials file. The credentials file also does not support the region and output settings that can be set in the CLI config file.

While both SDKs and CLI will read from either file, the SDKs may output warnings if you store credentials in the CLI config file. If you are using both CLI and SDK, you can avoid these warnings by putting credentials in the credentials file and region/output settings in the config file. For a named profile that would look like this:

~/.aws/credentials

[test-user]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY

~/.aws/config

[profile test-user]
region=us-east-1
output=text

Using Profiles with the AWS CLI

To use a named profile with the AWS CLI, you can specify the profile on the command-line or in the environment. The CLI will use profiles specified on the command-line first, but if none is specified, then it will look for the AWS_DEFAULT_PROFILE environment variable. If neither could be found, it uses the default profile.

To specify which profile to use for an AWS CLI command, add the --profile switch followed by the profile name. For example, to list S3 buckets using the test-user profile from the previous example, you could type:

$ aws --profile test-user s3 ls

To specify the profile in the environment, set the AWS_DEFAULT_PROFILE environment variable with the profile name. The profile specified will be used automatically by all AWS CLI commands that are executed within the same environment. For example:

$ export AWS_DEFAULT_PROFILE=test-user
$ aws s3 ls

Tip

Even if you set a profile in your environment, you can override it with the --profile AWS CLI command switch.
Using an HTTP Proxy

If you need to access AWS through proxy servers, you should configure the HTTP_PROXY and HTTPS_PROXY environment variables with the IP addresses for your proxy servers.

Linux, OS X, or Unix

$ export HTTP_PROXY=http://a.b.c.d:n
$ export HTTPS_PROXY=http://w.x.y.z:m



In these examples, http://a.b.c.d:n and http://w.x.y.z:m are the IP addresses and ports for the HTTP and HTTPS proxies.

If you are using IAM roles, you should also set the NO_PROXY environment variable with the IP address 169.254.169.254, so that the AWS CLI can access the Instance Meta Data Service (IMDS).
Linux, OS X, or Unix

$ export NO_PROXY=169.254.169.254




Command Completion

On Unix-like systems, the AWS CLI includes a command-completion feature that enables you to use the Tab key to complete a partially typed command. This feature is not automatically installed so you need to configure it manually.

To enable tab completion for bash, use the built-in command complete:

$ complete -C '/usr/local/aws/bin/aws_completer' aws

If you installed the CLI to a location other than /usr/local/aws, replace the path in the above command with the location of aws_completer on your system. If you are not sure where the CLI is installed, use find / -name aws_completer to find the path.


After enabling command completion, type in a partial command (e.g. aws s) and press tab to see the available commands. If you see a command not found error, confirm that the installation folder is in your PATH variable.

Finally, to ensure that completion continues to work after a reboot, add the configuration command that you used to enable command completion to your shell configuration file (e.g. ~/.bash_profile). 


-->
