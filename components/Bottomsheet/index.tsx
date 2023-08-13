import React from 'react'
import './styles.css'
import CrossIcon from '@/assets/cross.svg'
import Image from 'next/image'
import AssesmentFrom from '../AssesmentForm'

export default function Bottomsheet({setOpen}:any) {
    function handleOnclick(e:any){
        if(e.target.className === "bottomsheet-wrapper")
            setOpen(false)
    }
    function handleCloseclick(e:any){
            setOpen(false);
    }
    
    return (
        <div className='bottomsheet-wrapper' onClick={handleOnclick}>
            <div className='bottomsheet'>
                <div className='bottomsheet-header'>
                    <span className='title'>
                        {'Create New Assessment'}
                    </span>
                    <button onClick={handleCloseclick}>
                        <Image src={CrossIcon} alt='icon'/>
                    </button>
                </div>
                <div className='bottomsheet-body'>
                    <AssesmentFrom onSave={()=>setOpen(false)}/>
                </div>
                <div className='bottomsheet-footer'>
                    <button className="px-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Next</button>
                </div>
            </div>
        </div>
    )
}
