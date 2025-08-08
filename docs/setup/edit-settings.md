# 🧽 Remove or Edit a Git Setting
## To unset a setting
Removes a specific config value from the chosen scope.
```bash
git config --global --unset user.name   # Remove from global config
git config --local --unset user.name    # Remove from local repo config
```
**Tip:**
- `--global` → affects all repos for your user account.
- `--local` → affects only the current repository.

## To edit the Git config file manually
Opens the config file in your default editor so you can directly edit values.
```bash
git config --global --edit       # Edit the global config (~/.gitconfig)
git config --local --edit        # Edit the repo-specific config (.git/config)
```
:bangbang:Pro Tip:  
Use this if you want to make multiple changes at once instead of running multiple git config commands.

