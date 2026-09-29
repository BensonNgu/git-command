---
layout: page
permalink: /extras/create-repo-from-local
title: Create Repo From Local Folder
---

# Create Repo From Local Folder

This guide explains how to create a new GitHub repository from an existing local project.

> Open a terminal in your project directory and follow the steps below.

## 1. Go to Your Project Directory

Navigate to the directory containing your project:

```bash
cd /path/to/your/project
```

Check whether Git has already been initialized:

```bash
git status
```

If Git has **not** been initialized, you will see an error similar to:

**Output:**

```text
fatal: not a git repository (or any of the parent directories): .git
```

This means your project directory is not currently a Git repository.

Refer to [Initialize a Git Repository](/setup/init) to initialize Git before continuing with this guide.

If `git status` runs successfully, proceed to Step 2.

## 2. Set Up `.gitignore`

Before creating your first commit, make sure your project has an appropriate `.gitignore` file.

A `.gitignore` file prevents unnecessary or sensitive files from being tracked by Git, such as:

- Environment variables and secrets
- Dependencies
- Virtual environments
- Build output
- IDE or operating system files

For example, a Node.js project may include:

```gitignore
node_modules/
.env
.env.*
dist/
coverage/
.DS_Store
```

> Never commit passwords, API keys, access tokens, or other sensitive credentials to your repository.

After configuring `.gitignore`, check which files will be tracked:

```bash
git status
```

Review the output and make sure no sensitive or unnecessary files are included.

## 3. Create Your First Commit

Stage all files in the project:

```bash
git add .
```

Create the initial commit:

```bash
git commit -m "chore: initial commit"
```

Verify that the commit was created successfully:

```bash
git log --oneline
```

**Example output:**

```text
3ef6243 (HEAD -> main) chore: initial commit
```

Your local project is now committed to Git.

## 4. Create a Repository on GitHub

Go to GitHub and select **New repository**.

Configure the repository:

1. Enter a repository name.
2. Add a description if needed.
3. Select **Public** or **Private**.
4. Create the repository.

Since your project already contains local files and Git history, leave the following options **unchecked**:

- Add a README file
- Add `.gitignore`
- Choose a license

This ensures that GitHub creates an **empty repository** and avoids creating a separate commit history that may conflict with your local repository.

For step-by-step visual instructions, refer to [Create Empty Repository]({{ '/extras/create-empty-repo' | relative_url }}).

## 5. Connect Your Local Repository to GitHub

After creating the repository, GitHub will provide a repository URL similar to:

```text
https://github.com/your-username/repo-name.git
```

You now need to add the GitHub repository as a remote for your local repository.

Refer to [Remote Repository Setup]({{'/remote/setup' | relative_url}}) for instructions on configuring the remote repository.

Once the remote repository has been configured, you can push your local commits to GitHub.
