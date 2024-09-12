import MovieContainer from "@/components/movie-container";
import RecommendMovieContainer from "@/components/recommend-movie-container";
import SearchLayout from "@/components/search-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="mt-6">
      <RecommendMovieContainer />
      <MovieContainer />
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
