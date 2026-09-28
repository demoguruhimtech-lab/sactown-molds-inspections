import { useEffect } from "react";

type SeoProps = { title: string; description: string; path: string; schema?: Record<string, unknown> | Record<string, unknown>[] };
export const SITE_URL = "https://www.moldinspectionsacramentoca.com";

export default function Seo({ title, description, path, schema }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const setMeta = (key: string, content: string, property = false) => {
      const selector = property ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let node = document.head.querySelector<HTMLMetaElement>(selector);
      if (!node) { node = document.createElement("meta"); node.setAttribute(property ? "property" : "name", key); document.head.appendChild(node); }
      node.content = content;
    };
    setMeta("description", description);
    setMeta("og:title", title, true); setMeta("og:description", description, true); setMeta("og:type", "website", true); setMeta("og:url", `${SITE_URL}${path}`, true); setMeta("og:site_name", "Sactown Mold's Inspections", true); setMeta("twitter:card", "summary_large_image");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}${path}`;
    document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());
    (schema ? (Array.isArray(schema) ? schema : [schema]) : []).forEach((value) => { const script = document.createElement("script"); script.type = "application/ld+json"; script.dataset.seoSchema = "true"; script.textContent = JSON.stringify(value); document.head.appendChild(script); });
    return () => { document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove()); };
  }, [description, path, schema, title]);
  return null;
}
