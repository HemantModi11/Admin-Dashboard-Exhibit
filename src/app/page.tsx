import ECommerce from "@/components/Dashboard/AddAdmin";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignIn from "./auth/admin/signin/page";
import { Sign } from "crypto";
import ExhibitUpload from "@/components/Dashboard/AddAdmin";
import AllAdmins from "@/components/Landing/page";
// import AdminDashboard from "@/components/admin/index"

export const metadata: Metadata = {
  title: "Admin and Client Frontend",
  description: "Admin and client frontend",
};

export default function Home() {
  return (
    <>
    
      <DefaultLayout>
        <AllAdmins/>
      </DefaultLayout>
    </>
  );
}
