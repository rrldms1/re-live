import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "서비스" },
    { text: "체험하기" },
    { text: "소개" },
    { text: "문의" },
  ];

  return (
    <header className="bg-primary-03 shadow-[0px_4px_4px_#00000040] w-full sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-3 max-w-[1440px] mx-auto h-16 md:h-20">
        {/* Logo - 1:1 ratio, minimum 24px */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            alt="RE:LIVE Logo"
            src="https://c.animaapp.com/me2l2irqy4oKYt/img/android-chrome-512x512-photoroom-2.png"
          />
        </div>

        {/* Navigation Menu - Hidden on mobile, visible on tablet+ */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-8 lg:gap-12 xl:gap-16">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-sans font-normal text-neutral-01 text-sm lg:text-base hover:text-primary-02 transition-colors cursor-pointer">
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - Visible only on mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-10 h-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>

        {/* CTA Button - Hidden on mobile, visible on tablet+ */}
        <a
  href="http://localhost:5173/"
  className="hidden md:flex px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-[linear-gradient(90deg,rgba(168,230,207,1)_0%,rgba(135,206,235,1)_100%)] hover:opacity-90 transition-opacity text-sm lg:text-base"
>
  <span className="font-sans font-bold text-white whitespace-nowrap">
    정착 여정 시작하기
  </span>
</a>
      </div>
    </header>
  );
};
