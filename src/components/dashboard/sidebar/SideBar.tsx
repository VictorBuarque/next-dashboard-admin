"use client";

import Link from "next/link";
import { useState } from "react";
import { MdAccountCircle, MdArrowDropDownCircle } from "react-icons/md";
import { sideBarMenu } from "@/data/sideBarData";

const SideBar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title)
        ? prev.filter((cat) => cat !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between rounded">
      <div>
        <div className="flex items-center p-4 h-16 hover:bg-gray-100 dark:hover:bg-zinc-800/30 self-center">
          <MdAccountCircle size={20} />
          <span className="ml-4 font-semibold">Victor Gabriel</span>
        </div>
        {sideBarMenu.map((category) => (
          <div key={category.title}>
            <div
              className="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-zinc-800/30 cursor-pointer"
              onClick={() => toggleCategory(category.title)}
            >
              <p className="text-sm font-semibold">{category.title}</p>
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <MdArrowDropDownCircle
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    expandedCategories.includes(category.title)
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>
            </div>
            {expandedCategories.includes(category.title) && (
              <ul>
                {category.list.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-zinc-800/30">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="ml-4 font-semibold">{item.title}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="block m-4">PlayOnn</div>
    </div>
  );
};

export default SideBar;
