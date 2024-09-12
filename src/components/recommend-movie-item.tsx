import { MovieData } from "@/types";
import Link from "next/link";

interface RecommendMovieItemProps {
  movie: MovieData;
}

export default function RecommendMovieItem({ movie }: RecommendMovieItemProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <img src={movie.posterImgUrl} alt="" width="250" />
    </Link>
  );
}
