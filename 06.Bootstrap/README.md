# Summary Bootstrap

## 1. Apa Itu Bootstrap?
Bootstrap adalah library **CSS** yang dirancang untuk membangun website yang responsive dan mobile-first dengan cepat. Bootstrap menyediakan banyak **class utility** dan **komponen siap pakai** seperti tombol, form, grid system, dan lain-lain, yang mempermudah proses pengembangan.

Akan tetapi, pada materi bootstrap ini pada pengerjaan tugas saya menggunakan library CSS yang lain yaitu Tailwind. Hal tersebut dikarenakan saya tidak terlalu terbiasa menggunakan Bootstrap. Selama saya belajar Tailwind, saya menyadari bahwa Bootstrap memiliki pendekatan yang mirip, meskipun ada beberapa perbedaan penting dalam cara keduanya diimplementasikan. Bootstrap lebih bersifat component siap pakai artinya untuk kustomisasi pada bootstrap sedikit lebih susah dibandingkan dengan Tailwind yang memberi lebih banyak kontrol dalam hal kustomisasi.

## 2. Sistem Grid
### Bootstrap:
- Menggunakan **sistem grid berbasis 12 kolom** dengan class seperti `col-md-4` yang mengatur layout responsif secara otomatis. 
- Memiliki breakpoints bawaan seperti `sm`, `md`, `lg`, `xl`, yang ditentukan di class komponen.

### Tailwind:
- Tidak memiliki sistem grid bawaan seperti Bootstrap, tetapi menggunakan utility classes seperti `grid`, `grid-cols-3`, dll. untuk menentukan grid.
- Lebih fleksibel, memungkinkan pengembang untuk mengatur grid sesuai kebutuhan mereka tanpa terikat pada aturan grid tertentu.

## 3. Responsivitas
### Bootstrap:
- **Mobile-first** dengan breakpoints bawaan untuk ukuran layar berbeda, seperti `col-md-4` untuk medium screens.
- Mengatur responsivitas melalui class berbasis ukuran layar, yang mempermudah dalam membuat layout responsif tanpa banyak modifikasi.

### Tailwind:
- Responsivitas diatur dengan class utility seperti `md:w-1/2` atau `lg:text-center`, memungkinkan pengembang untuk mengatur style yang berbeda pada setiap breakpoint dengan lebih terperinci.
- Fleksibel dalam hal styling untuk berbagai ukuran layar.