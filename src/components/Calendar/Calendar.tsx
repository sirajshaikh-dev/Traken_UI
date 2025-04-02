import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CalendarProps {
  selectedDates: Date[];
  onDateSelect: (date: Date) => void;
  disablePast?: boolean;
  disableFuture?: boolean;
  className?: string;
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

export const Calendar: React.FC<CalendarProps> = ({
  selectedDates = [],
  onDateSelect,
  disablePast = false,
  disableFuture = false,
  className = "",
}) => {
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleToday = () => {
    setCurrentMonth(today);
  };

  const handleSelectDate = (date: Date) => {
    if (!disablePast || date >= today) {
      onDateSelect(date);
    }
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  return (
    <motion.div
      className={cn("w-full max-w-md bg-gray-900 text-white shadow-lg p-4 rounded-lg", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleToday} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
          Today
        </button>
        <button onClick={handlePrevMonth} className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600" aria-label="Previous month">
          ←
        </button>
        <span className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button onClick={handleNextMonth} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600" aria-label="Next month">
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-400">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold">{day}</div>
        ))}
        {Array.from({ length: firstDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, day) => {
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day + 1);
          const isToday = date.toDateString() === today.toDateString();
          const isSelected = Array.isArray(selectedDates) && selectedDates.some((d) => d.toDateString() === date.toDateString());
          const isPast = disablePast && date < today;
          const isFuture = disableFuture && date > today;
          return (
            <motion.button
              key={day}
              className={cn(
                "p-2 rounded-full transition text-white",
                isToday && "border border-blue-400",
                isSelected && "bg-blue-500",
                isPast || isFuture ? "text-gray-600 cursor-not-allowed" : "hover:bg-gray-700"
              )}
              onClick={() => !isPast && !isFuture && handleSelectDate(date)}
              disabled={isPast || isFuture}
              aria-label={`Select ${date.toDateString()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {day + 1}
            </motion.button>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 gap-2">
        
        {/*
        <button onClick={() => setCurrentMonth(new Date(today.getFullYear(), today.getMonth() + 1))} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
          Next Month
          </button>
          */}
      </div>
    </div>
    </motion.div>
  );
};
