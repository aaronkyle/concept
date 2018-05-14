
* [JSON.parse(https://www.w3schools.com/js/js_json_parse.asp)

* [The key differences between SQL and NoSQL DBs.](http://www.monitis.com/blog/cc-in-review-the-key-differences-between-sql-and-nosql-dbs/)
* []()
* []()
* []()
* []()

https://stackoverflow.com/questions/2009005/are-column-and-table-name-case-sensitive-in-mysql

## [Case sensitivity for SQL identifiers](https://github.com/ontop/ontop/wiki/Case-sensitivity-for-SQL-identifiers/_edit)


### Identifiers for Metadata

The treatment of the casing of identifiers differs between database engines. As a general rule, if quotes are consistently not used, neither in creating nor accessing tables, views, and columns, ontop will always support the identifiers. (The exception is when the database is setup with a non-normal default case, see for H2 below.) Unquoted table and view names are translated internally to a default case of the database engine. Quoted identifiers are mostly supported, but ontop does not support accessing objects which have identifiers only differing in the case, e.g. "Table" and "table". This is quite unusual, probably even bad database design, but technically possible in most databases.

* Oracle and H2 changes unquoted identifiers to uppercase. 
*:Although technically possible, Oracle explicitly recommends to not use lowercase identifers. We do not support H2 with the setting DATABASE_TO_UPPER=FALSE, if this setting is enabled all queries with names and tables in lowercase must be quoted.

* DB2 Names are not case sensitive.
*: For example, the table names CUSTOMER and Customer are the same, but object names are converted to uppercase when they are entered. If a name is enclosed in quotation marks, the name becomes case sensitive. The schema name is case-sensitive, and must be specified in uppercase characters.

* Postgres changes unquoted identifiers (both columns and alias names) to lowercase.

* Mysql does not change the case of unquoted tables and schemas. 
*:It changes in lowercase the unquoted columns. Mysql tables are stored as files in the operating system the server runs on. This means that database and table names are not case sensitive in Windows, and case sensitive in most varieties of Unix or Linux. The backtick ` is used for enclosing identifiers such as table and column names.

* Mssqlserver All connection string property names are case-insensitive.
*: For example, Password is the same as password. Identifiers of objects in a database, such as tables, views, and column names, are assigned the default collation of the database. For example, two tables with names that differ only in case can be created in a database that has case-sensitive collation, but cannot be created in a database that has case-insensitive collation. Default SQL Server is not case sensitive. SELECT * FROM SomeTable is the same as SeLeCT * frOM soMetaBLe. Delimited identifiers are enclosed in double quotation marks (") or brackets ([ ]). Identifiers that comply with the rules for the format of identifiers may or may not be delimited.

Problem can occurs when:
Tables and columns have the same name or alias and only different cases.
If the mapping has an attribute that map to two possible columns (because they have the same name), the two columns are treated as equal.

'''Example''' can cause problem queries of the form:

```sql
 SELECT "testColumn", TESTCOLUMN FROM "table1";
 SELECT "id", "val" as id FROM "table1";
 SELECT "table1"."id" as id, "table2"."sid" as id FROM "table1", "table2";
 SELECT parent.id, child.id FROM (SELECT id FROM oreda.inv_spec) AS child, (SELECT id FROM oreda.inventory) AS parent;
```
Quoted columns in the query are transformed in unquoted columns so that they will correspond with the values present in the lookuptable .

 

 
