import { Suspense } from "react";
import Loading from "./loading";
import Home from "@/components/client/Home";
import { worksData } from "@/data/work";
import { articlesData } from "@/data/articles";

export default async function HomePage() {

  return (
    <Suspense fallback={<Loading />}>
      <Home works={worksData} articles={articlesData} />
    </Suspense>
  );
}
