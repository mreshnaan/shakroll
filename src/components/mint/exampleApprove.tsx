

import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Button } from '../ui/button';
import { contractInfo } from '@/lib/contract/info';
import { Input } from '../ui/input';
import { useState } from 'react';
import { LoadingSpinner } from '../ui/spinner';

export interface IAppProps {
}

export function ExampleWriteComponent (props: IAppProps) {
  console.log(props)
    const [val, setVal] = useState("0");
    const { config, error } = usePrepareContractWrite({
        address: contractInfo.testContract.mainnet.address as `0x${string}`,
        abi: contractInfo.testContract.mainnet.abi,
        functionName: 'buyTokens',
        args: [parseFloat(val)]
      })

      const { write, isLoading, isSuccess,  data } = useContractWrite(config)




  return (
    <div className="p-6 flex flex-col gap-2">
        <h1>Do a Transaction</h1>
         <Input value={val} onChange={(e) => {setVal(e.target.value)}} placeholder='Enter Value'/>
        <Button disabled={!write} onClick={() => write?.()}>Execute {isLoading && <LoadingSpinner/>}</Button>
        {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>

        
      )}

{isSuccess && (
        <div>Hash {data?.hash}</div>

        
      )}
    </div>
  );
}
