
import './App.css'
import Calendar from './components/AppCalendar'
import CoursesTable from './components/CoursesTable'
import Header from './components/header'
import StatsCard from './components/StatsCard'
import TaskProgress from './components/TaskProgress'
import TimeSpendingBar from './components/TimeSpendingBar'
import UpcomingSchedule from './components/UpcomingSchedule'
import AppSidebar from './components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


function App() {
 

  return (
      <SidebarProvider className=''>
      <div className="flex  min-h-screen w-full">
        <AppSidebar />

        <main className="flex-1 px-6 bg-white ">
          <div>
             <SidebarTrigger className="mt-1" />
          </div>
          <div>
             <Header />
          </div>
        
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-8'>
            <div className='lg:col-span-9'>
              <StatsCard/>
              <TimeSpendingBar/>
              <CoursesTable/>
            </div>
            <div className='lg:col-span-3'>
              <Calendar/>
              <UpcomingSchedule/>
              <TaskProgress/>
            </div>
          </div>

        </main>
      </div>
    </SidebarProvider>
  )
}

export default App



/*
    <main className=" mx-auto px-6 py-6 bg-bgLightPurple">
      <div className='grid grid-cols-12 '>
        <div className='bg-white col-span-3 rounded-tl-2xl rounded-bl-2xl '>
          <AppSidebar/>
        </div>
       
        <div className='bg-white col-span-9 rounded-tr-2xl rounded-br-2xl inset-shadow-neutral-500 '>
          <div className=''>
            <Header/>
          </div>

          <div className='grid grid-cols-2'>
            <div>
              <StatsCard/>
              <TimeSpendingBar/>
              <CoursesTable/>
            </div>
            <div>
              <Calendar/>
              <UpcomingSchedule/>
              <TaskProgress/>
            </div>
          </div>
        </div>

      </div>
    </main>
*/