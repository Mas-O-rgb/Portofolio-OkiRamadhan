"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
// import profile from "../../public";

const skillCategories = [
  {
    id: "frontend",
    shortLabel: "Web Developer",
    accent: "violet",
    techs: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Express.js", "PHP", "Laravel"],
  },
  {
    id: "data",
    shortLabel: "Insight & Data",
    accent: "cyan",
    techs: ["SQL", "Python", "Excel", "Data Visualization"],
  },
  {
    id: "design",
    shortLabel: "Design & Visual Thinking",
    accent: "pink",
    techs: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(skillCategories[0]);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090611] text-purple-50">
      {/* Navbar */}
      <header className="inset-x-0 top-0 z-20 fixed backdrop-blur-md bg-[#090611]/50">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 md:px-0">
          <a href="#tentang" className="text-purple-500">
            <Image
              src="/logo-maso.png"
              alt="logo-maso"
              width={20}
              height={20}
              unoptimized
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </a>

          <div className="hidden items-center gap-9 rounded-full border border-purple-300/15 bg-white/[0.04] px-8 py-3 text-sm font-medium text-purple-500 backdrop-blur-md md:flex">
            <a className="transition hover:text-purple-300" href="#tentang">Tentang</a>
            <a className="transition hover:text-purple-300" href="#minat">Minat</a>
            <a className="transition hover:text-purple-300" href="#skills">Skills</a>
            <a className="transition hover:text-purple-300" href="#tools">Tools</a>
            <a className="transition hover:text-purple-300" href="#proyek">Proyek</a>
            <a className="transition hover:text-purple-300" href="#blog">Blog</a>
          </div>

          <a href="mailto:okiramadhan120@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 px-6 py-3 text-xs font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10 backdrop-blur-sm hover:backdrop-blur-md md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="white">
              <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="hidden md:inline">Mari Bicara Via Email</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-[1.7fr_1.2fr] md:gap-20 md:px-12">
        <div aria-hidden="true" className="absolute left-0 top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"/>
        <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"/>

        <div className="relative">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-purple-400">
            Portofolio / 2026
          </p>

          <h1 className="text-3xl font-bold leading-[1.02] tracking-tight text-white hover:text-purple-200">Oki Ramadhan<span className="text-purple-400">.</span>
          </h1>

          <p className="mt-7 text-4xl font-medium text-purple-200">
            Web Developer | Data Analyst | Designed Streetwear
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-purple-200 hover:text-white text-justify">
            Hai! Saya Oki Ramadhan, Halo! Saya mahasiswa akhir Teknologi Informasi yang suka ngulik kode dalam pengembangan web modern dengan fokus yang semakin berkembang pada kecerdasan buatan. 
          </p>

          <div className="mt-10 flex gap-4">
            <a href="#proyek"
              className="rounded-full bg-purple-700 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] transition hover:-translate-y-1 hover:bg-purple-600">Lihat Proyek <span className="ml-2">↗</span>
            </a>

            <a href="mailto:okiramadhan120@gmail.com" className="rounded-full border border-purple-300/30 bg-white/5 px-7 py-4 font-semibold text-purple-100 transition hover:-translate-y-1 hover:border-purple-300/70 hover:bg-purple-400/10">Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[420px] md:h-[560px]">
            <Image
              src="/foto-profil2.png"
              alt="Foto profil Oki Ramadhan"
              fill
              preload
              sizes="480px"
              className="h-20 w-20 object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Based in Indonesia
              </p>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-white">Oki Ramadhan</h2>
                  <p className="mt-1 text-purple-100/70">Web Developer | Data Analyst | Designed Streetwear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="border-t border-violet-400/10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-12 md:py-32">
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              01 / Tentang Saya
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Tempat teknologi bertemu dengan imajinasi.
            </h2>

            <div className="mt-4 rounded-3xl border border-violet-400/15 bg-violet-400/[0.05]md:p-0">
              <p className="text-sm leading-7 text-violet-100/65">
                Sebagai mahasiswa tingkat akhir, saya siap membawa kombinasi keahlian teknis dan kreativitas visual ini ke industri profesional. Mari berkolaborasi dalam proyek Anda berikutnya!
              </p>

              <a href="mailto:okiramadhan120@gmail.com" className="mt-5 inline-block font-semibold text-violet-300 transition hover:text-violet-100">
                Mari terhubung →
              </a>
            </div>
          </div>

          <div className="order-2 md:order-2">
            <p className="text-base leading-7 text-justify text-violet-100/75 md:text-xl md:leading-9">
              Halo! Saya mahasiswa Teknologi Informasi semester 7 yang punya ketertarikan besar di dunia Web Development, Data Analysis dan Visual Design. Selama kuliah, saya tidak hanya belajar teori, tetapi juga aktif membangun berbagai proyek website yang responsif. Sebagai mahasiswa tingkat akhir, saya siap terjun langsung ke dunia kerja. Saat ini saya terbuka untuk posisi magang, atau kesempatan apa pun yang bisa mengasah keahlian saya.
            </p>
            <br/>
            <p className="text-base leading-7 text-justify text-violet-100/75 md:mt-0 md:text-xl md:leading-9">
              Bagi saya, fungsi teknis akan jauh lebih maksimal jika didukung oleh visual yang kuat. Karena itu, saya juga mengasah kemampuan desain seperti menggunakan Figma, Adobe Photoshop, Adobe Illustrator untuk memastikan setiap proyek yang saya kerjakan memiliki tampilan yang menarik. Selain merancang tampilan web yang menarik dan nyaman digunakan, saya juga senang mengeksplorasi kreativitas ke dunia fashion. Salah satunya lewat desain streetwear, di mana saya bisa bebas bereksperimen dengan visual baik di atas layar digital maupun langsung pada media pakaian.
            </p>
          </div>
        </div>
      </section>

      {/* Minat */}
      <section id="minat" className="border-t border-violet-400/10 bg-violet-950/20">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-12 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                02 / Minat
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Fokus & Minat Saya
              </h2>
            </div>

            <p className="max-w-md text-left text-base leading-7 text-violet-100/55 md:text-right md:text-lg md:leading-8">
              Tiga hal yang bikin seru ulik demi bikin produk digital yang gak cuma menarik, tapi juga bermanfaat.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="group rounded-3xl border border-violet-400/15 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-400/60 hover:bg-violet-400/[0.08]">
              <p className="text-sm font-semibold text-violet-300">02</p>

              <div className="mt-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-3xl text-violet-300">
                💻
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Development
              </h3>

              <p className="mt-4 leading-7 text-violet-100/60">
                memastikan sistem di belakang layar dapat mengolah data dengan logis dan aman, sekaligus menjaga transisi di sisi pengguna tetap berjalan mulus dan tanpa hambatan.
              </p>

              <p className="mt-8 text-sm font-medium text-lime-200">
                HTML · CSS · JavaScript · Python · Next.js · Laravel
              </p>
            </article>

            <article className="group rounded-3xl border border-violet-400/15 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]">
              <p className="text-sm font-semibold text-cyan-300">03</p>

              <div className="mt-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-300">
                📊
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">Data Analyst</h3>

              <p className="mt-4 leading-7 text-violet-100/60">
                Mengolah informasi untuk mencari tren dan menemukan insight berharga yang bisa membantu pengambilan keputusan baik untuk performa web maupun memahami apa yang lagi disukai pasar.
              </p>

              <p className="mt-8 text-sm font-medium text-cyan-300">
                Data Analytics · SQL · Data Visualization · Insight
              </p>
            </article>

            <article className="group rounded-3xl border border-violet-400/15 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/[0.06]">
              <p className="text-sm font-semibold text-fuchsia-300">01</p>

              <div className="mt-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-3xl text-fuchsia-300">
                🎨
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">Design</h3>

              <p className="mt-4 leading-7 text-violet-100/60">
                Tidak hanya bikin tampilan web yang menarik dan nyaman dipakai, saya juga suka menuangkan kreativitas ke dunia fashion lewat desain streetwear, mengeksplorasi visual, baik di atas layar digital maupun di media pakaian.
              </p>

              <p className="mt-8 text-sm font-medium text-fuchsia-400">
                Adobe Illustrator · Adobe Photoshop · Figma
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-violet-400/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-8 md:gap-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                  03 / Skills
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Keterampilan & Keahlian
                </h2>
              </div>

              <p className="max-w-md text-left text-base leading-7 text-violet-100/55 md:text-right md:text-lg md:leading-8">
                Jelajahi keahlian teknis saya di beberapa bidang. Silahkan pilih kategori di bawah untuk melihat teknologi dan alat bantu yang saya gunakan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {skillCategories.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-3xl border p-7 transition duration-1000 hover:-translate-y-3 hover:bg-violet-400 ${
                    activeSkill.id === skill.id
                      ? "border-violet-300 bg-violet-400/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                      : "border-violet-400/15 bg-white/[0.03]"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-center text-white">
                    {skill.shortLabel}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl text-center border border-violet-400 bg-violet-500/[0.06] p-8">
            <div className="items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Kategori aktif
                </p>
                <h3 className="text-3xl font-semibold text-white">
                  {activeSkill.title}
                </h3>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {activeSkill.techs.map((tech) => (
                <span key={tech} className="rounded-full text-center bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200 hover:text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="proyek" className="border-t border-purple-400/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-12 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                04 / Proyek
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Hasil Karya
              </h2>
            </div>

            <p className="max-w-md text-left text-base leading-7 text-purple-100/55 md:text-right md:text-lg md:leading-8">
              Bukan sekadar tumpukan proyek, ini adalah rekam jejak dalam memecahkan masalah melalui kode dan desain.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Reservasi lapangan */}
            <article className="group relative h-[480px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40 md:col-span-7">
              <Image
                src="/reservasi-lapangan.png"
                alt="Tampilan proyek dashboard"
                fill
                sizes="660px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-400">01 / WEB APP</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      Reservasi Lapangan
                    </h3>
                    <p className="mt-2 text-purple-100/65">
                      Aplikasi manajemen pemesanan lapangan berbasis web dengan sistem jadwal real-time untuk mempermudah reservasi dan administrasi secara digital.
                    </p>
                  </div>

                  <a href="https://reservasi-lapangan.vercel.app/" className="flex p-3 font-semibold text-green-400 transition hover:text-green-200 rounded-3xl border border-green-400 hover:border-green-200 border-2">
                    Lihat proyek <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Visual design */}
            <article className="group relative h-[480px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40 md:col-span-5">
              <Image
                src="/visual-design-by-maso.png"
                alt="Tampilan proyek portofolio"
                fill
                sizes="460px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-sm font-semibold text-fuchsia-300">02 / PERSONAL</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Visual Design MASO
                </h3>
                <p className="mt-2 mb-6 text-purple-100/65">
                  Sebuah galeri digital yang merangkum kumpulan eksplorasi desain visual, tempat saya menuangkan ide kretif, ekspresi rasa, dan emosi ke dalam bentuk estetika layar.
                </p>

                <a href="https://l.instagram.com/?u=https%3A%2F%2Fmas-o-rgb.github.io%2FMas-O%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafkZMOYeeBkOxv2vwgsvyymKulGAAtvBbhswS451gKywSLjSb9geV18XaGfsg_aem_tlNxGn-_XpoaVFMQbAelpQ&e=AUDWvRvUxLcP1ySlyTHJokKNWzR33f4BczhU0DOw9-FTjoZbjPt59mHva_Ax44DLZ__fXugaxKulF_9DbpQkfP1vonoP2IXclIFWpNBn21NSyaR9I_uu9jPaqxlW1hAJQwg5aIqkSmaGip9Y8I3Sj_4" className="p-3 font-semibold text-purple-600 transition hover:text-fuchsia-300 rounded-3xl border border-purple-600 hover:border-fuchsia-300 border-2 mt-4">
                  Lihat proyek <span className="ml-2">↗</span>
                </a>
              </div>
            </article>

            {/* Var */}
            <article className="group relative col-span-1 h-[330px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40 md:col-span-12">
              <Image
                src="/CoverDepanBukuTataSurya2.jpg"
                alt="Tampilan proyek task management"
                fill
                sizes="1140px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#090611] via-[#090611]/50 to-transparent" />

              <div className="absolute left-0 top-0 flex h-full max-w-xl flex-col justify-end p-8">
                <p className="text-sm font-semibold text-cyan-300">03 / APP</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Augmented Reality
                </h3>
                <p className="mt-3 leading-7 text-purple-100/65">
                  Pemanfaatan Augmented Reality Dalam Visualisasi Tata Surya Sebagai Media Pembelajaran
                </p>

                <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white">
                  Lihat proyek <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Saya */}
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

            <a href="/blog" className="inline-flex rounded-full border border-purple-400/30 px-5 py-3 text-sm font-semibold text-purple-200 transition duration-1000 hover:border-purple-300 hover:bg-purple-400/10">
              Lihat Semua Artikel →
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
          </div>

          <div className=" gap-6 md:flex-row md:items-center md:items-center items-center mt-8">
            <a href="/blog" className="inline-flex rounded-full border border-purple-400/30 px-5 py-3 text-sm font-semibold text-purple-200 transition duration-1000 hover:border-purple-300 hover:bg-purple-400/10">
              Lihat Semua Artikel →
            </a>
          </div>
        </div>
      </section>

      {/* Pesan */}
      <section id="pesan" className="border-t border-purple-400/10 bg-purple-950/20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-12 md:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              07 / Pesan
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Punya ide?
              <br />
              Mari bicara.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-purple-100/60 md:text-lg md:leading-8">
              Jika ingin berdiskusi tentang project, kolaborasi, atau sekadar bertukar ide, kirimkan pesan melalui form ini.
            </p>

            <div className="mt-12 space-y-5">
              <a href="mailto:okiramadhan120@gmail.com" className="block text-lg font-medium text-purple-200 transition hover:text-white">
                okiramadhan120@gmail.com
              </a>

              <a href="#" className="block text-lg font-medium text-purple-200 transition hover:text-white">
                GitHub ↗
              </a>

              <a href="#" className="block text-lg font-medium text-purple-200 transition hover:text-white">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <ContactForm className="rounded-3xl border border-purple-400/15 bg-white/[0.03] p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nama" className="text-sm font-semibold text-purple-100">Nama</label>
                <input id="nama" name="nama" type="text" placeholder="Nama kamu" className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400" />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-purple-100">Email</label>
                <input id="email" name="email" type="email" placeholder="nama@email.com" className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subjek" className="text-sm font-semibold text-purple-100">Subjek</label>
              <input id="subjek" name="subjek" type="text" placeholder="Contoh: Tawaran kolaborasi project" className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400" />
            </div>

            <div className="mt-6">
              <label htmlFor="pesan" className="text-sm font-semibold text-purple-100">Pesan</label>
              <textarea id="pesan" name="pesan" rows="6" placeholder="Tuliskan pesan kamu di sini..." className="mt-3 w-full resize-none rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400" />
            </div>

            <button type="button" className="mt-8 rounded-full bg-purple-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-1 hover:bg-purple-500">
              Kirim Pesan →
            </button>

            <p className="mt-5 text-sm text-purple-100/40">
              Form ini masih tampilan frontend. Pengiriman pesan perlu dihubungkan ke layanan form atau API pada tahap berikutnya.
            </p>
          </ContactForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-400/10 bg-[#07040d]">
        <div className="mx-auto w-full max-w-7xl px-4 pt-16 md:px-12 md:pt-24">
          <div className="flex flex-col gap-8 border-b border-purple-400/10 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Let&apos;s Connect
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Mari buat sesuatu
                <br />
                yang bermakna.
              </h2>
            </div>

            <a
              href="mailto:okiramadhan120@gmail.com"
              className="inline-flex rounded-full bg-purple-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-1 hover:bg-purple-500"
            >
              Kirim Email <span className="ml-2">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-3">
            <div>
              <a href="#beranda" className="text-3xl font-bold tracking-tight text-white">
                OKI<span className="text-purple-400">.</span>
              </a>

              <p className="mt-5 max-w-xs leading-7 text-purple-100/55">
                Frontend Developer yang membangun pengalaman web modern dan fungsional.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Navigasi
              </p>

              <div className="mt-5 flex flex-col gap-3 text-purple-100/60">
                <a className="transition hover:text-white" href="#tentang">Tentang</a>
                <a className="transition hover:text-white" href="#proyek">Portfolio</a>
                <a className="transition hover:text-white" href="#skills">Skills</a>
                <a className="transition hover:text-white" href="#blog">Blog</a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Sosial Media
              </p>

              <div className="mt-5 flex flex-col gap-3 text-purple-100/60">
                <a className="transition hover:text-white" href="#" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="transition hover:text-white" href="#" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="transition hover:text-white" href="mailto:okiramadhan120@gmail.com">Email ↗</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-purple-400/10 py-7 text-sm text-purple-100/40 md:flex-row md:items-center md:justify-between">
            <p>© Designed & built with TailwindCSS, JS, Next.js and a dash of by Oki Ramadhan.</p>
            <p>Designed & built with Next.js.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}