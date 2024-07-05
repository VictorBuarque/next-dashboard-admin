import { MdOutlineSignalWifi4Bar, MdSignalWifiStatusbar2Bar, MdSignalWifiConnectedNoInternet0 } from "react-icons/md";

export type iCardMenu = {
  title: string;
  count: number;
  href: string;
  icon: JSX.Element;
};

export const cardsMenu = [
    {
      title: "Nº de Terminais Atualizados",
      list: [
        {
          count: 3000,
          href: "/dashboard/terminals",
          icon: <MdOutlineSignalWifi4Bar size={25} />,
          subText: "Visualizar usuários"
        },
        ],
    },
    {
      title: "Nº de Terminais Parcialmente Atualizados",
      list: [
        {
          count: 2000,
          href: "/dashboard/terminals",
          icon: <MdSignalWifiStatusbar2Bar size={25} />,
          subText: "Visualizar Terminais"
        },
        ],
    },
    {
      title: "Nº de Terminais Desatualizados",
      list: [
        {
          count: 1000,
          href: "/dashboard/terminals",
          icon: <MdSignalWifiConnectedNoInternet0 size={25} />,
          subText: "Visualizar terminais"
        },
        ],
    },
];