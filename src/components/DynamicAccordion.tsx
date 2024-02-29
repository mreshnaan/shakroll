import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
type AccordionItem = {
  title: string;
  icon: JSX.Element;
  icon2?: JSX.Element;
  content: string | JSX.Element;
};

export function DynamicAccordion({
  items,
  titleClassName,
  iconClassName,
  contentClassName,
}: {
  items: AccordionItem[];
  titleClassName?: string;
  iconClassName?: string;
  contentClassName?: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-full text-[#FFF]">
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-[#FFF] border-b border-opacity-20 py-4"
        >
          <AccordionTrigger key={index}>
            <div className="flex gap-3 items-center">
              {/* <span
                className={cn(
                  `text-[#003BD2] group-data-[state=open]:text-[#69EAFF]`,
                  iconClassName
                )}
              >
                {isOpen && indexVal === index ? item.icon : item.icon2}
              </span> */}
              <span
                className={cn(
                  `text-[#003BD2] group-data-[state=open]:hidden group-data-[state=closed]:flex group-data-[state=open]:text-[#69EAFF]`,
                  iconClassName
                )}
              >
                {item.icon2}
              </span>
              <span
                className={cn(
                  `text-[#003BD2] group-data-[state=open]:flex group-data-[state=closed]:hidden group-data-[state=close]:text-[#69EAFF]`,
                  iconClassName
                )}
              >
                {item.icon}
              </span>
              <span
                className={cn(
                  `text-[17px] text-start pe-5 font-bold leading-[18.7px] xl:text-[35px] xl:leading-[38.5px]`,
                  titleClassName
                )}
              >
                {item.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className={cn("text-start", contentClassName)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
