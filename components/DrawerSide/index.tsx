import React from 'react'
import Image from 'next/image'
import { SidePannelLinks } from '@/constants/Links'
import AdminMeds from '@/assets/SideBar/admin-meds.svg'
import CloseIcon from '@/assets/cross.svg'
import './styles.css'

export default function DrawerSide({styleClasses, setOpen}:{styleClasses: String, setOpen:any}) {
    return (
    <div className='drawer-wrapper'>
        <aside className={`${styleClasses} drawer text-Text_Color_blue h-screen font-[700] bg-bg-light-2 text-[12px]`}>
            <div className='drawer-overlay'>
                <div className='flex justify-between items-center'>
                    <span className='text-[14px]'>Menu</span>
                    <button onClick={()=>setOpen(false)}>
                        <Image src={CloseIcon} alt='icon'/>
                    </button>
                </div>
                <ul> 
                    {SidePannelLinks.map(({title, Icon, isSelected}:any)=><li key={title} className={`cursor-pointer flex items-center  gap-[6px] p-[20px] ${isSelected ? "bg-Light_blue border-[1px] border-Secondary rounded-[8px] text-Secondary" : "text-Text_Color_blue" }`}>
                        <Image src={Icon} alt='Icon' />
                        {title}
                    </li>)}
                </ul>
                <ul className='flex flex-row-reverse justify-between items-center mt-[20px] border-t-[2px] py-[16px] border-Bg_Light border-dashed'>
                    <li className='cursor-pointer px-[16px] py-[6px] border-[1px] w-fit rounded-full border-accent_new_red text-accent_new_red bg-accent_red_light'>
                        Admin
                    </li>
                    <li className='cursor-pointer flex items-center gap-[6px] p-[20px] text-Text_Color_blue'>
                        <Image src={AdminMeds} alt='icon'/>
                        <span className='text-center'>Round <br />Status</span>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}
