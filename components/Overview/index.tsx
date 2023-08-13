import React from 'react'
import './styles.css'
import Image from 'next/image'
import TotalAssesmentIcon from '@/assets/Overview/total-assesment.svg'
import TotalPurposeIcon from '@/assets/Overview/total-purpose.svg'
import CandidateSourcesIcon from '@/assets/Overview/candidate-sources.svg'
import CandidatesIcon from '@/assets/Overview/candidates.svg'

export default function Overview() {
  return (
    <section className='grid overview'>
        <div className='total-assesment border-r-2 border-Bg_Light'>
            <span>Total Assesment</span>
            <div className='flex items-center text-[1.1em] font-[700] gap-[0.555em] mt-[0.8em]'>
                <Image src={TotalAssesmentIcon} alt="icon"/>
                34
            </div>
        </div>
        <div className='candidates border-r-2 border-Bg_Light'>
            <span>Candidates</span>
            <div className='flex items-center text-[1.1em] flex-wrap font-[700] text-[0.555em] mt-[0.8em]'>
                <Image src={CandidatesIcon} alt="icon"/>
                <div className='flex flex-col items-center gap-[8px] pr-[20px] border-r-2 border-Bg_Light'>
                    <div className='text-[1.1em] flex items-center gap-[5px]'>
                        11,454
                        <span className='text-green text-[12px] font-[500]'>
                            +89
                        </span>
                    </div>
                    <span className='text-[12px] font-[500] ml-[0.5em] align-text-bottom'>
                        Total Candidates
                    </span>
                </div>
                <div className='flex flex-col items-center gap-[8px] px-[20px]'>
                    <div className='text-[1.1em] flex items-center gap-[5px]'>
                        1,14
                        <span className='text-green text-[12px] font-[500]'>
                            +89
                        </span>
                    </div>
                    <span className='text-[12px] font-[500] align-text-bottom'>
                        Who Attempted
                    </span>
                </div>
            </div>
        </div>
        <div className='candidate-sources border-r-2 border-Bg_Light'>
            <span>Candidates Sources</span>
            <div className='flex items-center flex-wrap text-[1.1em] font-[700] gap-[6px] mt-[0.8em]'>
                <Image src={CandidateSourcesIcon} alt="icon"/>
                <div className='flex flex-col items-center gap-[8px] pr-[10px] border-r-2 border-Bg_Light'>
                    <div className='text-[1.1em] flex items-center gap-[5px]'>
                        11,000
                        <span className='text-green text-[12px] font-[500]'>
                            +89
                        </span>
                    </div>
                    <span className='text-[12px] font-[500] text-start align-text-bottom'>
                        Email
                    </span>
                </div>
                <div className='flex flex-col items-center gap-[8px] px-[10px] border-r-2 border-Bg_Light'>
                    <div className='text-[1.1em] flex items-center gap-[5px]'>
                        145
                        <span className='text-green text-[12px] font-[500]'>
                            +89
                        </span>
                    </div>
                    <span className='text-[12px] font-[500] align-text-bottom'>
                        Social Share
                    </span>
                </div>
                <div className='flex flex-col items-center  px-[10px]'>
                    <div className='text-[1.1em] flex items-center gap-[5px]'>
                        145
                        <span className='text-green text-[12px] font-[500]'>
                            +89
                        </span>
                    </div>
                    <span className='text-[12px] font-[500] align-text-bottom'>
                        Unique Links
                    </span>
                </div>
            </div>
        </div>
        <div className='total-purpose '>
            <span>Total Purpose</span>
            <div className='flex items-center text-[1.1em] gap-[0.555em] font-[700] text-[0.555em] mt-[0.8em]'>
                <Image src={TotalPurposeIcon} alt="icon"/>
                <span>11</span>
            </div>
        </div>
    </section>
  )
}
