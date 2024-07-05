"use client";

import { usePathname } from "next/navigation";
import { MdNotifications, MdSearch } from "react-icons/md";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div>
    <div className="flex h-16 w-full max-w-[99%] bg-slate-700 p-4 justify-between rounded">
      <div className="first-letter:uppercase self-center">
          {pathname.split("/").pop()}
      </div>
      <div className="flex first-letter:uppercase items-center rounded bg-slate-600 h-8 ml-4 gap-2">
        <MdSearch size={20} className="ml-2"/>
        <input type="text" className="bg-transparent self-center" placeholder="Buscar"/>
        <div className="flex first-letter:uppercase items-center bg-slate-700 h-8 pl-4">
          <MdNotifications size={20}/>
        </div>
      </div>
    </div>
    </div>
  );
}
