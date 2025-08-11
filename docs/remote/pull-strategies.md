---
layout: page
permalink: /remote/pull-strategies
title: Different Ways of Pulling Updates from Remote
---
# 📥 Different Ways of Pulling Updates from Remote

Keeping your local branch in sync with the remote ensures you’re working with the latest code.
Below are common ways to do it — starting from safest to most destructive.

---

## ✅ Safe / Common Methods

### 1. `git pull`

```bash
git pull origin main
```

* **What it does:** `fetch` + `merge`
* **Use case:** Automatically fetch and merge the latest changes.
* **Pros:** Simple and convenient.
* **Cons:** Can create messy merge commits.

---

### 2. `git fetch` + `git merge`

```bash
git fetch origin main
git merge origin/main
```

* **What it does:** Downloads changes without applying, then merges.
* **Use case:** Review before merging.
* **Pros:** Safer than direct pull.
* **Cons:** Two-step process.

---

### 3. `git fetch` + `git rebase`

```bash
git fetch origin main
git rebase origin/main
```

* **What it does:** Reapplies your commits on top of fetched changes.
* **Use case:** Keep a clean linear history.
* **Pros:** Preferred in many teams.
* **Cons:** Risky if rebasing public branches.

---

### 3b. `git pull --rebase`

```bash
git pull --rebase origin main
```

* Shortcut for:

```bash
git fetch origin main
git rebase origin/main
```

---

## 📦 Starting Fresh

### 4. `git clone`

```bash
git clone https://github.com/username/repo-name.git
```

* **What it does:** Creates a full local copy of the repo.
* **Use case:** First-time setup.
* **Cons:** Not for updating existing repos.

---

## ⚠️ Risky / Destructive

### 5. `git reset --hard origin/main`

```bash
git fetch origin main
git reset --hard origin/main
```

* **What it does:** Forces local branch to match remote exactly.
* **Use case:** Discard all local changes and start fresh.
* **Warning:** This deletes uncommitted changes.
