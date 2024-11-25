import ECommerce from "@/components/Dashboard/AddAdmin";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Sign } from "crypto";
import AddAdmin from "@/components/Dashboard/AddAdmin";

export const metadata: Metadata = {
  title: "Admin and Client Frontend",
  description: "Admin and client frontend",
};

const Exhibit = () => {
  return (
    <>
    
      <DefaultLayout>
        <AddAdmin/>
      </DefaultLayout>
    </>
  );
}

export default Exhibit;

