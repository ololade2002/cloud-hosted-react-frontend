import React from 'react'
import { scheduleData } from '@/dashboardData/data'

const UpcomingSchedule = () => {
  return (
    <main className='font-raleway pt-8 pb-3 '>
      <h2 className='font-semibold text-[20px] text-gray-900 '>Upcoming Schedule</h2>
      <div className='flex flex-col -mt-1 -space-y-5'>
        {scheduleData.map((item) => (
          <div className="item-list flex flex-row w-full gap-2 items-center " key={item.id}>
            <div className={`${item.bg} p-3 rounded-lg mt-4 mb-4`}>
              <item.icon className={` ${item.iconColor}`}/>
            </div>
            <div className='flex flex-col   '>
              <h2 className='text-[17px] font-semibold'>{item.title}</h2>
              <p className='text-sm text-gray-500 font-inter '>{item.dateTime}</p>
            </div>

          </div>
        ))}
      </div>
      
    </main>
    
  )
}

export default UpcomingSchedule