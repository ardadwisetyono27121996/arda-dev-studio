import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DivisionsSection from './components/DivisionsSection';
import LocalBusinessMatrix from './components/LocalBusinessMatrix';
import ContactBrief from './components/ContactBrief';
import {
  STUDIO_INFO,
  type LocalBusinessTarget,
  type ServiceDivision,
} from './data/studioData';

export default function App() {
  const [selectedDivision, setSelectedDivision] =
    useState<ServiceDivision | null>(null);
  const [selectedTarget, setSelectedTarget] =
    useState<LocalBusinessTarget | null>(null);

  const handleSelectDivision = (division: ServiceDivision) => {
    setSelectedDivision(division);
    setSelectedTarget(null);
  };

  const handleSelectTarget = (target: LocalBusinessTarget) => {
    setSelectedTarget(target);
    setSelectedDivision(null);
  };

  return (
    <div className='min-h-screen bg-[#F7F6F2] text-neutral-950'>
      <Navbar />

      <main>
        <Hero />

        <DivisionsSection
          selectedDivisionId={selectedDivision?.id}
          onSelectDivision={handleSelectDivision}
        />

        <LocalBusinessMatrix
          selectedTargetId={selectedTarget?.id}
          onSelectTarget={handleSelectTarget}
        />

        <ContactBrief
          selectedDivision={selectedDivision}
          selectedTarget={selectedTarget}
        />
      </main>

      <footer className='border-t border-neutral-900/15 bg-white/70 py-8'>
        <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-neutral-600 sm:flex-row sm:items-center sm:px-6'>
          <div>
            <span className='font-bold text-neutral-950'>
              {STUDIO_INFO.brandName}
            </span>{' '}
            — {STUDIO_INFO.studioName}
          </div>
          <div className='font-mono text-[11px] text-neutral-500'>
            Fokus awal: {STUDIO_INFO.marketStrategy.primaryArea} →{' '}
            {STUDIO_INFO.marketStrategy.expansionArea}
          </div>
        </div>
      </footer>
    </div>
  );
}
