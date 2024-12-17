import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

export default function HomePage() {
  return (
    <>
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='flex items-center justify-between p-6 bg-green-700 text-white'> 
        <div className='flex items-center'></div>
        {/* Logo */}
        <Image src='/' alt='Logo' width={40} height={40} />

      </header>

    </div>
    </>
    )
  }