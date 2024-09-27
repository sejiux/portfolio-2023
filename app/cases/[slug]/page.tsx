import { worksBySlugData, worksData } from "@/data/work";
import { Suspense } from "react";
import Loading from "./loading";
import Cases from "@/components/client/Cases";

export default async function CasesPage ({ params }: { params: { slug: string } }) {
  const cases = worksBySlugData.find((work) => work?.slug === params.slug);
  const currentIndex = worksData?.map(work => work.slug).indexOf(params.slug);

  const previousProjectSlug = worksData?.[currentIndex! - 1];
  const nextProjectSlug = worksData?.[currentIndex! + 1];

  return (
    <main>     
      <Suspense fallback={<Loading />}>
        <Cases 
          cases={cases ?? null} 
          previousProjectSlug={previousProjectSlug} 
          nextProjectSlug={nextProjectSlug} 
        />
      </Suspense>
    </main>
  );
}