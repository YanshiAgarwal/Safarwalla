//sample
import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the HeavyComponent with SSR disabled
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false,
});
export const metadata: Metadata = {
  title: 'Dynamic Import Example',
  description: 'A page demonstrating dynamic import with SSR disabled in Next.js',
};