import { useState } from "react";
import { Calendar } from "../Calendar";

export function DisablePastDemo() {
    const [selectedDate, setSelectedDate] = useState<Date[]>([]);
  
    return (
      <div className="p-4 border rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Disable Past Dates</h2>
        <Calendar
          selectedDates={selectedDate}
          onDateSelect={(date) => setSelectedDate([date])}
          variant="default"
          color="light"
          disablePast
        />
        <p className="mt-2 text-sm text-gray-600">
          Selected: {selectedDate[0]?.toLocaleDateString() || "None"}
        </p>
      </div>
    );
  }