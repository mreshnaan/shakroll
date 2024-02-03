function Logobar() {
    return (
        <div className="bg-[#000] flex items-center justify-center h-[50px]  xl:h-[110px]">
            <div className="w-full grid grid-cols-3 xl:grid-cols-5 items-center justify-center xl:gap-[50px] 2xl:gap-[100px]">
                <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] justify-self-center" loading="lazy" />
                <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] justify-self-center" loading="lazy" />
                <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] justify-self-center" loading="lazy" />
                <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] hidden xl:block justify-self-center" loading="lazy" />
                <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] hidden xl:block justify-self-center" loading="lazy" />
            </div>
        </div>
    )
}

export default Logobar
