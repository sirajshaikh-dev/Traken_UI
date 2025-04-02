import { Calendar } from "@/components/Calendar2/Calendar";
import { useState } from "react";

const Example = () => {

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateSelect = (date: Date) => {
    setSelectedDates([date]);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Select a Date</h1>
      <Calendar
        selectedDates={selectedDates}
        onDateSelect={handleDateSelect}
        disablePast={false}
        disableFuture={false}
        variant="month-year-picker"
        color="default"
        size="md"
      />
    </div>
  );
};

export default Example;