'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './styles.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

/**
 * Template.tsx will cause 'input' to reset on page change, as opposed to layout.tsx which will not.
 */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input type="text" placeholder="placeholder" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link href={link.href} key={link.href} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
              {link.name}
            </Link>
          </li>
        );
      })}
      {children}
    </div>
  );
}
