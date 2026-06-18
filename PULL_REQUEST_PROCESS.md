# Git Workflow: Feature Branch → PR → Main

This project uses a single long-lived branch, **`main`**, as the source of truth. All work happens on short-lived feature branches that are merged into `main` via pull request. Use the GitHub CLI (`gh`).

## Prerequisites
- Install GitHub CLI: `brew install gh`
- Authenticate: `gh auth login`

## 1. Start a feature branch
- **Source:** always branch off `main`.
- **Naming:** `feat/feature-name` or `fix/bug-name`.

```bash
git checkout main
git pull origin main
git checkout -b feat/my-new-feature
# ... make changes ...
git add .
git commit -m "feat: description of changes"
git push origin feat/my-new-feature
```

## 2. Open a pull request into `main`

```bash
gh pr create --base main --head feat/my-new-feature \
  --title "feat: My New Feature" \
  --body "Description of changes"
```

Opening (or updating) the PR runs the CI workflow in
[.github/workflows/ci-pr.yml](.github/workflows/ci-pr.yml): typecheck, lint, and a
production build. Keep the PR in draft until it's ready for those checks.

## 3. Merge

Once CI is green, merge the PR (squash recommended to keep `main` history clean):

```bash
gh pr merge --squash --delete-branch
```

Then refresh your local `main`:

```bash
git checkout main
git pull origin main
```

## 4. Tag a release (optional)

After a meaningful set of changes lands on `main`:

```bash
git checkout main
git pull origin main
git tag v1.0.0
git push origin v1.0.0
gh release create v1.0.0 --title "v1.0.0" --notes "Release notes here"
```

## Deployment

Deploys are triggered manually via the **Manual Deploy** workflow
([.github/workflows/manual-deploy.yml](.github/workflows/manual-deploy.yml)),
which always builds from `main`. The `staging` / `production` choice selects the
environment config and target server, so you can preview `main` on staging before
deploying it to production.

## Keeping a feature branch up to date

If `main` moves ahead while you work, rebase (or merge) `main` into your branch:

```bash
git checkout feat/my-new-feature
git fetch origin
git rebase origin/main      # or: git merge origin/main
# resolve any conflicts, then:
git push --force-with-lease  # only needed after a rebase
```
