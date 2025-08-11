---
layout: page
permalink: /workflow/basic
title: Basic Git Workflow
---

# 🔄 Basic Git Workflow
## 🔍 Check Git Status
```bash
git status
```
See changes (staged/unstaged/untracked files).

[What are staged, unstaged, and untracked files]( /extras/staged-unstaged-untracked)

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