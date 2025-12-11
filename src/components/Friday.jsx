import React from 'react'
import Empty from './Empty'
import Business from './Business'
import OS_Design from './OS_Design'
import ML from './ML'
import Lunch from './Lunch'

const Friday = () => {
    return (
        <div className='flex gap-2'>
            <Business />
            <Empty />
            <OS_Design />
            <ML />
            <Lunch />
            <Empty />
            <Empty />
            <Empty />
            <Empty />
        </div>
    )
}

export default Friday
