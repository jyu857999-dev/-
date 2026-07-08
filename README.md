# Guide Forge

面向多游戏扩展的静态攻略库。当前内容聚焦《恶意不息》，覆盖流程探索、Boss、装备、Build 和地图资源。

所有攻略均综合整理自互联网公开资料，并在详情页保留来源链接。正文为中文重写摘要，不直接搬运第三方攻略全文；图片优先使用官方或 Steam 公开媒体素材并保留来源。

## Run

```bash
npm install
npm run dev
```

本机打开 `http://127.0.0.1:5173`。

同一 Wi-Fi 下用手机访问开发服务器：

```bash
npm run dev:lan
```

然后在手机浏览器打开 `http://<电脑局域网 IP>:5173`。如果打不开，检查电脑和手机是否在同一网络、Windows 防火墙是否允许 Node/Vite 入站连接。

## Public Deploy

计划仓库名：`guide-forge`。

1. 在 GitHub 创建公开仓库 `guide-forge`。
2. 把本项目推送到该仓库的 `main` 分支。
3. 在仓库 Settings -> Pages 中选择 GitHub Actions。
4. 推送后 workflow 会执行测试、构建并发布。
5. 发布地址通常是 `https://<你的 GitHub 用户名>.github.io/guide-forge/`。

本环境没有可用的 `gh` CLI，当前 GitHub 连接器也没有创建新仓库能力，所以远端仓库创建和首次 push 需要你提供可用远端或在 GitHub 页面完成。

## Build And Check

```bash
npm run test
npm run lint
npm run build
```

## Add A Guide

1. 复制 `src/content/guides/TEMPLATE.md`，或在 `internet-guide-pack.md` 中追加一个 `<!-- guide -->` 分隔的新条目。
2. 修改 frontmatter 和正文。
3. `sources` 可写完整对象，也可用短 ID，例如 `[steam, fextralife-guides]`。
4. `images` 可写完整对象，也可用短 ID，例如 `[steam-boss]`。
5. 运行 `npm run build`，内容校验会检查必填字段、未知游戏、未知分类、未知来源、未知图片和重复 slug。

## Source And Image Policy

- 官方/Steam/媒体素材可作为图片展示来源，必须保留 `sourceUrl` 和 `licenseNote`。
- 第三方攻略站图片默认不下载、不打包；如确实需要使用，先确认授权或只保留外链来源。
- 攻略正文必须综合重写，不复制整段原文。
