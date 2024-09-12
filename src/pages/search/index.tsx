import SearchLayout from "@/components/search-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import dummy from "@/constants/dummy.json";
import RecommendMovieItem from "@/components/recommend-movie-item";
import { MovieData } from "@/types";

const filterMovie = (query: string | string[]): MovieData[] => {
  return dummy.filter((movie) => movie.title.includes(query as string));
};

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className="w-full flex flex-wrap gap-1 mt-10">
      {q &&
        filterMovie(q).map((movie) => (
          <RecommendMovieItem key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
