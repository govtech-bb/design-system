# Contributing to GovTechBB Design System

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22 or higher
- **pnpm**: Version 10.23.0 (managed via packageManager field)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/govtech-bb/design-system.git
   cd design-system
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development**

   Choose one of the following commands based on what you're working on:

   ```bash
   # Start Storybook for component development
   pnpm storybook

   # Build all packages
   pnpm build
   ```

## Commit Message Guidelines

We follow the **Conventional Commits** specification. All commits are validated with commitlint.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **chore**: Maintenance tasks, dependency updates
- **refactor**: Code changes that neither fix a bug nor add a feature
- **docs**: Documentation changes
- **test**: Adding or updating tests
- **style**: Code style changes (formatting, missing semi-colons, etc.)

### Scopes

Use the component or package name as the scope:

- `Button`, `DateInput`, `Typography` (for components)
- `deps`, `Dependencies` (for dependency updates)

### Examples

```bash
feat(Button): add asChild prop for composition
fix(DateInput): remove unnecessary text-center class
chore(deps): update storybook to v10.0.8
refactor(RadioGroup): display error messages correctly
```

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the commit body or add `!` after the type/scope:

```bash
feat(Button)!: remove deprecated size prop

BREAKING CHANGE: The 'size' prop has been removed. Use 'variant' instead.
```

## Pull Requests

### PR Title Format

Use the same format as commit messages:

```
feat(ComponentName): add new feature
```

## Changelog

We use [git-cliff](https://git-cliff.org/) to automatically generate changelogs from conventional commits.

### Generate Changelog

```bash
# Generate changelog for released versions only
pnpm changelog

# Generate changelog including unreleased changes
pnpm changelog:unreleased
```

The changelog is automatically generated based on:

- Git tags for versions
- Conventional commit messages
- Pull request numbers

### Changelog Sections

- **General changes**: Commits without a scope
- **Component changes**: Grouped by component scope
- **Dependency Updates**: Collapsed list of dependency updates
