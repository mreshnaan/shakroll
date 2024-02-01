
function ContentWithBorder({ content, classNames, contentClass }: { content: string; classNames?: string; contentClass?: string }) {
    return (
        <div className={`flex items-center justify-center border-2 border-[#003BD2] w-[335px] h-[90px] rounded-[20px] px-[16px] py-[48px] text-center xl:w-[220px] xl:h-[217px] ${classNames ? classNames : ""}`}>
            <h1 className={`text-[20px] text-center leading-[26px]  text-[#FFF] font-bold xl:text-[24px] xl:leading-[31px] ${contentClass ? contentClass : ""}`}>{content}</h1>
        </div>
    )
}

export default ContentWithBorder