import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SitesByMac.dev — Mac McCoy digital consulting and web engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0F172A 0%, #111827 100%)',
          color: '#F9FAFB',
          fontFamily: 'Arial, sans-serif',
          padding: '54px 64px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            border: '2px solid #374151',
            borderRadius: 28,
            width: '100%',
            height: '100%',
            padding: '44px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(160deg, #1F2937 0%, #111827 100%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ color: '#FBBF24', fontSize: 38, fontWeight: 800 }}>SitesByMac.dev</div>
            <div style={{ height: 6, width: 760, borderRadius: 4, background: 'linear-gradient(90deg, #F59E0B 0%, #22D3EE 100%)' }} />
            <div style={{ fontSize: 66, fontWeight: 800, marginTop: 8 }}>Mac McCoy</div>
            <div style={{ fontSize: 30, color: '#D1D5DB' }}>Privacy-minded digital consultant & builder</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 28, color: '#93C5FD', fontWeight: 700 }}>What I build</div>
            <div style={{ fontSize: 24, color: '#E5E7EB' }}>• Ethical web strategy and full-stack implementation</div>
            <div style={{ fontSize: 24, color: '#E5E7EB' }}>• Creator-first publishing systems and SEO architecture</div>
            <div style={{ fontSize: 24, color: '#E5E7EB' }}>• Wedding and event digital experiences with long-term stewardship</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 28, color: '#93C5FD', fontWeight: 700 }}>How to find me</div>
            <div style={{ fontSize: 24 }}>sitesbymac.dev  |  @sitesbymac.bsky.social</div>
            <div style={{ fontSize: 24 }}>mac@sitesbymac.dev  |  medium.com/@sitesbymac</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
