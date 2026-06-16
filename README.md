# Fresh

Small apps and starters that can be copied straight out of `apps/` with `gitpick`.

## Install an app

Use `gitpick` with the repo path to the app you want:

```sh
npx gitpick johnie/fresh/apps/lime my-app
npx gitpick johnie/fresh/apps/yuzu my-app
```

Then install dependencies and start the app:

```sh
cd my-app
nvm use
pnpm install
pnpm dev
```

Run checks and tests:

```sh
pnpm check
pnpm test
```

## Available apps

- `apps/lime` - TanStack Start starter app with Vitest
- `apps/yuzu` - TanStack Start starter app on Cloudflare
