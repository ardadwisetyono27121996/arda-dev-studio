import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Filter } from 'lucide-react';
import {
  LOCAL_BUSINESS_TARGETS,
  SERVICE_DIVISIONS,
  STUDIO_INFO,
  type LocalBusinessTarget,
} from '../data/studioData';

interface LocalBusinessMatrixProps {
  selectedTargetId?: string;
  onSelectTarget?: (target: LocalBusinessTarget) => void;
}

export default function LocalBusinessMatrix({
  selectedTargetId,
  onSelectTarget,
}: LocalBusinessMatrixProps) {
  const [activeSector, setActiveSector] = useState<string>('ALL');

  const filteredTargets =
    activeSector === 'ALL'
      ? LOCAL_BUSINESS_TARGETS
      : LOCAL_BUSINESS_TARGETS.filter((item) => item.id === activeSector);

  const getDivisionTitle = (divisionId: string) =>
    SERVICE_DIVISIONS.find((div) => div.id === divisionId)?.title ??
    'Layanan Terkait';

  return (
    <section
      id='target-bisnis'
      aria-labelledby='target-bisnis-heading'
      className='border-b border-neutral-900/15 bg-white/60 py-12 sm:py-16 lg:py-20'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='flex flex-col justify-between gap-4 border-b border-neutral-900/15 pb-6 sm:pb-8 lg:flex-row lg:items-end'>
          <div>
            <p className='font-mono text-xs uppercase tracking-widest text-[#D94E1F]'>
              Target Pasar Lokal → Jawa Timur
            </p>
            <h2
              id='target-bisnis-heading'
              className='mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl'
            >
              Masalah Bisnis & Solusi Spesifik
            </h2>
          </div>

          <p className='max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-sm'>
            Fokus awal menyasar bisnis di{' '}
            <strong className='font-semibold text-neutral-900'>
              {STUDIO_INFO.marketStrategy.primaryArea}
            </strong>
            , lalu memperluas jangkauan ke{' '}
            <strong className='font-semibold text-neutral-900'>
              {STUDIO_INFO.marketStrategy.expansionArea}
            </strong>
            . Setiap baris menargetkan satu masalah dan satu solusi utama.
          </p>
        </div>

        {/* Sector Filter Pills (nyaman di-scroll/tap di HP & tablet) */}
        <div className='mt-6 flex flex-wrap items-center gap-2 sm:mt-8'>
          <span className='mr-1 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-500'>
            <Filter className='h-3.5 w-3.5' />
            <span>Sektor:</span>
          </span>

          <button
            type='button'
            onClick={() => setActiveSector('ALL')}
            className={`min-h-[38px] border px-3 py-1.5 text-xs font-semibold transition-colors sm:min-h-0 ${
              activeSector === 'ALL'
                ? 'border-neutral-950 bg-neutral-950 text-[#F7F6F2]'
                : 'border-neutral-900/20 bg-[#F7F6F2] text-neutral-800 hover:border-neutral-950'
            }`}
          >
            Semua ({LOCAL_BUSINESS_TARGETS.length})
          </button>

          {LOCAL_BUSINESS_TARGETS.map((target) => {
            const isActive = activeSector === target.id;
            return (
              <button
                key={target.id}
                type='button'
                onClick={() => setActiveSector(target.id)}
                className={`min-h-[38px] border px-3 py-1.5 text-xs font-semibold transition-colors sm:min-h-0 ${
                  isActive
                    ? 'border-neutral-950 bg-neutral-950 text-[#F7F6F2]'
                    : 'border-neutral-900/20 bg-[#F7F6F2] text-neutral-800 hover:border-neutral-950'
                }`}
              >
                {target.sector}
              </button>
            );
          })}
        </div>

        {/* Mobile View (< md): Stacked Cards agar tidak ada horizontal scroll di HP */}
        <div className='mt-6 grid grid-cols-1 gap-4 md:hidden'>
          {filteredTargets.map((item) => {
            const isSelected = selectedTargetId === item.id;

            return (
              <article
                key={item.id}
                className={`border p-4 transition-colors ${
                  isSelected
                    ? 'border-[#D94E1F] bg-white'
                    : 'border-neutral-900/15 bg-white'
                }`}
              >
                <div className='flex items-start justify-between gap-2 border-b border-neutral-900/10 pb-3'>
                  <div>
                    <h3 className='text-base font-bold text-neutral-950'>
                      {item.sector}
                    </h3>
                    <p className='mt-0.5 font-mono text-[11px] text-neutral-500'>
                      {getDivisionTitle(item.divisionId)}
                    </p>
                  </div>
                </div>

                <dl className='mt-3 space-y-2.5 text-sm'>
                  <div>
                    <dt className='font-mono text-[11px] uppercase tracking-wider text-neutral-500'>
                      Masalah
                    </dt>
                    <dd className='mt-0.5 text-neutral-700'>{item.problem}</dd>
                  </div>

                  <div>
                    <dt className='font-mono text-[11px] uppercase tracking-wider text-neutral-500'>
                      Solusi Kita
                    </dt>
                    <dd className='mt-0.5 inline-flex items-center gap-1.5 font-semibold text-neutral-950'>
                      <ArrowRight className='h-3.5 w-3.5 shrink-0 text-[#D94E1F]' />
                      <span>{item.solution}</span>
                    </dd>
                  </div>
                </dl>

                <a
                  href='#konsultasi'
                  onClick={() => onSelectTarget?.(item)}
                  className='mt-4 flex min-h-[42px] w-full items-center justify-center gap-1.5 border border-neutral-950 bg-[#F7F6F2] px-3 py-2 text-xs font-semibold text-neutral-950 transition-colors active:bg-[#D94E1F] active:text-white'
                >
                  <span>Gunakan Solusi Ini</span>
                  <ArrowUpRight className='h-4 w-4' />
                </a>
              </article>
            );
          })}
        </div>

        {/* Tablet & Desktop View (>= md): Clean Table */}
        <div className='mt-6 hidden overflow-x-auto border border-neutral-900/15 bg-white md:block'>
          <table className='w-full border-collapse text-left'>
            <thead>
              <tr className='border-b border-neutral-900/15 bg-[#F7F6F2] font-mono text-xs uppercase tracking-wider text-neutral-600'>
                <th className='px-5 py-3.5'>Target Bisnis</th>
                <th className='px-5 py-3.5'>Masalah Umum</th>
                <th className='px-5 py-3.5'>Solusi Arda.dev</th>
                <th className='px-5 py-3.5 text-right'>Aksi</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-neutral-900/10 text-sm'>
              {filteredTargets.map((item) => {
                const isSelected = selectedTargetId === item.id;

                return (
                  <tr
                    key={item.id}
                    className={`transition-colors ${
                      isSelected ? 'bg-[#D94E1F]/5' : 'hover:bg-[#F7F6F2]/70'
                    }`}
                  >
                    <td className='px-5 py-4 align-top'>
                      <div className='font-bold text-neutral-950'>
                        {item.sector}
                      </div>
                      <div className='mt-0.5 font-mono text-[11px] text-neutral-500'>
                        Divisi: {getDivisionTitle(item.divisionId)}
                      </div>
                    </td>

                    <td className='px-5 py-4 align-top text-neutral-700'>
                      {item.problem}
                    </td>

                    <td className='px-5 py-4 align-top'>
                      <span className='inline-flex items-center gap-1.5 font-semibold text-neutral-950'>
                        <ArrowRight className='h-3.5 w-3.5 text-[#D94E1F]' />
                        <span>{item.solution}</span>
                      </span>
                    </td>

                    <td className='px-5 py-4 text-right align-top'>
                      <a
                        href='#konsultasi'
                        onClick={() => onSelectTarget?.(item)}
                        className='inline-flex items-center gap-1 border border-neutral-900/20 bg-[#F7F6F2] px-3 py-1.5 text-xs font-semibold text-neutral-900 transition-colors hover:border-[#D94E1F] hover:bg-[#D94E1F] hover:text-white'
                      >
                        <span>Gunakan Solusi</span>
                        <ArrowUpRight className='h-3.5 w-3.5' />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
