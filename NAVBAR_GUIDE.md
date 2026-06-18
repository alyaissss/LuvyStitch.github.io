# 📱 LuvyStitch Navbar Documentation

## Overview

Navbar telah diubah menjadi **komponen yang konsisten** di semua halaman LuvyStitch. Struktur navbar identik di keempat halaman: Landing, Gallery, Patterns, dan Community.

---

## 🏗️ Struktur Navbar

```
┌─────────────────────────────────────────────────┐
│  LuvyStitch  │  Home  Gallery  Community  │  Join  │
└─────────────────────────────────────────────────┘
  ↑             ↑                          ↑
  Logo          Navigation               Button
  (Link)        (3 items)                (Join Modal)
```

### Komponen Navbar:

1. **Logo** (LuvyStitch) - Link ke `index.html`
2. **Navigasi Desktop** - Home, Gallery, Community (hidden di mobile)
3. **Mobile Menu Button** - Hamburger button (hidden di desktop)
4. **Mobile Menu** - Expandable navigation (hidden di desktop)
5. **Join Button** - Trigger modal daftar (visible di semua ukuran)
6. **Join Modal** - Form daftar dengan validasi

---

## 📂 File Structure

```
/outputs/
├── index.html          # Halaman Landing
├── gallery.html        # Halaman Gallery
├── patterns.html       # Halaman Patterns Library
├── community.html      # Halaman Community
├── navbar.html         # Komponen navbar standalone (reference)
└── NAVBAR_GUIDE.md     # File ini
```

---

## ✨ Features

### Desktop View

- Logo kiri yang dapat diklik
- Navigasi 3 item di tengah (Home, Gallery, Community)
- Join button di kanan

### Mobile View

- Logo kiri
- Hamburger menu (3 lines)
- Join button di kanan
- Expandable mobile menu dengan smooth animation

### Active Link Indication

- Link aktif ditandai dengan:
  - Warna text berubah ke **primary color** (#78555e)
  - Bold font weight
  - Border bottom (di desktop)

### Join Modal Features

- Form input: Email & Full Name
- Validasi required field
- Smooth open/close animation
- Close button dan backdrop click support
- Form reset setelah submit

---

## 🎯 Cara Menggunakan

### 1. Di Halaman Baru

Copy-paste navbar HTML dari salah satu halaman yang ada:

```html
<!-- NAVBAR COMPONENT -->
<header
  id="luvystitch-navbar"
  class="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md shadow-sm"
>
  <!-- ... navbar content ... -->
</header>

<!-- JOIN MODAL -->
<div
  id="join-modal"
  class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
>
  <!-- ... modal content ... -->
</div>

<script>
  // ... JavaScript code ... (lihat di bawah)
</script>
```

### 2. JavaScript yang Diperlukan

Semua JavaScript sudah included di setiap halaman. Fitur:

- **Mobile Menu Toggle**: Click hamburger button
- **Join Modal**: Click join button untuk buka, click close atau backdrop untuk tutup
- **Form Submission**: Alert ketika form dikirim, reset form, tutup modal
- **Active Nav Link**: Automatic highlight current page

---

## 🎨 Styling

### Color Variables (Tailwind Config)

Semua warna sudah didefinisikan di dalam `<script id="tailwind-config">`:

```javascript
"primary": "#78555e",
"primary-container": "#ffd1dc",
"on-surface": "#1e1b18",
"on-surface-variant": "#4f4446",
"surface": "#fff8f5",
// ... dan banyak lagi
```

### Classes yang Digunakan

- `sticky` - Navbar melekat di atas
- `backdrop-blur-md` - Blur effect di belakang navbar
- `transition-all` - Smooth animation
- `rounded-full` - Border radius
- `shadow-sm` - Subtle shadow

---

## 📱 Responsive Breakpoints

- **Mobile** (<768px): Hamburger menu, stacked nav
- **Tablet** (768px-1024px): Mulai show desktop nav
- **Desktop** (>1024px): Full horizontal nav dengan 3 items

---

## 🔧 Customization Guide

### Mengubah Logo

```html
<a href="index.html" class="font-headline-lg text-headline-lg text-primary">
  LuvyStitch
  <!-- Ubah text di sini -->
</a>
```

### Menambah Menu Item

Di `#desktop-nav`:

```html
<nav id="desktop-nav" class="hidden md:flex items-center gap-gutter">
  <a href="index.html">Home</a>
  <a href="gallery.html">Gallery</a>
  <a href="community.html">Community</a>
  <a href="workshop.html">Workshop</a>
  <!-- Tambah di sini -->
</nav>
```

Jangan lupa di `#mobile-nav` juga:

```html
<nav id="mobile-nav" class="hidden md:hidden">
  <div class="max-w-container-max mx-auto px-margin py-4 flex flex-col gap-2">
    <!-- Copy semua link dari desktop-nav di sini -->
  </div>
</nav>
```

### Mengubah Warna Join Button

```html
<button class="bg-primary-container text-on-primary-container ...">Join</button>
```

Ubah `primary-container` ke color lain dari Tailwind config.

---

## 🚀 Best Practices

1. **Konsistensi** - Jangan ubah struktur navbar di halaman berbeda
2. **Links** - Selalu gunakan path relatif (`index.html`, bukan `/index.html`)
3. **Mobile Testing** - Test di device mobile untuk memastikan hamburger bekerja
4. **Accessibility** - Semua buttons punya label yang jelas
5. **Performance** - Navbar sudah optimized dengan sticky positioning

---

## 🐛 Troubleshooting

### Hamburger menu tidak berfungsi

- Pastikan element `#mobile-menu-btn`, `#mobile-nav` ada
- Check browser console untuk error JavaScript

### Join modal tidak muncul

- Pastikan `id="join-btn"`, `id="join-modal"` ada
- Cek apakah modal punya class `hidden` (default)

### Link aktif tidak highlight

- Pastikan halaman HTML named dengan benar: `index.html`, `gallery.html`, dll
- Check console apakah `updateActiveNav()` jalan

### Navbar padding/spacing aneh

- Gunakan `px-margin` dan `gap-gutter` dari Tailwind config
- Jangan ubah spacing secara manual

---

## 📋 Checklist untuk Halaman Baru

- [ ] Navbar HTML di copy dengan benar
- [ ] Join modal JavaScript di copy
- [ ] File HTML di name dengan benar (lowercase, no spaces)
- [ ] Links di update ke halaman yang sesuai
- [ ] Test di mobile dan desktop
- [ ] Join button berfungsi
- [ ] Active nav link highlight bekerja

---

## 💡 Notes untuk Tim

- **Semua 4 halaman punya navbar identik** - Untuk consistency
- **Mobile-first design** - Tested di semua ukuran layar
- **No external JS libraries** - Pure JavaScript, lightweight
- **Tailwind CSS** - Semua styling via utility classes
- **Accessibility** - Semantic HTML, proper labels

---

## 📞 Support

Jika ada issue atau pertanyaan tentang navbar, silakan:

1. Cek dokumentasi ini
2. Cek browser console untuk error
3. Cek bahwa semua id dan class match

---

**Last Updated:** Juni 2024
**Version:** 1.0 (Consistent Navbar)
