import { Check, ArrowUpRight } from 'lucide-react';
import { SERVICE_DIVISIONS, type ServiceDivision } from '../data/studioData';

interface DivisionsSectionProps {
  selectedDivisionId?: string;
  onSelectDivision?: (division: ServiceDivision) => void;
}

export default function DivisionsSection({
  selectedDivisionId,
  onSelectDivision,
}: DivisionsSectionProps) {
  return (
    <section
      id='divisions'
      aria-labelledby='divisions-heading'
      className='border-b border-neutral-900/15 bg-[#F7F6F2] py-16 sm:py-20'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Section Header */}
        <div className='flex flex-col justify-between gap-4 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end'>
          <div>
            <p className='font-mono text-xs uppercase tracking-widest text-[#D94E1F]'>
              Struktur Layanan
            </p>
            <h2
              id='divisions-heading'
              className='mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'
            >
              Empat Divisi Solusi Digital
            </h2>
          </div>
          <p className='max-w-md text-sm leading-relaxed text-neutral-600'>
            Layanan dikelompokkan ke dalam empat divisi agar jelas dan
            terarah—namun setiap penawaran difokuskan pada satu solusi spesifik
            sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* 4 Divisions Grid */}
        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {SERVICE_DIVISIONS.map((division) => {
            const isSelected = selectedDivisionId === division.id;

            return (
              <article
                key={division.id}
                className={`flex flex-col justify-between border p-6 transition-colors sm:p-7 ${
                  isSelected
                    ? 'border-[#D94E1F] bg-white'
                    : 'border-neutral-900/15 bg-white/75 hover:border-neutral-900/40 hover:bg-white'
                }`}
              >
                <div>
                  {/* Code & Title */}
                  <div className='flex items-baseline justify-between gap-4 border-b border-neutral-900/10 pb-4'>
                    <h3 className='text-xl font-bold tracking-tight text-neutral-950'>
                      {division.title}
                    </h3>
                    <span className='font-mono text-sm font-semibold text-[#D94E1F]'>
                      /{division.code}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className='mt-4 text-sm leading-relaxed text-neutral-700'>
                    {division.summary}
                  </p>

                  {/* Deliverables */}
                  <ul className='mt-5 space-y-2'>
                    {division.deliverables.map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-2.5 text-sm text-neutral-800'
                      >
                        <Check className='mt-0.5 h-4 w-4 shrink-0 text-[#D94E1F]' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Single Offer Pitch & Action */}
                <div className='mt-7 border-t border-neutral-900/10 pt-5'>
                  <p className='text-xs leading-relaxed text-neutral-600'>
                    <span className='font-mono font-semibold uppercase text-neutral-900'>
                      Fokus Solusi:{' '}
                    </span>
                    {division.singleOfferPitch}
                  </p>

                  <a
                    href='#konsultasi'
                    onClick={() => onSelectDivision?.(division)}
                    className='mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 transition-colors hover:text-[#D94E1F]'
                  >
                    <span>Pilih Divisi {division.title}</span>
                    <ArrowUpRight className='h-3.5 w-3.5' />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
