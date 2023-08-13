import React from 'react'
import AddIcon from '@/assets/add.svg'
import Image from 'next/image'
import './styles.css'

export default function NewAssignment({setIsOpen}:any) {
  return (
    <div className='card-new bg-bg-color-2 text-Text_Color_blue border-2 border-dashed border-Bg_Light rounded-[12px] p-[30px] flex flex-col gap-[10px] items-center'>
        <button className='bg-white p-[10px] rounded-full ' onClick={()=>setIsOpen(true)}>
            <Image src={AddIcon} alt='icon'/>
        </button>
        <h3 className='text-[18px] font-[600]'>New Assessment</h3>
        <p className='text-[12px] font-[600] text-center'>
            From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
        </p>
    </div>
  )
}
