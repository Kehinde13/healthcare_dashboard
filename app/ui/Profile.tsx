"use client";
import React, { useEffect, useState } from "react";
import doc from "@/public/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import Image from "next/image";
import calender from "@/public/assets/BirthIcon.svg";
import phone from "@/public/assets/PhoneIcon.svg";
import Male from "@/public/assets/MaleIcon.svg";
import female from "@/public/assets/FemaleIcon.svg";
import insurance from "@/public/assets/InsuranceIcon.svg";
import { patient } from "@/lib/definition";
import { getUserAtIndex } from "../apiRequests/request";
import { ProfileSkeleton } from "./skeletons";

const Profile = () => {
  const [jessica, setJessica] = useState<patient>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserAtIndex();
      setJessica(res);
    };
    fetchData();
  }, []);

  return (
    <div className="md:w-[20%] w-full rounded-md p-5 bg-white mt-4 text-sm self-start">
      {jessica ? (
        <>
          <div className="w-full p-3 mb-5">
            {jessica && (
              <Image
                src={jessica?.profile_picture}
                alt="user image"
                className="w-[70%] mx-auto"
                width={40}
                height={40}
              />
            )}
            <p className="text-center font-bold text-xl">{jessica?.name}</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <Image
                src={calender}
                alt="calender icon"
                className="self-center"
              />
              <div>
                <p>Date Of Birth</p>
                <p className="font-bold">{jessica?.date_of_birth}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image src={female} alt="gender icon" className="self-center" />
              <div>
                <p>Gender</p>
                <p className="font-bold">{jessica?.gender}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image src={phone} alt="phone icon" className="self-center" />
              <div>
                <p>Contact Info</p>
                <p className="font-bold">{jessica?.phone_number}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image src={phone} alt="phone icon" className="self-center" />
              <div>
                <p>Emergency Contact</p>
                <p className="font-bold">{jessica?.emergency_contact}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={insurance}
                alt="insurance icon"
                className="self-center"
              />
              <div>
                <p>Insurance Provider</p>
                <p className="font-bold">{jessica?.insurance_type}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ProfileSkeleton />
      )}
    </div>
  );
};

export default Profile;
