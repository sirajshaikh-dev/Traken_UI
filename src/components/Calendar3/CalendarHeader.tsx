import React, { useState } from "react";
import { calendarHeaderVariants } from "./CalendarVariants";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";
import { cn } from "@/lib/utils";
import Button from "../button/Button";

interface CalendarHeaderProps {
  currentMonth: Date;
  variant: "default" | "month-year-picker" | "range-picker";
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  variant,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onToday,
}) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  const handleTodayClick = () => {
    onToday();
    setIsMonthOpen(false);
    setIsYearOpen(false);
  };

  return (
    <div className={calendarHeaderVariants({ variant: variant === "range-picker" ? "default" : variant })}>
      <Button
        onClick={handleTodayClick}
        color="primary"
      >
        Today
      </Button>

      {variant === "month-year-picker" ? (
        <div className="flex gap-2">
          <MonthPicker
            month={currentMonth.getMonth()}
            onChange={onMonthChange}
            open={isMonthOpen}
            onOpenChange={setIsMonthOpen}
          />
          <YearPicker
            year={currentMonth.getFullYear()}
            onChange={onYearChange}
            open={isYearOpen}
            onOpenChange={setIsYearOpen}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            onClick={onPrevMonth}
            color="primary"
            rounded="full"
            // size="md"
            className="p-2"
          >
            ←
          </Button>
          <span className="text-lg font-semibold">
            {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </span>
          <Button
            onClick={onNextMonth}
            color="primary"
            rounded="full"
            // size="md"
            className="p-2"          >
            →
          </Button>
        </div>
      )}
    </div>
  );
};