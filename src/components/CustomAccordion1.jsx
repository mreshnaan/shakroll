import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function CustomAccordion1() {
    return (
      <Accordion type="single" collapsible className="w-full text-[#FFF]  ">
        <AccordionItem value="item-1" className="border-[#FFF] border-b border-opacity-20 py-4">
          <AccordionTrigger >
            <div className="flex gap-3 items-center">
              <span className="text-[#003BD2] group-data-[state=open]:text-[#69EAFF]">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.376 9.912H13.928V21H12.376V9.912ZM16.6729 9.912H18.2249V21H16.6729V9.912Z" fill="currentColor" />
                  <circle cx="15.5" cy="15.5" r="14.5" stroke="currentColor" stroke-width="2" />
                </svg>
              </span>
  
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
  