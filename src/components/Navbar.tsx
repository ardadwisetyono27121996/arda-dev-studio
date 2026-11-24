import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

const NAV_LINKS = [
  { label: 'Layanan', href: '#divisions' },
  { label: 'Target Bisnis', href: '#target-bisnis' },
  { label: 'Strategi', href: '#strategi' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 border-b border-neutral-900/15 bg-[#F7F6F2]/95 backdrop-blur-sm'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
        {/* Brand Identity */}
        <a href='#' className='group flex items-baseline gap-2'>
          <span className='text-lg font-bold tracking-tight text-neutral-950'>
            {STUDIO_INFO.brandName}
          </span>
          <span className='hidden font-mono text-[11px] uppercase tracking-wider text-neutral-500 sm:inline'>
            / {STUDIO_INFO.studioName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label='Navigasi utama'
          className='hidden items-center gap-8 md:flex'
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className='hidden md:block'>
          <a
            href='#konsultasi'
            className='inline-flex items-center gap-1.5 border border-neutral-950 bg-neutral-950 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] transition-colors hover:bg-[#D94E1F] hover:border-[#D94E1F]'
          >
            <span>Mulai Diskusi</span>
            <ArrowUpRight className='h-3.5 w-3.5' />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          className='inline-flex h-10 w-10 items-center justify-center border border-neutral-900/20 text-neutral-900 md:hidden'
        >
          {mobileMenuOpen ? (
            <X className='h-5 w-5' />
          ) : (
            <Menu className='h-5 w-5' />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className='border-t border-neutral-900/15 bg-[#F7F6F2] px-4 py-4 md:hidden'>
          <nav aria-label='Navigasi mobile' className='flex flex-col gap-3'>
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className='border-b border-neutral-900/10 pb-2.5 text-sm font-medium text-neutral-800'
              >
                {item.label}
              </a>
            ))}
            <a
              href='#konsultasi'
              onClick={() => setMobileMenuOpen(false)}
              className='mt-1 inline-flex items-center justify-center gap-1.5 bg-neutral-950 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2]'
            >
              <span>Mulai Diskusi</span>
              <ArrowUpRight className='h-3.5 w-3.5' />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
