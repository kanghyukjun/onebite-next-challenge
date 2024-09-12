import SearchLayout from "@/components/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <h1>INDEX</h1>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
