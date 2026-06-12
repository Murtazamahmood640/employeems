import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getModule, modules, type Module } from "@/lib/modules";
import { ModuleHero } from "@/components/ModuleHero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedModules } from "@/components/RelatedModules";

export const Route = createFileRoute("/modules/$slug")({
  loader: ({ params }): { mod: Module } => {
    const mod = getModule(params.slug);
    if (!mod) throw notFound();
    return { mod };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.mod;
    return {
      meta: [
        { title: `${m?.name ?? "Module"} — ByThawkHR` },
        { name: "description", content: m?.description ?? "ByThawkHR module" },
        { property: "og:title", content: `${m?.name} — ByThawkHR` },
        { property: "og:description", content: m?.description },
        { property: "og:image", content: m?.image },
      ],
    };
  },
  component: ModuleDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-bold">Module not found</h1>
      <Link to="/modules" className="btn-primary mt-6">Back to all modules</Link>
    </div>
  ),
});

function ModuleDetail() {
  const { mod } = Route.useLoaderData() as { mod: Module };
  const relatedModules = modules.filter((m) => m.slug !== mod.slug && m.category === mod.category).slice(0, 3);

  return (
    <>
      <ModuleHero module={mod} />
      <FeaturesSection module={mod} />
      <GallerySection module={mod} />
      <HowItWorks module={mod} />
      {relatedModules.length > 0 && <RelatedModules modules={relatedModules} category={mod.category} />}
    </>
  );
}
