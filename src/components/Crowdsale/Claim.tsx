import { contractInfo } from "@/lib/contract/info";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import {
  useAccount,
  useReadContracts,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { LoadingSpinner } from "../ui/spinner";

interface IProps {
  roundId: number;
  onClaimed?:() => void;
}
export function Claim(props: IProps) {
  const { address, isConnected, chainId } = useAccount();
  const [loading, setLoading] = useState(false);
  const { writeContractAsync } = useWriteContract();
  const [claimTx, setClaimTx] = useState<undefined | `0x${string}`>(undefined);
  const claimTxWait = useWaitForTransactionReceipt({
    hash: claimTx,
  });

  const crowdSaleContract = {
    address:
      chainId == 97
        ? contractInfo.testContract.testnet.address
        : contractInfo.testContract.mainnet.address,
    abi: contractInfo.testContract.mainnet.abi,
  } as const;

  const contractReads: any = useReadContracts({
    contracts: [
      {
        ...crowdSaleContract,
        functionName: "roundCanClaim",
        args: [props.roundId],
      },
      {
        ...crowdSaleContract,
        functionName: "getClaimableBalance",
        args: [address, props.roundId],
      },
    ],
  });

  const canClaim =
    (contractReads.data && contractReads.data[0].result) || false;
  const currentRoundClaimableBalance = formatEther(
    (contractReads.data &&
      contractReads.data[1].status == "success" &&
      contractReads.data[1].result.toString()) ||
      "0"
  ).toString();

  useEffect(() => {
    if (claimTxWait.isLoading) {
        setLoading(true)
    } else if (claimTxWait.isSuccess) {
      setClaimTx(undefined);

      contractReads.refetch();
        props.onClaimed?.();
      toast.success("Claim Success");
      setLoading(false)
    } else if (claimTxWait.isError) {
      toast.error("Error Claiming Tokens");
      setLoading(false)
    }
    contractReads.refetch();
  }, [claimTxWait]);


  async function claimTokens(){
    setLoading(true);
    try {
        const data = await writeContractAsync({
          ...crowdSaleContract,
          functionName: "claimTokens",
          args: [props.roundId],
        });
        setClaimTx(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        setLoading(false)
      }
  }

  return (
    <div className="w-full flex flex-col shadow-lg bg-slate-700 text-white py-3 px-2 gap-2">
      <div className="flex justify-between">
        <span>Claim</span>
        <span>{canClaim ? "Enabled" : "Coming Soon"}</span>
      </div>
      <div className="flex justify-between">
        <span>Round Claimable Balance</span>
        <span>
          {parseFloat(currentRoundClaimableBalance).toLocaleString()} SRK
        </span>
      </div>
      <Button onClick={() => {claimTokens()}} className="flex gap-2">Claim SRK for Round {props.roundId} {loading && <LoadingSpinner className="text-white stroke-white"/>}</Button>
    </div>
  );
}
