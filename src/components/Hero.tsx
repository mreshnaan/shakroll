import ChainIcon from './ChainIcon'
import Divider from './Divider'
import { Progress } from './ui/progress'

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[url("/assets/mint-vector1.svg")] h-[26px] w-[254px] flex justify-center items-center text-black text-[14px] leading-5 font-medium uppercase '>
                Round 1
            </div>
            <div className='bg-[#000] h-[497px] w-[462px] rounded-[30px] flex flex-col items-center gap-2'>
                <h1 className='text-[#FFF] text-[50px]  font-bold leading-[75px]'>$100.000</h1>     
                <Divider />
                <div className='flex flex-col mt-3 px-8 w-full gap-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#FFF] text-[13px] font-medium leading-5 uppercase flex flex-col'>Current price <span className='text-left'>$0.008</span></p>
                        <p className='text-[#FFF] text-[13px] font-medium leading-5 uppercase flex flex-col'>Goal to reach <span className='text-right'>$100.000</span></p>
                    </div>
                    <Progress value={33} className="h-2" />
                    <div className='flex gap-4 justify-center pt-5'>
                        <ChainIcon img='/assets/ETH.svg' label='ETH' />
                        <ChainIcon img='/assets/BSC.svg' label='BSC' bgColor='#212121' />
                        <ChainIcon img='/assets/POLYGON.svg' label='PolYgon' bgColor='#212121' />
                        <ChainIcon img='/assets/SOL.svg' label='SOL' bgColor='#212121' />
                    </div>
                    <div className='flex gap-4 justify-center pt-5'>
                        <div className='flex items-center'>
                            <input type='text' className='h-[54px]  rounded-l w-[151px]' />
                            <div className='h-full bg-[#19223a] flex items-center justify-center w-[43px]  rounded-r  ' >
                                <img src={`/assets/ETH.png`} width={18} height={18} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <input type='text' className='h-[54px]  rounded-l w-[151px]' />
                            <div className='h-full bg-[#19223a] flex items-center justify-center w-[43px]  rounded-r  ' >
                                <img src={`/assets/Vector.png`} width={29} height={29} alt="" />
                            </div>
                        </div>
                    </div>
                    <button className='button-gradient-1 h-[54px] rounded-[10px] text-[#FFF] text-[19px] font-bold leading-7 uppercase mt-7'>Connect Wallet</button>
                </div>

            </div>
        </div>
    )
}

export default Hero