import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Policy recommendation data
const policyRecommendations = [
  {
    id: 1,
    icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/streamline-plump-graduation-cap-solid.svg",
    title: "청년 전세 임대주택",
    description: "대학생 및 사회초년생을 위한 저렴한 전세임대 주택 프로그램",
    priorityLabel: "추천",
    priorityColor: "bg-green-50 text-[#2e7d32]",
    matchPercentage: "95%",
    statusIcon: "https://c.animaapp.com/me2l2irqy4oKYt/img/material-symbols-star-rounded.svg",
    statusBg: "https://c.animaapp.com/me2l2irqy4oKYt/img/material-symbols-circle.svg",
  },
  {
    id: 2,
    icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/mingcute-pig-money-fill.svg",
    title: "청년 주거안정 월세대출",
    description: "월세 부담을 덜어주는 저금리 월세대출 지원 프로그램",
    priorityLabel: "높음",
    priorityColor: "bg-[#d9534f33] text-status-04",
    matchPercentage: "88%",
    statusIcon: "https://c.animaapp.com/me2l2irqy4oKYt/img/mdi-check-bold.svg",
    statusBg: "https://c.animaapp.com/me2l2irqy4oKYt/img/material-symbols-circle.svg",
  },
  {
    id: 3,
    icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/bxs-home.svg",
    title: "신혼부부 특별공급",
    description: "신혼부부를 위한 공공주택 특별공급 및 우선순위 혜택",
    priorityLabel: "보통",
    priorityColor: "bg-[#f0ad4e33] text-status-03",
    matchPercentage: "72%",
    statusIcon: "https://c.animaapp.com/me2l2irqy4oKYt/img/pepicons-pop-info.svg",
    statusBg: "https://c.animaapp.com/me2l2irqy4oKYt/img/material-symbols-circle.svg",
  },
  {
    id: 4,
    icon: "https://c.animaapp.com/me2l2irqy4oKYt/img/bxs-home.svg",
    title: "신혼부부 특별공급",
    description: "신혼부부를 위한 공공주택 특별공급 및 우선순위 혜택",
    priorityLabel: "보통",
    priorityColor: "bg-[#f0ad4e33] text-status-03",
    matchPercentage: "72%",
    statusIcon: "https://c.animaapp.com/me2l2irqy4oKYt/img/pepicons-pop-info.svg",
    statusBg: "https://c.animaapp.com/me2l2irqy4oKYt/img/material-symbols-circle.svg",
  },
];

export const FeatureListSection = (): JSX.Element => {
  return (
    <section className="w-full py-[50px] px-6 md:px-[120px] bg-primary-03">
      <div className="flex flex-col gap-[30px] max-w-[1200px] mx-auto">
        
        {/* 헤더 */}
        <div className="flex justify-between items-center">
          <h3 className="font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] text-neutral-01 text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
            맞춤 정책 제안
          </h3>
          <div className="flex items-center gap-2.5">
            <img
              className="w-6 h-6"
              alt="User check icon"
              src="https://c.animaapp.com/me2l2irqy4oKYt/img/bxs-user-check.svg"
            />
            <span className="font-RE-LIVE-body1 text-secondary-01 whitespace-nowrap">
              
            </span>
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {policyRecommendations.map((policy) => (
              <Card
                key={policy.id}
                className="border border-solid border-[#ecf0f1] bg-white rounded-lg flex-shrink-0 w-[280px]"
              >
                <CardContent className="p-6 flex flex-col gap-3 h-[300px]">
                  
                  {/* 메인 아이콘 + 상태 아이콘 */}
                  <div className="relative flex w-[53px] h-[55px] items-center justify-center rounded-[10px] bg-[linear-gradient(0deg,rgba(135,206,235,0.2)_0%,rgba(135,206,235,0.2)_100%)]">
                    <img
                      className="w-[27px] h-[27px]"
                      alt="Policy icon"
                      src={policy.icon}
                    />
                    <div className="h-[22px] w-[22px] absolute -top-2 -right-2">
                      <img
                        className="absolute w-[22px] h-[22px]"
                        alt="Status background"
                        src={policy.statusBg}
                      />
                      <img
                        className="absolute w-5 h-5 top-px left-px"
                        alt="Status icon"
                        src={policy.statusIcon}
                      /> 
                    </div>
                  </div>

                  {/* 설명 */}
                  <p className="text-sm text-neutral-02">
                    {policy.description}
                  </p>

                  {/* 배지 + 일치율 */}
                  <div className="flex items-center justify-between mt-auto">
                    <Badge className={`${policy.priorityColor} rounded-[10px] px-2 py-1 font-semibold text-sm`}>
                      {policy.priorityLabel}
                    </Badge>
                    <span className="font-semibold text-status-02 text-sm">
                      {policy.matchPercentage} 일치
                    </span>
                  </div>

                  {/* 버튼 */}
                  <Button
                    variant="outline"
                    className="w-full rounded-full border border-[#dfe6e9] text-neutral-02 flex items-center justify-center gap-2 mt-2"
                  >
                    자세히 보기
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
