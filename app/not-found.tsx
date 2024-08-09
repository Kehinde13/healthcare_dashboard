"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='text-center p-12'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button onClick={() => router.back()} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0 }}>
        Go Back
      </button>
    </div>
  );
}
