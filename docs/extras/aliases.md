---
layout: page
permalink: /extras/aliases
title: Useful Git Aliases
---

# 🧠 Useful Git Aliases

Aliases let you create short commands for commonly used Git operations.

---

## Common Aliases

```bash
git config --global alias.st status      # git st  →  git status
git config --global alias.co checkout    # git co  →  git checkout
git config --global alias.br branch      # git br  →  git branch
git config --global alias.ci commit      # git ci  →  git commit
git config --global alias.lg "log --oneline --graph --all"
# git lg  →  compact visual commit history
```

---

## More Handy Aliases

```bash
git config --global alias.unstage "reset HEAD --"
# git unstage file.txt → remove file from staging area

git config --global alias.last "log -1 HEAD"
# git last → view details of the last commit
```

---

## View All Aliases

```bash
git config --get-regexp alias
```