"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from "@/public/assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import options from "@/public/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import { allUsers } from "../apiRequests/request";
import { patient } from "@/lib/definition";
import { PatientsSkeleton } from "./skeletons";

const Patients = () => {
  const [users, setUsers] = useState<patient[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await allUsers();
      setUsers(res);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-3 m-3 rounded-md w-[90%] md:w-[20%] self-start hover:overflow-y-scroll h-screen overflow-hidden">
      {users ? (
        <>
          <div className="flex justify-between mb-5">
            <h1 className="font-bold text-xl">Patients</h1>
            <Image src={search} alt="magnifying glass" />
          </div>
          <div className="flex flex-col gap-3">
            {users?.map((patient, index) => (
              <div className="flex text-sm justify-between" key={index}>
                <div className="flex gap-2">
                  <Image
                    className="self-center"
                    src={patient.profile_picture}
                    alt={`${patient.name}'s profile picture`}
                    width={28}
                    height={28}
                  />
                  <div>
                    <p>{patient.name}</p>
                    <p className="text-sx text-gray-400">{`${patient.gender}, ${patient.age}`}</p>
                  </div>
                </div>

                <Image
                  className="self-center align-bottom"
                  src={options}
                  alt="more icon"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <PatientsSkeleton />
      )}
    </div>
  );
};

export default Patients;
