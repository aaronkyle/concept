This folder collects information about tools for capturing data from the web.


Capturing entire websites:

* wget

[The Ultimate Wget Download Guide With 15 Awesome Examples](https://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples)

Download Single File with wget

`$ wget http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2`

Download and Store With a Different File name Using wget -O

`wget -O taglist.zip http://www.vim.org/scripts/download_script.php?src_id=7701`

Specify Download Speed / Download Rate Using wget –limit-rate

`wget --limit-rate=200k http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2`


---

Download ALL Folders, SubFolders, and Files using Wget


I use `wget -rkpN -e robots=off http://www.example.com/`

`-r` means recursively

`-k` means convert links. So links on the webpage will be localhost instead of example.com/bla

`-p` means get all webpage resources so obtain images and javascript files to make website work properly.

`-N` is to retrieve timestamps so if local files are newer than files on remote website skip them.

`-e` is a flag option it needs to be there for the robots=off to work.

`robots=off` means ignore robots file.

I also had `-c` in this command so if they connection dropped if would continue where it left off from when i re-run the command. I figured `-N` would go well with `-c`



---

https://stackoverflow.com/questions/273743/using-wget-to-recursively-fetch-a-directory-with-arbitrary-files-in-it/273776#273776

Using wget to recursively fetch a directory with arbitrary files in it


You have to pass the `-np/--no-parent` option to `wget` (in addition to `-r/--recursive`, of course), otherwise it will follow the link in the directory index on my site to the parent directory. So the command would look like this:

`wget --recursive --no-parent http://example.com/configs/.vim/`

To avoid downloading the auto-generated index.html files, use the -R/--reject option:

`wget -r -np -R "index.html*" http://example.com/configs/.vim/`

---


* httrack

[httrack manual](http://www.httrack.com/html/httrack.man.html)

[Httrack Users Guide](http://www.httrack.com/html/fcguide.html)

Httrack is a program that gets information from the Internet, looks for pointers to other information, gets that information, and so forth. If you ask it to, and have enough disk space, it will try to make a copy of the whole Internet on your computer. 
