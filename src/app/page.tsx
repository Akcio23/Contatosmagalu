'use client'
import React from 'react'
import Image from 'next/image'
import Options from './components/Options'
import Link from 'next/link'
import { useEffect } from 'react';



const page = () => {
  



  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white">
        <div className="fixed top-0 bg-blue-600 w-full text-center items-center p-7 rounded-b-2xl flex flex-col gap-3 mb-1">
            <h1 className='text-white'>Magalu tools</h1>
        </div>

        <div className='flex flex-row'>
              <Link href={"/contacts"}
              className='no-underline text-inherit'> 
              <Options img={"/pessoas.png"} title={"Contatos"} />
              </Link>
              
             

        </div>

        <Image
        src={"/magalu-logo-0.png"}
        alt="magalu"
        width={120}
        height={100}
        className="fixed bottom-1"
      />
    </div>
  )
}

export default page