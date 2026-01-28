import React from 'react'
import { statsCardData } from '@/dashboardData/data'

const StatsCard = () => {
  return (
    <section className='font-raleway flex flex-col lg:flex-row flex-12 gap-4  justify-between items-center '>
      {statsCardData.map((item) => (
        <div className={`flex flex-row lg:w-4/12 w-full rounded-2xl items-center px-4 py-8 gap-4 hover:shadow-md transition-shadow duration-300 ease-in-out  ${item.bg}`} key={item.id}>
          <div className={`p-4 rounded-full bg-white/90 `}>
          <item.icon className={`w-6 h-6  ${item.iconColor}`}/> 
          </div>
          <div className=' text-white gap-0.5 flex flex-col '>
            <h2 className='font-medium  text-[15px]'>{item.title}</h2>
            <p className='text-[30px] font-inter font-bold'>{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default StatsCard