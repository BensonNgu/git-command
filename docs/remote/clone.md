---
layout: page
permalink: /remote/clone
title: Clone an Existing Repository
---
# 📂 Clone an Existing Repository

## 1. Standard HTTPS Clone *(Most Common)*

```bash
git clone https://github.com/username/repo-name.git
```

Copies the entire repository (all branches, full history) into a new local folder named after the repo.

---

## 2. Clone via SSH

```bash
git clone git@github.com:username/repo-name.git
```

**When to use:** If you’ve set up an SSH key with GitHub (or another provider) and want to avoid typing your username/password every time.

---

## 3. Clone a Specific Branch Only

```bash
git clone --branch branch-name --single-branch https://github.com/username/repo-name.git
```

**When to use:** If you only need one branch and want to save bandwidth/time.

---

## 4. Shallow Clone (Latest Commit Only)

```bash
git clone --depth 1 https://github.com/username/repo-name.git
```

**When to use:** If you only need the latest snapshot and don’t care about full commit history.

---

## 5. Clone into a Custom Directory

```bash
git clone https://github.com/username/repo-name.git my-folder
```

**When to use:** If you want the local directory name to be something other than the repo name.

---

## 6. Clone with Submodules

```bash
git clone --recurse-submodules https://github.com/username/repo-name.git
```

**When to use:** If the repo contains submodules and you want them initialized and checked out automatically.

---

## 7. Mirror Clone (Full Backup/Migration)

```bash
git clone --mirror https://github.com/username/repo-name.git
```

**When to use:** For backups or repository migration.
Includes all refs (branches, tags, remote-tracking branches).
