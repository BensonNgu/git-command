# 🛠 Other Useful Git Settings
## Default Text Editor (optional)
Sets which editor opens when Git needs you to type a message (e.g., for merge commits).

```bash
git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "nano"           # Nano
git config --global core.editor "vim"            # Vim
```
Tip: `--wait` tells VS Code to pause Git until you close the editor.

## Default Branch Name (if you prefer main)
```bash
git config --global init.defaultBranch main
```
Ensures new repos use `main` instead of `master` as the initial branch.

## Enable Colored Output
```bash
git config --global color.ui auto
```
Makes Git’s output easier to read by coloring status, diffs, and logs.

## Credential Caching (saves login for a while)
```bash
git config --global credential.helper 'cache --timeout=3600'
```
- `cache`: Store credentials in memory temporarily.
- `--timeout=3600`: Keep them for 1 hour (3600 seconds).

## Set Merge Tool (e.g., VS Code)
```bash
git config --global merge.tool code
```
Tells Git which tool to launch for resolving merge conflicts.  
**Note**: The tool must be installed and available in your system’s PATH.