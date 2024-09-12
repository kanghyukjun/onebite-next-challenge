import { useRouter } from "next/router";
import { KeyboardEvent, ReactNode, useState } from "react";

interface SearchLayoutProps {
  children?: ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  const [value, setValue] = useState("");

  const router = useRouter();

  const handleClickButton = () => {
    router.push(`/search?q=${value}`);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickButton();
    }
  };

  return (
    <div>
      <div className="w-full flex gap-2 mt-5">
        <input
          className="flex-grow outline-none border-[#434343] border-2 bg-transparent px-3 h-12 rounded-md text-xs"
          placeholder="검색어를 입력하세요..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeydown}
        />

        <button
          className="p-2 w-20 border-none rounded-md bg-[#434343] h-12 whitespace-nowrap text-xs"
          onClick={handleClickButton}
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
}
