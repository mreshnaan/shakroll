import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselApi,
    CarouselItem,
} from "@/components/ui/carousel"
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CustomCarousel({ sliders, classNames }: { sliders: any, classNames?: string }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (api && current > 0) {
            const newIndex = current - 1;
            api.scrollTo(newIndex);
            setCurrent(newIndex);
        }
    };

    const nextSlide = () => {
        if (api && current < sliders.length - 1) {
            const newIndex = current + 1;
            api.scrollTo(newIndex);
            setCurrent(newIndex);
        }
    };

    return (
        <Carousel setApi={setApi} className={`relative ${classNames}`} plugins={[]}>
            <CarouselContent>
                {sliders.map((slider: any, index: any) => (
                    <CarouselItem key={index}>
                        <div className="p-1 flex items-center justify-center">
                            {slider}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex items-center justify-center  w-full">
                <Button variant={"ghost"} className="hover:bg-transparent" onClick={prevSlide} disabled={current === 0} >
                    <ArrowLeft size={35} color={current === 0 ? "gray" : "white"} />
                </Button>

                <div className="flex items-center justify-center gap-4 w-full">
                    {sliders.map((_: any, index: any) => (
                        <Button
                            key={index}
                            className={`h-[16px] w-[16px] p-0 transition-all duration-300 hover:bg-[#69EAFF] ${index === current
                                ? "bg-[#69EAFF]"
                                : "bg-[#FFFFFF]"
                                }`}
                            onClick={() => {
                                api?.scrollTo(index);
                                setCurrent(index);
                            }}
                        />
                    ))}
                </div>
                <Button variant={"ghost"} className="hover:bg-transparent" onClick={nextSlide} disabled={current === sliders.length - 1} >
                    <ArrowRight size={35} color={current === sliders.length - 1 ? "gray" : "white"} />
                </Button>
            </div>
        </Carousel>
    )
}
