# Ye Olde Git Workshoppe

---

- What is Git?
  - Git is a version control system (VCS)
  - Essentially, Git allows us to travel through time by creating a series of **snapshots**. These snapshots are called `commits`. You can view your commits by calling `git log` from your terminal. You can supply an optional number of commits; `git log -n 4 --oneline` will give you the 4 most recent commit messages and condense each commit:

```sh
// 🌚🍔 git log -n 4
9c8360d add user validation for unique username (Andrew Cohn, 4 minutes ago)
f7a92f0 create cart controller (Andrew Cohn, 21 hours ago)
f7a92f0 thx mozilla 😍 (Andrew Cohn, 21 hours ago)
41b84c0 minor grammar fixes in README.md (Andrew Cohn, 21 hours ago)
```

Pay attention to the structure of logs here:
`f7a92f0 thx mozilla 😍 (Andrew Cohn, 21 hours ago)`

- Commits begin with a [SHA](https://en.wikipedia.org/wiki/Cryptographic_hash_function), or hashed data about the commit. It is, essentially, a commit id: `f7a92f0`
- Secondly, we'll find the commit message: `thx mozilla 😍`
- Finally, the author of the commit and the timestamp: `(Andrew Cohn, 21 hours ago)`

---

#### Creating a New Snapshot (Commit)

Once I've finished a new feature in git, I can create a new snapshot and save my current progress:

- First I'll call `git status` to see which files I've updated since my last commit:

```sh
// 🌚🍔 git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   ye-olde-git-workshoppe/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

- Git will tell me that I've changed a file called `README.md`: `modified: ye-olde-git-workshoppe/README.md`
- If I want to create a new shapshot of these changed files, I'll have to add them to the "staging area"––the pre-commit stage. Staging files is basically preparing them to be committed:
- `git add git add ye-olde-git-workshoppe/README.md` OR `git add .` to add all of my changed files to the staging area, or pre-commit zone.
- Issuing `git status` again will tell me which files have been added to the staging area:

```sh
// 🌚🍔 git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   ye-olde-git-workshoppe/README.md
```

- I can also compare my staged files against my last commit: `git diff --staged` which asks Git to tell me what has changed about the files currently in my staging area:

```sh
// 🌚🍔 git diff --staged
diff --git a/25-ye-olde-git-workshoppe/README.md b/25-ye-olde-git-workshoppe/README.md
index bb9f69b..4aeeaa8 100644
--- a/25-ye-olde-git-workshoppe/README.md
+++ b/25-ye-olde-git-workshoppe/README.md
@@ -1,8 +1,85 @@
-# GIT
+# Ye Olde Git Workshoppe

-NILCE WOKEJR:LJA:LKFJ:LKJ
+---
+
+- What is Git?
+  - Git is a version control system (VCS)
+  - Essentially, Git allows us to travel through time
+
```

- If these changes look good, I can create a new commit and save these in my project snapshot history: `git commit -m "describe commit messages in README.md"`
- Calling `git status` again will tell me that I've created a new commit but have not yet pushed it to the remote:

```sh
// 🌚🍔 git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
```

- What is the remote???
  - There are **TWO COPIES** of my project. One on my machine, and another one on GitHub. I can publish my project to GitHub so collaborators can pull down changes to their machines.
  - Calling `git remote -v` will tell me the location of the remote repo:

```sh
// 🌚🍔 git remote -v
origin	git@github.com:learn-co-students/nyc-web-080618.git (fetch)
origin	git@github.com:learn-co-students/nyc-web-080618.git (push)
```

---

#### Checking Out and Older Commit

Remember how we said Git allows us to "travel through time?"
If I call `git checkout 41b84c0` I can view the state of my project at this particular point in time:

```sh
// 🌚🍔 git checkout 41b84c0
M	25-ye-olde-git-workshoppe/README.md
Note: checking out '41b84c0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

git checkout -b <new-branch-name>

HEAD is now at 41b84c0 THE WINDOW OBJECT
```

- If I want to go back to my most recent commit, I can call `git checkout master` or whatever branch I was working on. This will point my HEAD back at my most recent commit.

---

#### Coming Soon™️

- How do you resolve a merge conflict?
- How do I undo changes?
  - How do I cover my tracks
  - How can I make my reversion visible to my team?
- Branches 🤔
- What is git fetch vs. git pull?
  - Asks the remote (GitHub) for changes and updates my **local copy** of `origin/master`
  - Git pull will fetch **AND** merge with my current branch

---

## Additional Resources:

- [Git Wikipedia Page](https://en.wikipedia.org/wiki/Git)
- [What is GitHub YouTube video](https://www.youtube.com/watch?v=w3jLJU7DT5E)
- [Git Course on Codecademy](https://www.codecademy.com/learn/learn-git)
- [Visualizing Git by GitHub](http://git-school.github.io/visualizing-git/)
- [Resources for Learning Git by GitHub](https://try.github.io/)

---

![Git Cheet Sheet](https://www.git-tower.com/blog/content/posts/54-git-cheat-sheet/git-cheat-sheet-large01.png)
