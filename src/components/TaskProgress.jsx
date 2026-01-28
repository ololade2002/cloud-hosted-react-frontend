import { useState } from "react"
import { taskData } from "@/dashboardData/data"
import ProgressRing from "@/components/ProgressRing"

export default function TaskProgress() {
  const [selectedId, setSelectedId] = useState(taskData[0]?.id)

  return (
    <section className="pb-6">
      <div>
        <h2 className="font-semibold text-[20px] text-gray-900 pb-3">Task Progress</h2>
      </div>
       <div className="flex flex-col gap-3">
      {taskData.map((item) => {
        const active = item.id === selectedId

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedId(item.id)}
            className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition
              ${active ? "bg-[#6D5DF6] text-white border-transparent" : "bg-white hover:bg-gray-50"}`}
          >
            <ProgressRing
              value={item.progress}
              color={active ? "#ffffff" : "#6D5DF6"}
              track={active ? "rgba(255,255,255,0.3)" : "#EAEAF2"}
              textColor={active ? "#ffffff" : "#111827"} 
            />

            <div className="leading-tight">
              <h4 className={`font-semibold ${active ? "text-white" : "text-gray-900"}`}>
                {item.title}
              </h4>
              <p className={`text-sm ${active ? "text-white/80" : "text-gray-500"}`}>
                {item.task}
              </p>
            </div>
          </button>
        )
      })}
    </div>
    </section>
   
  )
}
