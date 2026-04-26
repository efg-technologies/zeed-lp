/**
 * Minimal i18n helper for zeed-lp.
 *
 * en is the default (HN / r/archlinux / X の英語圏流入向け).
 * ja は /ja/ prefix で出す。
 *
 * 使い方:
 *   const lang = getLang(Astro.currentLocale);
 *   const s = strings[lang];
 *   <h1>{s.hero.title1}</h1>
 */

export type Lang = "en" | "ja";

export function getLang(locale: string | undefined): Lang {
  return locale === "ja" ? "ja" : "en";
}

/** Map current path to the same page in the other locale. */
export function altLangUrl(currentPath: string, lang: Lang): string {
  // Normalize: strip trailing slash for comparison but keep final form.
  const p = currentPath.replace(/\/+$/, "") || "/";
  if (lang === "ja") {
    if (p === "/") return "/ja/";
    if (p.startsWith("/ja/") || p === "/ja") return p.endsWith("/") ? p : `${p}/`;
    return `/ja${p}/`;
  }
  // lang === "en"
  if (p === "/ja" || p === "/ja/") return "/";
  if (p.startsWith("/ja/")) return `${p.slice(3)}/`;
  return p.endsWith("/") ? p : `${p}/`;
}

type StringTable = {
  meta: {
    indexTitle: string;
    indexDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    leadBoldA: string;
    leadBoldB: string;
    leadBoldC: string;
    leadTail: string;
    ctaInstall: string;
    ctaCompare: string;
    tagline: string;
    chromeNote: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
    inputPlaceholder: string;
    visualCaption: string;
  };
  features: {
    eyebrow: string;
    heading: string;
    items: Array<{
      tag: string;
      title: string;
      lead: string;
      points: string[];
    }>;
  };
  compare: {
    eyebrow: string;
    heading: string;
    subhead: string;
    colFeature: string;
    rows: Array<{ label: string; zeed: string; atlas: string; comet: string; fellou: string; opera: string }>;
    legend: string;
    sourceNote: string;
  };
  install: {
    heading: string;
    subhead: string;
    archTitle: string;
    archHelperLabel: string;
    archManualLabel: string;
    debTitle: string;
    debLabel: string;
    debAptNote: string;
    macTitle: string;
    macBetaBadge: string;
    macDescription: string;
    macBrewLabel: string;
    macManualLabel: string;
    macQuarantineNote: string;
    firstRun: string;
    issuesLink: string;
  };
  roadmap: {
    eyebrow: string;
    heading: string;
    nowBadge: string;
    nowTitle: string;
    nowBody: string;
    nextBadge: string;
    nextTitle: string;
    nextBody: string;
    laterBadge: string;
    laterTitle: string;
    laterBody: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    privacy: string;
    terms: string;
    github: string;
    issues: string;
    copyright: string;
    altLang: string;
  };
  docnav: {
    top: string;
    privacy: string;
    terms: string;
  };
};

const en: StringTable = {
  meta: {
    indexTitle: "Zeed — An AI browser that thinks with you",
    indexDescription:
      "A Chromium-based AI browser that reasons over your tabs, notes, and reading context. Your data never leaves your machine. BYO OpenRouter key. Turn AI off, get vanilla Chromium.",
    privacyTitle: "Privacy Policy — Zeed Browser",
    privacyDescription:
      "Zeed Browser privacy policy. Personal data stays on your device. Two minimal anonymous telemetry events, opt-in, default off.",
    termsTitle: "Terms of Service — Zeed Browser",
    termsDescription:
      "Zeed Browser terms of service. Agent autonomy scope, pricing tiers, affiliate disclosure.",
  },
  hero: {
    badge: "v147.0.7727.55.46 · AUR + .deb",
    title1: "An AI browser that",
    title2: "thinks with you",
    leadBoldA: "reasons over your tabs, memory, and the page you’re reading",
    leadBoldB: "can take actions when you ask",
    leadBoldC: "Your data never leaves your device",
    leadTail:
      "by design. Chromium-based. Pick any LLM (GPT / Claude / Gemini).",
    ctaInstall: "Install on Linux",
    ctaCompare: "How it differs",
    tagline: "Free · no ads · bring your own LLM · macOS soon",
    chromeNote: "Your Chrome extensions, bookmarks, and passwords come along.",
    stat1Label: "trackers",
    stat2Label: "telemetry events (opt-in, default OFF)",
    stat3Label: "Context Map layers (Profile → Tab → Memory)",
    stat4Label: "LLMs to choose from (GPT / Claude / Gemini…)",
    inputPlaceholder: "Ask, search, or drive the browser…",
    visualCaption:
      "Vertical tabs keep 100+ tabs tidy · sidebar graphs your context · tools act when you ask",
  },
  features: {
    eyebrow: "Five things Zeed promises",
    heading: "The browser, back on your side.",
    items: [
      {
        tag: "Thinks with you",
        title: "Tabs with a brain",
        lead:
          "Open tabs, past notes, the paragraph you’re reading — all stitched into context. The sidebar continuously surfaces what matters now, and chat answers on top of that context instead of from scratch.",
        points: [
          "Maps tabs, notes, and topics into five layers (Profile → TabGroup → Tab → Topic → Memory)",
          "Highlights shift based on what you’re actually working on",
          "RSS, bookmarks, and tasks all feed the same brain",
        ],
      },
      {
        tag: "Takes action",
        title: "Hands-on when you want it",
        lead:
          "Tell the sidebar “find this book on Amazon and get to the checkout screen” and Zeed opens the tab, searches, fills forms, and stops before submitting. Any purchase, post, or delete always waits for your confirmation.",
        points: [
          "Three modes per message — Auto (decide) / Ask (answer only) / Search (Web search)",
          "Buy, send, delete, and publish always require explicit approval",
          "Prompt-injection from hostile pages is blocked structurally",
        ],
      },
      {
        tag: "Can’t see your data",
        title: "Your data never touches our servers",
        lead:
          "Memory, history, bookmarks — all stored locally. Telemetry is two anonymous events, opt-in, default off. Other AI browsers stream your activity to their cloud. Zeed literally can’t, by construction.",
        points: [
          "Memory / history / bookmarks live in local storage and SQLite only",
          "Private mode disables AI entirely — runs as a plain browser",
          "MPL-2.0 source on GitHub. Read it, fork it, patch it",
        ],
      },
      {
        tag: "Your LLM, your bill",
        title: "Bring your own model",
        lead:
          "Other AI browsers lock you to their provider and charge $20/mo. Zeed uses OpenRouter, so you pick from 300+ models (GPT / Claude / Gemini / Llama 3 / Qwen…) and pay the provider directly. No markup.",
        points: [
          "Models are swappable — pick one per task (coding / writing / local languages)",
          "MCP-compatible, so your Claude Desktop / Cursor tools come with you",
          "Heavy users pay less — Zeed takes zero cut on LLM spend",
        ],
      },
      {
        tag: "One-click migration",
        title: "From Chrome, continued",
        lead:
          "Chromium under the hood. All 190,000+ Web Store extensions, your bookmarks, saved passwords, autofill, and site compatibility work out of the box. Make it your daily driver, not a side-experiment.",
        points: [
          "Your Chrome profile is read-only — go back whenever you want",
          "IMEs and OS integration behave like standard Chromium",
          "Turn AI off and you have plain Chromium, nothing more",
        ],
      },
    ],
  },
  compare: {
    eyebrow: "Against other AI browsers",
    heading: "The difference starts with intent.",
    subhead:
      "Atlas / Comet / Fellou / Opera Neon ship in-house LLMs and stream your activity to their cloud. Zeed runs on your LLM key, on your device.",
    colFeature: "Feature / policy",
    rows: [
      { label: "Chrome extensions work as-is", zeed: "✓", atlas: "✓", comet: "✓", fellou: "✓", opera: "✓" },
      { label: "One-click Chrome import", zeed: "✓", atlas: "✓", comet: "✓", fellou: "?", opera: "✓" },
      { label: "BYO LLM (pick any model)", zeed: "✓", atlas: "—", comet: "—", fellou: "—", opera: "—" },
      { label: "On-device data (by construction)", zeed: "✓", atlas: "△", comet: "—", fellou: "△", opera: "△" },
      { label: "Diff source public (hackable)", zeed: "✓ MPL-2.0", atlas: "—", comet: "—", fellou: "partial", opera: "—" },
      { label: "MCP (Claude/Cursor tools reuse)", zeed: "✓", atlas: "—", comet: "—", fellou: "—", opera: "—" },
      { label: "Monthly price", zeed: "$0", atlas: "$20 (Plus)", comet: "$0–20", fellou: "$0+", opera: "sub" },
    ],
    legend:
      "✓ = full / ◯ = limited / △ = policy claim without structural guarantee / — = no",
    sourceNote: "Based on each vendor’s public material as of 2026-04. Independent research.",
  },
  install: {
    heading: "Install",
    subhead: "Arch / Ubuntu / Debian / macOS (beta). iOS on the roadmap.",
    archTitle: "Arch (AUR)",
    archHelperLabel: "AUR helper (yay / paru):",
    archManualLabel: "Or manual makepkg:",
    debTitle: "Ubuntu / Debian",
    debLabel: "Grab the latest .deb and install:",
    debAptNote: "GPG-signed APT repo (apt-get install zeed-browser) is in progress.",
    macTitle: "macOS (Apple Silicon)",
    macBetaBadge: "Unsigned beta",
    macDescription: "Apple Developer signing is still in progress (D-U-N-S pending). Until then, install via Homebrew tap — the cask auto-removes the Gatekeeper quarantine xattr for you.",
    macBrewLabel: "Homebrew (recommended):",
    macManualLabel: "Or manual .dmg + quarantine bypass:",
    macQuarantineNote: "Apple Silicon (arm64) only for now. Universal binary lands after notarization.",
    firstRun: "On first launch, paste your OpenRouter API key. That’s it.",
    issuesLink: "Email feedback",
  },
  roadmap: {
    eyebrow: "Roadmap",
    heading: "What’s next.",
    nowBadge: "Shipping",
    nowTitle: "Linux (Arch AUR + Ubuntu/Debian .deb)",
    nowBody:
      "Chromium base, sidebar AI, five-layer Context Map, MCP, 300+ LLMs. Ready as a daily driver today.",
    nextBadge: "Beta",
    nextTitle: "macOS (Apple Silicon, unsigned beta)",
    nextBody: "Now available as an unsigned beta .dmg. Signed + notarized build is next, once Apple Developer enrollment clears.",
    laterBadge: "Later",
    laterTitle: "iPhone · multi-device sync · more to come",
    laterBody: "Order and timing depend on how the macOS launch lands.",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Eight common questions.",
    items: [
      {
        q: "How is Zeed different from Comet / Atlas / Dia?",
        a: "Three things. (1) Your data stays on your device by design — others stream to their AI cloud. (2) You pick the LLM — others lock you in. (3) Turn AI off and Zeed is just Chromium, so you can leave without friction.",
      },
      {
        q: "Can I migrate from Chrome?",
        a: "Yes. Chromium-based, so all 190,000+ Web Store extensions, bookmarks, saved passwords, and autofill carry over. Your Chrome profile is read-only — if you don’t like Zeed, go back.",
      },
      {
        q: "Where does my data live?",
        a: "On your device only — localStorage and SQLite. Memory, history, bookmarks, chat logs never leave. Anonymous telemetry is two fields, opt-in, default off. Private mode disables AI entirely.",
      },
      {
        q: "Which models can I use?",
        a: "Any of 300+ on OpenRouter: OpenAI GPT, Anthropic Claude, Google Gemini, open models like Llama 3 / Qwen / DeepSeek. Pick one per task (coding / writing / translation).",
      },
      {
        q: "How much does it cost?",
        a: "Zeed is free, no ads. LLM usage you pay directly to the provider. Zeed takes no cut, so heavy users pay the lowest possible rate. Optional paid tiers ($5/mo+) for multi-device sync and cloud features are coming.",
      },
      {
        q: "Which OS is supported?",
        a: "Linux today (Arch AUR + Ubuntu/Debian .deb). macOS is next. iPhone and cloud sync follow, depending on macOS reception.",
      },
      {
        q: "How does Zeed’s Memory work?",
        a: "Zeed extracts user intent, decisions, and discoveries from pages and chat, then organizes them across five layers (Profile → TabGroup → Tab → Topic → Memory). The AI reads from this instead of asking you from scratch every time. Raw logs are not retained.",
      },
      {
        q: "Isn’t letting AI drive the browser risky?",
        a: "Any buy / send / delete / publish requires your approval. Prompt-injection from hostile pages is blocked structurally. If that’s still too much, private mode disables AI entirely.",
      },
    ],
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    github: "GitHub",
    issues: "Feedback",
    copyright: "© 2026 EFG Technologies Inc. Zeed Browser.",
    altLang: "日本語",
  },
  docnav: {
    top: "Home",
    privacy: "Privacy",
    terms: "Terms",
  },
};

const ja: StringTable = {
  meta: {
    indexTitle: "Zeed — 「あなた」を中心に考える AI ブラウザ",
    indexDescription:
      "Chromium ベースの AI ブラウザ。あなたのタブ・記憶・閲覧文脈を中心に考え、必要なら手を貸す。個人データは Zeed から見えない構造。BYO OpenRouter key、AI を切れば素の Chromium として動く。",
    privacyTitle: "プライバシーポリシー — Zeed Browser",
    privacyDescription:
      "Zeed Browser のプライバシーポリシー。個人データは端末内保存のみ、計測は最小限の 2 イベント、opt-in default OFF。",
    termsTitle: "利用規約 — Zeed Browser",
    termsDescription:
      "Zeed Browser の利用規約。Agent 自律動作の責任範囲、料金プラン、アフィリエイト開示。",
  },
  hero: {
    badge: "v147.0.7727.55.46 · AUR + .deb 配布中",
    title1: "\u201cあなた\u201dを中心に",
    title2: "考える AI ブラウザ",
    leadBoldA: "あなたと一緒に考える",
    leadBoldB: "操作まで任せられる",
    leadBoldC: "あなたの情報は、あなたの端末から出ない",
    leadTail: "設計。Chromium ベース、好きな LLM (GPT / Claude / Gemini) を選べる。",
    ctaInstall: "Linux にインストール",
    ctaCompare: "他の AI ブラウザとの違い",
    tagline: "無料 · 広告なし · 好きな LLM を選べる · Mac 版準備中",
    chromeNote: "Chrome の拡張機能・ブックマーク・パスワードは、そのまま引き継ぎ",
    stat1Label: "トラッキング",
    stat2Label: "計測イベント (opt-in OFF 既定)",
    stat3Label: "Context Map (Profile→Tab→Memory)",
    stat4Label: "選べる LLM (GPT / Claude / Gemini…)",
    inputPlaceholder: "質問、検索、ブラウザ操作…",
    visualCaption:
      "縦タブで 100 枚でも手元にまとまる · 隣のサイドバーが文脈を graph 化 · 必要なら tool を呼んで手を貸す",
  },
  features: {
    eyebrow: "Zeed が約束する 5 つ",
    heading: "ブラウザは、あなたの味方に戻る。",
    items: [
      {
        tag: "あなたと考える",
        title: "タブが、頭を持つ",
        lead:
          "開いているタブ、過去のメモ、今読んでいる内容 — すべてを文脈として繋ぎ、「今のあなたに関連する情報」をサイドバーに描き続ける。チャットは常にその文脈の上で答える。",
        points: [
          "タブ・メモ・トピックを 5 層で地図化 (Profile → TabGroup → Tab → Topic → Memory)",
          "重要箇所のハイライトは、あなたの関心で動的に変わる",
          "RSS・ブックマーク・タスクも同じ頭脳に繋がる",
        ],
      },
      {
        tag: "手も動かす",
        title: "ブラウザ操作まで任せられる",
        lead:
          "サイドバーに「Amazon で本を探して注文前まで進めて」と書けば、タブを開き、検索し、フォームを埋め、確認画面まで運ぶ。重要な決定 (購入・送信・削除) は必ず確認を取る。",
        points: [
          "3 モード: Auto (自動判断) / Ask (質問だけ) / Search (Web 検索) を送信ごとに切替",
          "購入・送信・削除など重要な操作は必ず承認を求める",
          "悪意あるページからの命令ハイジャックを構造で防ぐ",
        ],
      },
      {
        tag: "見られない",
        title: "データは、端末から出ない",
        lead:
          "記憶・履歴・ブックマークは、あなたの端末内だけに保存。計測も最小 2 項目、デフォルト OFF。他社は AI 会社のクラウドに送信しますが、Zeed は構造的にそれができない設計。",
        points: [
          "Memory / 履歴 / Bookmark は端末内 localStorage のみ",
          "プライバシーモードで AI 機能を完全オフ、普通のブラウザとして使える",
          "コードは MPL-2.0 で公開、中身を確認して自分で改造できる",
        ],
      },
      {
        tag: "LLM は好きに",
        title: "あなたの LLM、あなたの料金",
        lead:
          "他社は AI 会社が決めたモデルに固定され、月 $20 払う。Zeed は OpenRouter を通して 300+ モデル (GPT / Claude / Gemini / Llama 3 / Qwen など) から自由に選べる。料金は好きな LLM 会社に直接払うので、中間マージンなし。",
        points: [
          "モデルは交換部品。用途 (コーディング / 文章 / 日本語) ごとに使い分け可",
          "Claude Desktop / Cursor と同じ MCP ツールも取り込める",
          "重利用でも最安 — Zeed は LLM 代金を一切取らない",
        ],
      },
      {
        tag: "移行は 1 クリック",
        title: "Chrome から、続きを",
        lead:
          "Chromium ベース。Web Store の 190,000+ 拡張、ブックマーク、保存パスワード、自動入力、サイト互換性、すべてそのまま動く。「ちょっと試す」ではなく、普段使いのメインブラウザとしてそのまま乗り換えられる。",
        points: [
          "Chrome プロファイルは読むだけ — 戻りたければいつでも Chrome に帰れる",
          "日本語 IME (fcitx5-mozc など) は Chromium 標準のまま動く",
          "AI 機能を切ると、素の Chromium として 100% そのまま使える",
        ],
      },
    ],
  },
  compare: {
    eyebrow: "他の AI ブラウザと比べて",
    heading: "差別化は、思想から始まる。",
    subhead:
      "Atlas / Comet / Fellou / Opera Neon は、in-house LLM 固定でクラウド依存。Zeed は、あなたの LLM 鍵で、あなたの端末で動く。",
    colFeature: "機能 / ポリシー",
    rows: [
      { label: "Chrome 拡張がそのまま動く", zeed: "✓", atlas: "✓", comet: "✓", fellou: "✓", opera: "✓" },
      { label: "Chrome から 1-click 移行", zeed: "✓", atlas: "✓", comet: "✓", fellou: "?", opera: "✓" },
      { label: "BYO LLM (好きなモデル)", zeed: "✓", atlas: "—", comet: "—", fellou: "—", opera: "—" },
      { label: "端末内データ (構造的)", zeed: "✓", atlas: "△", comet: "—", fellou: "△", opera: "△" },
      { label: "差分コード公開 (改造可)", zeed: "✓ MPL-2.0", atlas: "—", comet: "—", fellou: "部分", opera: "—" },
      { label: "MCP 対応 (Claude/Cursor 資産)", zeed: "✓", atlas: "—", comet: "—", fellou: "—", opera: "—" },
      { label: "月額", zeed: "$0", atlas: "$20 (Plus)", comet: "$0-20", fellou: "$0+", opera: "sub" },
    ],
    legend: "✓ = 完全対応 / ◯ = 限定的 / △ = ポリシーで謳うが構造担保なし / — = 非対応",
    sourceNote: "比較表は各社の公開情報 (2026-04 時点) に基づく、独自調査",
  },
  install: {
    heading: "インストール",
    subhead: "Arch / Ubuntu / Debian / macOS (beta) 対応。iOS はロードマップ上。",
    archTitle: "Arch (AUR)",
    archHelperLabel: "AUR helper (yay / paru):",
    archManualLabel: "手動 makepkg:",
    debTitle: "Ubuntu / Debian",
    debLabel: "最新 release から .deb を取得してインストール:",
    debAptNote: "GPG 署名付き APT repo (apt-get install zeed-browser) は準備中。",
    macTitle: "macOS (Apple Silicon)",
    macBetaBadge: "未署名 beta",
    macDescription: "Apple Developer 署名は準備中 (D-U-N-S 申請中)。それまでは Homebrew tap 経由のインストールが推奨です — cask が Gatekeeper quarantine の自動解除も行います。",
    macBrewLabel: "Homebrew (推奨):",
    macManualLabel: ".dmg 直 DL + quarantine 解除:",
    macQuarantineNote: "現状は Apple Silicon (arm64) のみ。Universal binary は notarize 完了後に対応。",
    firstRun: "初回起動時に OpenRouter API key を貼るだけ。",
    issuesLink: "メールでフィードバック",
  },
  roadmap: {
    eyebrow: "Roadmap",
    heading: "次に来るもの。",
    nowBadge: "配布中",
    nowTitle: "Linux (Arch AUR + Ubuntu/Debian .deb)",
    nowBody:
      "Chromium ベース、サイドバー AI、5 層 Context Map、MCP、300+ LLM 対応。今日からメインブラウザとして使える。",
    nextBadge: "beta",
    nextTitle: "macOS (Apple Silicon、未署名 beta)",
    nextBody: "未署名 beta .dmg を公開中。署名 + notarize は Apple Developer 審査完了後に対応。",
    laterBadge: "coming",
    laterTitle: "iPhone · 多デバイス同期 · まだ言えないもの",
    laterBody: "順番と時期は Mac 版の反応次第で調整する。",
  },
  faq: {
    eyebrow: "よくある質問",
    heading: "気になる 8 つ。",
    items: [
      {
        q: "他の AI ブラウザ (Comet / Atlas / Dia) とどう違う？",
        a: "3 点です。(1) あなたのデータが端末から出ない設計 — 他社は AI 会社のクラウドに送ります。(2) 使う LLM を好きに選べる — 他社は固定。(3) AI 機能を切ると普通の Chromium として使える。迷わず戻れる設計。",
      },
      {
        q: "Chrome から移行できる？",
        a: "はい。Chromium ベースなので Chrome の拡張機能 (19 万以上)、ブックマーク、保存パスワード、自動入力、全部そのまま引き継げます。Chrome プロファイルは読むだけ (上書きしない) なので、合わなければいつでも Chrome に戻れます。",
      },
      {
        q: "データはどこに保存される？",
        a: "あなたの端末内だけ (localStorage と SQLite)。記憶、履歴、ブックマーク、チャットログ、すべてクラウドに送りません。匿名計測も最小 2 項目、デフォルト OFF で opt-in 方式。プライベートモードで AI 機能を完全に切ることも可能です。",
      },
      {
        q: "どの AI モデルが使える？",
        a: "OpenRouter 経由で 300+ モデルから選べます。OpenAI GPT、Anthropic Claude、Google Gemini、オープンソースの Llama 3 / Qwen / DeepSeek など。用途 (コーディング / 日本語文章 / 翻訳) で使い分けられます。",
      },
      {
        q: "料金は？",
        a: "Zeed 本体は無料、広告もなし。LLM の利用料は、あなたが選んだ AI 会社 (OpenAI / Anthropic 等) に直接払います。Zeed は中間マージンを取らないため、どれだけ使っても最安です。将来、クラウド同期などの追加サービスを有料 tier で提供予定 ($5/月〜)。",
      },
      {
        q: "どんな OS で使える？",
        a: "現在は Linux (Arch AUR + Ubuntu/Debian .deb) で配布中。Mac 版を準備中です。iPhone やクラウド同期は、Mac 版の反応を見て判断します。",
      },
      {
        q: "Zeed の記憶 (Memory) はどう動く？",
        a: "閲覧中のページやチャットから「ユーザーの意図・決定・発見」を抽出して、Profile → TabGroup → Tab → Topic → Memory の 5 層で整理。AI はこれを参照するので、毎回ゼロから質問し直す必要がなくなります。生のログは溜めません。",
      },
      {
        q: "AI がブラウザを自動操作するって、危なくない？",
        a: "Zeed は「購入・送信・削除・投稿」など重要な操作の前に必ず承認を求めます。また、悪意あるページが AI に命令を注入してくる攻撃 (プロンプトインジェクション) を構造的に防ぐ仕組みを入れています。不安な時はプライベートモードで AI 機能を完全に切れます。",
      },
    ],
  },
  footer: {
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    github: "GitHub",
    issues: "フィードバック",
    copyright: "© 2026 EFG Technologies Inc. Zeed Browser.",
    altLang: "English",
  },
  docnav: {
    top: "トップ",
    privacy: "プライバシー",
    terms: "利用規約",
  },
};

export const strings: Record<Lang, StringTable> = { en, ja };

export function t(lang: Lang): StringTable {
  return strings[lang];
}
