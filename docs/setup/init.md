---
layout: page
permalink: /setup/init
title: Initialize a Git Repository
---

# 🧾 Initialize a Git Repository

```bash
git init
```
Creates a new local Git repository in the current folder.  
This adds a hidden .git/ directory where Git stores all version history, configuration, and tracking info.

## Initialize in a New Folder
```bash
mkdir my-project && cd my-project
git init
```
*When to use:*  
 Starting a project from scratch.

## Initialize with a Specific Branch Name
```bash
git init --initial-branch=main
```
*When to use:*  
 If you want main instead of master as the default branch name (or any custom name).

## Initialize a Bare Repository
```bash
git init --bare
```
*When to use:*  
 For a central/shared repo that won’t have a working directory — often used on servers for collaboration.

## Initialize in an Existing Project Folder
```bash
cd existing-project
git init
```
*When to use:*  
 If you already have files and want to start tracking them in Git.  
After initializing:

```bash
git add .
git commit -m "Initial commit"
```
:bangbang:**Pro Tip**  
You can run `git status` right after `git init` to confirm your repo is ready.

:bangbang: :warning:**Important**  
Running `git init` inside an existing Git repo will reinitialize it, which may cause confusion or overwrite config. Use with caution.