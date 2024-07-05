import NavBar from "@/components/dashboard/navbar/NavBar";
import SideBar from "@/components/dashboard/sidebar/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <div className="w-[20%] min-h-screen bg-slate-800 pt-4 pl-4">
            <SideBar />
        </div>
        <div className="pt-4 pl-4">
            <NavBar />
            {children}
        </div>
    </div>
  );
}
