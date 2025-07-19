// import React from "react";
// import CalendarPDF  from "../assets/Calendar.pdf";
// const Calendar = () => {
//     return (
// <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center pt-24 px-4">
//     <h1 className="text-3xl font-bold text-[#2f4156] mb-8 text-center">
//          📅 Academic Calendar
//     </h1>

//     <div className="w-full max-w-5xl mx-auto h-[80vh] shadow-lg border border-[#C0D9E6] rounded-xl overflow-hidden">
//         <iframe src={CalendarPDF} 
//         title = "Academic Calendar"
//         className="w-full h-full"
//         frameborder="0"></iframe>
//     </div>
// </div>
//     );
// };
// export default Calendar;
import React from "react";
import CalendarPDF from "../assets/Calendar.pdf";

const Calendar = () => {
  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center pt-24 px-4">
      <h1 className="text-4xl font-extrabold text-[#2f4156] mb-6 tracking-wide">
        📅 Academic Calendar
      </h1>

      <p className="text-lg text-[#4b5d6e] mb-6 text-center max-w-2xl">
        Stay updated with all the important academic dates, holidays, and exam schedules.
      </p>

      <div className="w-full max-w-6xl mx-auto h-[80vh] rounded-2xl border border-[#cdd9e3] shadow-2xl overflow-hidden">
        <iframe
          src={CalendarPDF}
          title="Academic Calendar"
          className="w-full h-full rounded-2xl"
          frameBorder="0"
        ></iframe>
      </div>

      <a
        href={CalendarPDF}
        download
        className="mt-6 inline-block bg-[#2f4156] hover:bg-[#3d536f] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition duration-300"
      >
        📥 Download PDF
      </a>
    </div>
  );
};

export default Calendar;
