import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { Progress } from "../ui/progress";
import { Input, InputProps } from "../ui/input";
import { Button } from "../ui/button";
import { Coins } from "lucide-react";
import { useAccount, useWriteContract } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { ClosedRound } from "./ClosedRound";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { useReadContracts } from "wagmi";
import { contractInfo } from "@/lib/contract/info";
import { formatEther, parseEther } from "viem";
import { LoadingSpinner } from "../ui/spinner";
import { useWaitForTransactionReceipt } from "wagmi";
import { isValidSalesCode } from "@/lib/contract/salesCodes";
import { toast } from "sonner";
import groovyWalkAnimation from "./animation.json";
import { Claim } from "./Claim";

interface IMintInput extends InputProps {
  label1?: JSX.Element;
  label2?: JSX.Element;
}
function MintInput({ label1, label2, ...inputProps }: IMintInput) {
  return (
    <div className="flex flex-col gap-1 my-1">
      <div className="flex justify-between">
        {label1}
        {label2}
      </div>

      <Input {...inputProps} className="disabled:opacity-95" />
    </div>
  );
}

interface IModalProps {
  title: string;
  description: string;
}

export function CrowdSale() {

  const { writeContractAsync } = useWriteContract();
  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [approveTx, setApproveTx] = useState<undefined | `0x${string}`>(
    undefined
  );
  const [isPurchaseLoading, setIsPuchaseLoading] = useState(false);
  const [purchaseTx, setPurchaseTx] = useState<undefined | `0x${string}`>(
    undefined
  );
  const [salesCode, setSalesCode] = useState("");
  const approveTxWait = useWaitForTransactionReceipt({
    hash: approveTx,
  });

  const purchaseTxWait = useWaitForTransactionReceipt({
    hash: purchaseTx,
  });

  const [usdt, setUsdt] = useState(0);


  const { isConnected, chainId, address } = useAccount();
  const usdtContract = {
    address:
      chainId == 97
        ? contractInfo.usdt.testnet.address
        : contractInfo.usdt.mainnet.address,
    abi: contractInfo.usdt.mainnet.abi,
  } as const;
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
        ...usdtContract,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...usdtContract,
        functionName: "allowance",
        args: [address, crowdSaleContract.address],
      },
      {
        ...crowdSaleContract,
        functionName: "currentRound",
      },
    ],
  });

  const currentRound =
    (contractReads.data &&
      contractReads.data[2].status == "success" &&
      parseInt(contractReads.data[2].result.toString())) ||
    0;
  const usdtBalance =
    (contractReads.data &&
      contractReads.data[0].status == "success" &&
      contractReads.data[0].result.toString()) ||
    "0";
  const allowance =
    (contractReads.data &&
      contractReads.data[1].status == "success" &&
      contractReads.data[1].result) ||
    0;
  const buyingUsdt = parseEther(usdt ? usdt.toString() : "0");
  const roundReads: any = useReadContracts({
    contracts: [
      {
        ...crowdSaleContract,
        functionName: "roundTotalRaised",
        args: [currentRound],
      },
      {
        ...crowdSaleContract,
        functionName: "roundTokenPrice",
        args: [currentRound],
      },
      {
        ...crowdSaleContract,
        functionName: "roundFundingCap",
        args: [currentRound],
      },
      {
        ...crowdSaleContract,
        functionName: "roundClaimableBalance",
        args: [currentRound],
      },
      {
        ...crowdSaleContract,
        functionName: "roundCanClaim",
        args: [currentRound],
      },
      {
        ...crowdSaleContract,
        functionName: "getTokensPerUsdt",
        args: [buyingUsdt],
      },
      {
        ...crowdSaleContract,
        functionName: "getClaimableBalance",
        args: [address, currentRound],
      },
    ],
  });

  const currenrPrice = formatEther(
    (roundReads.data &&
      roundReads.data[1].status == "success" &&
      roundReads.data[1].result.toString()) ||
      "0"
  ).toString();

  const currentRoundClaimableBalance = formatEther(
    (roundReads.data &&
      roundReads.data[6].status == "success" &&
      roundReads.data[6].result.toString()) ||
      "0"
  ).toString();

  const goalToReach = formatEther(
    (roundReads.data &&
      roundReads.data[2].status == "success" &&
      roundReads.data[2].result.toString()) ||
      "0"
  ).toString();
  const totalRaised = formatEther(
    (roundReads.data &&
      roundReads.data[0].status == "success" &&
      roundReads.data[0].result.toString()) ||
      "0"
  ).toString();
  const progress = (parseFloat(totalRaised) / parseFloat(goalToReach)) * 100;
  const srkTokensRecieve = formatEther(
    (roundReads.data &&
      roundReads.data[5].status == "success" &&
      roundReads.data[5].result.toString()) ||
      "0"
  ).toString();

  const { open } = useWeb3Modal();
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState<IModalProps>({
    title: "",
    description: "",
  });

  function showModalDialog(title: string, description: string) {
    const o = { title, description };
    setModalProps({ ...o });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    const o = { title: "", description: "" };
    setModalProps({ ...o });
  }

  async function approveTokens() {
    setIsApproveLoading(true);
    try {
      const data = await writeContractAsync({
        ...usdtContract,
        functionName: "approve",
        args: [crowdSaleContract.address, buyingUsdt],
      });
      setApproveTx(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsApproveLoading(false);
    }
  }

  async function purchase() {
    if (!salesCode) return toast.error("Invalid Sales Code");
    setIsPuchaseLoading(true);
    if (isValidSalesCode(salesCode)) {
      try {
        const data = await writeContractAsync({
          ...crowdSaleContract,
          functionName: "buyTokens",
          args: [buyingUsdt, salesCode],
        });
        setPurchaseTx(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setIsPuchaseLoading(false);
      }
    } else {
      toast.error("Invalid Sales Code");
    }
  }

  useEffect(() => {
    if (approveTxWait.isLoading) {
      showModalDialog(
        "Approving Tokens",
        "Please Click purchase button once approved"
      );
    } else if (approveTxWait.isSuccess) {
      setApproveTx(undefined);
      closeModal();
      toast.success("Please click purchase button");
    } else if (approveTxWait.isError) {
      closeModal();
      toast.error("Error Approving Tokens");
    }
    contractReads.refetch();
  }, [approveTxWait, contractReads]);

  useEffect(() => {
    if (purchaseTxWait.isLoading) {
      showModalDialog("Purchasing Tokens", "Almost there, please wait...");
    } else if (purchaseTxWait.isSuccess) {
      setPurchaseTx(undefined);
      closeModal();
      
      contractReads.refetch();
      roundReads.refetch();
      setUsdt(0)
      toast.success("Purchase Success");
    } else if (purchaseTxWait.isError) {
      closeModal();
      toast.error("Error purchasing Tokens");
    }
    contractReads.refetch();
  }, [
    contractReads,
    purchaseTx,
    purchaseTxWait.isError,
    purchaseTxWait.isLoading,
    purchaseTxWait.isSuccess,
  ]);

 
  return (
    <>
      <Drawer onOpenChange={setShowModal} open={showModal}>
        <DrawerContent
          onEscapeKeyDown={(e) => e.preventDefault()}
          onPointerDown={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DrawerHeader className="max-w-[800px] mx-auto">
            <div className="flex justify-between items-center w-full gap-4">
              <div className="text-xl flex flex-col text-left">
                <span className="font-bold">{modalProps.title}</span>
                <span className="text-base"> {modalProps.description}</span>
              </div>
              <span>
                <Lottie
                  animationData={groovyWalkAnimation}
                  loop={true}
                  autoplay={true}
                  height={50}
                  width={50}
                  className="w-16 h-16"
                />
              </span>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      <div className="flex flex-col gap-1 relative">
      
        <div className="bg-slate-950/95 rounded-xl py-6 flex flex-col w-full md:w-[500px] relative mx-4 md:m-0">
          <div className="absolute -top-6  left-0 right-0 mx-auto flex justify-center">
            <img src="/round.png" alt="" className="h-6" />{" "}
            <span className="absolute">Round {currentRound}</span>
          </div>
          {/* total raised */}
          <div className="flex flex-col">
            <div className="text-white text-xl px-4 md:text-[40px] font-bold  md:leading-[60px] mb-2">
              ${parseFloat(totalRaised).toLocaleString()}
            </div>
            <span className="w-full h-[1px] bg-slate-800/85"></span>
          </div>
          {/* end total Raised */}

          <div className="px-4 py-4 flex flex-col">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="flex font-bold text-base text-white flex-col uppercase">
                  Current price
                  <span className="font-normal text-[12px]">
                    {currenrPrice} USDT
                  </span>
                </div>

                <div className="flex font-bold text-base text-white flex-col uppercase text-right">
                  Goal to reach
                  <span className="font-normal text-[12px]">
                    {parseFloat(goalToReach).toFixed(2)} USDT
                  </span>
                </div>
              </div>
              <Progress value={progress} className="my-2" />

              <div className="w-full bg-slate-800 py-2 my-2 flex justify-between items-center">
                <div className="flex items-center gap-2 mx-auto">
                  <img src="/bnb.png" className="h-6 w-auto" alt="" />{" "}
                  <span className="text-white font-bold">BSC</span>
                </div>
              </div>

              <MintInput
                label1={
                  <span className="text-sm text-white">AFFILIATE Code</span>
                }
                label2={<span></span>}
                onChange={(e) => {
                  setSalesCode(e.target.value);
                }}
                value={salesCode}
              />
              {!isValidSalesCode(salesCode) && (
                <span className="text-[12px] font-semibold text-red-600">
                  Invalid Sales Code
                </span>
              )}

              <MintInput
                label1={
                  <span className="text-sm text-white">
                    <span className="text-teal-400">USDT</span> you pay
                  </span>
                }
                label2={
                  <span className="text-sm text-white">
                    Bal: {formatEther(usdtBalance).toLocaleString()} USDT
                  </span>
                }
                type="number"
                onChange={(e) => {
                  const val = e.target.value;
                  setUsdt(parseFloat(val));
                }}
                value={usdt}
              />

              <MintInput
                disabled={true}
                label1={
                  <span className="text-sm text-white">
                    <span className="text-teal-400">SRK</span> you recieve
                  </span>
                }
                value={srkTokensRecieve.toString()}
                label2={
                  <span className="text-sm text-white">
                    Claim Balance: {currentRoundClaimableBalance.toString()} SRK
                  </span>
                }
              />

              <div className="flex flex-col gap-2 my-3">
                {buyingUsdt > allowance && (
                  <Button
                    onClick={() => {
                      approveTokens();
                    }}
                    className="rounded-[5px] bg-gradient-to-r from-cyan-300 to-teal-400 hover:to-teal-500"
                  >
                    <span className="flex items-center gap-2 text-slate-950 uppercase font-semibold">
                      Approve USDT <Coins />{" "}
                      {isApproveLoading && <LoadingSpinner />}
                    </span>
                  </Button>
                )}
                <Button
                  disabled={buyingUsdt > allowance}
                  onClick={() => {
                    purchase();
                  }}
                  className="rounded-[5px] bg-gradient-to-r from-cyan-300 to-teal-400 hover:to-teal-500"
                >
                  <span className="flex items-center gap-2 text-slate-950 uppercase font-semibold">
                    purchase <Coins />
                    {isPurchaseLoading && <LoadingSpinner />}
                  </span>
                </Button>
                <Button
                  onClick={() => {
                    open();
                  }}
                  className="bg-gradient-to-l from-sky-300 to-blue-700 hover:to-blue-800 rounded-[5px]"
                >
                  <span className="flex items-center gap-2 text-slate-950 uppercase font-semibold">
                    {isConnected ? "Disconnect" : "Connect Wallet"}
                  </span>
                </Button>

                <Claim roundId={currentRound} onClaimed={() => {contractReads.refetch(); roundReads.refetch()}}/>
              </div>
            </div>
          </div>
        </div>

        <ClosedRound
        id={2}
          round="Round 2"
          completed={false}
          date="12-12-2023"
          goal="$100000"
          price="0.002"
          total="0"
        />
        <ClosedRound
          id={3}
          round="Round 3"
          completed={false}
          date="12-12-2023"
          goal="$100000"
          price="0.002"
          total="0"
        />
        <ClosedRound
          id={4}
          round="Round 4"
          completed={true}
          date="12-12-2023"
          goal="$100000"
          price="0.002"
          total="$100,000"
        />
      </div>
    </>
  );
}
