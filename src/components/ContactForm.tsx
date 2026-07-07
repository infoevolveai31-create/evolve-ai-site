"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/10 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-fg">Thanks — message sent.</h3>
        <p className="mt-2 text-sm text-fg-muted">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const data = new FormData(form);
        data.append("_subject", "New enquiry from theevolveai.com");
        data.append("_captcha", "false");
        data.append("_template", "table");

        try {
          const res = await fetch(
            "https://formsubmit.co/ajax/infoevolveai31@gmail.com",
            {
              method: "POST",
              headers: { Accept: "application/json" },
              body: data,
            }
          );
          if (!res.ok) throw new Error("Request failed");
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-fg" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-teal/50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-fg" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="jane@company.com"
            className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-teal/50"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-fg" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company, Inc."
          className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-teal/50"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-fg" htmlFor="message">
          What are you looking to solve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about the workflow or problem you have in mind..."
          className="resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-teal/50"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please email us directly at{" "}
          <a href="mailto:infoevolveai31@gmail.com" className="underline">
            infoevolveai31@gmail.com
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal to-blue px-6 py-3.5 text-sm font-semibold text-[#06140f] hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
