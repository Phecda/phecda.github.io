# AGENTS.md

## 工作方式

- 务实、直接。
- 优先考虑正确性和实际可运维性，不追求听起来很厉害但不落地的方案。
- 不要为了“顺手”做超出需求范围的改动。
- 缺少必要信息时先停下来确认，不要擅自放宽条件。

## 仓库概况

这个仓库是一个部署到 GitHub Pages 的静态 React 应用。

当前技术栈：

- 构建：Rsbuild / Rspack
- 语言：TypeScript 6
- UI：React 19
- 路由：React Router 7
- 样式：Tailwind CSS 4 + PostCSS
- 交互组件基础能力：Headless UI
- Lint / Format：Biome
- Git Hooks：Husky + lint-staged + commitlint

## 常用命令

- `pnpm dev`：启动本地开发服务，端口 `3090`
- `pnpm build`：类型检查并构建生产产物
- `pnpm lint`：运行 Biome lint
- `pnpm lint:write`：运行 Biome lint 并自动修复
- `pnpm format`：运行 Biome format
- `pnpm preview`：预览生产构建结果

## 改动范围

- 改动必须严格围绕用户请求。
- 不要回退或重写与当前任务无关的进行中改动。
- 除非能明确降低当前复杂度，否则不要引入新的抽象。
- 只要改动涉及运行时、构建、部署、配置或依赖，就要在本地验证。

## 代码约定

- 应用代码优先使用具名导出。
- 配置文件如果工具明确要求默认导出，可以保留默认导出。
- `src` 下的导入优先使用 `@/` 别名。
- 保持 TypeScript 严格模式。不要用忽略警告或错误来替代真正修复。
- 除非任务本身要求更大范围的重构，否则遵循现有文件结构和命名习惯。

## 样式约定

- 组件样式优先使用 Tailwind utilities。
- Headless UI 只用于交互行为和可访问性，不要把它当通用布局库。
- 尽量复用 `src/styles/variables.css` 里的设计变量。
- 在 Tailwind 中使用 CSS 自定义属性时，优先采用 v4 的 canonical 写法，例如 `bg-(--color-brand)`、`text-(--color-text-2)`，不要继续使用旧的 arbitrary-value 写法。
- 除非用户明确要求，不要重新引入 Bootstrap 或 React Bootstrap。

## 质量门槛

- 只要改了代码，至少执行一次 `pnpm lint`。
- 只要改动涉及类型、路由、样式管线、构建配置或部署配置，就执行 `pnpm build`。
- `pre-commit` 会运行 `lint-staged`。
- 提交信息会通过 `.husky/commit-msg` 执行 `commitlint` 检查。

## 部署说明

- GitHub Pages 通过 `.github/workflows/deploy.yml` 部署。
- 仓库的 Pages Source 应设置为 `GitHub Actions`。
- 生产构建产物目录是 `dist/`。

## 环境说明

- 本地 HTTP / SOCKS5 代理端口：`20480` / `20481`。
- 如果依赖下载超时，优先挂本地代理重试，不要为了绕过网络问题随意更换依赖或工具。
