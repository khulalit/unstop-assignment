import Image from 'next/image'
import React from 'react'
import MenuIcon from '@/assets/TopBar/menu.svg'
import DesktopIcon from '@/assets/TopBar/desktop.svg'
import './styles.css'

export default function TopBar({setSideMenuOpen}:{setSideMenuOpen:Function}) {
  return (
    <div className='flex items-center justify-between px-[15px] pt-[5px] top-bar'>
        <div className='flex items-center gap-[6px]'>
            <button onClick={()=>setSideMenuOpen(true)}>
                <Image src={MenuIcon} alt='icon'/>
            </button>
            <span className='text-Text_Color_blue text-[18px] font-[600]'>Assesment</span>
        </div>

        <div className='flex items-center'>
            <button>
                <Image src={DesktopIcon} alt='icon' width={30}/>
            </button>
        </div>
    </div>
  )
}
