import {
  AccountAccordingItems,
  BonusesAccordingItems,
  GamesAccordingItems,
  GeneralAccordingItems,
  SupportAccordingItems,
} from "@/data/according";
import { DynamicAccordion } from "./DynamicAccordion";

function Section9() {
  const accordionSections = [
    { title: "General Questions", items: GeneralAccordingItems },
    { title: "Account and Payments", items: AccountAccordingItems },
    { title: "Games and Betting", items: GamesAccordingItems },
    { title: "Bonuses and Promotions", items: BonusesAccordingItems },
    { title: "Support", items: SupportAccordingItems },
  ];

  return (
    <section className="flex flex-col items-center px-5 pb-[50px] gap-5 bg-[] xl:py-[100px] xl:pb-28">
      <h1 className="flex flex-col items-center text-[40px] leading-[44px] text-center xl:text-[70px] font-bold xl:leading-[77px] headline-gradient-2">
        Frequently Asked Questions
      </h1>

      <img
        src="/assets/Group-513.svg"
        alt="Decorative Divider"
        className="hidden xl:block xl:mb-[100px] xl:w-[739px] xl:h-[92px]"
        loading="lazy"
      />

      <div className="flex flex-col w-[330px] xl:w-[1250px] 2xl:w-[1330px]">
        {accordionSections.map((section, index) => (
          <div key={index} className="mt-10">
            <h2 className="text-[20px] xl:text-[35px] xl:leading-[35px] font-bold headline-gradient-3">
              {section.title}
            </h2>
            <DynamicAccordion
              titleClassName="text-[14px] xl:text-[20px] font-medium"
              contentClassName="text-[14px] xl:text-[20px] font-light"
              items={section.items}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section9;
