
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelp, MdLogout, MdPeopleOutline, MdSettings, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md";

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
        title: "Usuários",
        href: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Produtos",
        href: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transações",
        href: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Receitas",
        href: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        href: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Equipe",
        href: "/dashboard/teams",
        icon: <MdPeopleOutline />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        href: "/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        href: "/help",
        icon: <MdHelp />,
      },
      {
        title: "Logout",
        href: "/logout",
        icon: <MdLogout />,
      },
    ],
  },
];
