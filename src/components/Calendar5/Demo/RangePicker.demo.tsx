import { useState } from "react";
import { Calendar } from "../Calendar";

export function RangePickerDemo() {
    const [rangeDates, setRangeDates] = useState<Date[]>([]);
  
    const handleDateSelect = (date: Date) => {
      if (rangeDates.length === 2 || rangeDates.length === 0) {
        setRangeDates([date]);
      } else {
        setRangeDates([...rangeDates, date]);
      }
    };
  
    return (
      <div className="p-4 border rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Range Picker</h2>
        <Calendar
          selectedDates={rangeDates}
          onDateSelect={handleDateSelect}
          variant="range-picker"
          color="light"
        />
        <p className="mt-2 text-sm text-gray-600">
          Selected Range:{" "}
          {rangeDates.length > 0
            ? `${rangeDates[0]?.toLocaleDateString()} ${
                rangeDates[1] ? `to ${rangeDates[1]?.toLocaleDateString()}` : ""
              }`
            : "None"}
        </p>
      </div>
    );
  }