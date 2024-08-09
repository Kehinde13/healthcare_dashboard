"use client"
import React, { useEffect, useState } from 'react'
import LineGraph from './Diagnosis/LineGraph'
import Cards from './Diagnosis/Cards'
import { ChartData, Diagnosis as DiagnosisType, HealthRecord, patient } from '@/lib/definition'
import { getUserAtIndex } from '../apiRequests/request'
import { DiagnosisSkeleton } from './skeletons'

const Diagnosis = () => {
  const [jessica, setJessica] = useState<patient>();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [diagnosis, setDiagnosis] = useState<DiagnosisType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserAtIndex();
      setJessica(res);
    };
    fetchData();
  }, []);

  const isHealthRecordArray = (arr: any[]): arr is HealthRecord[] => {
    return arr.every(
      (item) => "month" in item && "year" in item && "blood_pressure" in item
    );
  };

  useEffect(() => {
    if (jessica?.diagnosis_history.length) {
      const latestData = jessica.diagnosis_history.slice(0, 6);
      setDiagnosis(jessica.diagnosis_history.slice(0, 1))
       
      if (isHealthRecordArray(latestData)) {
        const mappedData = latestData.map((data) => ({
          month: data.month,
          systolic: data.blood_pressure.systolic.value,
          diastolic: data.blood_pressure.diastolic.value,
        }));

        setChartData(mappedData);
      } else {
        console.error(
          "Type mismatch: latestData contains Diagnosis[], but HealthRecord[] expected."
        );
      }
    }
  }, [jessica]);

  
  return (
    <div className='bg-white m-5 p-5 rounded-md w-[90%] md:w-[50%] self-start'>
        {
          jessica ? (
            <>
             <LineGraph chartData={chartData}/>
             <Cards diagnosisData={diagnosis}/>
            </>
          ) : (
            <DiagnosisSkeleton />
          )
        }
    </div>
  )
}

export default Diagnosis