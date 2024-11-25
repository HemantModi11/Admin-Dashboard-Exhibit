"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import TableFive from "../Tables/TableFive";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AllExhibit = () => {
  const role = localStorage.getItem("user_type")
  const router = useRouter();
  if(role !== "0" && role !== "1" ){
    router.push("/auth/admin/signin")
  }
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="All Admins" />

      <div className="">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Admins
              </h3>
            </div>
            <div className=" overflow-y-auto">
              <TableFive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExhibit;
