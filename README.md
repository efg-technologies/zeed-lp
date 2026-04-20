# zeed-lp

Zeed Browser のランディングページ。Astro + Tailwind + Cloudflare Pages。

## Dev

```sh
npm install
npm run dev     # http://localhost:4321
```

## Build & Deploy

```sh
npm run build
npm run deploy  # wrangler pages deploy ./dist
```

## Structure

```
src/
  layouts/Base.astro      # 共通 head + html scaffold
  pages/
    index.astro           # LP (Hero + Features + Install)
    privacy.astro         # プライバシーポリシー
    terms.astro           # 利用規約
  components/             # Hero / Features / Install / Footer / DocNav
  styles/global.css       # Tailwind + Zeed palette
```

## Palette

Zeed のブラウザ UI と同じカラーテーマ (`#0F0F12` 背景 / `#5B21B6` アクセント) を
Tailwind theme に展開。
