# Find the commit hash
sha 
simply by going to the commit from github and copy the hash on the top right

```bash
git reset --hard 8106251658e8f0b820ea95a3830c0783c4c55258
```

This will reset your repository to the state it was in at that commit. If you're using StackBlitz, make sure it's connected to the same GitHub repository.

After the reset, if you want to update GitHub with these changes (to reflect the reverted state):

```bash
git push origin HEAD --force
```

This command will push the changes back to GitHub. Let me know if you encounter any issues!