"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items (SERVICES moved after ABOUT)
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "", hasSubmenu: true }, // Empty path for dropdown trigger
    { name: "ACHIEVEMENTS", path: "/achievements" },
    { name: "CONTACT", path: "/contact" },
    { name: "CAREERS", path: "/careers" },
  ];

  const serviceItems = [
    { name: "IT SECURITY SOLUTION", path: "/itsecurity" },
    { name: "EXAM ASSESSMENTS", path: "/examassessmnets" },
    { name: "EXAM INFRASTRUCTURE", path: "/examinfra" },
    { name: "EXAM SUPPORT", path: "/examsupport" },
    { name: "EXAM STATIONERY & LOGISTIC", path: "/examlogistic" },
    { name: "VALUE ADDED SERVICES", path: "/valueadded" },
    { name: "EXAM SECURITY", path: "/examsecurity" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "Software Development", path: "/softwaredevelopment" },
  ];

  // Check active states
  const isMenuActive = (path) => pathname === path;
  const isServicesActive = serviceItems.some((item) => pathname === item.path);

  return (
    <header>
      {/* Top Contact Bar */}
      <div className="bg-white w-full border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
          <div className="flex items-center gap-2 mx-auto md:col-span-3 text-center">
            <i className="bi bi-envelope text-[#553CDE] text-xl"></i>
            <p className="text-gray-600 text-sm">
              contact@panchsofttechnologies.com
            </p>
          </div>
          <div className="flex items-center gap-2 md:col-span-3 mx-auto text-center">
            <i className="bi bi-telephone text-[#553CDE] text-xl"></i>
            <p className="text-gray-600 text-sm">+91 70087 91822</p>
          </div>
          <div className="hidden md:block md:col-span-4"></div>
          <div className="flex justify-center md:justify-end gap-4 md:col-span-2">
            <Link href="#">
              <i className="bi bi-facebook text-[#553CDE] text-lg"></i>
            </Link>
            <Link href="#">
              <i className="bi bi-instagram text-[#553CDE] text-lg"></i>
            </Link>
            <Link href="#">
              <i className="bi bi-twitter-x text-[#553CDE] text-lg"></i>
            </Link>
            <Link href="#">
              <i className="bi bi-linkedin text-[#553CDE] text-lg"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Logo + Navigation + Search */}
      <div className="grid grid-cols-12 gap-4 items-center px-4 py-2 bg-white border-b border-gray-300">
        <div className="col-span-6 md:col-span-2 flex justify-start">
          <Link href="/">
            <img
              src="../../../images/logo.png"
              alt="Logo"
              className="w-30 h-auto"
            />
          </Link>
        </div>
        <div className="col-span-6 flex justify-end lg:hidden">
          <button onClick={toggleMenu} className="text-[#553CDE] text-2xl">
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
        <div
          className={`col-span-12 lg:col-span-7 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block text-center mx-auto`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 font-semibold p-4 md:p-0 bg-white md:bg-transparent text-left w-full">
              {menuItems.map((item) =>
                item.hasSubmenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={`font-semibold py-2 px-2 w-full md:w-auto text-left ${
                        isServicesActive
                          ? "text-[#553CDE] bg-indigo-100 md:bg-transparent"
                          : "hover:text-[#553CDE]"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:absolute left-0 md:w-56 bg-white shadow-md z-10">
                      <ul className="p-4 grid gap-2">
                        {serviceItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink
                              className={`font-medium block p-2 rounded ${
                                isMenuActive(subItem.path)
                                  ? "bg-indigo-100 text-[#553CDE]"
                                  : "hover:bg-indigo-100"
                              }`}
                              href={subItem.path}
                            >
                              {subItem.name}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={`font-semibold block py-2 px-2 ${
                        isMenuActive(item.path)
                          ? "text-[#553CDE] bg-indigo-100 md:bg-transparent"
                          : "hover:text-[#553CDE]"
                      }`}
                      href={item.path}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="col-span-12 md:col-span-3 flex gap-1">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-indigo-700 rounded-md w-full"
            />
            <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-700"></i>
          </div>
          <Button className="bg-indigo-700 hover:bg-indigo-800 cursor-pointer">
            <i className="bi bi-search text-white"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
