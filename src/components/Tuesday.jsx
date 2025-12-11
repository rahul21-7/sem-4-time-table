import React from 'react'
import Empty from './Empty'
import AI_lab from './AI_lab'
import Lunch from './Lunch'
import Database from './Database'
import AI_thoery from './AI_thoery'
import Business from './Business'

const Tuesday = () => {
    return (
        <div className='flex gap-2'>
            <Empty />
            <AI_lab />
            <Lunch />
            <Empty />
            <Database />
            <AI_thoery />
            <Business />
            <Empty />
        </div>
    )
}

export default Tuesday
