# Git Workflow: Dev -> QA -> Main

To maintain a clean history and avoid conflicts, follow this structured workflow using the GitHub CLI (`gh`).

## Prerequisites
- Ensure GitHub CLI is installed: `brew install gh`
- Authenticate: `gh auth login`

## 1. Feature Development
- **Source:** Always branch off `dev`.
- **Naming:** `feat/feature-name` or `fix/bug-name`.
- **Process:**
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feat/my-new-feature
  # ... make changes ...
  git add .
  git commit -m "feat: description of changes"
  git push origin feat/my-new-feature
  ```
- **Create PR (Feature -> Dev):**
  ```bash
  gh pr create --base dev --head feat/my-new-feature --title "feat: My New Feature" --body "Description of changes"
  ```

## 2. Promotion to QA (Staging)
- **Source:** `dev`
- **Target:** `qa`
- **Process:**
  1. Ensure `dev` is up to date and stable.
  2. **Create PR (Dev -> QA):**
     ```bash
     gh pr create --base qa --head dev --title "Promote Dev to QA" --body "Includes recent features and fixes."
     ```
  3. **Handling Conflicts:** If `qa` is ahead (hotfixes), sync locally first:
     ```bash
     git checkout dev
     git pull origin dev
     git pull origin qa  # Merge QA into Dev locally
     # Resolve conflicts if any
     git push origin dev
     # Now the PR above will be clean
     ```

## 3. Promotion to Main (Production)
- **Source:** `qa`
- **Target:** `main`
- **Process:**
  1. Ensure `qa` has been tested and verification is complete.
  2. **Create PR (QA -> Main):**
     ```bash
     gh pr create --base main --head qa --title "Release v1.x.x" --body "Production release."
     ```
  3. **Release Tagging:** After merging, create a release tag:
     ```bash
     git checkout main
     git pull origin main
     git tag v1.0.0
     git push origin v1.0.0
     gh release create v1.0.0 --title "v1.0.0" --notes "Release notes here"
     ```

## Resolving Conflicts (The "Right" Way)
If `qa` -> `main` has conflicts:
1. **Never** force push unless `main` is known to be corrupted.
2. Checkout source branch (e.g., `qa`).
3. Merge target branch (e.g., `main`) into source.
   ```bash
   git checkout qa
   git pull origin main
   # Resolve conflicts in VS Code
   git commit -am "chore: resolve conflicts with main"
   git push origin qa
   ```
4. The PR will automatically update and be conflict-free.
