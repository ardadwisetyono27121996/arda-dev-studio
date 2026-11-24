import { ArrowRight, MapPin, Target } from 'lucide-react';
import { STUDIO_INFO, SERVICE_DIVISIONS } from '../data/studioData';

export default function Hero() {
  return (
    <section className='border-b border-neutral-900/15 bg-[#F7F6F2]'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:items-end lg:py-20'>
        {/* Main Editorial Column */}
        <div className='lg:col-span-8'>
          <div className='mb-5 inline-flex items-center gap-2 border border-neutral-900/20 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-700'>
            <span className='h-2 w-2 bg-[#D94E1F]' />
            <span>
              {STUDIO_INFO.brandName} — {STUDIO_INFO.studioName}
            </span>
          </div>

          <h1 className='text-4xl font-bold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl'>
            {STUDIO_INFO.tagline}
          </h1>

          <p className='mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg'>
            {STUDIO_INFO.description}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3.5'>
            <a
              href='#divisions'
              className='inline-flex items-center gap-2 border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#D94E1F] hover:border-[#D94E1F]'
            >
              <span>Lihat 4 Divisi Layanan</span>
              <ArrowRight className='h-4 w-4' />
            </a>

            <a
              href='#target-bisnis'
              className='inline-flex items-center gap-2 border border-neutral-900/25 bg-transparent px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-950 hover:bg-neutral-950/5'
            >
              <span>Cek Solusi per Bisnis</span>
            </a>
          </div>
        </div>

        {/* Right Summary Panel */}
        <aside
          id='strategi'
          aria-label='Ringkasan Fokus Studio'
          className='border border-neutral-900/15 bg-white/80 p-5 sm:p-6 lg:col-span-4'
        >
          <div className='flex items-center justify-between border-b border-neutral-900/10 pb-3'>
            <span className='font-mono text-xs uppercase tracking-wider text-neutral-500'>
              Cakupan & Fokus
            </span>
            <span className='font-mono text-xs font-semibold text-[#D94E1F]'>
              {SERVICE_DIVISIONS.length} DIVISI
            </span>
          </div>

          <div className='mt-4 space-y-4 text-sm'>
            <div className='flex items-start gap-3'>
              <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-[#D94E1F]' />
              <div>
                <p className='font-semibold text-neutral-950'>
                  Jangkauan Wilayah
                </p>
                <p className='mt-0.5 text-neutral-600'>
                  Fokus awal di{' '}
                  <strong className='font-medium text-neutral-900'>
                    {STUDIO_INFO.marketStrategy.primaryArea}
                  </strong>
                  , lalu bertahap ke{' '}
                  <strong className='font-medium text-neutral-900'>
                    {STUDIO_INFO.marketStrategy.expansionArea}
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3 border-t border-neutral-900/10 pt-4'>
              <Target className='mt-0.5 h-4 w-4 shrink-0 text-[#D94E1F]' />
              <div>
                <p className='font-semibold text-neutral-950'>
                  Aturan 1 Konten = 1 Solusi
                </p>
                <p className='mt-0.5 text-neutral-600'>
                  {STUDIO_INFO.marketStrategy.rule}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
