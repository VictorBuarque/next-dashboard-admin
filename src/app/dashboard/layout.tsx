import NavBar from "@/components/dashboard/navbar/NavBar";
import SideBar from "@/components/dashboard/sidebar/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-slate-800 py-4">
      <div className="w-[20%]   ">
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
