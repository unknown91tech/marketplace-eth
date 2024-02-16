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
