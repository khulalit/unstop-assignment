'use client'
import React, { useState, useEffect } from 'react'
import Tab from '../Tab'
import Overview from '../Overview'
import AssesmentCard from '../AssesmentCard'
import NewAssignment from '../NewAssignment'
import Bottomsheet from '../Bottomsheet'
import DrawerSide from '../DrawerSide'
import Image from 'next/image'
import FilterIcon from '@/assets/filter.svg'
import StatsIcon from '@/assets/stats.svg'
import SearchIcon from '@/assets/search.svg'

import './styles.css'
import useWindowDimensions from '@/hooks/useWindowDimensions'


export default function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [showOverview, setShowOverview] = useState(false);
    const {width} = useWindowDimensions();
    
    useEffect(()=>{
        if(width && width > 680) setShowOverview(true)
        else setShowOverview(false)
    },[width])

    return (
    <main className='container flex-1 h-screen overflow-y-auto bg-white'>
        <Tab tabList={[]} setSideMenuOpen={setSideMenuOpen}/>
        <div className='p-[20px] main-container h-screen'>
            <h2 className='text-[18px] text-Text_Color_blue mb-[16px] font-[500] font-[600]'>Assesment Overview</h2>
            {showOverview && <Overview/>}
            
            <div className='flex justify-between items-end mb-[16px]'>
                <h2 className='text-[18px] text-Text_Color_blue vertical-middle mt-[36px]  font-[600]'>My Assesment</h2>
                <div className='options'>
                    <button>
                        <Image src={SearchIcon} alt='icon'/>
                    </button>
                    <button>
                        <Image src={FilterIcon} alt='icon'/>
                    </button>
                    <button className={`${showOverview && 'p-[14px] bg-Light_blue rounded-full border-[1px]'} border-Secondary`} onClick={()=>setShowOverview(!showOverview)}>
                        <Image src={StatsIcon} alt='icon'/>
                    </button>
                </div>
            </div>
            <div className='card-container'>
                <NewAssignment setIsOpen={setIsOpen}/>
                <AssesmentCard/>
                <AssesmentCard/>
                <AssesmentCard/>
                <AssesmentCard/>
                <AssesmentCard/>
                <AssesmentCard/>
            </div>
        </div>
        {isOpen && <Bottomsheet setOpen={setIsOpen}/>}

        {sideMenuOpen && <DrawerSide styleClasses={''} setOpen={setSideMenuOpen}/>}
        
    </main>
  )
}
