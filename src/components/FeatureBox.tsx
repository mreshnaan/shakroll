import { CustomCarousel } from "./Slider"
const sliders: [] = [

]
function FeatureBox({ title, subTitle, content, className }: { title: string, subTitle?: string, content: string, className?: string }) {
    return (
        <div className={`w-[270px] xl:w-[338px] flex flex-col items-center gap-5 ${className}`}>
            <h1 className="flex flex-col text-[#FFF] text-[24px] leading-[26.4px] font-bold text-center xl:leading-[38px] xl:text-[35px]">
                {title}<span>{subTitle}</span>
            </h1>

            <svg className="block transform rotate-[180deg] xl:hidden" xmlns="http://www.w3.org/2000/svg" width="97" height="7" viewBox="0 0 97 7" fill="none">
                <path d="M1 3.5C3.87879 0.166667 6.75756 0.166667 9.63635 3.5C12.5151 6.83333 15.3939 6.83333 18.2727 3.5C21.1515 0.166667 24.0303 0.166667 26.9091 3.5C29.7879 6.83333 32.6667 6.83333 35.5454 3.5C38.4242 0.166667 41.303 0.166667 44.1818 3.5C47.0606 6.83333 49.9394 6.83333 52.8182 3.5C55.697 0.166667 58.5758 0.166667 61.4546 3.5C64.3334 6.83333 67.2121 6.83333 70.0909 3.5C72.9697 0.166667 75.8485 0.166667 78.7273 3.5C81.6061 6.83333 84.4849 6.83333 87.3637 3.5C90.2424 0.166667 93.1212 0.166667 96 3.5" stroke="#69EAFF" stroke-width="2" />
            </svg>

            <p className="text-[14px] leading-[21px] xl:text-[16px] xl:leading-6 text-[#FFF] text-center ">{content} Navigate the waters of opportunity with precision, tracking your network&#39;s growth and earnings in real-time.</p>
        </div>
    )
}

export default FeatureBox