"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableFive from "../Tables/TableFive";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AllAdmins = () => {
  const router = useRouter();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    console.log(userType)
    console.log("User Type:", userType);
    if (userType !== "0" && userType !== "1") {
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

export default AllAdmins;
