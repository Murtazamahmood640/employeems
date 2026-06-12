import { useEffect } from "react";

type MetaInput = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
};

function setMeta(attr: "name" | "property", key: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Lightweight, dependency-free document head manager for a client-rendered SPA.
 * Sets <title> and the common SEO/OpenGraph meta tags per page.
 */
export function usePageMeta(meta: MetaInput) {
  const { title, description, ogTitle, ogDescription, ogImage, robots } = meta;

  useEffect(() => {
    if (title) document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
  }, [title, description, ogTitle, ogDescription, ogImage, robots]);
}
