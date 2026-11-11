# Personal CV & Academic Score App

## Deskripsi

Aplikasi CV personal dan dashboard akademik untuk demonstrasi UTS Mobile Programming 2. Aplikasi dibuat dengan React Native, Expo, dan TypeScript, menggunakan tema dark futuristic dengan aksen emerald. Konten utama disajikan sebagai satu halaman panjang dengan navigasi bawah yang mengikuti section aktif.

## Tujuan

- Menampilkan profil dan kartu identitas mahasiswa secara responsif.
- Memperlihatkan informasi personal, skills, portfolio, dan ringkasan nilai.
- Mendemonstrasikan pemisahan data lokal dari komponen UI, validasi form, aksesibilitas dasar, dan penanganan data kosong.

## Teknologi

- React Native dan React
- Expo SDK 58
- Expo Router
- TypeScript
- React Native Web
- JSON lokal untuk profil, skills, portfolio, dan data akademik

## Fitur Level 1–10

- **Level 1–4:** profil personal, Student ID Card dengan drag, layout responsif, dan Contact Form dengan state serta validasi.
- **Level 5–6:** data profil dipisahkan dari UI dan disimpan sebagai JSON lokal, lalu diteruskan ke komponen melalui Props.
- **Level 7:** daftar skills dibaca dari JSON dan ditampilkan dinamis.
- **Level 8:** Academic Dashboard menampilkan nilai, grade, learning points, dan progress dari data lokal.
- **Level 9:** Home, About, Skills, Portfolio, My Score, dan Contact tersusun sebagai section pada satu halaman. Navigasi bawah menggulir ke section dan menunjukkan section aktif.
- **Level 10:** validasi email, feedback form, empty state untuk data yang tidak tersedia, aksesibilitas dasar, styling responsif, dan dokumentasi proyek.

## Struktur Folder

```text
.
├── assets/
│   └── foto-profil.jpg
├── src/
│   ├── app/                 # Expo Router layout dan route
│   ├── components/          # Komponen UI reusable
│   ├── data/                # JSON, tipe data, dan penghubung data lokal
│   ├── screens/             # Screen utama satu halaman
│   ├── styles/              # Style per komponen/fitur
│   └── utils/               # Validasi form
├── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

## Arsitektur

- `package.json` memakai `expo-router/entry`; `src/app/_layout.tsx` menyediakan Stack tanpa header, dan `src/app/index.tsx` membuka `HomeScreen`.
- `HomeScreen` menyusun enam section dalam satu `ScrollView`. Referensi layout tiap section dipakai oleh navigasi bawah untuk smooth scroll; posisi scroll memperbarui indikator aktif.
- Komponen visual berada di `src/components`, sedangkan style berada di `src/styles`.
- `src/data/appData.ts` menghubungkan JSON bertipe dengan komponen. Foto menggunakan asset lokal yang direferensikan secara statis.
- `src/utils/contactValidation.ts` mengisolasi validasi field dari UI form.

## Instalasi dan Menjalankan

Pastikan Node.js dan npm tersedia, lalu dari direktori project jalankan:

```bash
npm install
npm run web
```

Untuk pilihan platform lain:

```bash
npm start
npx expo start --android
npx expo start --ios
```

Untuk demonstrasi Expo Web, jalankan `npm run web` dan buka URL yang ditampilkan Expo, biasanya `http://localhost:8081`.

## Pemeriksaan TypeScript

```bash
npx tsc --noEmit
```

Belum ada test runner otomatis yang dikonfigurasi pada `package.json`. Validasi form dapat diuji dengan mengetik nilai yang valid/tidak valid di browser; langkah pengujian manual dijelaskan di bawah.

## Sumber Data

- Profil: `src/data/profile.json`
- Skills: `src/data/skills.json`
- Portfolio: `src/data/portfolio.json`
- Academic Dashboard: `src/data/academic.json`

Data profil, skills, dan portfolio bersifat lokal. Data akademik juga merupakan **dummy/local data**, bukan data LMS, API, atau database. Nilai demonstrasi saat ini: score **89**, grade **A**, learning points **12.375 LP**, Attendance **100%**, Practice **87%**, Quest **95%**, dan Challenge **100%**.

## Contact Form

Form memvalidasi nama, format email, dan pesan sebelum menampilkan feedback. Form belum terhubung ke backend atau API; pesan sukses hanya mengonfirmasi simulasi pemrosesan lokal dan tidak mengirimkan data.

## Pengujian Fitur Utama

1. Jalankan aplikasi di Expo Web dan pastikan Home menampilkan profil, foto, dan Student ID Card.
2. Tarik Student ID Card lalu pastikan kartu kembali ke posisi awal.
3. Scroll halaman dan pastikan indikator navigasi mengikuti section yang sedang dilihat.
4. Tekan setiap item navigasi bawah (Home, About, Skills, Portfolio, My Score, Contact) dan pastikan halaman menggulir ke section tersebut.
5. Periksa Skills dan Portfolio berasal dari file JSON.
6. Di My Score, pastikan nilai 89, grade A, 12.375 LP, dan empat nilai progress tampil.
7. Di Contact, kirim form kosong, email tidak valid, dan form valid. Pastikan error field dan feedback sukses lokal tampil sesuai kondisi.
8. Untuk memeriksa empty state, ubah sementara `skills.json` atau `portfolio.json` menjadi array kosong. Untuk mencoba kondisi akademik tidak tersedia, teruskan `null` sementara ke `AcademicDashboard` di `HomeScreen`. Untuk profil tidak tersedia, gunakan nama file foto yang tidak terdaftar pada `profile.json`. Pulihkan semua data setelah pengujian.
9. Jalankan `npx tsc --noEmit` untuk memeriksa tipe TypeScript.

## Batasan dan Pengembangan Selanjutnya

- Data profil, skills, portfolio, dan akademik dibundel dari file lokal; belum ada sinkronisasi atau penyimpanan jarak jauh.
- Contact Form tidak mengirim pesan ke server.
- Empty state menangani data lokal yang tidak tersedia/kosong. Kesalahan sintaks JSON atau aset yang hilang tetap perlu diperbaiki pada file sumber dan akan dilaporkan oleh proses bundling/pemeriksaan proyek.
- Data dimuat langsung dari JSON lokal secara sinkron, sehingga tidak ada loading jaringan/API yang perlu ditampilkan.
- Pengembangan berikutnya dapat menambahkan backend dan penyimpanan hanya jika kebutuhan serta persetujuan integrasi tersedia.
