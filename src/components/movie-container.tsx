import dummy from "@/constants/dummy.json";
import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

export default function MovieContainer() {
  return (
    <div className="mt-10">
      <h1 className="font-semibold mb-3">등록된 모든 영화</h1>
      <div className="w-full flex flex-wrap gap-2">
        {dummy.map((movie: MovieData) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
