import Link from "next/link";
import React from "react";
import { cardsMenu } from "@/data/cardsData";

export default function Card() {
  return (
    <div className="flex flex-wrap w-full gap-4">
      {cardsMenu.map((item) => (
        <div
          key={item.title}
          className="flex px-4 pb-2 bg-slate-200 rounded flex-1"
        >
          {item.list.map((subItem) => (
            <div key={subItem.href} className="flex flex-wrap w-full capitalize">
              <div className="flex flex-col text-center mt-2.5 w-full justify-center">
                <div className="self-center">{subItem.icon}</div>
                <p className=" font-semibold text-[12px]  xl:mt-0 xl:text-base">
                  {item.title}
                </p>
                <p className="my-4  font-semibold text-[12px] xl:text-base">
                  {subItem.count}
                </p>
                <div className="bg-slate-600 justify-center cursor-pointer items-center self-center w-full rounded ">
                  <Link href={subItem.href}>
                    <p className="text-green-300 font-semibold text-[12px] xl:text-lg text-center">
                      {subItem.subText}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
