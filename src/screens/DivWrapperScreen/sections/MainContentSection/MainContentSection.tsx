import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const MainContentSection = (): JSX.Element => {
  const [showResult, setShowResult] = useState(false);

  const scrollToService = () => {
    document.getElementById("service-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefitCards = [
    { title: "평균 250만원", description: "정책 혜택" },
    { title: "최대 70%", description: "리모델링 절약" },
    { title: "3분", description: "맞춤 결과" },
  ];

  const formFields = [
    { id: "age", label: "나이", options: ["선택하세요","25세 이하","26-30세","31-35세","36세 이상"] },
    { id: "income", label: "월소득 (만원)", options: ["선택하세요","150만원 이하","150-250만원","250-350만원","350-500만원","500만원 이상"] },
    { id: "region", label: "희망 지역", options: ["선택하세요","수도권","충청권","강원권","호남권","영남권","제주권"] },
    { id: "budget", label: "리모델링 예산 (만원)", options: ["선택하세요","50만원 이하","50-500만원","500-1,000만원","1,000-1,500만원","1,500만원 이상"] },
  ];

  return (
    <section className="w-full bg-[#eaf4f980] py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto flex items-start gap-10 md:gap-14 px-6 md:px-0">

        {/* 왼쪽 영역 */}
        <div className="w-full md:w-[620px] flex flex-col gap-8">
          {/* 큰 헤드라인 */}
          <div className="space-y-3">
            <h1 className="leading-[1.3] text-[40px] md:text-[56px] font-extrabold tracking-[-0.02em]">
              <span className="block bg-gradient-to-r from-[#9FE6D6] to-[#3a5e9b] bg-clip-text text-transparent">빈집을 기회로,</span>
              <span className="block text-neutral-01">청년 정착을 현실로</span>
            </h1>
            <p className="font-RE-LIVE-body1 text-neutral-02 max-w-[560px]">
              153만 채 빈집과 2200개+ 정부 정책을 연결해 <br />나만의 정착 경로를 설계합니다.
            </p>
          </div>

          {/* 지표 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {benefitCards.map((c, i) => (
              <Card key={i} className="bg-white/70 backdrop-blur rounded-2xl border-none shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <CardContent className="px-6 py-5 flex flex-col items-center">
                  <div className="[font-family:'Pretendard',Helvetica] text-[#3a5e9b] text-2xl md:text-[26px] font-bold whitespace-nowrap">
                    {c.title}
                  </div>
                  <div className="mt-1 text-neutral-02 text-sm"> {c.description} </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 버튼 2개 */}
          <div className="flex gap-5 pt-1">
            <a
  href="http://localhost:5173/"
  className="h-12 px-6 rounded-[30px] bg-[#3a5e9b] text-white shadow hover:opacity-90 flex items-center justify-center"
>
  나의 정착지 찾기
</a>
            <Button
              variant="outline"
              onClick={scrollToService}
              className="h-12 px-6 rounded-[30px] bg-white border border-[#3a5e9b] text-[#3a5e9b] shadow-sm hover:bg-[#e6f0fa]"
            >
              서비스 둘러보기
            </Button>
          </div>
        </div>

        {/* 오른쪽 폼 카드 */}
        <Card className="w-full md:w-[540px] rounded-2xl border-none shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white">
          <CardContent className="p-6 md:p-7 flex flex-col gap-6">
            {/* 카드 타이틀 */}
            <div className="flex items-center gap-3 justify-center">
              <span className="text-2xl">💡</span>
              <h3 className="[font-family:'Pretendard',Helvetica] text-neutral-01 text-[26px] md:text-[28px] font-bold">
                바로 확인해보세요
              </h3>
            </div>
            <p className="text-center text-neutral-02 text-sm -mt-2">
              간단한 정보 입력으로 맞춤 추천을 받아보세요
            </p>

            {/* 폼 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formFields.map((field, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-01">{field.label}</label>
                  <Select>
                    <SelectTrigger className="h-10 w-full px-3 bg-[#f3f5f9] rounded-lg border-none">
                      <SelectValue placeholder="선택하세요" className="placeholder:text-[#c7ccd1]" />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((opt, i) => (
                        <SelectItem key={i} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            {/* 결과 버튼 */}
            <Button
              className="mt-2 h-11 rounded-[16px] 
             bg-[linear-gradient(90deg,rgba(229,255,245,1)_0%,rgba(168,230,207,1)_100%)] 
             text-white transition-all duration-300 
             hover:bg-[linear-gradient(90deg,rgba(200,240,230,1)_0%,rgba(140,210,180,1)_100%)]"
              onClick={() => setShowResult(true)}
            >
              나의 맞춤 결과
            </Button>

            {/* 간단 결과 (옵션) */}
            {showResult && (
              <div className="mt-2 w-full rounded-lg p-5 flex flex-col gap-4 bg-[#f0f8ff]">
                <div className="text-neutral-01 font-extrabold text-lg">당신을 위한 맞춤 결과</div>

                {/* 추천 지역 */}
                <div className="flex justify-between text-sm bg-white rounded-md px-4 py-2 shadow-sm">
                  <span className="text-[#2c3e50] font-semibold">추천 지역:</span>
                  <span className="font-bold text-[#2c3e50]">
                    강진군 <span className="text-green-600 font-extrabold">87% 매칭</span>
                  </span>
                </div>

                {/* 예상 정책 혜택 */}
                <div className="flex justify-between text-sm bg-white rounded-md px-4 py-2 shadow-sm">
                  <span className="text-[#2c3e50] font-semibold">예상 정책 혜택:</span>
                  <span className="font-semibold text-[#3a5e9b]">
                    1,000 <span className="font-extrabold">만원</span>
                  </span>
                </div>

                {/* 리모델링 예상 비용 */}
                <div className="flex justify-between text-sm bg-white rounded-md px-4 py-2 shadow-sm">
                  <span className="text-[#2c3e50] font-semibold">리모델링 예상 비용:</span>
                  <span className="font-semibold text-[#ff9900]">
                    200 <span className="font-extrabold">만원</span>
                  </span>
                </div>

                {/* 메시지 박스 */}
                <div className="bg-gradient-to-r from-[#9FE6D6] to-[#3a5e9b] rounded-md p-3 text-center text-white font-medium">
                  🎉 추천 지역에서 안정적인 정착이 가능합니다!
                </div>

                {/* 버튼 */}
                <Button className="w-full h-10 bg-primary-02 text-white rounded-md hover:opacity-90">
                  상세 정보 보기
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
