import Image from 'next/image'
import React from 'react'
import BriefCaseIcon from '@/assets/AssesmentCard/brief-case.svg'
import ThreeDotsIcon from '@/assets/three-dots.svg'
import CalenderIcon from '@/assets/calender.svg'
import ShareIcon from '@/assets/share.svg'
import './styles.css'
import AccountAggrigate from '../AccountsAggrigate'

export default function AssesmentCard() {
  return (
    <div className='card text-Text_Color_blue font-[600] border-2 border-Bg_Light rounded-[12px] p-[16px] relative'>
        <button className='absolute top-[16px] right-[16px]'>
            <Image src={ThreeDotsIcon} alt='icon'/>
        </button>
        <div className=''>
            <div className='column-details'>
                <Image src={BriefCaseIcon} alt='icon'/>
                <div>
                    <h4>Math Assesment</h4>
                    <div className='flex gap-[10px] mt-[3px]'>
                        <span>Job</span>
                        <span className='row'></span>
                        <span className='flex gap-[4px]'>
                            <Image src={CalenderIcon} alt='icon'/>
                            <pre className='text-[#8DA4BF]'>20 Apr 2023</pre>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t-2 border-dashed pt-[16px] mt-[16px] border-Bg_Light '>
                <div className='flex gap-[14px]'>
                    <div className='flex flex-col'>
                        <span>
                            00
                        </span>
                        <span className='font-[400] text-[12px]'>
                            Duration
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span>
                            00
                        </span>
                        <span className='font-[400] text-[12px]'>
                            Questions
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[2px]'>
                        <button className='sticky bottom-[10px] border-[1px] border-Text_Color_blue rounded-full flex items-center pr-[8px] pl-[6px] py-[3px]'>
                            <Image src={ShareIcon} alt='icon'/>
                            Share
                        </button>
                        <div>
                            <AccountAggrigate accounts={['L','P']}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
