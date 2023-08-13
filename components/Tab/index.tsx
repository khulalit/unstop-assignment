import React from 'react'
import './styles.css'
import TopBar from '../TopBar'

export default function Tab({tabList, setSideMenuOpen} : {tabList : Array<unknown>, setSideMenuOpen: Function}) {
    const tabs = [
        {
            title : 'Assesment',
            isSelected: false,
        },
        {
            title : 'My Assesment',
            isSelected: true,
        }
    ]
    return (
        <header className='border-2 border-white tabs bg-white'>
            <TopBar setSideMenuOpen={setSideMenuOpen} />
            <nav>
                <ul className='bg-white text-Text_Color_blue font-[600] border-b-[1px] border-Bg_Light flex text-[20px] gap-[20px] px-[20px] py-[22px]'>
                    {tabs.map(({title, isSelected}, index)=>
                    <li key={title} className={`cursor-pointer ${isSelected ? ' tab-li text-Secondary': '' }  pr-[20px] ${index !== tabs.length - 1 ? 'border-r-2 border-Bg_Light': ''}`}>
                        {title}
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}
