import { ReactNode } from "react";
import Header from "./header";

interface GlobalLayoutProps {
  children?: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="min-h-screen max-w-screen h-fit w-full bg-black">
      <div className="w-[800px] h-full mx-auto  text-white px-[20px]">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
