import { useRouter } from "next/router";
import dummy from "@/constants/dummy.json";

const getMovieDetail = (id: number) => {
  return dummy.find((movie) => movie.id === id);
};

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const movie = id ? getMovieDetail(+id) : null;

  return (
    <>
      {movie && (
        <>
          {/* 이미지 */}
          <div className="mt-5 h-96 relative w-full flex items-center justify-center overflow-hidden">
            <img src={movie.posterImgUrl} width="200" className="z-10" />
            <img
              src={movie.posterImgUrl}
              width="100%"
              className="object-cover absolute opacity-20"
            />
          </div>
          {/* 글 */}
          <div className="space-y-2 mb-4">
            <p className="text-xl">{movie.title}</p>
            <p>
              {movie.releaseDate} / {movie.genres.join(", ")} / {movie.runtime}
              분
            </p>
            <p>{movie.company}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">{movie.subTitle}</p>
            <p>{movie.description}</p>
          </div>
        </>
      )}
    </>
  );
}
