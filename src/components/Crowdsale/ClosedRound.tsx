import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Progress } from "../ui/progress";
import { Claim } from "./Claim";

interface IProps {
  round: string;
  completed: boolean;
  total?: string;
  price?: string;
  goal?: string;
  date?: string;
  id:number;
}
export function ClosedRound(props: IProps) {
  return (
    <Accordion type="single" collapsible className="border-0">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="px-6 text-gray-700 bg-slate-950/95 shadow gap-3 hover:no-underline rounded-2xl border-0 no-underline">
          <div className="flex gap-3">
            {" "}
            <h1 className="font-bold text-slate-200 text-xl no-underline">
              {props.round}
            </h1>{" "}
            {props.completed && (
              <span className="bg-gradient-to-r from-cyan-300 to-teal-400 text-gray-700 px-2 py-[2px] flex items-center rounded-md text-[10px]">
                CLOSED
              </span>
            )}
            {!props.completed && (
              <span className="bg-gray-800-600 text-white px-2 py-[2px] flex items-center rounded-md text-[10px]">
                {props.date}
              </span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-slate-950/95 text-slate-300 p-4 px-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-slate-300 font-bold text-3xl">{props.total}</h1>

            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-start items-start text-slate-300 text-sm font-semibold">
                {props.completed ? "Previous" : "Next"} Price{" "}
                <span className="font-normal">{props.price}</span>
              </div>
              <div className="flex flex-col justify-start items-end text-slate-300 text-sm font-semibold">
                Goal to reach <span className="font-normal">{props.goal}</span>
              </div>
            </div>
            <div>
              <Progress value={props.completed ? 100 : 0} />
            </div>
            <Claim roundId={props.id}/>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
