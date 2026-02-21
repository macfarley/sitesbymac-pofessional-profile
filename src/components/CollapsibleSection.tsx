"use client";
import React, { useState, useEffect } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children?: React.ReactNode;
  collapsedContent?: React.ReactNode;
  defaultCollapsed?: boolean;
  sectionId?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  collapsedContent,
  defaultCollapsed = true,
  sectionId,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const safeBaseId = sectionId ?? title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-_]/g, '').toLowerCase();
  const contentId = `${safeBaseId}-content`;

  // Update collapsed state when defaultCollapsed changes (for expand/collapse all)
  useEffect(() => {
    setCollapsed(defaultCollapsed);
  }, [defaultCollapsed]);

  return (
    <section className="mb-8" id={safeBaseId}>
      <button
        className="w-full text-left font-bold text-xl py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center transition-colors"
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <span className="ml-2 text-lg font-semibold">{collapsed ? '+' : '−'}</span>
      </button>
      <div id={contentId}
        className={collapsed ? 'hidden' : 'mt-4'}
      >
        {collapsedContent || children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
