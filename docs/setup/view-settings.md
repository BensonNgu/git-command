# 🔍 View Current Git Settings
## View All Git Config Settings (Global + Local + System)
```bash
git config --list
```

Shows every config value Git is using for the current repo, combining:
- System: applies to all users on the machine.
- Global: applies to the current user account.
- Local: applies only to the current repository.

## View Global Settings Only
```bash
git config --global --list
```
*When to use:*  
To check settings that affect all repositories for your user account (e.g., your name & email).

## View Local Settings (specific to the repo)
```bash
git config --local --list
```
*When to use:*  
To check settings that override global ones in this specific repository (e.g., different email for work projects).

:bangbang: **Tip**  
If a setting appears in multiple scopes, Local > Global > System — meaning local settings win.