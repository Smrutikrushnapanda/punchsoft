"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function InnerHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [pageName, setPageName] = useState("Page");
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "", hasSubmenu: true },
    { name: "ACHIEVEMENTS", path: "/achievements" },
    { name: "CONTACT", path: "/contact" },
    { name: "CAREERS", path: "/careers" },
    { name: "Search Result", path: "/SearchResult" },
    { name: "Terms and Condition", path: "/terms-condition" },
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

  useEffect(() => {
    // Only run after mount (client-side only)
    const breadcrumbs = [{ name: "Home", path: "/" }];
    let currentPage = "Page Not Found";

    const activeMenuItem = menuItems.find((item) => item.path === pathname);
    const activeServiceItem = serviceItems.find(
      (item) => item.path === pathname
    );

    if (activeMenuItem && !activeMenuItem.hasSubmenu) {
      currentPage = activeMenuItem.name;
      breadcrumbs.push({ name: currentPage, path: pathname });
    } else if (activeServiceItem) {
      currentPage = activeServiceItem.name;
      breadcrumbs.push({ name: "SERVICES", path: "" });
      breadcrumbs.push({ name: currentPage, path: pathname });
    }

    setPageName(currentPage);
    setBreadcrumbItems(breadcrumbs);
    setMounted(true);
  }, [pathname]);

  // Prevent rendering on server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className="h-[200px] w-full flex flex-col justify-center items-center bg-cover bg-center text-white text-4xl font-bold"
      style={{ backgroundImage: "url('/images/inner-banner.png')" }}
    >
      <h3 className="flex items-center justify-center text-3xl mb-5 font-semibold uppercase">
        <span className="mr-2">~</span>
        {pageName}
        <span className="ml-2">~</span>
      </h3>

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <BreadcrumbItem>
                {index === breadcrumbItems.length - 1 ? (
                  <BreadcrumbPage className="text-white">
                    {item.name}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.path}
                    className="text-white hover:text-indigo-300"
                  >
                    {item.name}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default InnerHeader;
