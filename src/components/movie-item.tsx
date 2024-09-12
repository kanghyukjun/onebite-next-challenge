import { MovieData } from "@/types";
import Link from "next/link";

interface MovieItemProps {
  movie: MovieData;
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <img src={movie.posterImgUrl} width="145" />
    </Link>
  );
}
