---
layout: page
permalink: /history/log
title: View Commit History
---

# 📜 View Commit History

## Basic Log

```bash
git log
```

Shows detailed commit history (hash, author, date, message).

---

## One-Line Summary

```bash
git log --oneline
```

Short commit hash + message (good for quick scanning).

---

## With Graph View

```bash
git log --oneline --graph --all
```

Shows branch structure and merge history in a compact view.

---

## Filter by Author

```bash
git log --author="Your Name"
```

---

## Filter by Date

```bash
git log --after="2024-01-01"
git log --before="2024-06-30"
```

---

## View Changes in Each Commit

```bash
git log -p
```

Adds the diff for each commit.