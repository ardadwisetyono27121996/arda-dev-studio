import { useEffect, useState } from 'react';
import { Send, Copy, Check } from 'lucide-react';
import {
  LOCAL_BUSINESS_TARGETS,
  SERVICE_DIVISIONS,
  STUDIO_INFO,
  type LocalBusinessTarget,
  type ServiceDivision,
} from '../data/studioData';

interface ContactBriefProps {
  selectedDivision: ServiceDivision | null;
  selectedTarget: LocalBusinessTarget | null;
}

export default function ContactBrief({
  selectedDivision,
  selectedTarget,
}: ContactBriefProps) {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Trenggalek');
  const [divisionId, setDivisionId] = useState(SERVICE_DIVISIONS[0].id);
  const [selectedSolution, setSelectedSolution] = useState(
    LOCAL_BUSINESS_TARGETS[0].solution
  );
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sinkronkan pilihan saat pengguna klik dari DivisionsSection
  useEffect(() => {
    if (selectedDivision) {
      setDivisionId(selectedDivision.id);
      setSelectedSolution(selectedDivision.deliverables[0]);
    }
  }, [selectedDivision]);

  // Sinkronkan pilihan saat pengguna klik dari LocalBusinessMatrix
  useEffect(() => {
    if (selectedTarget) {
      setDivisionId(selectedTarget.divisionId);
      setSelectedSolution(selectedTarget.solution);
      setNotes(
        `Sektor: ${selectedTarget.sector} — Masalah utama: ${selectedTarget.problem}.`
      );
    }
  }, [selectedTarget]);

  const activeDivision =
    SERVICE_DIVISIONS.find((d) => d.id === divisionId) ?? SERVICE_DIVISIONS[0];

  const generatedMessage = [
    `Halo ${STUDIO_INFO.brandName}, saya ingin konsultasi satu solusi spesifik:`,
    ``,
    `• Nama Usaha/Instansi: ${businessName.trim() || '-'}`,
    `• Kota/Wilayah: ${city.trim() || 'Trenggalek'}`,
    `• Divisi: ${activeDivision.title}`,
    `• Solusi Utama: ${selectedSolution}`,
    notes.trim() ? `• Catatan Kebutuhan: ${notes.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id='konsultasi'
      aria-labelledby='konsultasi-heading'
      className='bg-[#F7F6F2] py-16 sm:py-20'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          {/* Left Form Column */}
          <div className='lg:col-span-7'>
            <p className='font-mono text-xs uppercase tracking-widest text-[#D94E1F]'>
              Single-Solution Brief
            </p>
            <h2
              id='konsultasi-heading'
              className='mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'
            >
              Mulai dari Satu Solusi yang Paling Dibutuhkan
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-neutral-600'>
              Pilih divisi dan satu solusi utama yang ingin Anda terapkan
              terlebih dahulu agar pengerjaan lebih cepat, terukur, dan tepat
              sasaran.
            </p>

            <div className='mt-8 space-y-5 border border-neutral-900/15 bg-white p-6'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='business-name'
                    className='block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700'
                  >
                    Nama Bisnis / Instansi
                  </label>
                  <input
                    id='business-name'
                    type='text'
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder='Contoh: Kedai Kopi Surodakan'
                    className='mt-1.5 w-full border border-neutral-900/20 bg-[#F7F6F2]/60 px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:outline-none'
                  />
                </div>

                <div>
                  <label
                    htmlFor='business-city'
                    className='block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700'
                  >
                    Kota / Wilayah
                  </label>
                  <input
                    id='business-city'
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Trenggalek / Jawa Timur'
                    className='mt-1.5 w-full border border-neutral-900/20 bg-[#F7F6F2]/60 px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:outline-none'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='division-select'
                    className='block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700'
                  >
                    Divisi Layanan
                  </label>
                  <select
                    id='division-select'
                    value={divisionId}
                    onChange={(e) => {
                      const nextId = e.target.value;
                      setDivisionId(nextId);
                      const found = SERVICE_DIVISIONS.find(
                        (d) => d.id === nextId
                      );
                      if (found) {
                        setSelectedSolution(found.deliverables[0]);
                      }
                    }}
                    className='mt-1.5 w-full border border-neutral-900/20 bg-[#F7F6F2]/60 px-3.5 py-2.5 text-sm text-neutral-950 focus:border-neutral-950 focus:bg-white focus:outline-none'
                  >
                    {SERVICE_DIVISIONS.map((div) => (
                      <option key={div.id} value={div.id}>
                        {div.code} — {div.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='solution-select'
                    className='block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700'
                  >
                    Satu Solusi Spesifik
                  </label>
                  <select
                    id='solution-select'
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                    className='mt-1.5 w-full border border-neutral-900/20 bg-[#F7F6F2]/60 px-3.5 py-2.5 text-sm text-neutral-950 focus:border-neutral-950 focus:bg-white focus:outline-none'
                  >
                    {/* Pastikan solusi dari matriks lokal tetap tersedia jika dipilih */}
                    {!activeDivision.deliverables.includes(
                      selectedSolution
                    ) && (
                      <option value={selectedSolution}>
                        {selectedSolution}
                      </option>
                    )}
                    {activeDivision.deliverables.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor='brief-notes'
                  className='block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700'
                >
                  Detail Masalah / Target (Opsional)
                </label>
                <textarea
                  id='brief-notes'
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder='Ceritakan singkat kendala saat ini (misal: rekap penjualan harian masih manual di buku/Excel terpisah)...'
                  className='mt-1.5 w-full border border-neutral-900/20 bg-[#F7F6F2]/60 px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:outline-none'
                />
              </div>
            </div>
          </div>

          {/* Right Preview & Send Column */}
          <div className='flex flex-col justify-between border border-neutral-950 bg-neutral-950 p-6 text-[#F7F6F2] sm:p-7 lg:col-span-5'>
            <div>
              <div className='flex items-center justify-between border-b border-white/15 pb-3.5'>
                <span className='font-mono text-xs uppercase tracking-wider text-neutral-400'>
                  Pratinjau Pesan Brief
                </span>
                <span className='font-mono text-xs text-[#D94E1F]'>
                  1 SOLUSI FOKUS
                </span>
              </div>

              <pre className='mt-5 whitespace-pre-wrap font-mono text-xs leading-relaxed text-neutral-200'>
                {generatedMessage}
              </pre>
            </div>

            <div className='mt-8 space-y-3 border-t border-white/15 pt-5'>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex w-full items-center justify-center gap-2 bg-[#D94E1F] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b83f16]'
              >
                <Send className='h-4 w-4' />
                <span>Kirim Brief via WhatsApp</span>
              </a>

              <button
                type='button'
                onClick={handleCopyBrief}
                className='flex w-full items-center justify-center gap-2 border border-white/25 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-white hover:text-white'
              >
                {copied ? (
                  <>
                    <Check className='h-4 w-4 text-emerald-400' />
                    <span>Brief Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className='h-4 w-4' />
                    <span>Salin Teks Brief</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
