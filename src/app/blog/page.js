import Image from "next/image";

const blogPosts = [
  {
    category: "Teknologi",
    date: "02 April 2026",
    title: "Mengenal Konsep Dasar IoT hingga Implementasi di Dunia Nyata",
    summary: "IoT bukan lagi sekadar tren teknologi, melainkan bagian yang tak terpisahkan dari kemudahan hidup manusia di masa depan",
    image: "/wordpress.png",
    color: "from-violet-600/40 via-purple-900/30 to-[#090611]",
  },
  {
    category: "Masyarakat",
    date: "23 Agustus 2025",
    title: "Bentuk Tanggung Jawab Dalam Berorganisasi Di Ruang Lingkup Masyarakat",
    summary: "Organisasi (Karang Taruna) Akan berkembang Jika Seluruh anggota memiliki rasa Kesadaran penuh dalam menjalankan kewajibannya.",
    image: "/project-2.jpg",
    color: "from-fuchsia-600/35 via-purple-900/30 to-[#090611]",
  },
];

export default function page() {
  return (
    <main className="min-h-screen bg-[#090611] text-purple-50">
<section id="blog" className="border-t border-purple-400/10">
              <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-12 md:py-32">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                      05 / Blog
                    </p>
      
                    <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Catatan / Artikel / Informasi
                    </h2>
                  </div>
      
                  <a href="/" className="inline-flex rounded-full border border-purple-400/30 px-5 py-3 text-sm font-semibold text-purple-200 transition duration-1000 hover:border-purple-300 hover:bg-purple-400/10">
                    ◀  Kembali Ke Beranda
                  </a>
                </div>
      
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* wordpress */}
                  <article className="group overflow-hidden rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] transition duration-700 hover:-translate-y-10 hover:border-purple-400/50">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src="/wordpress.png"
                        alt="Frontend article"
                        fill
                        sizes="420px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent" />
                      <span className="absolute left-7 bottom-7 rounded-full border border-purple-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-200">
                        Teknologi
                      </span>
                    </div>
      
                    <div className="p-7">
                      <p className="text-sm text-purple-100/50">
                        02 April 2026
                      </p>
      
                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                        Mengenal Konsep Dasar IoT hingga Implementasi di Dunia Nyata
                      </h3>
      
                      <p className="mt-4 leading-7 text-purple-100/60">
                        IoT bukan lagi sekadar tren teknologi, melainkan bagian yang tak terpisahkan dari kemudahan hidup manusia di masa depan.
                      </p>
      
                      <a href="https://belajariot1.wordpress.com/" className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-300 transition group-hover:text-white">
                        Baca artikel <span>→</span>
                      </a>
                    </div>
                  </article>
      
                  {/* agustus kp pulo mangga */}
                  <article className="group overflow-hidden rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] transition duration-700 hover:-translate-y-10 hover:border-purple-400/50">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src="/agustus-kp-pulomangga.JPEG"
                        alt="Frontend article"
                        fill
                        sizes="420px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent" />
                      <span className="absolute left-7 bottom-7 rounded-full border border-purple-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-200">
                        Masyarakat
                      </span>
                    </div>
      
                    <div className="p-7">
                      <p className="text-sm text-purple-100/50">
                        23 Agustus 2025
                      </p>
      
                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                        Bentuk Tanggung Jawab Dalam Berorganisasi Di Ruang Lingkup Masyarakat
                      </h3>
      
                      <p className="mt-4 leading-7 text-purple-100/60">
                        Organisasi (Karang Taruna) Akan berkembang Jika Seluruh anggota memiliki rasa Kesadaran penuh dalam menjalankan kewajibannya.
                      </p>
      
                      <a href="https://www.kompasiana.com/afiffd9590/68a9d6e3ed641509307ac162/bentuk-tanggung-jawab-dalam-berorganisasi-di-ruang-lingkup-masyarakat?utm_source=Whatsapp&utm_medium=Refferal&utm_campaign=Sharing_Desktop" className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-300 transition group-hover:text-white">
                        Baca artikel <span>→</span>
                      </a>
                    </div>
                  </article>
      
                  {/* inovasi akademik */}
                  <article className="group overflow-hidden rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] transition duration-700 hover:-translate-y-10 hover:border-purple-400/50">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src="/inovasi-akademik.jpg"
                        alt="Frontend article"
                        fill
                        sizes="420px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent" />
                      <span className="absolute left-7 bottom-7 rounded-full border border-purple-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-200">
                        Edukasi
                      </span>
                    </div>
      
                    <div className="p-7">
                      <p className="text-sm text-purple-100/50">
                        18 November 2025
                      </p>
      
                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                        Pemanfaatan Prompt Engineering untuk Efisiensi Belajar
                      </h3>
      
                      <p className="mt-4 leading-7 text-purple-100/60">
                        Kemampuan untuk berkomunikasi secara efektif dengan alat-alat generatif seperti Large Language Models (LLMs) telah menjadi skill penting, terutama di dunia akademik.
                      </p>
      
                      <a href="https://medium.com/@m.amiryan.p/inovasi-akademik-universitas-bsi-sukses-edukasi-pemanfaatan-prompt-engineering-untuk-efisiensi-e05383271c3a" className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-300 transition group-hover:text-white">
                        Baca artikel <span>→</span>
                      </a>
                    </div>
                  </article>
      
                  {/* mahasiswa gotong royong */}
                  <article className="group overflow-hidden rounded-3xl border-4 border-purple-400/15 bg-white/[0.03] transition duration-700 hover:-translate-y-10 hover:border-purple-400/50">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src="/mahasiswa-gotong-royong.jpg"
                        alt="Frontend article"
                        fill
                        sizes="420px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent" />
                      <span className="absolute left-7 bottom-7 rounded-full border border-purple-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-200">
                        Masyarakat
                      </span>
                    </div>
      
                    <div className="p-7">
                      <p className="text-sm text-purple-100/50">
                        06 Juni 2024
                      </p>
      
                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                        Mahasiswa Gotong Royong Membersihkan lingkungan sekitar
                      </h3>
      
                      <p className="mt-4 leading-7 text-purple-100/60">
                        Masalah sampah dan polusi seringkali diabaikan, menyebabkan kerusakan alam yang berkelanjutan. 
                      </p>
      
                      <a href="https://medium.com/@m.amiryan.p/mahasiswa-gotong-royong-membersihkan-lingkungan-sekitar-4bd4eca5836d" className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-300 transition group-hover:text-white">
                        Baca artikel <span>→</span>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </section>
    </main>
  );
}
