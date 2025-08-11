---
layout: page
permalink: /remote/setup
title: Remote Repository Setup
---

# 🌐 Remote Repository Setup

1. Create a new repo on GitHub.
    - Leave it empty if you already have files locally (no README/license).
2. Link local repo to remote:
    ```bash
    git remote add origin https://github.com/your-username/repo-name.git
    ```
    💡 Alternative (SSH):
    ```bas
    git remote add origin git@github.com:your-username/repo-name.git
    ```
3. Verify the remote link:
    ```bash
    git remote -v
    ```
4. Push for the first time:
    ```bash
    git push -u origin main
    ```
    📌 The `-u` flag sets `origin main` as the default for future `git push/git pull`.
