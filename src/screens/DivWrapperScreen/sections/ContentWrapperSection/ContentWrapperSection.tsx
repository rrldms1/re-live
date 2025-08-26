import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Data for the step cards
  const stepCards = [
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/search.png",
      title: "1단계: 지역 탐색",
      description:
        "AI 기반 조건 매칭으로 153만 채 빈집 중에서 당신에게 최적의 위치를 찾아드립니다.",
      buttonText: "빈집 탐색하기",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/money.png",
      title: "2단계: 비용 예측",
      description:
        "머신러닝 기반으로 리모델링 비용을 정확히 예측하여 현실적인 계획을 세워보세요.",
      buttonText: "정착 예산 계산하기",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/target.png",
      title: "3단계: 정책 매칭",
      description:
        "개인 조건을 분석해 받을 수 있는 모든 정책 혜택을 자동으로 찾아 연결해드립니다.",
      buttonText: "정책 확인하기",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/support.png",
      title: "4단계: 정착 지원",
      description:
        "비용, 면적, 인프라, 정책 수혜 인사이트로 청년의 성공적인 이주와 정착을 돕습니다.",
      buttonText: "정착 설계 완성하기",
    },
  ];

  return (
    <section
      id="service-section"
      className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-neutral-04 w-full min-h-[600px] lg:min-h-[800px]"
    >
      <div className="flex flex-col items-center gap-12 lg:gap-16 xl:gap-20 max-w-[1440px] w-full">
        
        {/* Section Header */}
        <header className="flex flex-col items-center gap-4 lg:gap-6 text-center max-w-4xl">
          <h2 className="font-sans font-bold text-primary-02 text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
            살고 싶은 삶을 설계하다
          </h2>
          <p className="font-sans text-neutral-02 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl whitespace-nowrap">
            잠들어 있던 지역의 가능성을 깨우고 청년이 스스로 삶을 설계하며 머물 수 있는 새로운 여정을 시작합니다.
          </p>
        </header>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 w-full">
          {stepCards.map((card, index) => (
            <Card 
              key={index} 
              className="shadow-elevation-3 rounded-2xl border-none hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <CardContent className="flex flex-col items-center gap-6 lg:gap-8 p-6 lg:p-8 xl:p-10 h-full min-h-[400px] lg:min-h-[450px]">
                
                {/* Icon and Title */}
                <div className="flex flex-col items-center gap-6 lg:gap-8 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain"
                      alt={`Step ${index + 1} icon`}
                      src={card.icon}
                    />
                  </div>
                  
                  <h3 className="font-sans font-bold text-neutral-01 text-lg lg:text-xl xl:text-2xl tracking-tight leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-neutral-02 text-sm lg:text-base xl:text-lg text-center leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Button */}
                <Button className="w-full mt-auto rounded-full bg-[linear-gradient(90deg,rgba(168,230,207,1)_0%)] hover:bg-[linear-gradient(90deg,rgba(150,206,180,1)_0%)] transition-all duration-200 py-4 lg:py-5 min-h-[48px] lg:min-h-[56px] touch-manipulation">
                  <span className="font-sans font-bold text-sm lg:text-base xl:text-lg text-white">
                    {card.buttonText}
                  </span>
                </Button>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
