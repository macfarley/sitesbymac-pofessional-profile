import Link from 'next/link';

const SitemapPage = () => {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/projects', label: 'Projects' },
    { path: '/enterprise', label: 'Enterprise' },
    { path: '/mcaxl', label: 'McAxl' },
    { path: '/weddings', label: 'Weddings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-stone-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Sitemap</h1>
        <ul className="space-y-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <a className="text-lg font-medium underline decoration-amber-700/40 dark:decoration-cyan-400/40 hover:no-underline">
                  {route.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SitemapPage;