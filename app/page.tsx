import SidePanel from '@/components/SideBar'
import Image from 'next/image'
import Main from '@/components/Main'

export default function Home() {
  return (
    <>
      <SidePanel styleClasses={'sidePannel'}/>
      <Main/>
    </>
  )
}
