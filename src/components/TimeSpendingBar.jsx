import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

import { ChevronDown } from "lucide-react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 86, mobile: 180 },
  { month: "February", desktop: 205, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 94, mobile: 179 },
  { month: "July", desktop: 258, mobile: 140 },
  { month: "August", desktop: 280, mobile: 160 },
];

const chartConfig = {
  desktop: {
    label: "Active",
    color: "#2563eb",
  },
  mobile: {
    label: "Inactive",
    color: "#BFDBFE",
  },
};

export default function TimeSpendingBar() {
  return (
   <main className="font-raleway pt-8 pb-4">
      <div className="flex flex-row pb-2 items-center justify-between">
       <h2 className="font-semibold text-[20px] text-gray-900">Time Spending</h2>
       <div className="flex flex-row items-center text-gray-500 bg-[#F5F7FB] p-2 gap-3 rounded-lg">
        <p>This Year</p>
        <ChevronDown className="w-4 h-4"/>
       </div>
      </div>
      <ChartContainer config={chartConfig} className=" h-[47vh] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)} />

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
   </main>
  );
}
