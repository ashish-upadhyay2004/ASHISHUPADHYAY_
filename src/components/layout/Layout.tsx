import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Minimal layout for portfolio - no header/footer as they're part of Home
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
