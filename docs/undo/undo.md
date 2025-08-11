---
layout: page
permalink: /undo
title: Undoing Changes
---

# 🧹 Undoing Changes

## Unstage a File

Remove a file from the staging area but keep its changes.

```bash
git reset filename
```

Unstage **all** staged files:

```bash
git reset
```

---

## Discard Unstaged Changes

**Old syntax**:

```bash
git checkout -- filename
```

**Newer syntax** *(recommended)*:

```bash
git restore filename
```

⚠️ This will permanently discard your changes for that file.

---

## Amend Last Commit

Change the last commit’s message or add new staged changes to it.

```bash
git commit --amend
```

**Tip:** Only amend if you haven’t pushed the commit yet.

---

## Temporarily Saving Work (Stash)

Save uncommitted changes for later without committing.

```bash
git stash             # Save local modifications
git stash apply       # Reapply most recent stash
git stash list        # View all stashes
git stash drop        # Delete most recent stash
```