import { MessageCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureListSection } from "./sections/FeatureListSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { TestimonialSection } from "./sections/TestimonialSection";

export const DivWrapperScreen = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full bg-[#ffffff]"
      data-model-id="4996:2813"
    >
      <HeaderSection />
      <MainContentSection />
      <ContentWrapperSection />
      <FeatureListSection />
      <ServiceOverviewSection />
      <TestimonialSection />
      <CallToActionSection />

      {/* Floating action buttons - Optimized for 1440px */}
      <div className="fixed flex flex-col items-start gap-6 lg:gap-8 bottom-6 lg:bottom-8 right-6 lg:right-8 z-50">
        <Button
          variant="default"
          size="icon"
          className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#ffffff] shadow-[0px_4px_4px_#00000040] p-0 hover:shadow-lg transition-shadow"
        >
          <MessageCircleIcon className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-black" />
        </Button>

        <Button
          variant="default"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#ffffff] shadow-[0px_4px_4px_#00000040] p-0 hover:shadow-lg transition-shadow"
        >
          <img
            className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            alt="Arrow up"
            src="https://c.animaapp.com/me2l2irqy4oKYt/img/fluent-ios-arrow-24-filled.svg"
          />
        </Button>
      </div>
    </main>
  );
};
