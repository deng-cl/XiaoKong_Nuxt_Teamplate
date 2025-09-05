# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# H Using

- Nuxt 4

- CSS 原子类: `Unocss` 配合 `postcss-px-to-viewport-8-plugin` 工具做移动端适配方案

- UI 库: `Vuetify`

- 图标、字体: `为避免模板体积过大，暂不集成特定的图标或自定，需要用到时再进行集成`

- i18n: `需要时再配置（注意点 - 配置国际化时判读时，可自行判断是否需要适配 Vuetify UI 库中的国际化 : https://vuetify.nodejs.cn/en/features/internationalization/）`

- utils 方法
    - ```ts
        /* class 设置适配器 */
        const classAdaptor = useSetClassAdaptor();

        /* theme 主题切换 */
        const { changeTheme, themeName } = useChangeTheme();
      ```