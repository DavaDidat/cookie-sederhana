# Day 10 – Cookie Consent Popup

Proyek ini merupakan bagian dari roadmap belajar frontend (Day 10).  
Tujuan dari proyek ini adalah membuat **popup persetujuan cookie** sederhana menggunakan **HTML, CSS, dan JavaScript**, serta menyimpan keputusan pengguna agar popup tidak muncul kembali pada kunjungan berikutnya.

---

## 🎯 Tujuan Proyek

- Melatih manipulasi DOM menggunakan JavaScript
- Memahami konsep event handling
- Menyimpan state pengguna menggunakan `localStorage`
- Mengontrol tampilan UI berdasarkan kondisi tertentu

---

## 🧠 Konsep Utama

Popup cookie akan muncul **saat pengguna pertama kali membuka website**.  
Ketika pengguna menekan tombol **"Got it!"**, maka:

1. Persetujuan pengguna disimpan di `localStorage`
2. Popup akan disembunyikan
3. Pada kunjungan berikutnya, popup **tidak akan muncul lagi**

Popup hanya muncul jika data persetujuan **belum ditemukan** di browser.

---

## 🛠️ Teknologi yang Digunakan

- HTML5  
- CSS3  
- JavaScript (DOM Manipulation & localStorage)

---

## 🔁 Alur Kerja Aplikasi

1. Halaman website dibuka
2. JavaScript mengecek apakah data persetujuan sudah tersimpan di `localStorage`
3. Jika belum ada, popup cookie akan ditampilkan
4. Pengguna menekan tombol "Got it!"
5. Data persetujuan disimpan di `localStorage`
6. Popup disembunyikan dan tidak muncul lagi pada refresh atau kunjungan ulang

---

## 📦 Penyimpanan Data

Proyek ini menggunakan `localStorage` untuk menyimpan persetujuan pengguna dengan key:


Data ini tersimpan di browser dan hanya berlaku untuk:
- browser yang sama
- device yang sama
- domain yang sama

---

## ⚠️ Catatan

Popup cookie ini dibuat untuk **latihan frontend** dan **bukan untuk keperluan legal atau tracking pengguna**.  
Implementasi ini berfokus pada pemahaman konsep dasar, bukan kepatuhan terhadap regulasi seperti GDPR.

---

## 🚀 Pengembangan Selanjutnya (Opsional)

- Menambahkan animasi (fade / slide)
- Menambahkan tombol "Reject"
- Meningkatkan aksesibilitas (keyboard & screen reader)
- Menggunakan cookie asli sebagai pengganti `localStorage`

---

## 📚 Author

Dibuat sebagai bagian dari roadmap belajar frontend – Day 10.

---

## URL Jika ingin melihat
https://davadidat.github.io/cookie-sederhana/

---

## URL roadmap.sh
https://roadmap.sh/projects/cookie-consent
