'use client'
import React,{useState, useRef} from 'react'
import CrossIcon from '@/assets/cross.svg'
import Image from 'next/image';

export default function AssesmentFrom({onSave}:any) {
    const ref = useRef<any>(null);
    const [skills, setSkills] = useState<string[]>([]);
    function keyDownCaptureHandler(){
        if(ref.current?.value?.length > 0){
            setSkills([...skills, ref.current?.value])
            ref.current.value = '';
        }
    }
    
    function deleteHandler(event: any): void {
        setSkills(skills.filter((value)=>value!== event.target.value))
    }

  return (
    <div>
        <form className='text-Text_Color_blue' onSubmit={(e)=>e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="name">Name of Assessment</label>
          <input className="mt-1 p-[15px] w-full border rounded-[8px]" type="text" id="name" name="name" placeholder="Type Here" style={{ color: '#1C4980', fontSize: '14px' }} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="purpose">Purpose of test is </label>
          <select className="mt-1 p-[15px] p-2 w-full border rounded" id="purpose" name="purpose" style={{ color: '#1C4980', fontSize: '14px' }} >
          <option disabled selected>Select</option>
            <option>Purpose</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="field3">Discription</label>
          <select className="mt-1 p-[15px] w-full border rounded-[8px]" id="field3" name="field3" style={{ color: '#1C4980', fontSize: '14px' }}>
            <option disabled selected>Select</option>
            <option>Discription</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="field4">Skills</label>
          <div className='border-[1px] border-Bg_Light rounded-[8px]'>
            <div className='border-b-[1px] p-[15px] border-Bg_Light flex flex-wrap gap-[10px]'>
                {skills.map((skill:string)=><span key={skill} className='bg-Light_blue p-[6px_10px_6px_10px] rounded-full flex items-center' >
                    {skill}
                    <button value={skill} id='delete-btn' onClick={deleteHandler} className='text-Text_Color_blue font-[700] pl-[5px]'>
                        X
                    </button>
                </span>)}
            </div>
            <div className='flex'>

                <input className='block p-[15px] text-sm font-medium  w-full outline-none' placeholder='Type Here' style={{ color: '#1C4980', fontSize: '14px' }} ref={ref}/>
                <button className='text-Text_Color_blue font-[700] pl-[5px] mr-[2px]' onClick={keyDownCaptureHandler}>
                    Add 
                </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="field5">Duration of Assesment</label>
          <input className="mt-1 p-[15px] w-full border rounded-[8px]" type="text" id="field5" placeholder='HH:MM:SS' name="field5" style={{ color: '#1C4980', fontSize: '14px' }} />
        </div>
      </form>
    </div>
  )
}
