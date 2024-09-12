import { MovieData } from "@/types";
import RecommendMovieItem from "./recommend-movie-item";
import dummy from "@/constants/dummy.json";

export default function RecommendMovieContainer() {
  return (
    <div>
      <h1 className="font-semibold mb-3">지금 가장 추천하는 영화</h1>
      <div className="w-full flex flex-wrap gap-1">
        {dummy.slice(0, 3).map((movie: MovieData) => (
          <RecommendMovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
