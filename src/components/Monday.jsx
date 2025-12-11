import React from 'react'
import OS_lab from './OS_lab'
import AI_thoery from './AI_thoery'
import OS_Design from './OS_Design'
import Lunch from './Lunch'
import Business from './Business'
import Empty from './Empty'

const Monday = () => {
  return (
    <div className='flex gap-2'>
      <OS_lab />
      <Lunch />
      <OS_Design />
      <AI_thoery />
      <Business />
      <Empty />
      <Empty />
    </div>
  )
}

export default Monday
