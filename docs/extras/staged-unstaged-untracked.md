---
layout: page
permalink: /extras/staged-unstaged-untracked
title: Staged/Unstaged/Untracked
---

# What are staged, unstaged, and untracked files

## 🟡 Untracked Files

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

## 🔴 **Unstaged (Modified) Files**

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

## 🟢 **Staged Files**

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

### 📁 Special Cases: Excluding Files During git add

When staging multiple files or entire directories, you can exclude specific files or folders on the fly using pathspec magic syntax, without modifying .gitignore.

#### 1. Exclude Files Using :(exclude) or `!:`

You can prevent specific files or directories from being added by using either of these patterns:

✅ Exclude a file:

```bash
git add . ':!path/to/excluded_file.txt'
```

✅ Exclude a directory:

```bash
git add . ':!path/to/excluded_directory/'
```

This tells Git: “Stage all changes from the current directory (.) except the explicitly excluded file or folder.”

📝 Notes:

* The quotes are required to prevent shell expansion.
* This does not modify .gitignore, making it ideal for temporary/manual exclusions.

📌 Reference: This feature uses Git's pathspec magic for on-the-fly control during staging.

---

### 🧠 Summary Table

| State     | Tracked? | In Commit? | Command to Move Forward   |
| --------- | -------- | ---------- | ------------------------- |
| Untracked | ❌ No     | ❌ No       | `git add <file>`          |
| Unstaged  | ✅ Yes    | ❌ No       | `git add <file>`          |
| Staged    | ✅ Yes    | ✅ Ready    | `git commit -m "message"` |
