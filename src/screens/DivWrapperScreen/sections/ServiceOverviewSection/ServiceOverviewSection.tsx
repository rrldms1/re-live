import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ServiceOverviewSection = (): JSX.Element => {
  // Data for region cards
  const regionCards = [
    {
      id: 1,
      backgroundImage: "https://c.animaapp.com/me2l2irqy4oKYt/img/frame-76.png",
      badgeText: "성장 지역",
      region: "대구시 수성구",
      description: "교육 환경 우수, 신규 개발",
      averagePrice: "평균 전세 2.5억",
    },
    {
      id: 2,
      backgroundImage:
        "https://c.animaapp.com/me2l2irqy4oKYt/img/frame-76-1.png",
      badgeText: "신규 추천",
      region: "부산시 해운대구",
      description: "바다 인근, 관광업 발달 지역",
      averagePrice: "평균 전세 2.8억",
    },
    {
      id: 3,
      backgroundImage:
        "https://c.animaapp.com/me2l2irqy4oKYt/img/frame-76-4.png",
      badgeText: "인기 지역",
      region: "서울시 마포구",
      description: "청년 친화적 환경, 교통 접근성 우수",
      averagePrice: "평균 전세 3.2억",
    },
    {
      id: 4,
      backgroundImage:
        "https://c.animaapp.com/me2l2irqy4oKYt/img/frame-76-4.png",
      badgeText: "인기 지역",
      region: "전라남도 강진군",
      description: "청년 친화적 환경, 교통 접근성 우수",
      averagePrice: "평균 전세 3.2억",
    },
    {
      id: 5,
      backgroundImage:
        "https://c.animaapp.com/me2l2irqy4oKYt/img/frame-76-4.png",
      badgeText: "인기 지역",
      region: "서울시 마포구",
      description: "청년 친화적 환경, 교통 접근성 우수",
      averagePrice: "평균 전세 3.2억",
    },
  ];

  return (
    <section className="w-full py-[50px] px-6 md:px-[120px] bg-primary-03">
      <div className="flex flex-col items-center gap-[30px] max-w-[1200px] mx-auto">
        <h3 className="w-full font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] text-neutral-01 text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
          지역 리포트 미리보기
        </h3>

        <ScrollArea className="w-full">
          <div className="flex gap-10 pb-4">
            {regionCards.map((card) => (
              <Card
                key={card.id}
                className="flex-shrink-0 w-[270px] rounded-[20px] overflow-hidden bg-white"
              >
                <div
                  className="h-[135px] flex flex-col justify-end p-2.5 px-5"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <Badge className="w-fit bg-[#f7fcfa] text-[#5d737e] hover:bg-[#f7fcfa] rounded-[5px] px-[5px] py-px">
                    <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-[13px] tracking-[-0.26px] leading-6">
                      {card.badgeText}
                    </span>
                  </Badge>
                </div>

                <CardContent className="p-0 pb-2.5">
                  <div className="flex flex-col w-[218px] mx-auto items-start gap-[3px] mt-2.5">
                    <h4 className="w-full font-RE-LIVE-body1-button font-[number:var(--RE-LIVE-body1-button-font-weight)] text-neutral-01 text-[length:var(--RE-LIVE-body1-button-font-size)] tracking-[var(--RE-LIVE-body1-button-letter-spacing)] leading-[var(--RE-LIVE-body1-button-line-height)] [font-style:var(--RE-LIVE-body1-button-font-style)]">
                      {card.region}
                    </h4>

                    <p className="w-full font-RE-LIVE-body2 font-[number:var(--RE-LIVE-body2-font-weight)] text-neutral-02 text-[length:var(--RE-LIVE-body2-font-size)] tracking-[var(--RE-LIVE-body2-letter-spacing)] leading-[var(--RE-LIVE-body2-line-height)] [font-style:var(--RE-LIVE-body2-font-style)]">
                      {card.description}
                    </p>

                    <div className="flex items-center justify-between w-full">
                      <span className="font-RE-LIVE-caption font-[number:var(--RE-LIVE-caption-font-weight)] text-neutral-03 text-[length:var(--RE-LIVE-caption-font-size)] tracking-[var(--RE-LIVE-caption-letter-spacing)] leading-[var(--RE-LIVE-caption-line-height)] [font-style:var(--RE-LIVE-caption-font-style)]">
                        {card.averagePrice}
                      </span>

                      <div className="flex items-center gap-[5px] text-secondary-02">
                        <span className="font-RE-LIVE-caption font-[number:var(--RE-LIVE-caption-font-weight)] text-[length:var(--RE-LIVE-caption-font-size)] tracking-[var(--RE-LIVE-caption-letter-spacing)] leading-[var(--RE-LIVE-caption-line-height)] [font-style:var(--RE-LIVE-caption-font-style)]">
                          자세히
                        </span>
                        <span className="font-RE-LIVE-caption font-[number:var(--RE-LIVE-caption-font-weight)] text-[length:var(--RE-LIVE-caption-font-size)] tracking-[var(--RE-LIVE-caption-letter-spacing)] leading-[var(--RE-LIVE-caption-line-height)] [font-style:var(--RE-LIVE-caption-font-style)]">
                          --&gt;
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
