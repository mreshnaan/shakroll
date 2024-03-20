export const salesCodes = ["LAKMAL","DILUK","CCN"];

export function isValidSalesCode(code:string):boolean{
   
    if(code){
        return salesCodes.includes(code);
    }
    return true;
}