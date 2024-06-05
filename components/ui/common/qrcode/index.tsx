<<<<<<< HEAD
import { useAccount, useOwnedCourse, useOwnedCourses } from "@/components/hooks/web3";

import { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import QRCode from "qrcode";
import { Image } from "@nextui-org/react";

import web3 from "web3";
import { OwnedCourseCard  }from "../../course";
import { BsQrCodeScan } from "react-icons/bs";
import { qrinfo } from "../../course/card/Owned";



export default function QrCode({children ,course}:any) {
  const { account } = useAccount();
  
  const [src, setsrc] = useState<string>("");
  const  {ownedCourses}  = useOwnedCourses(course, account.data)
  //const ans= qrinfo(course);
  const data1 = ownedCourses.data;
  // console.log(data1);
  let da= qrinfo;
  // console.log(da)
  
  // const ddd=web3.utils.soliditySha3(da[0],da[1],da[2])
  // console.log(ddd)
  // let timeout= setTimeout(ddd, 10000);
  const generate = () => {
    QRCode.toDataURL(`${data1}`).then(setsrc);
  };
  
  
  return (
    <>
    {/* <div>{JSON.stringify(data1)}</div> */}
    {
    data1 && data1.map((item: any, index: number) => (
    <>
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-full"
      shadow="sm"
    >
      <div className=" m-8 text-center text-2xl">
          Items Sold
        </div>
    <div className="p-2 grid grid-flow-col  gap-6  items-center justify-center">
      
    <OwnedCourseCard key={index} course={item} />
    <div className="">
     <span className="">
     Scan to verify
     </span>
     
    <Image src={src}  width={100} height={100}  />
      <Button onClick={generate} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-2 " endContent={<BsQrCodeScan />} >Generate</Button>
    </div>
    
    </div>
    </Card>
    
    </>
  ))}
     
    </>
  );
}
=======
import { useAccount } from "@/components/hooks/web3";

import { useState } from "react";
import { Button } from "..";
import QRCode from "qrcode";
import Image from "next/image";
export default function QrCode() {
  const { account } = useAccount();
  const [src, setsrc] = useState<string>("");
  const generate = () => {
    console.log(account)
    QRCode.toDataURL(`${account.data}`).then(setsrc);
  };
  return (
    <>
      <Image src={src} alt="" width={30} height={30} />
      <Button onClick={generate}>Generate QR</Button>
    </>
  );
}
>>>>>>> 04daf3699f0af53643de07eb60763e0186a0e85a
