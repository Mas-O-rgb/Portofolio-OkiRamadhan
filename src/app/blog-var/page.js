import Image from "next/image";

export default function VarBlogPage() {
  return (
    <main className="min-h-screen bg-[#090611] text-purple-50">
      <section className="border-b border-purple-400/10">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-12 md:py-20">
          <a
            href="/"
            className="inline-flex rounded-full border border-purple-400/30 px-5 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10"
          >
            ← Kembali ke Beranda
          </a>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              03 / APP
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Augmented Reality untuk Visualisasi Tata Surya
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-100/65">
              Pemanfaatan Augmented Reality sebagai media pembelajaran interaktif
              untuk membantu mengenal susunan dan karakteristik tata surya.
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-5xl px-4 py-12 md:px-12 md:py-20">
        <div className="relative h-64 overflow-hidden rounded-3xl border border-purple-400/20 md:h-120">
          <Image
            src="/CoverDepanBukuTataSurya-blog.jpg"
            alt="Cover proyek Augmented Reality tata surya"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <aside className="text-sm leading-7 text-purple-100/55">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
              Tentang Proyek
            </p>
            <p className="mt-4">Kategori: Augmented Reality</p>
            <p>Fokus: Media pembelajaran</p>
            <p>Topik: Tata surya</p>
          </aside>

          <div className="space-y-6 text-base leading-8 text-purple-100 md:text-lg">
            <p>
              Proyek ini dibuat untuk menghadirkan pengalaman belajar tata surya secara visual dan interaktif. Pengguna dapat mempelajari objek luar angkasa melalui visualisasi berbasis augmented reality.
            </p>
            <p>
              Dengan pendekatan ini, materi yang biasanya hanya dipahami melalui gambar dua dimensi dapat dipresentasikan dengan cara yang lebih menarik. Teknologi digunakan sebagai penghubung antara teori dan pengalaman belajar langsung.
            </p>
            <p>
              Pengembangan proyek ini juga menjadi kesempatan untuk mengeksplorasi bagaimana desain antarmuka, teknologi interaktif, dan kebutuhan edukasi dapat dipadukan dalam satu aplikasi.
            </p>
          </div>
        </div>

      <article className="mx-auto w-full max-w-5xl px-4 py-12 md:px-12 md:py-20">
        <ol className="grid gap-5 md:grid-cols-2">
          <a href="https://drive.google.com/file/d/1qt6NF6OB04lPl4EKSV-cK-CHYGEgSJRo/view?usp=sharing" className="mt-12 text-center rounded-full px-6 py-3 font-semibold text-white border-violet-300 bg-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:bg-violet-400 transition duration-300 hover:translate-y-3">
          Download Aplikasi Via GDrive
          </a>
          <a href="/Buku.pdf" download className="mt-12 text-center rounded-full px-6 py-3 font-semibold text-white border-violet-300 bg-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:bg-violet-400 transition duration-300 hover:translate-y-3">
          Download Buku AR Tata Surya
          </a>
        </ol>
      </article>

        <section className="mt-12 border-t border-purple-400/10 pt-12 md:mt-12 md:pt-12" aria-labelledby="cara-penggunaan">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Panduan Pengguna
            </p>
            <h2 id="cara-penggunaan" className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Cara Penggunaan
            </h2>
            <p className="mt-5 text-base leading-8 text-purple-100/65 md:text-lg">
              Ikuti enam langkah sederhana untuk mulai menjelajahi tata surya dalam bentuk augmented reality.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-blue-400/30">01</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Buka aplikasi</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Izinkan Akses Kamera Saat pertama kali dibuka, aplikasi akan meminta izin akses kamera. Berikan izin tersebut agar fitur AR dapat berfungsi dengan baik untuk mendeteksi gambar marker planet.
              </p>
            </li>

            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-cyan-400/30">02</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Siapkan buku</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Siapkan Buku Tata Surya buka buku pada halaman yang memuat gambar marker planet (Matahari, Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus). Letakkan buku di permukaan datar dengan posisi stabil agar mudah dipindai.
              </p>
            </li>

            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-fuchsia-400/30">03</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Arahkan kamera</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Arahkan Kamera ke Barcode Arahkan kamera perangkat tepat ke barcode yang tertera dihalaman buku. Pastikan seluruh barcode terlihat jelas dalam bidang kamera dan pencahayaan cukup agar proses pemindaian berhasil.
              </p>
            </li>

            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-lime-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-lime-400/30">04</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Eksplorasi planet</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Objek 3D Planet Muncul Setelah barcode berhasil dipindai, model 3D planet akan muncul di layar secara otomatis. Gerakkan perangkat perlahan untuk mengamati planet dari berbagai sudut pandang.
              </p>
            </li>

            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-lime-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-lime-400/30">05</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Ganti halaman</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Ganti Halaman Untuk Melihat planet Lain, balik ke halaman berikutnya yang memuat barcode planet berbeda lalu arahkan kamera kembali. Ulangi langkah yang sama untuk menjelajahi semua 9 planet.
              </p>
            </li>

            <li className="relative rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-lime-400/[0.06] md:p-8">
              <span className="text-5xl font-bold text-lime-400/30">06</span>
              <h3 className="mt-8 text-xl font-semibold text-white">Keluar jika selesai</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Keluar dari Aplikasi Tekan tombol Back atau Home pada perangkat untuk keluar. Tidak diperlukan koneksi internet karena semua data 3D tersimpan secara lokal di dalam aplikasi.
              </p>
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}
