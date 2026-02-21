import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirect Dashboard',
  description: 'Internal redirect management dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RedirectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
