"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import TableFive from "../Tables/TableFive";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AllExhibit = () => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken)
    if (!authToken) {
      router.push("/auth/admin/signin");
    }
  }, [router]);
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
