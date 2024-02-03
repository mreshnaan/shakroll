

import { contractInfo } from '@/lib/contract/info';
import { useAccount, useContractRead } from 'wagmi';
import { LoadingSpinner } from '../ui/spinner';
import { Button } from '../ui/button';
import { parseUnits } from 'viem';


export interface IAppProps {
}

export function ExampleRead (props: IAppProps) {
  console.log(props)
    const {isConnected, address} = useAccount();

    const { data, isLoading,  refetch }:any = useContractRead({
        address: contractInfo.usdt.mainnet.address as `0x${string}`,
        abi: contractInfo.usdt.mainnet.abi,
        functionName:"allowance",
        args:[address, contractInfo.testContract.mainnet.address],
      })

      const { data:name }:any = useContractRead({
        address: contractInfo.usdt.mainnet.address as `0x${string}`,
        abi: contractInfo.usdt.mainnet.abi,
        functionName:"name",
      
      })
      console.log(name);

  return (
   <div>
    {!isConnected && <h1>Please connect your wallet to read</h1>}
    {isConnected && <div>
        {isLoading && <LoadingSpinner/>}
        <h1 className='text-slate-900'>{name} : {parseUnits(data?data:"0", 6)}</h1>  
        <Button disabled={isLoading} onClick={() => {refetch()}}>Refetch {isLoading && <LoadingSpinner/>}</Button>
    </div>}
   </div>
  );
}
