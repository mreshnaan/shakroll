

import axios from 'axios'
import { useEffect, useState } from 'react'
import Web3 from 'web3';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"

  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"




type Payment = {
    id: number,
    tx:string,
    salesCode: string,
    buyer:string,
    usdt: string,
    tokens:string,
    purchasedDate: string
  }



 const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "tx",
      header: "Tx",
    },
    {
      accessorKey: "salesCode",
      header: "Sales Code",
    },
    {
        accessorKey: "buyer",
        header: "Buyer",
      },
      {
        accessorKey: "usdt",
        header: "USDT",
      },
      {
        accessorKey: "tokens",
        header: "SRK Tokens",
      },
      {
        accessorKey: "purchasedDate",
        header: "Date",
      },
  ]

  


export default function Admin(){
    
    const [payments, setPayments] = useState<Payment[]>([])
    const table = useReactTable({
        data:payments,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

   async function fetchData(){
        const {data} = await axios.get('https://sharkroll-crowdsale-api.cryptocanary.xyz/')
        if(data){
           const mapped = data.map((item:Payment) => {


                return {
                    ...item,
                    usdt:parseFloat( Web3.utils.fromWei(item.usdt.toString(),"ether")).toLocaleString(),
                    tokens: parseFloat( Web3.utils.fromWei(item.tokens.toString(),"ether")).toLocaleString(),

                }
            })

            console.log(mapped)
            setPayments([...mapped]);
        }
       
    }

    useEffect(() => {
        fetchData()
    },[])
    return (<div className="flex min-h-screen bg-slate-950">
  <div className="rounded-md border mx-auto m-6">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className='text-white'>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-white'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className='text-white'>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
              className='text-white'
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </div>)
}