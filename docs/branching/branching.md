# 🌿 Branching
Branches let you work on features, fixes, or experiments **without affecting** the `main` branch.

---

## 📋 List Branches

```bash
git branch
```

* `*` marks the branch you’re currently on.
* Add `-a` to see remote branches too:

```bash
git branch -a
```

---

## 🌱 Create a New Branch

```bash
git checkout -b feature-name       # Old way
git switch -c feature-name         # Newer, simpler way
```

**Tip:** Start branch names with a short prefix, like `feature/`, `bugfix/`, or `hotfix/`.

---

## 🔄 Switch to an Existing Branch

```bash
git checkout branch-name           # Old way
git switch branch-name              # New way
```