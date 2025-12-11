import React from 'react'
import Empty from './Empty'
import ML from './ML'
import Database from './Database'
import OS_Design from './OS_Design'
import Lunch from './Lunch'
import DB_lab from './DB_lab'

const Wednesday = () => {
    return (
        <div className='flex gap-2'>
            <Empty />
            <ML />
            <Database />
            <OS_Design />
            <Lunch />
            <DB_lab />
            <Empty />
        </div>
    )
}

export default Wednesday
