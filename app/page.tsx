import { Suspense } from "react";
import Loading from "./loading";
import Home from "@/components/client/Home";
import { worksData } from "@/data/work";

export default async function HomePage() {

  return (
    <Suspense fallback={<Loading />}>
      <Home works={worksData} articles={null} />
    </Suspense>
  );
}
