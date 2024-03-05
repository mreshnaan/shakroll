import DetailBar from "./DetailBar";
import DetailBox from "./DetailBox";
import Divider from "./Divider";
import { CustomCarousel } from "./Slider";

function Section2() {
  return (
    <div className="relative flex flex-col items-center pt-10 px-5 gap-10 lg:p-28 lg:gap-[100px] ">
      <h1 className=" flex flex-col items-center text-[40px] leading-[44px] text-center font-bold  headline-gradient-2 xl:text-[70px] xl:leading-[77px]">
        Benefits of Buying $SKR <span>Token During Presale</span>
      </h1>

      <div className="flex flex-col items-center gap-[20px]">
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
        <div className="flex flex-col items-center justify-center border-none">
          <DetailBar
            title="Buy Back & Burn"
            content="In the Sharkroll ecosystem, $SKR tokens are your key to unlocking a world of essential and substantial
                        rewards. Here's a distilled look at how your investment can grow and flourish:"
          />
          <div className="w-0 h-0 mt-[-1px]  border-l-[40px] border-l-transparent  border-t-[15px] border-t-[#001E69]  border-r-[40px] border-r-transparent"></div>
        </div>

        {/* details bars  end*/}

        <div className="flex justify-center gap-[80px]">
          <CustomCarousel
            sliders={[
              <DetailBox
                title="Strategic Buybacks"
                contentTitle="Enhancing Your Investment"
                content="We actively buy back $SKR tokens using a portion of daily revenues. This direct action boosts the token's value, making your investment more potent over time."
                icon={
                  <img src="assets/1-icon.svg" alt="Strategic Buybacks Icon" />
                }
              />,
              <DetailBox
                title=" The Burn"
                contentTitle="Creating Scarcity and Value"
                content="As we reduce the supply of $SKR tokens, each one you hold becomes rarer and potentially more valuable.
                      This scarcity is a fundamental principle designed to enhance the worth of your investment."
                icon={<img src="assets/2-icon.svg" alt="The Burn Icon" />}
              />,
              <DetailBox
                title="  Value Surge"
                contentTitle="Potential for Growth"
                content="  With a decreasing supply and increasing demand, the $SKR token is poised for growth.
                        This dynamic has the potential to significantly increase the value of your tokens."
                icon={<img src="assets/3-icon.svg" alt="Value Surge Icon" />}
              />,
            ]}
            classNames="xl:hidden w-[330px]"
          />

          <DetailBox
            className={"hidden xl:block"}
            title="Strategic Buybacks"
            contentTitle="Enhancing Your Investment"
            content="We actively buy back $SKR tokens using a portion of daily revenues. This direct action boosts the token's value, making your investment more potent over time."
            icon={<img src="assets/1-icon.svg" alt="Strategic Buybacks Icon" />}
          />
          <DetailBox
            className={"hidden xl:block"}
            title=" The Burn"
            contentTitle="Creating Scarcity and Value"
            content="As we reduce the supply of $SKR tokens, each one you hold becomes rarer and potentially more valuable.
                        This scarcity is a fundamental principle designed to enhance the worth of your investment."
            icon={<img src="assets/2-icon.svg" alt="The Burn Icon" />}
          />

          <DetailBox
            className={"hidden xl:block"}
            title="  Value Surge"
            contentTitle="Potential for Growth"
            content="  With a decreasing supply and increasing demand, the $SKR token is poised for growth.
                        This dynamic has the potential to significantly increase the value of your tokens."
            icon={<img src="assets/3-icon.svg" alt="Value Surge Icon" />}
          />
        </div>
        {/* divider */}
        <Divider className="hidden xl:block" />

        <img
          src="/assets/graph.png"
          alt="Tokenomics Graph for Desktop"
          className=" hidden lg:block xl:h-[687px] xl:w-[1148px]"
          loading="lazy"
        />
        <img
          src="/assets/mobileGraph.png"
          alt="Tokenomics Graph for Mobile"
          className="w-full h-full lg:hidden"
          loading="lazy"
        />

        <button className=" text-[#FFF] w-[335px] h-[100px] rounded-[300px] px-[14px] text-[20px] leading-[22px] button-gradient-1 xl:px-[296px] xl:py-[36px]   xl:w-[1250px] 2xl:w-[1440px]  xl:h-[150px]  xl:text-[35px]  xl:leading-[38px]">
          <span className="font-bold">Join the presale</span> and cement your
          status as a pioneer in the $SKR ecosystem.
        </button>
      </div>
    </div>
  );
}

export default Section2;
