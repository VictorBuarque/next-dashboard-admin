"use client";

import Link from "next/link";
import { useState } from "react";
import { MdAccountCircle, MdArrowDropDownCircle } from "react-icons/md";
import { sideBarMenu } from "@/data/sideBarData";

const SideBar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title)
        ? prev.filter((cat) => cat !== title)
        : [...prev, title]
    );
  };

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <div className="w-full h-[100%] flex flex-col justify-between rounded ">
      <div className="mx-2">
        <div className="flex items-center p-4 h-16 self-center">
          <MdAccountCircle size={30} />
          <div className="flex flex-col">
            <span className="ml-4 font-semibold">Victor Gabriel</span>
            <span className="ml-4 text-sm">Admin</span>
          </div>
        </div>
        {sideBarMenu.map((category) => (
          <div key={category.title}>
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:text-blue-500"
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
                  <li
                    key={item.href}
                    onClick={() => handleItemClick(item.href)}
                    className={`cursor-pointer ${
                      activeItem === item.href ? "bg-gray-50 text-blue-800 rounded  " : "hover:text-blue-500"
                    }`}
                  >
                    <Link href={item.href}>
                      <div className="flex items-center p-4">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span
                          className="ml-4 font-semibold "
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="block m-4">Dev Victor Buarque</div>
    </div>
  );
};

export default SideBar;
