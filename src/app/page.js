"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
// import profile from "../../public";

const skillCategories = [
  {
    id: "frontend",
    category: "Frontend",
    title: "Frontend",
    shortLabel: "Dasar Web",
    accent: "violet",
    techs: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    tools: ["VS Code", "Git", "GitHub", "Figma"],
  },
  {
    id: "backend",
    category: "Backend",
    title: "Backend",
    shortLabel: "API & Logic",
    accent: "green",
    techs: ["Node.js", "Next.js API", "Laravel", "REST API", "Python"],
    tools: ["Postman", "VS Code", "GitHub", "Vercel"],
  },
  {
    id: "data",
    category: "Data",
    title: "Data Analysis",
    shortLabel: "Insight & Data",
    accent: "cyan",
    techs: ["SQL", "Python", "Excel", "Data Visualization", "Analytics"],
    tools: ["Power BI", "Jupyter", "VS Code", "GitHub"],
  },
  {
    id: "design",
    category: "Design",
    title: "Design & UI",
    shortLabel: "Visual Thinking",
    accent: "pink",
    techs: ["Figma", "UI Design", "Responsive Design", "Wireframe", "UX"],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "VS Code"],
  },
];

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(skillCategories[0]);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090611] text-purple-50">
      {/* Navbar */}
      <header className="inset-x-0 top-0 z-20 fixed backdrop-blur-md bg-[#090611]/50">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="#tentang" className="
          text-purple-500">
            <Image
            src="/logo-maso.png"
            alt="logo-maso"
            width={20}
            height={20}
            unoptimized
            className="h-20 w-20 object-contain"
          />
          </a>

          <div className="flex items-center gap-9 rounded-full border border-purple-300/15 bg-white/[0.04] px-8 py-3 text-sm font-medium text-purple-500 backdrop-blur-md">
            <a className="transition hover:text-purple-300 hover:" href="#tentang">Tentang</a>
            <a className="transition hover:text-purple-300" href="#minat">Minat</a>
            <a className="transition hover:text-purple-300" href="#skills">Skills</a>
            <a className="transition hover:text-purple-300" href="#tools">Tools</a>
            <a className="transition hover:text-purple-300" href="#proyek">Proyek</a>
            <a className="transition hover:text-purple-300" href="#blog">Blog</a>
          </div>
          
          <a href="mailto:okiramadhan120@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10 backdrop-blur-sm hover:backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="white">
            <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Mari Bicara Via Email</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-[1.7fr_1.2fr] gap-20 px-12 py-32">
        <div aria-hidden="true" className="absolute left-0 top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"/>
        <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"/>

        <div className="relative">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-purple-400">
            Portofolio / 2026
          </p>

          <h1 className="text-3xl font-bold leading-[1.02] tracking-tight text-white hover:text-purple-200">Oki Ramadhan<span className="text-purple-400">.</span>
          </h1>

          <p className="mt-7 text-4xl font-medium text-purple-200">
            Web Developer | Designed Streetwear | Data Analyst
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-purple-200 hover:text-white text-justify">
            Hai! Saya Oki Ramadhan, Halo! Saya mahasiswa akhir Teknologi Informasi yang suka ngulik kode dalam pengembangan web modern dengan fokus yang semakin berkembang pada kecerdasan buatan. 
          </p>

          <div className="mt-10 flex gap-4">
            <a href="#proyek"
              className="rounded-full bg-purple-700 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] transition hover:-translate-y-1 hover:bg-purple-600">Lihat Proyek <span className="ml-2">↗</span>
            </a>

            <a href="mailto:emailkamu@example.com" className="rounded-full border border-purple-300/30 bg-white/5 px-7 py-4 font-semibold text-purple-100 transition hover:-translate-y-1 hover:border-purple-300/70 hover:bg-purple-400/10">Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[560px]">
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
                  <p className="mt-1 text-purple-100/70">Web Developer | Designed Streetwear | Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="border-t border-violet-400/10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[0.8fr_1.2fr] gap-20 px-12 py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              01 / Tentang Saya
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white">
              Mengubah ide menjadi pengalaman digital.
            </h2>

            <div className="mt-10 rounded-3xl border border-violet-400/15 bg-violet-400/[0.05] p-6">
              <p className="text-sm leading-7 text-violet-100/65">
                Sebagai mahasiswa tingkat akhir, saya siap terjun langsung ke dunia kerja. Saat ini saya terbuka untuk posisi magang, atau kesempatan apa pun yang bisa mengasah keahlian saya.
              </p>

              <a
                href="mailto:emailkamu@example.com"
                className="mt-5 inline-block font-semibold text-violet-300 transition hover:text-violet-100"
              >
                Mari terhubung →
              </a>
            </div>
          </div>

          <div>
            <p className="text-xl text-justify leading-9 text-violet-100/75">
              Mahasiswa Teknologi Informasi semester 7 dengan minat pada Web Development dan Data Analysis. Berpengalaman dalam membangun proyek website responsif serta memiliki fondasi kuat dalam pengolahan dan analisis data untuk menghasilkan insight yang berdampak. Terampil menggunakan Figma dan Adobe Photoshop untuk kebutuhan desain visual. Berkomitmen untuk terus mengembangkan kemampuan di bidang teknologi informasi.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-5">
              <article className="rounded-2xl border border-violet-400/15 bg-white/[0.03] p-6">
                <Image src="/icons-coding1.png" alt="icons-coding" width={500} height={500} />
              </article>

              <article className="rounded-2xl border border-violet-400/15 bg-white/[0.03] p-6">
                <Image src="/icons-design.png" alt="icons-coding" width={500} height={500} />
              </article>

              <article className="rounded-2xl border border-violet-400/15 bg-white/[0.03] p-6">
                <Image src="/icons-expanding.png" alt="icons-coding" width={500} height={500} />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Minat */}
      <section id="minat" className="border-t border-violet-400/10 bg-violet-950/20">
        <div className="mx-auto w-full max-w-7xl px-12 py-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                02 / Minat
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Fokus & Minat Saya
              </h2>
            </div>

            <p className="max-w-md text-right text-lg leading-8 text-violet-100/55">
              Tiga hal yang bikin seru ulik demi bikin produk digital yang gak cuma menarik, tapi juga bermanfaat.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">
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

              <p className="mt-8 text-sm font-medium text-violet-300">
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
                Gak cuma bikin tampilan web yang rapi dan nyaman dipakai, saya juga suka menuangkan kreativitas ke dunia fashion lewat desain streetwear, mengeksplorasi visual, baik di atas layar digital maupun di media pakaian.
              </p>

              <p className="mt-8 text-sm font-medium text-fuchsia-300">
                Adobe Illustrator · Adobe Photoshop · Figma 
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-violet-400/10">
        <div className="mx-auto w-full max-w-7xl px-12 py-32">
          <div className="grid grid-cols gap-20">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                  03 / Skills
                </p>

                <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                  Keterampilan & Keahlian
                </h2>
              </div>

              <p className="max-w-md text-right text-lg leading-8 text-violet-100/55">
                Jelajahi keahlian teknis saya di beberapa bidang. Silakan pilih kategori di bawah untuk melihat teknologi dan alat bantu yang saya gunakan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-3xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:bg-violet-400/10 ${
                    activeSkill.id === skill.id
                      ? "border-violet-300 bg-violet-400/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                      : "border-violet-400/15 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                    {skill.category}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {skill.shortLabel}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {skill.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-violet-400/10 px-4 py-2 text-sm text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Kategori aktif
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {activeSkill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {activeSkill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-violet-300/30 bg-white/[0.03] px-4 py-2 text-sm text-violet-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeSkill.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="border-t border-purple-400/10 bg-purple-950/20">
        <div className="mx-auto w-full max-w-7xl px-12 py-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                05 / Tools
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Tools yang Saya Pakai
              </h2>
            </div>

            <p className="max-w-md text-right text-lg leading-8 text-purple-100/55">
              Tools yang membantu saya merancang, menulis kode, mengelola versi, dan
              mempublikasikan project.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">
            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:bg-purple-400/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-lg font-bold text-blue-300">
                VS
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">
                Visual Studio Code
              </h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Code editor utama untuk menulis, mengatur, dan menjalankan project.
              </p>
            </article>

            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-400/60 hover:bg-orange-400/[0.05]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-lg font-bold text-orange-300">
                Gi
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">Git</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Mengelola riwayat perubahan kode secara rapi dan terstruktur.
              </p>
            </article>

            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/60 hover:bg-violet-400/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-lg font-bold text-violet-300">
                GH
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">GitHub</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Menyimpan repository, membagikan kode, dan berkolaborasi.
              </p>
            </article>

            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/60 hover:bg-fuchsia-400/[0.05]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-lg font-bold text-fuchsia-300">
                Fi
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">Figma</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Mendesain wireframe, antarmuka, dan prototype sebelum coding.
              </p>
            </article>

            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-cyan-400/[0.05]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-lg font-bold text-cyan-300">
                Ve
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">Vercel</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Deploy dan mempublikasikan aplikasi Next.js ke internet.
              </p>
            </article>

            <article className="group rounded-3xl border border-purple-400/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-emerald-400/[0.05]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg font-bold text-emerald-300">
                Po
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">Postman</h3>
              <p className="mt-3 leading-7 text-purple-100/60">
                Menguji API dan memastikan pertukaran data aplikasi berjalan baik.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="proyek" className="border-t border-purple-400/10">
        <div className="mx-auto w-full max-w-7xl px-12 py-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                02 / Portfolio
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Selected Work
              </h2>
            </div>

            <p className="max-w-md text-right text-lg leading-8 text-purple-100/55">
              Beberapa proyek yang menunjukkan proses saya dalam menggabungkan
              desain, kode, dan kebutuhan pengguna.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6">
            <article className="group relative col-span-7 h-[480px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40">
              <Image
                src="/project-1.jpg"
                alt="Tampilan proyek dashboard"
                fill
                sizes="660px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-purple-300">01 / WEB APP</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      E-Commerce Dashboard
                    </h3>
                    <p className="mt-2 text-purple-100/65">
                      Next.js · Tailwind CSS · Dashboard UI
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300/30 bg-white/10 text-xl text-white transition hover:bg-purple-500"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </article>

            <article className="group relative col-span-5 h-[480px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40">
              <Image
                src="/project-2.jpg"
                alt="Tampilan proyek portofolio"
                fill
                sizes="460px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-sm font-semibold text-fuchsia-300">02 / PERSONAL</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Portfolio Website
                </h3>
                <p className="mt-2 text-purple-100/65">
                  React · UI Design · Responsive Layout
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-fuchsia-300 transition hover:text-white"
                >
                  Lihat proyek <span>↗</span>
                </a>
              </div>
            </article>

            <article className="group relative col-span-12 h-[330px] overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/40">
              <Image
                src="/project-3.jpg"
                alt="Tampilan proyek task management"
                fill
                sizes="1140px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#090611] via-[#090611]/50 to-transparent" />

              <div className="absolute left-0 top-0 flex h-full max-w-xl flex-col justify-end p-8">
                <p className="text-sm font-semibold text-cyan-300">03 / PRODUCTIVITY</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Task Management App
                </h3>
                <p className="mt-3 leading-7 text-purple-100/65">
                  Aplikasi untuk mengatur tugas, menetapkan prioritas, dan memantau
                  progres pekerjaan dalam satu tempat.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
                >
                  Lihat proyek <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Saya */}
      <section id="blog" className="border-t border-purple-400/10">
        <div className="mx-auto w-full max-w-7xl px-12 py-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                06 / Blog
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Catatan & Pembelajaran
              </h2>
            </div>

            <a
              href="#"
              className="rounded-full border border-purple-400/30 px-5 py-3 text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10"
            >
              Lihat Semua Artikel →
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">
            <article className="group overflow-hidden rounded-3xl border border-purple-400/15 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-purple-400/50">
              <div className="flex h-52 items-end bg-gradient-to-br from-violet-600/40 via-purple-900/30 to-[#090611] p-7">
                <span className="rounded-full border border-purple-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-200">
                  Frontend
                </span>
              </div>

              <div className="p-7">
                <p className="text-sm text-purple-100/50">
                  12 Januari 2026 · 5 menit baca
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                  Memulai Perjalanan Belajar Next.js untuk Pemula
                </h3>

                <p className="mt-4 leading-7 text-purple-100/60">
                  Catatan awal tentang hal-hal penting yang perlu dipahami saat mulai
                  membangun aplikasi dengan Next.js.
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-purple-300 transition group-hover:text-white"
                >
                  Baca artikel <span>→</span>
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-purple-400/15 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/50">
              <div className="flex h-52 items-end bg-gradient-to-br from-fuchsia-600/35 via-purple-900/30 to-[#090611] p-7">
                <span className="rounded-full border border-fuchsia-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-fuchsia-200">
                  Design
                </span>
              </div>

              <div className="p-7">
                <p className="text-sm text-purple-100/50">
                  26 Januari 2026 · 4 menit baca
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                  Membuat UI Dark Mode yang Tetap Nyaman Dibaca
                </h3>

                <p className="mt-4 leading-7 text-purple-100/60">
                  Cara menggunakan warna, kontras, jarak, dan aksen neon tanpa
                  membuat tampilan menjadi berlebihan.
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-fuchsia-300 transition group-hover:text-white"
                >
                  Baca artikel <span>→</span>
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-purple-400/15 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
              <div className="flex h-52 items-end bg-gradient-to-br from-cyan-600/30 via-purple-900/30 to-[#090611] p-7">
                <span className="rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  Productivity
                </span>
              </div>

              <div className="p-7">
                <p className="text-sm text-purple-100/50">
                  08 Februari 2026 · 6 menit baca
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                  Workflow Sederhana untuk Mengerjakan Project Web
                </h3>

                <p className="mt-4 leading-7 text-purple-100/60">
                  Workflow yang membantu saya mengatur ide, desain, kode, dan proses
                  deploy dalam sebuah project.
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 transition group-hover:text-white"
                >
                  Baca artikel <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Pesan */}
      <section id="pesan" className="border-t border-purple-400/10 bg-purple-950/20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[0.8fr_1.2fr] gap-20 px-12 py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              07 / Pesan
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white">
              Punya ide?
              <br />
              Mari bicara.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-purple-100/60">
              Jika ingin berdiskusi tentang project, kolaborasi, atau sekadar
              bertukar ide, kirimkan pesan melalui form ini.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href="mailto:okiramadhan120@gmail.com"
                className="block text-lg font-medium text-purple-200 transition hover:text-white"
              >
                okiramadhan120@gmail.com
              </a>

              <a
                href="#"
                className="block text-lg font-medium text-purple-200 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="block text-lg font-medium text-purple-200 transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <ContactForm className="rounded-3xl border border-purple-400/15 bg-white/[0.03] p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nama"
                  className="text-sm font-semibold text-purple-100"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Nama kamu"
                  className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-purple-100"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subjek"
                className="text-sm font-semibold text-purple-100"
              >
                Subjek
              </label>
              <input
                id="subjek"
                name="subjek"
                type="text"
                placeholder="Contoh: Tawaran kolaborasi project"
                className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="pesan"
                className="text-sm font-semibold text-purple-100"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="6"
                placeholder="Tuliskan pesan kamu di sini..."
                className="mt-3 w-full resize-none rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
              />
            </div>

            <button
              type="button"
              className="mt-8 rounded-full bg-purple-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-1 hover:bg-purple-500"
            >
              Kirim Pesan →
            </button>

            <p className="mt-5 text-sm text-purple-100/40">
              Form ini masih tampilan frontend. Pengiriman pesan perlu dihubungkan ke
              layanan form atau API pada tahap berikutnya.
            </p>
          </ContactForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-400/10 bg-[#07040d]">
        <div className="mx-auto w-full max-w-7xl px-12 pt-24">
          <div className="flex items-end justify-between border-b border-purple-400/10 pb-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Let&apos;s Connect
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
                Mari buat sesuatu
                <br />
                yang bermakna.
              </h2>
            </div>

            <a
              href="mailto:okiramadhan120@gmail.com"
              className="rounded-full bg-purple-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-1 hover:bg-purple-500"
            >
              Kirim Email <span className="ml-2">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 py-14">
            <div>
              <a href="#beranda" className="text-3xl font-bold tracking-tight text-white">
                OKI<span className="text-purple-400">.</span>
              </a>

              <p className="mt-5 max-w-xs leading-7 text-purple-100/55">
                Frontend Developer yang membangun pengalaman web modern dan
                fungsional.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Navigasi
              </p>

              <div className="mt-5 flex flex-col gap-3 text-purple-100/60">
                <a className="transition hover:text-white" href="#tentang">
                  Tentang
                </a>
                <a className="transition hover:text-white" href="#proyek">
                  Portfolio
                </a>
                <a className="transition hover:text-white" href="#skills">
                  Skills
                </a>
                <a className="transition hover:text-white" href="#blog">
                  Blog
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Sosial Media
              </p>

              <div className="mt-5 flex flex-col gap-3 text-purple-100/60">
                <a
                  className="transition hover:text-white"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  className="transition hover:text-white"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  className="transition hover:text-white"
                  href="mailto:okiramadhan120@gmail.com"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-purple-400/10 py-7 text-sm text-purple-100/40">
            <p>© Designed & built with TailwindCSS, JS,  Next.js and a dash of  by Oki Ramadhan.</p>
            <p>Designed & built with Next.js.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}