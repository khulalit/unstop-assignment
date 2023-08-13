import React from 'react'
import './styles.css'

export default function AccountAggrigate({accounts} : {accounts: any}) {
  return (
    <div className='account-container'>
        {accounts.map((value:string, index : number)=>{
            return <div key={value} className={`${index !== 0 && 'translate-'+(index+1)} account`}>
             {value}
            </div>})}
    </div>
  )
}
