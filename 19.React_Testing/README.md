# Summary React Testing

## 1. Apa itu Testing
- testing merupakan prosess memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

## 2. Manfaat testing
- ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test). Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. saat kita mengubah bagian tersebut, dan ada bagian lain menjadi broken kita akan segera mengetahuinya.
- mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.


## 3. Kategori Testing

Secara umum, cara mengetes di React terbagi menjadi dua kategori:

1. **Rendering component trees** di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.

2. **Menjalankan aplikasi lengkap** di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".
