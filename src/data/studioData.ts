export interface ServiceDivision {
  id: string;
  code: string;
  title: string;
  summary: string;
  deliverables: string[];
  singleOfferPitch: string;
}

export interface LocalBusinessTarget {
  id: string;
  sector: string;
  problem: string;
  solution: string;
  divisionId: string;
}

export const STUDIO_INFO = {
  brandName: 'Arda.dev',
  studioName: 'Digital Solutions Studio',
  tagline: 'We Build Digital Solutions for Growing Businesses.',
  description:
    'Membantu bisnis berkembang melalui website, sistem digital, pengolahan data, dan otomatisasi pekerjaan.',
  marketStrategy: {
    primaryArea: 'Trenggalek dan wilayah sekitarnya',
    expansionArea: 'Kota-kota lain di Jawa Timur',
    rule: 'Setiap konten atau penawaran menjual satu solusi spesifik agar pesan tajam dan mudah dipahami klien.',
  },
  whatsappNumber: '6285189371885', // Ganti dengan nomor WhatsApp aktif Anda
};

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'web-development',
    code: '01',
    title: 'Web Development',
    summary:
      'Membangun kehadiran digital yang jelas, cepat, dan terstruktur untuk menampilkan profil, layanan, maupun katalog produk.',
    deliverables: [
      'Company profile',
      'Landing page',
      'Website katalog produk',
      'Website bisnis dan UMKM',
      'Personal portfolio',
    ],
    singleOfferPitch:
      'Website katalog atau profil usaha yang rapi supaya calon pelanggan mudah cek info tanpa chat berulang.',
  },
  {
    id: 'digital-systems',
    code: '02',
    title: 'Digital Systems',
    summary:
      'Merancang alur kerja berbasis web untuk pencatatan, pemantauan operasional, dan laporan yang lebih tertib.',
    deliverables: [
      'Dashboard bisnis',
      'Sistem manajemen sederhana',
      'Aplikasi pencatatan',
      'Sistem laporan berbasis web',
    ],
    singleOfferPitch:
      'Dashboard dan sistem pencatatan berbasis web agar data harian tim tersimpan terpusat dan mudah dipantau.',
  },
  {
    id: 'data-automation',
    code: '03',
    title: 'Data & Automation',
    summary:
      'Mengurangi pekerjaan berulang pada spreadsheet dan rekap data agar proses lebih cepat serta minim salah hitung.',
    deliverables: [
      'Excel automation',
      'Data cleaning',
      'Pengolahan data',
      'Spreadsheet solutions',
      'Laporan otomatis',
    ],
    singleOfferPitch:
      'Otomatisasi rekap data dan spreadsheet untuk memangkas waktu input manual serta merapikan laporan rutin.',
  },
  {
    id: 'business-documentation',
    code: '04',
    title: 'Business Documentation',
    summary:
      'Menyusun dokumen operasional, rekapitulasi, dan materi presentasi yang bersih serta siap pakai untuk kebutuhan bisnis.',
    deliverables: [
      'Desain laporan',
      'Rekapitulasi data',
      'Dokumen administrasi',
      'Presentasi bisnis',
    ],
    singleOfferPitch:
      'Dokumen administrasi, rekapitulasi, dan presentasi bisnis yang terstruktur untuk mendukung keputusan dan pelaporan.',
  },
];

export const LOCAL_BUSINESS_TARGETS: LocalBusinessTarget[] = [
  {
    id: 'laundry',
    sector: 'Laundry',
    problem: 'Informasi harga tidak terstruktur',
    solution: 'Website katalog',
    divisionId: 'web-development',
  },
  {
    id: 'restoran-kafe',
    sector: 'Restoran/Kafe',
    problem: 'Menu sulit ditemukan',
    solution: 'Website menu',
    divisionId: 'web-development',
  },
  {
    id: 'toko-lokal',
    sector: 'Toko lokal',
    problem: 'Katalog produk manual',
    solution: 'Katalog digital',
    divisionId: 'web-development',
  },
  {
    id: 'distributor',
    sector: 'Distributor',
    problem: 'Rekap penjualan lama',
    solution: 'Excel automation',
    divisionId: 'data-automation',
  },
  {
    id: 'kantor-perusahaan',
    sector: 'Kantor/perusahaan',
    problem: 'Laporan berantakan',
    solution: 'Dashboard & data processing',
    divisionId: 'digital-systems',
  },
  {
    id: 'lembaga-pendidikan',
    sector: 'Lembaga pendidikan',
    problem: 'Administrasi manual',
    solution: 'Spreadsheet system',
    divisionId: 'data-automation',
  },
];
