import React from 'react'
import Image from 'next/image'
import { SidePannelLinks } from '@/constants/Links'
import AdminMeds from '@/assets/SideBar/admin-meds.svg'

export default function SidePanel({styleClasses}:{styleClasses: String}) {
  return (
    <aside className={`${styleClasses} h-screen w-fit p-[30px] font-[700] bg-white text-[12px]`}>
        <ul> 
            {SidePannelLinks.map(({title, Icon, isSelected}:any)=><li key={title} className={`cursor-pointer flex items-center flex-col gap-[6px] p-[20px] ${isSelected ? "bg-Light_blue border-[1px] border-Secondary rounded-[8px] text-Secondary" : "text-Text_Color_blue" }`}>
                <Image src={Icon} alt='Icon' />
                {title}
            </li>)}
        </ul>
        <ul className='flex flex-col items-center mt-[40px] border-t-[2px] py-[16px] border-Bg_Light border-dashed'>
            <li className='cursor-pointer px-[16px] py-[6px] border-[1px] w-fit rounded-full border-accent_new_red text-accent_new_red bg-accent_red_light'>
                Admin
            </li>
            <li className='cursor-pointer flex items-center flex-col gap-[6px] p-[20px] text-Text_Color_blue'>
                <Image src={AdminMeds} alt='icon'/>
                <span className='text-center'>Round <br />Status</span>
            </li>
        </ul>
    </aside>
  )
}
