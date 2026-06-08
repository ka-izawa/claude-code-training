export type Service = {
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type NewsItem = {
  date: string;
  category: string;
  title: string;
};

export const services: Service[] = [
  {
    title: "開発・導入サービス",
    description:
      "要件定義支援から設計・製造・テスト、移行・導入支援まで、システム開発の全工程をサポートします。",
  },
  {
    title: "オンサイトサービス",
    description:
      "企画・開発・導入・移行業務をお客様のロケーションで支援し、現場に寄り添った対応を行います。",
  },
  {
    title: "コンサルテーションサービス",
    description:
      "基本構想の立案から推進計画の支援まで、情報システム戦略の上流フェーズを幅広く支援します。",
  },
];

export const features: Feature[] = [
  {
    title: "ライフサイクル全般をサポート",
    description:
      "情報システムの企画・開発・運用・保守まで、一貫した支援体制を提供します。",
  },
  {
    title: "品質・セキュリティへの取り組み",
    description:
      "プライバシーマーク取得・ISO認証を取得し、お客様のデータを安全に取り扱います。",
  },
  {
    title: "お客様ロケーション対応",
    description:
      "オンサイトでの対応を重視し、お客様の現場に溶け込んだ柔軟なサポートを行います。",
  },
];

export const news: NewsItem[] = [
  { date: "2025-06-01", category: "お知らせ", title: "Webサイトをリニューアルしました（モック）" },
  { date: "2025-04-15", category: "プレスリリース", title: "ISO認証を継続取得しました（モック）" },
  { date: "2025-03-01", category: "採用", title: "2026年度 新卒採用エントリー受付開始（モック）" },
];
