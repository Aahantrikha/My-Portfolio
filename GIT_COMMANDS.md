# Git Commands Quick Reference 🚀

Essential Git commands for managing your portfolio repository.

## 📦 Initial Setup

```bash
# Initialize repository
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote
git remote -v
```

## 📝 Basic Workflow

```bash
# Check status
git status

# Add all files
git add .

# Add specific file
git add filename.txt

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## 🌿 Branching

```bash
# Create new branch
git branch feature-name

# Switch to branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# List all branches
git branch -a

# Delete branch
git branch -d feature-name

# Merge branch into main
git checkout main
git merge feature-name
```

## 🔄 Updating Your Portfolio

```bash
# After making changes
git add .
git commit -m "Update: description of what changed"
git push origin main
```

## 📜 Viewing History

```bash
# View commit history
git log

# View compact history
git log --oneline

# View last 5 commits
git log -5

# View changes in a file
git log -p filename.txt
```

## ↩️ Undoing Changes

```bash
# Discard changes in working directory
git checkout -- filename.txt

# Unstage file (keep changes)
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert commit-hash
```

## 🏷️ Tags (for versions)

```bash
# Create tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Push tags to GitHub
git push origin --tags

# List tags
git tag -l
```

## 🔍 Checking Differences

```bash
# See unstaged changes
git diff

# See staged changes
git diff --staged

# Compare branches
git diff main feature-name
```

## 🧹 Cleanup

```bash
# Remove untracked files (dry run)
git clean -n

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd
```

## 🆘 Common Issues

### Forgot to add .gitignore before first commit

```bash
git rm -r --cached .
git add .
git commit -m "Fix: Add .gitignore"
```

### Wrong commit message

```bash
# Change last commit message
git commit --amend -m "New message"
```

### Accidentally committed to wrong branch

```bash
# On wrong branch
git reset HEAD~1

# Switch to correct branch
git checkout correct-branch

# Commit changes
git add .
git commit -m "Your message"
```

### Merge conflicts

```bash
# After pulling/merging with conflicts
# 1. Open conflicted files
# 2. Resolve conflicts manually
# 3. Add resolved files
git add .
git commit -m "Resolve merge conflicts"
```

## 📊 Useful Aliases

Add to your `.gitconfig`:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

Now you can use:
```bash
git st      # instead of git status
git co main # instead of git checkout main
git br      # instead of git branch
```

## 🔐 Authentication

### Using Personal Access Token

```bash
# When prompted for password, use your PAT instead
Username: your-username
Password: ghp_your_personal_access_token
```

### Save credentials (cache for 1 hour)

```bash
git config --global credential.helper cache
```

### Save credentials permanently (use with caution)

```bash
git config --global credential.helper store
```

## 📚 Learn More

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Pro Tip**: Always commit with clear, descriptive messages! 💡

Examples:
- ✅ `Add: Contact form component`
- ✅ `Fix: Navigation menu mobile responsiveness`
- ✅ `Update: Project descriptions and images`
- ❌ `changes`
- ❌ `fix`
- ❌ `update stuff`
