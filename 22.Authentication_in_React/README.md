# Summary Authentication in React

Authentication dan Authorization adalah dua konsep penting dalam pengembangan aplikasi web untuk mengamankan akses pengguna.

## Authentication
- **Authentication** adalah proses untuk memastikan identitas pengguna, biasanya dengan login.

## Authorization
- **Authorization** adalah proses untuk menentukan hak akses pengguna berdasarkan perannya.

## Implementasi Authentication di React

Authentication di React dimulai dengan membuat halaman login yang menerima input pengguna seperti email dan password. Menggunakan library seperti Axios, data login ini kemudian dikirimkan ke server API untuk diverifikasi. Jika verifikasi berhasil, server akan mengembalikan *token* (umumnya JWT) sebagai tanda autentikasi berhasil. Token ini disimpan di `localStorage` agar tetap tersedia sepanjang sesi pengguna, memungkinkan pengguna untuk mengakses data atau fitur-fitur khusus tanpa harus login berulang kali. Setiap kali aplikasi melakukan permintaan ke server yang memerlukan autentikasi, token ini disertakan dalam header `Authorization` pada request untuk memastikan bahwa permintaan tersebut berasal dari pengguna yang sudah terautentikasi. Dengan cara ini, Authentication diimplementasikan untuk memungkinkan pengguna masuk dan terhubung dengan aman dalam aplikasi.

## Implementasi Authorization di React

Authorization di React bertujuan untuk memastikan bahwa pengguna yang sudah terautentikasi hanya bisa mengakses halaman atau fitur yang sesuai dengan izin atau peran mereka. Langkah pertama adalah membuat komponen `PrivateRoute` yang berfungsi sebagai middleware untuk membatasi akses pada *route* tertentu. Komponen `PrivateRoute` ini memeriksa keberadaan token di `localStorage` sebelum mengizinkan akses. Jika token ada, pengguna akan diarahkan ke halaman yang dituju. Jika tidak ada, atau jika token tidak valid, pengguna dialihkan ke halaman login. Dengan menggunakan PrivateRoute, aplikasi dapat membatasi akses ke halaman tertentu, seperti dashboard admin atau halaman pengaturan, hanya untuk pengguna yang memiliki izin yang sesuai. Ini memastikan bahwa Authorization di React membatasi akses berdasarkan status autentikasi pengguna, menjaga keamanan, dan hanya memungkinkan pengguna yang berhak untuk mengakses fitur-fitur tertentu.
