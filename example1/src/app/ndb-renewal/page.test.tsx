import { render, screen } from '@testing-library/react';
import NdbRenewalPage from './page';

describe('NdbRenewalPage', () => {
  it('ページコンポーネントが描画できる', () => {
    const { container } = render(<NdbRenewalPage />);
    expect(container.querySelector('main')).not.toBeNull();
  });

  it('ヒーローの見出しが表示される', () => {
    render(<NdbRenewalPage />);
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeNull();
    expect(screen.queryByText(/お客様と共に、/)).not.toBeNull();
  });

  it('サービス3件が表示される', () => {
    render(<NdbRenewalPage />);
    expect(screen.queryByText('開発・導入サービス')).not.toBeNull();
    expect(screen.queryByText('オンサイトサービス')).not.toBeNull();
    expect(screen.queryByText('コンサルテーションサービス')).not.toBeNull();
  });

  it('採用向けセクションが表示される', () => {
    render(<NdbRenewalPage />);
    expect(screen.queryByText(/共に未来を創る仲間を募集しています/)).not.toBeNull();
  });

  it('お問い合わせ導線が表示される', () => {
    render(<NdbRenewalPage />);
    expect(screen.queryByText('03-3456-5381')).not.toBeNull();
    expect(screen.queryByText(/メールでのお問い合わせ/)).not.toBeNull();
  });
});
