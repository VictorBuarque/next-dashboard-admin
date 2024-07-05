
import { MdDashboard, MdLogout } from "react-icons/md";

export type iSideBarMenu = {
  title: string;
  href: string;
  icon: JSX.Element;
};

export const sideBarMenu = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Contatos",
        href: "/dashboard/contacts",
        icon: <MdDashboard />,
      },
      {
        title: "Clientes",
        href: "/dashboard/clients",
        icon: <MdDashboard />,
      },
      {
        title: "Redes",
        href: "/dashboard/store-network",
        icon: <MdDashboard />,
      },
      {
        title: "Lojas",
        href: "/dashboard/stores",
        icon: <MdDashboard />,
      },
      {
        title: "Terminais",
        href: "/dashboard/terminals",
        icon: <MdDashboard />,
      },
      {
        title: "Conteúdos",
        href: "/dashboard/store-network",
        icon: <MdDashboard />,
      },
      {
        title: "Playlists",
        href: "/dashboard/playlists",
        icon: <MdDashboard />,
      },
      {
        title: "Agendamentos",
        href: "/dashboard/schedules",
        icon: <MdDashboard />,
      },
      {
        title: "Usuários",
        href: "/dashboard/users",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Reports",
        href: "/dashboard/reports",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Logout",
        href: "/logout",
        icon: <MdLogout />,
      },
    ],
  },
];
