import { coursesData } from "@/dashboardData/data";


export default function CoursesTable() {
  return (
    <div className="bg-white font-raleway pt-2 pb-6">
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold  text-[20px] text-gray-900">My Courses</h3>
        <button className="text-sm text-[#6D5DF6] hover:underline">
          View All
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="font-semibold py-3">Course Name</th>
              <th className="font-semibold py-3">Start Date</th>
              <th className="font-semibold py-3 ">Lesson Completed</th>
              <th className="font-semibold py-3 text-right">Duration</th>
            </tr>
          </thead>

          <tbody>
            {coursesData.map((c) => {
              const percent = Math.round((c.completed / c.lessons) * 100);

              return (
                <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                  
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl hidden lg:flex items-center justify-center ${c.badgeBg} ${c.badgeText}`}>
                         <c.icon className=""/>
                      </div>
                     

                      <div className="leading-tight">
                        <p className="font-medium text-[16px] text-gray-900">{c.name}</p>
                        <p className="text-[13px] font-inter text-gray-400">
                          {c.lessons} lessons
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Start Date */}
                  <td className="py-4 font-inter text-gray-700">{c.startDate}</td>

                  {/* Lesson Completed */}
                  <td className="py-4 font-inter text-gray-700">
                    {c.completed}/{c.lessons}{" "}
                    <span className="text-gray-500 font-inter">({percent}%)</span>
                  </td>

                  {/* Duration */}
                  <td className="py-4 font-inter text-right text-gray-700">{c.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
