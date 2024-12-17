import React from 'react'
import Image from 'next/image'

interface OptionsProps{
    img:string;
    title:string;

}

const Options = (props: OptionsProps) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='bg-white p-4 shadow-2xl rounded-full hover:bg-slate-300 cursor-pointer  transition duration-500 ease-in-out'>
                <Image
                    src={props.img}
                    alt="magalu"
                    width={50}
                    height={20}>
                </Image>
            </div>
            <h2 className='text-center'>{props.title}</h2>
        </div>
    )
}

export default Options