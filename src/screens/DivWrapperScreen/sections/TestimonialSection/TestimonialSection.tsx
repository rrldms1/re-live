import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  // Data for feature cards
  const features = [
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/image-photoroom.png",
      title: "정책 연계",
      description:
        "국토부, 농식품부 등 실제 정부 정책과 연결된 실현 가능한 솔루션",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/image-photoroom--1-.png",
      title: "데이터 기반",
      description: "공공데이터를 활용한 객관적이고 신뢰할 수 있는 정보 제공",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/image-photoroom--2-.png",
      title: "개인 맞춤",
      description: "당신의 조건과 꿈에 맞는 맞춤형 정착 경로 설계",
    },
    {
      icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/image-photoroom--3-.png",
      title: "지속 지원",
      description: "일회성이 아닌, 정착부터 성장까지 함께하는 장기 파트너",
    },
  ];

  return (
    <section className="flex flex-col items-center py-7 px-[120px] bg-primary-02">
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-[5px] max-w-[734px]">
          <h2 className="text-primary-03 text-[length:var(--RE-LIVE-h2-font-size)] text-center tracking-[var(--RE-LIVE-h2-letter-spacing)] font-RE-LIVE-h2 font-[number:var(--RE-LIVE-h2-font-weight)] leading-[var(--RE-LIVE-h2-line-height)] [font-style:var(--RE-LIVE-h2-font-style)]">
            RE:LIVE가 특별한 이유
          </h2>
          <p className="font-RE-LIVE-body1 font-[number:var(--RE-LIVE-body1-font-weight)] text-neutral-03 text-[length:var(--RE-LIVE-body1-font-size)] text-center tracking-[var(--RE-LIVE-body1-letter-spacing)] leading-[var(--RE-LIVE-body1-line-height)] [font-style:var(--RE-LIVE-body1-font-style)]">
            정책과 데이터를 연결해, 청년의 새로운 정착을 현실로 만드는 RE:LIVE
          </p>
        </div>

        <div className="flex items-center justify-center gap-[50px] w-full flex-wrap">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-[232px] bg-[#fdfdfb4c] rounded-[10px] border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-[9px] p-5">
                <div className="flex items-center justify-center gap-[9px] w-[180px]">
                  <img
                    className="w-5 h-5"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <span className="font-RE-LIVE-body1-button font-[number:var(--RE-LIVE-body1-button-font-weight)] text-neutral-04 text-[length:var(--RE-LIVE-body1-button-font-size)] text-center tracking-[var(--RE-LIVE-body1-button-letter-spacing)] leading-[var(--RE-LIVE-body1-button-line-height)] [font-style:var(--RE-LIVE-body1-button-font-style)]">
                    {feature.title}
                  </span>
                </div>
                <p className="w-[180px] font-RE-LIVE-body2 font-[number:var(--RE-LIVE-body2-font-weight)] text-neutral-03 text-[length:var(--RE-LIVE-body2-font-size)] text-center tracking-[var(--RE-LIVE-body2-letter-spacing)] leading-[var(--RE-LIVE-body2-line-height)] [font-style:var(--RE-LIVE-body2-font-style)]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
