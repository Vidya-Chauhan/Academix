import React from "react";
import CalendarPDF  from "../assets/Calendar.pdf";
const Calendar = () => {
    return (
<div className="min-h-screen bg-[#f5efe8] flex items-center justify-center pt-24 px-4">
    <h1 className="text-3xl font-bold text-[#2f4156] mb-8 text-center">
         📅 Academic Calendar
    </h1>

    <div className="w-full max-w-5xl mx-auto h-[80vh] shadow-lg border border-[#C0D9E6] rounded-xl overflow-hidden">
        <iframe src={CalendarPDF} 
        title = "Academic Calendar"
        className="w-full h-full"
        frameborder="0"></iframe>
    </div>
</div>
    );
};
export default Calendar;