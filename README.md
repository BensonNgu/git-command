<p align="center">
    <h1 align="center"><img src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white" alt="Git">
 Command Guide</h1>
</p>
<p align="center">
<!-- Stars -->
<img src="https://img.shields.io/github/stars/bensonngu/git-command?style=for-the-badge&color=FFD700" alt="Repo Stars">

<!-- Forks -->
<img src="https://img.shields.io/github/forks/bensonngu/git-command?style=for-the-badge&color=FF8C00" alt="Repo Forks">

<!-- Watchers -->
<img src="https://img.shields.io/github/watchers/bensonngu/git-command?style=for-the-badge&color=1E90FF" alt="Repo Watchers">

<!-- Open Issues -->
<img src="https://img.shields.io/github/issues/bensonngu/git-command?style=for-the-badge&color=DC143C" alt="Open Issues">

<!-- License -->
<img src="https://img.shields.io/github/license/bensonngu/git-command?style=for-the-badge&color=228B22" alt="License">

<!-- Last Commit -->
<img src="https://img.shields.io/github/last-commit/bensonngu/git-command?style=for-the-badge&logo=git&logoColor=white&color=8A2BE2" alt="Last Commit">

<p>


> A concise guide demonstrating the fundamental Git commands and typical workflow for managing repositories on a local machine.

---

## 🧭 Quick Links

- [🧭 Quick Links](#-quick-links)
- [🧾 Initialize a Git Repository](#-initialize-a-git-repository)
- [⚙️ Configure Git (First Time Only)](#️-configure-git-first-time-only)
  - [✅ Set Name \& Email](#-set-name--email)
- [🔍 View Current Git Settings](#-view-current-git-settings)
  - [View All Git Config Settings (Global + Local + System)](#view-all-git-config-settings-global--local--system)
  - [View Global Settings Only](#view-global-settings-only)
  - [View Local Settings (specific to the repo)](#view-local-settings-specific-to-the-repo)
- [🛠 Other Useful Git Settings](#-other-useful-git-settings)
  - [Default Text Editor (optional)](#default-text-editor-optional)
  - [Default Branch Name (if you prefer `main`)](#default-branch-name-if-you-prefer-main)
  - [Enable Colored Output](#enable-colored-output)
  - [Credential Caching (saves login for a while)](#credential-caching-saves-login-for-a-while)
  - [Set Merge Tool (e.g., VS Code)](#set-merge-tool-eg-vs-code)
- [🧽 Remove or Edit a Git Setting](#-remove-or-edit-a-git-setting)
  - [To unset a setting:](#to-unset-a-setting)
  - [To edit the Git config file manually:](#to-edit-the-git-config-file-manually)
- [🔄 Basic Git Workflow](#-basic-git-workflow)
  - [🔍 Check Git Status](#-check-git-status)
  - [🧠 Summary Table](#-summary-table)
  - [➕ Stage Changes](#-stage-changes)
  - [✅ Commit Changes](#-commit-changes)
  - [🚀 Push to Remote](#-push-to-remote)
- [🌐 Remote Repository Setup](#-remote-repository-setup)
- [🌿 Branching](#-branching)
  - [Create a New Branch](#create-a-new-branch)
  - [Switch to an Existing Branch](#switch-to-an-existing-branch)
- [🔀 Merging](#-merging)
  - [Merge a Branch into Current](#merge-a-branch-into-current)
- [📥 Different Ways of Pulling Updates from Remote](#-different-ways-of-pulling-updates-from-remote)
  - [1. `git pull`](#1-git-pull)
  - [2. `git fetch` + `git merge`](#2-git-fetch--git-merge)
  - [3. `git fetch` + `git rebase`](#3-git-fetch--git-rebase)
    - [3b. `git pull --rebase`](#3b-git-pull---rebase)
  - [4. `git clone` (if starting fresh)](#4-git-clone-if-starting-fresh)
  - [5. Using `git reset --hard origin/main` ⚠️](#5-using-git-reset---hard-originmain-️)
- [📂 Clone an Existing Repository](#-clone-an-existing-repository)
- [📜 View Commit History](#-view-commit-history)
- [🧹 Undoing Changes](#-undoing-changes)
  - [Unstage a File](#unstage-a-file)
  - [Discard Unstaged Changes](#discard-unstaged-changes)
  - [Amend Last Commit](#amend-last-commit)
  - [Temporarily Saving Work](#temporarily-saving-work)
- [🧠 Useful Git Aliases (Optional)](#-useful-git-aliases-optional)

---

## 🧾 Initialize a Git Repository

```bash
git init
```

Creates a new local Git repository in the current folder.

---

## ⚙️ Configure Git (First Time Only)

### ✅ Set Name & Email

These are **essential** for commit history:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 🔍 View Current Git Settings

### View All Git Config Settings (Global + Local + System)

```bash
git config --list
```

### View Global Settings Only

```bash
git config --global --list
```

### View Local Settings (specific to the repo)

```bash
git config --local --list
```

---

## 🛠 Other Useful Git Settings

### Default Text Editor (optional)

```bash
git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "nano"           # Nano
git config --global core.editor "vim"            # Vim
```

### Default Branch Name (if you prefer `main`)

```bash
git config --global init.defaultBranch main
```

### Enable Colored Output

```bash
git config --global color.ui auto
```

### Credential Caching (saves login for a while)

```bash
git config --global credential.helper cache
```

### Set Merge Tool (e.g., VS Code)

```bash
git config --global merge.tool code
```

---

## 🧽 Remove or Edit a Git Setting

### To unset a setting:

```bash
git config --global --unset user.name
```

### To edit the Git config file manually:

```bash
git config --global --edit       # Edits the global config file
git config --local --edit        # Edits the repo-specific config
```

---

## 🔄 Basic Git Workflow

### 🔍 Check Git Status

```bash
git status
```

See changes (staged/unstaged/untracked files).
<details>
     <summary style="font-weight:bold;">What are staged, unstaged, and untracked files</summary>

---
1. 🟡 **Untracked Files**

> Files that are **not yet being tracked by Git**.

* These are new files in your working directory.
* Git doesn’t know about them until you explicitly add them.

📦 **Example:**

You create a new file:

```bash
touch newfile.txt
```

Then run:

```bash
git status
```

Git says:

```bash
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        newfile.txt
```

✅ What to do:

```bash
git add newfile.txt  # Moves it to staged state
```

---

2. 🔴 **Unstaged (Modified) Files**

> Files that **Git is tracking**, but you’ve **made changes** to them since the last commit — and **haven’t staged** those changes yet.

📦 **Example:**

You modify `index.js`, then run:

```bash
git status
```

You’ll see something like:

```bash
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified: index.js
```

✅ What to do:

```bash
git add index.js  # Stages the modified file
```

---

3. 🟢 **Staged Files**

> Files that are ready to be **committed**. You've told Git, "These are the changes I want to include in the next commit."

📦 **How they get here:**

```bash
git add file.txt
```

Then `git status` will say:

```bash
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)
        modified: file.txt
```

✅ What to do:

```bash
git commit -m "Update file.txt"
```

---

### 🧠 Summary Table

| State     | Tracked? | In Commit? | Command to Move Forward   |
| --------- | -------- | ---------- | ------------------------- |
| Untracked | ❌ No     | ❌ No       | `git add <file>`          |
| Unstaged  | ✅ Yes    | ❌ No       | `git add <file>`          |
| Staged    | ✅ Yes    | ✅ Ready    | `git commit -m "message"` |

</details>

---

### ➕ Stage Changes

```bash
git add filename           # stage one file
git add .                  # stage all changes
```

---

### ✅ Commit Changes

```bash
git commit -m "Describe your changes"
```

---

### 🚀 Push to Remote

```bash
git push origin main       # or 'master' or your branch name
```

---

## 🌐 Remote Repository Setup

1. Create a new repo on GitHub.
2. Link local repo to remote:

```bash
git remote add origin https://github.com/your-username/repo-name.git
```

3. Push for the first time:

```bash
git push -u origin main
```

---

## 🌿 Branching

### Create a New Branch

```bash
git checkout -b feature-name
```

### Switch to an Existing Branch

```bash
git checkout branch-name
```

---

## 🔀 Merging

### Merge a Branch into Current

```bash
git merge feature-name
```

Resolve conflicts if prompted.

---

## 📥 Different Ways of Pulling Updates from Remote
### 1. `git pull` 
- What it does
  - Equivalent to `git fetch` followed by `git merge`.
- Use case:
  - You want to automatically fetch and merge the latest changes from a remote branch into your current local branch.
- Pros: 
  - Simple and convenient
- Cons:
  - Can create messy merge commits if you're not careful. You have less control.

```bash
git pull origin main
```

### 2. `git fetch` + `git merge`
- What it does
  - `git fetch` downloads changes from the remote but doesn't apply them.
  - `git merge origin/main` (or your branch name) then merges those changes into your local branch
- Use case:
  - When you want to review the changes before merging.
- Pros: 
  - Safer then pull, more transparent.
- Cons:
  - Slightly more work, requires two commands.
```bash
git fetch origin main

git merge origin/main
```

### 3. `git fetch` + `git rebase`
- What it does: 
  - Reapplies your local commits on top of what's fetched.
- Use case: 
  - You want a clean linear history without merge commits.
- Pros: 
  - Cleaner history, preferred in collaborative workflows.
- Cons: 
  - Can be risky if you rebase public branches—rewriting history.
```bash
git fetch origin main

git rebase origin/main
```

#### 3b. `git pull --rebase`
- What it does:
  - Shortcut that performs git fetch followed by git rebase on your current branch.
- Use case:
  - Cleanly update your branch with remote changes in one step.
- Pros:
  - Convenient and cleaner history without merge commits.
- Cons:
  - Less control than using separate fetch and rebase.

```bash
git pull --rebase origin main
```
🔍 Equivalent to:

```bash
git fetch origin main
git rebase origin/main
```

### 4. `git clone` (if starting fresh)
- What it does: 
  - Copies an entire remote repository to your local machine.
- Use case: 
  - First-time setup or when you want a clean slate.
- Pros: 
  - Easy starting point.
- Cons: 
  - Not useful for updating an already cloned repo.


### 5. Using `git reset --hard origin/main` ⚠️
- What it does: 
  - Resets your local branch to exactly match the remote.
- Use case: 
  - When you want to discard all local changes and force sync with remote.
- Pros: 
  - Fast and clean.
- Cons: 
  - Destructive—you lose any uncommitted or local changes.
---

## 📂 Clone an Existing Repository

```bash
git clone https://github.com/username/repo-name.git
```

---

## 📜 View Commit History

```bash
git log
git log --oneline
```

---

## 🧹 Undoing Changes

### Unstage a File

```bash
git reset filename
```

### Discard Unstaged Changes

```bash
git checkout -- filename
```

### Amend Last Commit

```bash
git commit --amend
```

### Temporarily Saving Work
Useful for temporarily saving changes without committing.

```bash
git stash             # Save local modifications
git stash apply       # Reapply stashed changes
git stash list        # View all stashes
```

---

## 🧠 Useful Git Aliases (Optional)

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"
```