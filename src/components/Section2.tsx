import DetailBar from "./DetailBar"
import DetailBox from "./DetailBox"
import Divider from "./Divider"
import { CustomCarousel } from "./Slider"

function Section2() {
    return (
        <div className='flex flex-col items-center p-28 gap-[100px] bg-[#00113d]'>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] text-center font-bold  headline-gradient-2 xl:text-[70px] xl:leading-[77px]'>Benefits of Buying $SKR <span>Token During Presale</span></h1>

            <div className='flex flex-col items-center gap-[50px]'>
                {/* details bars start */}
                <DetailBar
                    title="Exclusive Privileges"
                    content="As an early adopter of $SKR, you're not just buying a token; you're joining an elite school of sharks.
                        Presale participants receive unique perks and bonuses within our platform."
                />
                <DetailBar
                    title="Presale Pricing Advantage"
                    content="The early shark catches the best deals. $SKR tokens are available at their lowest price during the presale,
                        offering unparalleled value that won't be seen again."
                />
                <DetailBar
                    title="Buy Back & Burn"
                    content="In the Sharkroll ecosystem, $SKR tokens are your key to unlocking a world of essential and substantial
                        rewards. Here's a distilled look at how your investment can grow and flourish:"
                />
                {/* details bars  end*/}

                <div className='flex justify-center gap-[80px]'>
                    <CustomCarousel sliders={[
                        <DetailBox
                            title="Strategic Buybacks"
                            contentTitle="Enhancing Your Investment"
                            content="We actively buy back $SKR tokens using a portion of daily revenues."
                        />,
                        <DetailBox
                            title=" The Burn"
                            contentTitle="Creating Scarcity and Value"
                            content="As we reduce the supply of $SKR tokens, each one you hold becomes rarer and potentially more valuable.
                      This scarcity is a fundamental principle designed to enhance the worth of your investment."
                        />,
                        <DetailBox
                            title="  Value Surge"
                            contentTitle="Potential for Growth"
                            content="  With a decreasing supply and increasing demand, the $SKR token is poised for growth.
                        This dynamic has the potential to significantly increase the value of your tokens."
                        />

                    ]} classNames="xl:hidden w-[330px]" />
                    
                    <DetailBox
                        className={"hidden xl:block"}
                        title="Strategic Buybacks"
                        contentTitle="Enhancing Your Investment"
                        content="We actively buy back $SKR tokens using a portion of daily revenues."
                    />
                    <DetailBox
                        className={"hidden xl:block"}
                        title=" The Burn"
                        contentTitle="Creating Scarcity and Value"
                        content="As we reduce the supply of $SKR tokens, each one you hold becomes rarer and potentially more valuable.
                        This scarcity is a fundamental principle designed to enhance the worth of your investment."
                    />

                    <DetailBox
                        className={"hidden xl:block"}
                        title="  Value Surge"
                        contentTitle="Potential for Growth"
                        content="  With a decreasing supply and increasing demand, the $SKR token is poised for growth.
                        This dynamic has the potential to significantly increase the value of your tokens."
                    />
                </div>
                {/* divider */}
                <Divider className="hidden xl:block" />

                <img src="/assets/graph.png" alt="" srcSet="" className=" w-[500px] h-[300px] xl:h-[687px] xl:w-[1148px]" />

                <button className=" text-[#FFF] w-[335px] h-[100px] rounded-[300px] px-[14px] text-[20px] leading-[22px] button-gradient-1 xl:px-[296px] xl:py-[36px]   xl:w-[1441px] xl:h-[150px]  xl:text-[35px]  xl:leading-[38px]">
                    <span className="font-bold">Join the presale</span>  and cement your status as a pioneer
                    in the $SKR ecosystem.
                </button>

            </div>
        </div>
    )
}

export default Section2