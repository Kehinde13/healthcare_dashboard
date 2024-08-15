import React, { useEffect } from 'react'
import heart from '@/public/assets/HeartBPM.svg'
import temp from '@/public/assets/temperature.svg'
import lung from '@/public/assets/respiratory rate.svg'
import Image from 'next/image'
import { Diagnosis } from '@/lib/definition'

const Cards = ({ diagnosisData } : {diagnosisData : Diagnosis[]}) => {
  
  return (
    <div className='flex flex-col md:flex-row gap-10 w-full' data-testid="cards">
      <div className='bg-[#E0F3FA] p-5 rounded-md md:w-[33.3%]'>
        <Image 
        src={lung}
        alt='lungs icon'
        className='w-[60%] mb-3'
        />

        <div>
            <h6 className='text-sm'>Respiratory Rate</h6>
            <h1 className='text-xl font-bold'>{diagnosisData[0]?.respiratory_rate.value} bpm</h1>
            <p className='text-xs mt-2'>{diagnosisData[0]?.respiratory_rate.levels}</p>
        </div>
      </div>

      <div className='bg-[#FFE6E9] p-5 rounded-md md:w-[33.3%]'>
        <Image 
        src={temp}
        alt='temperature icon'
        className='w-[60%] mb-3'
        />

        <div>
            <h6 className='text-sm'>Temperature</h6>
            <h1 className='text-xl font-bold'>{diagnosisData[0]?.temperature.value} &#176; F</h1>
            <p className='text-xs mt-2'>{diagnosisData[0]?.temperature.levels}</p>
        </div>
      </div>

      <div className='bg-[#FFE6E1] p-5 rounded-md md:w-[33.3%]'>
        <Image 
        src={heart}
        alt='heart icon'
        className='w-[60%] mb-3'
        />

        <div>
            <h6 className='text-sm'>Heart Rate</h6>
            <h1 className='text-xl font-bold'>{diagnosisData[0]?.heart_rate.value} bpm</h1>
            <p className='text-xs mt-2'>
              {diagnosisData[0]?.heart_rate.levels}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Cards