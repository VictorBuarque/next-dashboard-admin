import NavBar from "@/components/dashboard/navbar/NavBar";
import SideBar from "@/components/dashboard/sidebar/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-w-screen min-h-screen bg-white text-black py-4">
      <div className="w-[15%]">
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
