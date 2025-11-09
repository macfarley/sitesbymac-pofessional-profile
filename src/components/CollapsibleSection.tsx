"use client";
import React, { useState, useEffect } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children?: React.ReactNode;
  collapsedContent?: React.ReactNode;
  defaultCollapsed?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  collapsedContent,
  defaultCollapsed = true,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  // Update collapsed state when defaultCollapsed changes (for expand/collapse all)
  useEffect(() => {
    setCollapsed(defaultCollapsed);
  }, [defaultCollapsed]);

  return (
    <section className="mb-8">
      <button
        className="w-full text-left font-bold text-xl py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center transition-colors"
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
        aria-controls={`section-${title.replace(/\s+/g, '-')}`}
      >
        <span>{title}</span>
        <span className="ml-2 text-lg font-semibold">{collapsed ? '+' : '−'}</span>
      </button>
      <div id={`section-${title.replace(/\s+/g, '-')}`}
        className={collapsed ? 'hidden' : 'mt-4'}
      >
        {collapsedContent || children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
