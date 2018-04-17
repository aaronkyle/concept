## Notes on using Git

-  initialized empty Git repository in /var/www/ by running `git init`
- [attempted to link server and GitHub repositories](https://help.github.com/articles/create-a-repo) using `git remote add origin https://github.com/cccs-web/core.git`
  - error: src refspec master does not match any.
  - error: failed to push some refs to 'https://github.com/cccs-web/production.git'
- [attempted to import and link](https://help.github.com/articles/importing-an-external-git-repository) 'core' repo using `git clone --bare https://githost.org/extuser/repo.git` followed by `git push --mirror https://github.com/ghuser/repo.git`
  - remote: error: refusing to delete the current branch: refs/heads/master To https://github.com/cccs-web/production.git ! [remote rejected] master (deletion of the current branch prohibited)
  - error: failed to push some refs to 'https://github.com/cccs-web/production.git'
- cloned 'production' repo using `git clone git://github.com/cccs-web/core.git`
  - Success.

## Additional Notes Regarding Git Usage

### Initializing a Git folder

Create a git repo locally just by making a folder, `cd` into it and execute  `git init`.


Understand what commits and branches are and use them as necessary.

### Commits

http://git-scm.com/book/en/Git-Basics-Viewing-the-Commit-History


To see a history of commits, run `git log`.

Explore `git log` flags.  For example, `-p` shows the diff introduced in each commit; `-2` limits the output to only the last two entries.

Sometimes it's easier to review changes on the word level rather than on the line level. There is a --word-diff option available in Git, that you can append to the git log -p command to get word diff instead of normal line by line diff. Word diff format is quite useless when applied to source code, but it comes in handy when applied to large text files, like books or your dissertation.


### Branches 

Good references for learning about branches are [the git-scm branching overview](http://git-scm.com/book/en/Git-Branching-What-a-Branch-Is) and [detailed discussion of branching and merging](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging). Use them. A half-hour read will help you save time and work more efficiently. To get the most out of the references, experiment.

There is a lot of over complicated stuff on the web about using this or that branching strategy, but think in simple terms:

There is a master branch which should be the main-line of development. It should aim to be stable at all times and its head is always the 'latest stable build'.

If there is a 'release', create a tag for it.

If there are release fixes or updates, branch from the tag (a tag is just a label for a commit).

Other than that, make branches for whatever is convenient. If you want branch history (e.g. to identify a set of commits as relating to each other) be sure not to fast forward back int master (use git merge --no-ff ...) so that the branch knowledge is retained. If that makes no sense to you, go back and read the above guides again ;)

Once production becomes live and changes less frequently, we might tag the production builds but with just one target website, this is generally overkill. The current commit on the production working copy is our tag - the only advantage of creating a named tag is that we can easily go back to that tagged state if necessary.

## GitHub Labels

| Label | Meaning |
|-------|---------|
| bug | |
| data | |
| duplicate | |
| enhancement | |
| help wanted | |
| high priority | |
| invalid | |
| low priority | |
| question | |
| urgent | |
| wontfix | |


* [Using Custom Javascript In Jekyll Blogs](http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html)
