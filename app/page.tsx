import Navbar from "./ui/Navbar";
import Patients from "./ui/Patients";
import Diagnosis from "./ui/Diagnosis"
import Profile from "./ui/Profile";

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
