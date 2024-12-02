// "use client";

// import * as React from "react";
// import { addDays, format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { DateRange } from "react-day-picker";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export function DatePickerWithRange({ className }) {
//   const [date, setDate] = React.useState({
//     from: new Date(2022, 0, 20),
//     to: addDays(new Date(2022, 0, 20), 20),
//   });

//   return (
//     <div className={cn("grid gap-2", className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             id="date"
//             variant={"outline"}
//             className={cn(
//               "w-[300px] justify-start text-left font-normal",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon />
//             {date?.from ? (
//               date.to ? (
//                 <>
//                   {format(date.from, "LLL dd, y")} -{" "}
//                   {format(date.to, "LLL dd, y")}
//                 </>
//               ) : (
//                 format(date.from, "LLL dd, y")
//               )
//             ) : (
//               <span>Pick a date</span>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className="w-auto p-0"
//           align="start"
//         >
//           <Calendar
//             initialFocus
//             mode="range"
//             defaultMonth={date?.from}
//             selected={date}
//             onSelect={setDate}
//             numberOfMonths={2}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// ==================================

// "use client";

// import React from "react";
// import { addDays, format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { DateRange } from "react-day-picker";
// import { useDateRange } from "@/context/DateRangeContext"; // Import the context

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export function DatePickerWithRange({ className }) {
//   const { dateRange, updateDateRange } = useDateRange(); // Access context

//   const handleDateSelect = (newDate) => {
//     updateDateRange(newDate); // Update the context with the selected date range
//   };

//   return (
//     <div className={cn("grid gap-2", className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             id="date"
//             variant={"outline"}
//             className={cn(
//               "w-[300px] justify-start text-left font-normal",
//               !dateRange && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon />
//             {dateRange?.from ? (
//               dateRange.to ? (
//                 <>
//                   {format(dateRange.from, "LLL dd, y")} -{" "}
//                   {format(dateRange.to, "LLL dd, y")}
//                 </>
//               ) : (
//                 format(dateRange.from, "LLL dd, y")
//               )
//             ) : (
//               <span>Pick a date</span>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className="w-auto p-0"
//           align="start"
//         >
//           <Calendar
//             initialFocus
//             mode="range"
//             defaultMonth={dateRange?.from}
//             selected={dateRange}
//             onSelect={handleDateSelect} // Trigger handleDateSelect on date selection
//             numberOfMonths={2}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// DatePickerWithRange component
export function DatePickerWithRange({
  className,
  minDate = new Date(), // Default minDate is today
  maxDate = addDays(new Date(), 365), // Default maxDate is one year from today
  onDateRangeSelect,
}) {
  const [date, setDate] = React.useState({
    from: minDate,
    to: addDays(minDate, 20),
  });

  // Handle date selection
  const handleDateSelect = (newDate) => {
    setDate(newDate);
    if (onDateRangeSelect) {
      onDateRangeSelect(newDate); // Trigger the callback to parent
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            // Set min and max date for the calendar
            disabled={{ before: minDate, after: maxDate }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
