import Image from "next/image";
import Navbar from "./ui/Navbar";
import Patients from "./ui/Patients";
import Diagnosis from "./ui/Diagnosis"
import Profile from "./ui/Profile";
import { Suspense } from "react";
import { PatientsSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <main className="bg-[#F6F7F8] min-h-screen p-2 text-[#072635]">
      <Navbar />
      <div className="flex md:flex-row flex-col-reverse">
       <Patients />
       <Diagnosis />
       <Profile />
      </div>
    </main>
  );
}
