import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const CallToActionSection = (): JSX.Element => {
  // Service links data
  const serviceLinks = [
    { title: "빈집탐색" },
    { title: "비용예측" },
    { title: "정책연계" },
    { title: "정착지원" },
  ];

  // Support links data
  const supportLinks = [
    { title: "이용가이드" },
    { title: "고객센터" },
    { title: "FAQ" },
  ];

  // Team members data
  const teamMembers = [
    { name: "권기은" },
    { name: "김시헌" },
    { name: "김온유" },
    { name: "임지홍" },
  ];

  return (
    <footer className="w-full bg-secondary-01">
      <div className="container mx-auto flex flex-col items-center gap-2.5 py-2.5">
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex w-full items-start justify-between px-5 py-[30px]">
            {/* Brand section */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-fit text-primary-0-1relive text-[length:var(--RE-LIVE-h3-font-size)] text-center tracking-[var(--RE-LIVE-h3-letter-spacing)] whitespace-nowrap mt-[-1.00px] font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
                RE:LIVE
              </div>
              <div className="w-fit font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] text-[#ffffff] text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] leading-[var(--RE-LIVE-h3-line-height)] whitespace-nowrap [font-style:var(--RE-LIVE-h3-font-style)]">
                빈집을 기회로, 청년 정착을 현실로
              </div>
            </div>

            {/* Links section */}
            <div className="inline-flex items-start gap-[95px]">
              {/* Service links */}
              <div className="flex flex-col items-start gap-2.5">
                <div className="self-stretch mt-[-1.00px] font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] text-primary-0-1relive text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
                  서비스
                </div>
                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                  {serviceLinks.map((link, index) => (
                    <div
                      key={`service-link-${index}`}
                      className={`self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-RE-LIVE-body1 font-[number:var(--RE-LIVE-body1-font-weight)] text-[#ffffff] text-[length:var(--RE-LIVE-body1-font-size)] tracking-[var(--RE-LIVE-body1-letter-spacing)] leading-[var(--RE-LIVE-body1-line-height)] [font-style:var(--RE-LIVE-body1-font-style)] cursor-pointer hover:text-primary-0-1relive transition-colors`}
                    >
                      {link.title}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support links */}
              <div className="flex flex-col items-start gap-2.5">
                <div className="self-stretch mt-[-1.00px] font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] text-primary-0-1relive text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
                  지원
                </div>
                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                  {supportLinks.map((link, index) => (
                    <div
                      key={`support-link-${index}`}
                      className={`self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-RE-LIVE-body1 font-[number:var(--RE-LIVE-body1-font-weight)] text-[#ffffff] text-[length:var(--RE-LIVE-body1-font-size)] tracking-[var(--RE-LIVE-body1-letter-spacing)] leading-[var(--RE-LIVE-body1-line-height)] [font-style:var(--RE-LIVE-body1-font-style)] cursor-pointer hover:text-primary-0-1relive transition-colors`}
                    >
                      {link.title}
                    </div>
                  ))}
                </div>
              </div>

              {/* Team members */}
              <div className="flex flex-col items-start gap-2.5">
                <div className="self-stretch text-primary-0-1relive text-[length:var(--RE-LIVE-h3-font-size)] tracking-[var(--RE-LIVE-h3-letter-spacing)] mt-[-1.00px] font-RE-LIVE-h3 font-[number:var(--RE-LIVE-h3-font-weight)] leading-[var(--RE-LIVE-h3-line-height)] [font-style:var(--RE-LIVE-h3-font-style)]">
                  RE:LIVE팀
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  {teamMembers.map((member, index) => (
                    <div
                      key={`team-member-${index}`}
                      className={`self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-RE-LIVE-body1 font-[number:var(--RE-LIVE-body1-font-weight)] text-[#ffffff] text-[length:var(--RE-LIVE-body1-font-size)] tracking-[var(--RE-LIVE-body1-letter-spacing)] leading-[var(--RE-LIVE-body1-line-height)] [font-style:var(--RE-LIVE-body1-font-style)]`}
                    >
                      {member.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator className="w-full bg-white/20" />
        </div>

        <div className="self-stretch font-RE-LIVE-body2 font-[number:var(--RE-LIVE-body2-font-weight)] text-primary-03 text-[length:var(--RE-LIVE-body2-font-size)] text-center tracking-[var(--RE-LIVE-body2-letter-spacing)] leading-[var(--RE-LIVE-body2-line-height)] [font-style:var(--RE-LIVE-body2-font-style)]">
          © 2025 RE:LIVE Team. K-디지털 트레이닝 해커톤 출품작
        </div>
      </div>
    </footer>
  );
};
