const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function Patient() {
  return (
    <div className={`${shimmer} animate-pulse flex text-sm justify-between`}>
      <div className="flex gap-2">
        <div className="rounded-full h-10 w-10 bg-[#F6F7F8]"></div>
        <div className="flex flex-col gap-1 self-center">
          <div className="w-20 h-2 bg-[#F6F7F8]"></div>
          <div className="w-20 h-2 bg-[#F6F7F8]"></div>
        </div>
      </div>
    </div>
  );
}

export function PatientsSkeleton() {
  return (
    <div
      className={`animate-pulse ${shimmer} bg-white p-3 m-3 rounded-md w-[90%] md:w-[20%] self-start h-screen `}
    >
      <div className="flex justify-between mb-10 w-[100%] md:w-48">
        <div className="w-20 h-5 bg-[#F6F7F8]"></div>
        <div className="w-5 h-5 rounded-full bg-[#F6F7F8]"></div>
      </div>
      <div className="flex flex-col gap-5">
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
    </div>
  );
}


export function Profilecard() {
    return (
        <div className="animate-pulse flex gap-3">
          <div className="flex flex-col gap-1">
            <div className="w-20 h-2 bg-[#F6F7F8]"></div>
            <div className="w-20 h-2 bg-[#F6F7F8]"></div>
          </div>
        </div>
    )
}

export function ProfileSkeleton() {
  return (
    <div className="animate-pulse md:w-[20%] w-full rounded-md p-5 bg-white mt-4 text-sm self-start">
      <div className="w-full p-3 mb-5 mx-8">
        <div className="w-[70%] md:w-28 rounded-full h-28 bg-[#F6F7F8]" />

        <div className="w-28 h-5 mt-5 bg-[#F6F7F8]"></div>
      </div>

      <div className="flex flex-col gap-5">
        <Profilecard />
        <Profilecard />
        <Profilecard />
        <Profilecard />
        <Profilecard />
        <Profilecard />
      </div>
    </div>
  );
}

export function Card() {
    return (
        <div className='bg-[#F6F7F8] p-5 rounded-md md:w-[33.3%]'>
        <div
        className='w-20 h-20 mb-3 rounded-full'
        />

        <div>
            <div className='w-20 h-2 animate-pulse'></div>
            <div className='w-20 h-2 animate-pulse'></div>
            <div className='w-20 h-2 animate-pulse'></div>
        </div>
      </div>
    )
}

export function DiagnosisSkeleton() {
    return (
        <div>
            <div className="w-full mb-5 h-64 bg-[#F6F7F8] animate-pulse"></div>

            <div className="w-full flex flex-col md:flex-row justify-between gap-5">
               <Card />
               <Card />
               <Card />
            </div>
        </div>
    )
}
