import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Menu, Phone, ShieldCheck, X } from "lucide-react";

const PHONE = "+19166654249";
const DISPLAY_PHONE = "+1 916-665-4249";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f5f0] text-[#19352d]">
      <div className="hidden bg-[#19352d] text-[#f6f5f0] md:block">
        <div className="container flex items-center justify-between py-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span>Independent indoor-environment inspections in Sacramento</span>
          <a className="inline-flex items-center gap-2 transition hover:text-[#d9a66a]" href={`tel:${PHONE}`}>
            <Phone size={13} /> Call the inspection desk: {DISPLAY_PHONE}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#19352d]/10 bg-[#f6f5f0]/92 backdrop-blur-xl">
        <div className="container flex h-[74px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#19352d] text-[#d9a66a] shadow-[0_8px_24px_rgba(25,53,45,0.18)]">
              <ShieldCheck size={24} strokeWidth={1.7} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[18px] font-bold tracking-[-0.04em] text-[#19352d]">Sactown Mold&apos;s</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.23em] text-[#6d7d72]">Inspections</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a href="/#services" className="nav-link">Services</a>
            <a href="/#process" className="nav-link">Our process</a>
            <a href="/#areas" className="nav-link">Service areas</a>
            <a href="/#faq" className="nav-link">FAQs</a>
            <a href="/#contact" className="nav-link">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={`tel:${PHONE}`} className="button-secondary">
              <Phone size={15} /> <span>Call now</span>
            </a>
            <a href="/#contact" className="button-primary hidden xl:inline-flex">
              Schedule an inspection <ArrowUpRight size={16} />
            </a>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#19352d]/15 text-[#19352d] lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#19352d]/10 bg-[#f6f5f0] px-5 py-5 lg:hidden">
            <nav className="container flex flex-col gap-1" aria-label="Mobile navigation">
              {[["/#services", "Services"], ["/#process", "Our process"], ["/#areas", "Service areas"], ["/#faq", "FAQs"], ["/#contact", "Contact"]].map(([href, label]) => (
                <a key={href} href={href} className="rounded-xl px-3 py-3 text-base font-semibold text-[#19352d] transition hover:bg-[#e6ebe4]" onClick={() => setOpen(false)}>{label}</a>
              ))}
              <a href={`tel:${PHONE}`} className="button-primary mt-3 justify-center" onClick={() => setOpen(false)}><Phone size={16} /> Call {DISPLAY_PHONE}</a>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#19352d]/10 bg-[#19352d] text-[#f6f5f0]">
        <div className="container grid gap-12 py-14 md:grid-cols-[1.1fr_.7fr_.7fr] md:py-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d9a66a] text-[#19352d]"><ShieldCheck size={24} strokeWidth={1.7} /></span>
              <div><div className="font-display text-xl font-bold tracking-[-0.04em]">Sactown Mold&apos;s</div><div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#adc0b2]">Inspections</div></div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#c7d4ca]">Clear, evidence-based mold and indoor-environment inspections for Sacramento homes, businesses, and property decisions.</p>
            <a href={`tel:${PHONE}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d9a66a] transition hover:text-white"><Phone size={15} /> {DISPLAY_PHONE}</a>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a66a]">Explore</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#c7d4ca]"><a href="/#services" className="footer-link">Inspection services</a><a href="/#process" className="footer-link">How it works</a><a href="/#areas" className="footer-link">Service areas</a><a href="/#faq" className="footer-link">FAQs</a></div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a66a]">Visit</h2>
            <p className="mt-5 text-sm leading-7 text-[#c7d4ca]">2848 Arden Wy<br />Sacramento, CA 95825</p>
            <a href="https://maps.app.goo.gl/zbcc3TAXiGT8zPJp6" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">Open in Google Maps <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-[#9fb2a3] sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Sactown Mold&apos;s Inspections. All rights reserved.</span><span>Serving Sacramento and nearby communities.</span></div></div>
      </footer>

      <a href={`tel:${PHONE}`} className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-2xl bg-[#d9683e] px-5 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(217,104,62,0.35)] transition hover:bg-[#c85e36] sm:hidden"><Phone size={17} /> Call now · {DISPLAY_PHONE}</a>
    </div>
  );
}

export { DISPLAY_PHONE, PHONE };
