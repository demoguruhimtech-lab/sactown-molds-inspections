import { Link } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { PHONE } from "@/components/SiteShell";

export default function NotFound() {
  return <><Seo title="Page not found | Sactown Mold's Inspections" description="The page you requested could not be found. Explore Sacramento mold inspection services or call the inspection desk." path="/404" /><section className="section-pad"><div className="container"><div className="mx-auto max-w-2xl rounded-[30px] bg-[#e6ebe4] p-10 text-center sm:p-16"><div className="text-sm font-bold uppercase tracking-[.2em] text-[#d9683e]">404 · Not found</div><h1 className="mt-5 font-display text-5xl font-semibold tracking-[-.06em]">Let&apos;s get you back to the useful part.</h1><p className="mt-5 text-lg leading-8 text-[#6d7d72]">The page may have moved, but the inspection desk is still here.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="button-primary"><ArrowLeft size={16} /> Back to home</Link><a href={`tel:${PHONE}`} className="button-secondary"><Phone size={16} /> Call now</a></div></div></div></section></>;
}
