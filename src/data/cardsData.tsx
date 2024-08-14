import {
  MdSupervisedUserCircle,
} from "react-icons/md";

export type iCardMenu = {
  title: string;
  count: number;
  percentage: number;
  href: string;
  message: string;
  icon: JSX.Element;
};

export const cardsMenu = [
  {
    title: "Nº total de usuários",
    list: [
      {
        count: 3000,
        icon: <MdSupervisedUserCircle size={25} />,
        subText: "Visualizar usuários",
        href: "/dashboard/users",
        percentage: 12,
        message: "a mais do que semana passada",
      },
    ],
  },
  {
    title: "Nº de Total de usuários",
    list: [
      {
        count: 2000,
        icon: <MdSupervisedUserCircle size={25} />,
        subText: "Visualizar usuários",
        href: "/dashboard/users",
        percentage: 12,
        message: "a mais do que semana passada",
      },
    ],
  },
  {
    title: "Nº de Total de usuários",
    list: [
      {
        count: 1000,
        icon: <MdSupervisedUserCircle size={25} />,
        subText: "Visualizar usuários",
        href: "/dashboard/users",
        percentage: 12,
        message: "a mais do que semana passada",
      },
    ],
  },
];
