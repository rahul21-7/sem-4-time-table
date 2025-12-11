import React from 'react'
import Empty from './Empty'
import AI_thoery from './AI_thoery'
import ML from './ML'
import Database from './Database'
import Lunch from './Lunch'
import ML_lab from './ML_lab'

const Thursday = () => {
  return (
    <div className='flex gap-2'>
      <Empty />
      <AI_thoery />
      <ML />
      <Database />
      <Lunch />
      <ML_lab />
      <Empty />
      <Empty />
    </div>
  )
}

export default Thursday
