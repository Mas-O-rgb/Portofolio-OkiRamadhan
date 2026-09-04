"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [messageStatus, setMessageStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setMessageStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessageStatus(result.error || "Pesan gagal dikirim.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessageStatus("Pesan berhasil dikirim. Terima kasih!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-purple-400/15 bg-white/[0.03] p-8"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="nama" className="text-sm font-semibold text-purple-100">
            Nama
          </label>
          <input
            id="nama"
            name="name"
            required
            placeholder="Nama kamu"
            className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-purple-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="nama@email.com"
            className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subjek" className="text-sm font-semibold text-purple-100">
          Subjek
        </label>
        <input
          id="subjek"
          name="subject"
          required
          placeholder="Contoh: Tawaran kolaborasi"
          className="mt-3 w-full rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="pesan" className="text-sm font-semibold text-purple-100">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="message"
          rows="6"
          required
          placeholder="Tuliskan pesan kamu..."
          className="mt-3 w-full resize-none rounded-xl border border-purple-300/15 bg-[#090611]/70 px-4 py-4 text-purple-50 outline-none placeholder:text-purple-100/30 focus:border-purple-400"
        />
      </div>

      <input
        name="website"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 rounded-full bg-purple-600 px-7 py-4 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Mengirim..." : "Kirim Pesan →"}
      </button>

      {messageStatus && (
        <p
          aria-live="polite"
          className={`mt-5 text-sm ${
            status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {messageStatus}
        </p>
      )}
    </form>
  );
}