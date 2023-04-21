import React from 'react';
import Navbar from '../components/Navbar';

interface AppLayoutProps {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
