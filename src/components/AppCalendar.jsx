import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const AppCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg w-full border"
      />
    </div>
  );
};

export default AppCalendar;
