"use client";

import { useState } from "react";

export default function ContactForm({ className = "", children }) {
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
      className={`rounded-3xl border border-purple-400/15 bg-white/[0.03] p-8 ${className}`}
    >
      {children}

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