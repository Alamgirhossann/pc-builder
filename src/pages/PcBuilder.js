import RootLayout from "@/components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const route = useRouter();
  const {
    processor: processorData,
    motherboard: motherboardData,
    ram: ramData,
    powerSupply: powerSupplyData,
    storage: storageData,
    monitor: monitorData,
  } = useSelector((state) => state.product);

  const areAllObjectsEmpty =
    processorData === null ||
    motherboardData === null ||
    ramData === null ||
    powerSupplyData === null ||
    storageData === null ||
    monitorData === null;

  console.log(areAllObjectsEmpty);

  const processor = "processor";
  const motherboard = "motherboard";
  const ram = "ram";
  const powerSupply = "powerSupply";
  const monitor = "monitor";
  const storage = "storage";

  const buildSuccess = () => {
    alert("Your Pc Build is successfull");
    route.push("/");
  };
  return (
    <>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>CPU/Processor</p>
            <Link href={`/builderCategory/${processor}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {processorData?.productName}</p>
            <p> {processorData?.category}</p>
            <p> {processorData?.price}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>Motherboard</p>
            <Link href={`/builderCategory/${motherboard}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {motherboardData?.productName}</p>
            <p> {motherboardData?.category}</p>
            <p> {motherboardData?.price}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>Ram</p>
            <Link href={`/builderCategory/${ram}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {ramData?.productName}</p>
            <p> {ramData?.category}</p>
            <p> {ramData?.price}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>Power Supply</p>
            <Link href={`/builderCategory/${powerSupply}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {powerSupplyData?.productName}</p>
            <p> {powerSupplyData?.category}</p>
            <p> {powerSupplyData?.price}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>Storage Device</p>
            <Link href={`/builderCategory/${storage}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {storageData?.productName}</p>
            <p> {storageData?.category}</p>
            <p> {storageData?.price}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-3">
        <div className=" bg-gray-200 w-3/4 rounded-2xl px-3 h-16 items-center py-2">
          <div className="flex justify-between">
            <p>Monitor</p>
            <Link href={`/builderCategory/${monitor}`}>Select</Link>
          </div>
          <div className="flex gap-3">
            <p> {monitorData?.productName}</p>
            <p> {monitorData?.category}</p>
            <p> {monitorData?.price}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={buildSuccess}
          className={
            areAllObjectsEmpty
              ? " bg-gray-300 text-gray-100 p-2 rounded-md"
              : "bg-black p-2 rounded-md text-white"
          }
          disabled={areAllObjectsEmpty}
        >
          Complete Build
        </button>
      </div>
    </>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
