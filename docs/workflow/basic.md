# 🔄 Basic Git Workflow
## 🔍 Check Git Status
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

🔎 View Differences Before Staging or Committing
```bash
git diff              # See unstaged changes
git diff --staged     # See staged changes
```

## ➕ Stage Changes
```bash
git add filename           # stage one file
git add .                  # stage all changes
```
💡 **Pro Tip**: Only stage the files you’re ready to commit.

## ✅ Commit Changes
```bash
git commit -m "Describe your changes"
```
Or stage and commit tracked files in one step:

```bash
git commit -am "Describe your changes"
```
⚠️ **Warning**: `-am` skips untracked files; use with caution.

## 🚀 Push to Remote
```bash
git push origin main       # or 'master' or your branch name
```

## 🧠 Quick Workflow Recap
```bash
git status
git add <file>
git commit -m "message"
git push origin main
```