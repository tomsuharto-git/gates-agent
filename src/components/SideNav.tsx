'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/cn';

const sections = [
  { id: 'background', label: 'Background' },
  { id: 'assignment', label: 'Assignment' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'wont-work', label: "Won't Work" },
  { id: 'task', label: 'The Task' },
  { id: 'imperatives', label: 'Imperatives' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'ways-in', label: 'Ways In' },
  { id: 'next', label: 'Next' },
];

export function SideNav() {
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <>
      {/* Desktop side nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-[200px] flex-col justify-center z-50 pl-6">
        <div className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 text-[12px] tracking-wider uppercase transition-all duration-300 rounded-md',
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                )}
              >
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full transition-all duration-300',
                    isActive
                      ? 'bg-[var(--color-accent)] scale-100'
                      : 'bg-[var(--color-border)] scale-75'
                  )}
                />
                <span className="font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {section.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile top bar */}
      <MobileNav activeId={activeId} />
    </>
  );
}

function MobileNav({ activeId }: { activeId: string }) {
  const activeLabel = sections.find((s) => s.id === activeId)?.label || '';

  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(15,15,15,0.85)' }}>
      <div className="flex items-center gap-4 px-4 py-3 overflow-x-auto scrollbar-hide">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'text-[11px] tracking-wider uppercase whitespace-nowrap transition-all duration-300 py-1 border-b-2',
                isActive
                  ? 'text-[var(--color-accent)] border-[var(--color-accent)]'
                  : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text)]'
              )}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {section.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
