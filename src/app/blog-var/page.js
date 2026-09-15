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

          <div className="space-y-6 text-base leading-8 text-purple-100/75 md:text-lg">
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
      </article>
    </main>
  );
}
