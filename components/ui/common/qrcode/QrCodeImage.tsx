import { NextApiRequest, NextApiResponse } from "next"

const QrCodeImage = async (req:NextApiRequest , res:NextApiResponse) => {
    const url= new URL(req.url! , "localhost:3000")
    return (
        <>
            
        </>
    )
}