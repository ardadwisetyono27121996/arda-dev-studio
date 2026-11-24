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
      className='border-b border-neutral-900/15 bg-white/60 py-16 sm:py-20'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Header */}
        <div className='flex flex-col justify-between gap-4 border-b border-neutral-900/15 pb-8 lg:flex-row lg:items-end'>
          <div>
            <p className='font-mono text-xs uppercase tracking-widest text-[#D94E1F]'>
              Target Pasar Lokal → Jawa Timur
            </p>
            <h2
              id='target-bisnis-heading'
              className='mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'
            >
              Masalah Bisnis & Solusi Spesifik
            </h2>
          </div>

          <p className='max-w-xl text-sm leading-relaxed text-neutral-600'>
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

        {/* Sector Filter Pills */}
        <div className='mt-8 flex flex-wrap items-center gap-2'>
          <span className='mr-1 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-500'>
            <Filter className='h-3.5 w-3.5' />
            <span>Sektor:</span>
          </span>

          <button
            type='button'
            onClick={() => setActiveSector('ALL')}
            className={`border px-3 py-1.5 text-xs font-semibold transition-colors ${
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
                className={`border px-3 py-1.5 text-xs font-semibold transition-colors ${
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

        {/* Matrix Table */}
        <div className='mt-6 overflow-x-auto border border-neutral-900/15 bg-white'>
          <table className='w-full min-w-[680px] border-collapse text-left'>
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
