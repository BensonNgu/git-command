# 🔀 Merging

Merging combines changes from one branch into the branch you’re currently on.

---

## Basic Merge

```bash
git merge feature-name
```

This merges the branch `feature-name` into your current branch (often `main` or `develop`).

---

## Fast-Forward Merge *(no new commit created)*

If no other changes have been made in the target branch since branching:

```bash
git merge --ff-only feature-name
```

✅ Keeps history clean without extra merge commits.

---

## When Conflicts Appear

If you see a merge conflict:

1. Open the affected files in your editor.
2. Look for conflict markers:

   ```
   <<<<<<< HEAD
   Your changes
   =======
   Their changes
   >>>>>>> feature-name
   ```
3. Edit to keep the correct content.
4. Stage the resolved files:

   ```bash
   git add .
   ```
5. Complete the merge:

   ```bash
   git commit
   ```

---

## Check Merge Status

```bash
git status
```

Shows if the merge is in progress or complete.
