import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CustomAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full text-[#FFF]  ">
      <AccordionItem value="item-1" className="border-[#FFF] border-b border-opacity-20 py-4">
        <AccordionTrigger className="hover:text-[#69EAFF]">
          <div className="flex gap-3 items-center">
            <img src="/assets/RoamNo2.svg" alt="" className="mr-2 text-white h-[22px] w-[22px] xl:h-[32px] xl:w-[32px]" />
            <span className="text-[17px] font-bold leading-[18.7px] xl:text-[35px] xl:leading-[38.5px] ">  Prediction Systems</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
