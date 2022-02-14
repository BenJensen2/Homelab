# Pro Git Notes
## Preface

Scott Chacon worked for Github when it was 4 people and only a few thousand people using it.
- Git dominates commercial and open source version control.

## Dedications

" to my daughter Josephine, who will support me when I’m too old to know what’s going on. — Scott"

## Chapter 1: Version Control Systems (VCS) & Git Basics
**Version control** is a system that records changes to a file or set of files over time so you can recall specific versions later.
- Able to be applied to any file type
- Good to use for graphic or web designers

[RCS](https://www.gnu.org/software/rcs/) was a popular VCS that kept patche sets(differences between files) in a special format on a disk that could re-create what any file looked like at any point in time by adding up all the patches

Centralized Version Control Systems (CVCSs) were developed to collaborate with developers on other systems.
- Single serve that contained all the versioned files
- Clients that check out files from that central place
- Issues: Single Point of Failure

Distributed Version Control Systems
- Fully mirror the repository, including its full history

### Git history
BitKeeper was made to distribute Linux kernel maintenance changes.
- Developers of BitKeeper & Linux kernel community broke down
- BitKeeper went paid
- Linus Torvalds developed their own tool with the lessons learned from BitKeeper
	- Speed
	- Simple Design
	- Strong support for non-linear development (thousands of parallel branches)
	- Fully distributed
	- Able to handle large projects like the Linux kernel efficiently (speed and data size)

#### Snapshots, Not Differences
- Most VCSs store as a set of files and the changes made to each file over time (*delta-based* version control)
- Every commit takes a picture
	- No changes, doesn't store the file again
	- Data more like a stream of snapshots
- Mini filesystem with some incredibly powerful tools built on top of it, rather than simply a VCS

#### Nearly Every Operation is Local
- Allows Superspeed
- Can work offline

#### Git has integrity
Everything is checksummed (SHA-1) before it is stored then is referred to by that checksum.

#### The Three States
1. *Modified:* Changed the file but have not committed it to your database yet.
2. *Staged:* Marked a modified file in its current version to go into your next commit snapshot
3. *Committed:* Data is safely stored in your local database

- The working tree is a single checkout of one version of the project.
- The staging area "index" is a file, generally contained in your Git directory, that stores information about what will go into your next commit.
- Git directory is where Git stores the metadata and object database for your project
	- It's what gets copied when you *clone* a repository from another computer.


#### Git Generally Only adds data
- All action only *add* data to the database.
- It's hard to get the system to do anything that is no undoable or make it erase data in any way.

### The Command Line
The only place that has *all* features

### Install Git
- MacOS
- From Source

### First-Time Git Setup
- git config 
	- --system: Every user on the system (Admin or superuser privilege)
	- global: Specific to user.  Affects *all* of the repositories you work with on your system
	- --local: Specific to that single repository (default)
	- --list --show-origin: View all settings and where they are coming from
- Each level overrides values in the previous level

#### Identity
-  git config --global user.name
-  git config --global user.email

#### Your Editor
- git config --global core.editor emacs

#### Default branch name
- Default is master
- git config --global init.defaultBranch main

#### Check Settings
- git config --list



## Chapter 2: Git Basics
![[File_Lifecycle.png]]

### Getting a Git Repository
- git init: Initialize repository
- git clone: Clone a repository

- git status
- git status -s
- git add "filename"

### Ignoring Files
- .gitignore: Ignores files indicated within
	- start with (/) to avoid recursivity
	- end with (/) to specify a directory
	- negate patterns with (!)
	- "[abc]" matches any character inside the brackets
	- (?) matches a single character
	- "a/**/z" match nested directories

### Viewing your staged & unstaged changes
- git status
- git diff: Shows unstaged changes
- git diff --staged: Compares staged changes to your last commit
	- git diff --cached is synonymous

#### Commiting Your Changes
- git add
- git status
- git commit
	- git commit -m "message"
- git commit -a -m "Message": Automatically stages every file that is already tracked before doing the commit
	- Lets you skip the git add

#### Removing files
- git rm: removes it from tracked files
	- More specifically, removes it from your staging area
	- Also removes it from your working directory
	- Shows up under *unstaged* in git status
- git rm -f: Force remove if you modified the file or added it to the staging area
- git rm --cached "filename": Keep in working tree but remove it from staging area
	- Can pass files, directories, and file-glob patterns
	- ```git rm log/\*.log```

#### Moving Files
- Git doesn't explicitly track file movement but knows changes
- git mv file_from file_to

### Viewing the Commit History
- git log: Lists commits made in that repository in reverse chronological order
- git log -p or --patch: shows the difference (the *patch* output) introduced in each commit.
	- Can limit the amount of entries
	- -2 only shows the last two entries
- git log --stat: shows abbreviated stats for each commit.
- git log --pretty=oneline
	- Options: oneline, short, full, fuller, reference, email, raw, format:"string"
	- format allows custom format
	- ```git log --pretty=format:"%h - %an, %ar : %s"```
- git log --graph: ASCII graph of branch & merge history
 ![[git_log_useful_specifiers.png]]
 Author is who originally wrote the work, committer is the person who last applied the work.
 ![[Common_Options.png]]
 
 #### Limiting Log Output
 ![[Options_To_Limit_the_output.png]]
 -S: Only show commits adding or removing code matching the string
 
 ### Undoing Things
 **Warning:** This is the one ploce where you can't always undo some if these undos and one of the few areas in Git where you may lose some work if you do it wrong.
 
 - git commit --amend: Ammends the last commit with the current stages
	 - Takes your staging area and uses it for the commit
	 - Brings in the most recent commit and overrides it

**Warning:** Only ammend commits that are still local and have not been pushed somewhere.

#### Unstaging a Staged File
- git reset HEAD "file"
	- git reset can be dangerous, especially if you provide the --hard flag.
	- In this scenario, the file in your working directory is not touched, so it's relatively safe
#### Unmodifying a File
- git checkout --"file"
	- reverts changes back to what it looked like when you last committed it or cloned it.
	- **Warning:** Any local changes you made to that file are gone
	- Don't ever use this command unless you absolutesly know that you don't want those unsaved local changes.
	- Anything you commit can almost always be recovered
		- Anything you lose that was never committed is likely never to be seen again.

#### Undoing things with git restore
- git restore "file"
	- Unstages a staged file
	- **Warning:** Any local changes you mad to that file are gone
	- Don't ever use this command unless you absolutesly know that you don't want those unsaved local changes.

### Working with Remotes
Remote repositories are versions of your project that are hosted on the Internet or network somewhere
- git remote: Lists the shortnames of each remote repository file you've specified
- git remote add "shortname" "url"
	- 	show "remote" Allows you to inspect the specific remote (URL & Tracking branch info)
- 	git remote rename
- 	git remote remove
- git fetch "remote"
	- Only downloads
	- Doesn't automatically merge it
- git pull
	- Automatically fetches & merges that remote branch into your current branch.
	- rebase?
- git push "remote" "branch"
	- Pushes local changes upstream to a remote repository

### Tagging
Typically used to mark release points
- git tag
- git tag -l
- git tag --list

Git supports two types of tags
- lightweight: Branch that doesn't change, a pointer to a specific commit
	- To create, don't supply any -a, -s, -m options
- annotated: stored as full objects in the Git databaso
	- Checksummed
	- Tagger name
	- email
	- date
	- tagging message
	- signed and verified with GNU Privacy Guard (GPG)
- git tag -a v1.4 -m "my version 1.4"
- git show

#### Tagging Later
- git tag -a v1.2 9fceb02

#### Sharing Tags
- git push doesn't transfer tags to remote servers
- git push origin "tagname"
- git push origin --tags will transfer all of your tags to the remote server that are not already there

#### Deleting Tags
- git tag -d
	- Deletes a tag
- git push "remote" :refs/tags/"tagname" deletes from remote server
- git push origin --delete "tagname"

#### Checking out Tags
- git checkout "tagname"
	- Puts repo in "detached HEAD" state, which has some ill side effects
		- In “detached HEAD” state, if you make changes and then create a commit, the tag will stay the same, but your new commit won’t belong to any branch and will be unreachable, except by the exact commit hash. Thus, if you need to make changes — say you’re fixing a bug on an older version, for instance — you will generally want to create a branch:
		- git checkout -b version2 v2.0.0
			- If you do this and make a commit, your version2 branch will be slightly different than your v2.0.0 tag since it will move forward with your new changes, so do be careful.

### Git Aliases
- Can setup so you don't have to type the entire text of each Git command
- Setup in git config
	```
	- $ git config --global alias.co checkout 
	- $ git config --global alias.br branch 
	- $ git config --global alias.ci commit 
	- $ git config --global alias.st status
	```
- Good to use for custom commands
```
 git config --global alias.unstage 'reset HEAD --'
 git config --global alias.last 'log -1 HEAD'
```
- Can run external command
- ```git config --global alias.visual '!gitk'```
## Chapter 3: Branching
 Branching means you diverge from the main line of development and continue to do work without messing with that main line.
 - Incredibly lightweight, making branching operations nearly instantaneous, and switching back and forth between branches generally just as fast

A branch in Git is simply a lightweight movable painter to one of these commits.
- default is master but doesn't signify anything special.
- Most stay master because people don't bother changing it
- git branch testing
- git log --oneline --decorate shows where the branch painters are pointing.
- git checkout switches branches
	- This switches the HEAD to point at the testing branch
- Each commit moves a branch forward
- Switching branches will move them forward of the master
- git log will only show the commit history below the branch you've checked out
	- To show for other branches: git log "branch name"
	- To show all branches: git log --all

[Decent Visual Git Branch Learning](https://learngitbranching.js.org)
- Switching branches changes files in your working directory
	- Switching to an older branch will revert files back to the last time you committed on that branch.
	- If Git can't do it cleanly, it won't let you switch at all.

- Branch checkout and commit will merge branches back together
	- ``` git log --oneline --decorate --graph --all``` will show where branch pointers are and how your history has diverged
- Branch is a simple file that contains a 40 character SHA-1 checksum
	- Cheap to create and destroy
- ```git checkout -b "newbranchname"``` creates and checks out branch at the same time.
- git switch "branchname" does the same as checkout
- git switch -c "branchname" (can also use --create)
- git switch - returns to previously checked out branch.
 
### Basic Branching and Merging
Git branching is Amazing
 - If your working directory or staging area has uncommitted changes that conflict with the branch you’re checking out, Git won’t let you switch branches.
 - When you switch branches, git automatically adds, removes, and modifies files to make sure your working copy is what the branch looked like on your last commit to it.
 - git merge: merges two branches together
 - When you try to merge one commit with a commit that con be reached by following the first commit's history, Git simplifies things by moving the pointer forward because there is no divergent work to merge together -- this is called a "fast-forward"
 - git branch -d deletes the branch after you don't need it anymore
 - Can merge from master with git merge master

#### Basic Merging
- git checkout branch
- git merge other branch
- merge commit is a three way merge between branches that goes back to a common Ancestor to be used as the third commit

#### Basic Merge Conflicts
- Happens when a file is modified two different ways.
- git status shows issues
- Will pause until conflics are fixed
- Fix between <<<<<<<< ========= >>>>>>>>>
- Run git add on each file
- git mergetool fires up an appropriate visual merge tool and walks you through the conflicts

### Branch Management
- git branch lists current branches
- git branch -v shows last commit on each branch
	- --merged & --no-merged options filter this list to branches that you have or have not yet merged into the branch you're currently on.
- git branch --move bad-branch-name corrected-branch-name

#### Changing the master branch name
-git branch --move master main
**Warning:** Changing the name of a branch like master/main/mainline/default will break the integrations, services, helper utilities and build/release scripts that your repositor uses.   Before you do this, make sure you consult with your collaborators. Also, make sure you do a thorough search through your repo and update any references to the old branch name in your code and scripts.

### Branching Workflows
#### Long running branches
- Many have master with only stable code that has been or will be released.
- Parallel branch named ```develop``` or ```next``` that they work from or use to test stability
	- The idea is that each branch is at various levels of stability
		- As the stability increases, it is merged into the next most stable branch

### Remote Branches
- git ls-remote "remote" or git remote show "remote"
- Branch names take the form of "remote"/"branch"
- origin and master are only default names and can be changed
- git fetch updates your remote-tracking branches
- git remote add
- git push remote branch
- git config --global credential.helper cache keeps memory of credentials for a few minutes
- When you do a fetch that brings down new remote-tracking branches, you don’t automatically have local, editable copies of them
- git checkout -b "branch" "remote"/"branch" checks out a single branch on a remote repository
	- --track does the same as -b "branch"
	- Even shorter cut: If a branch name you're trying to checkout (a) doesn't exist and (b) exactly matches a name on only one remote, Git will create a tracking branch for you
- git branch -u or --set-upstream-to switches upstream branch you're tracking.
- git branch -vv shows what branches you are tracking

### Rebasing
Can take all the changes that were made on one branch and replay them on a different branch
- git rebase master
- git rebase --onto master server client rebases client onto master

**Warning:** Do not rebase commits that exist outside your repository and that people may have based work on.
- When you rebase, you are abandoning existing commits and creating new ones that are similar but different
- Git rebase disaster: See book
- Rebase vs Merge
	- If you want truth, merge
	- If you want it to look nice, rebase
- Simple rule: rebase 

## Chapter 4: Git on the server

## Chapter 5: Distributed Workflows

## Chapter 6: Github

## Chapter 7: Advanced Git Commands

## Chapter 8: Configuring Custom Git environment

## Chapter 9: Git and other VCSs

## Chapter 10: Git internals