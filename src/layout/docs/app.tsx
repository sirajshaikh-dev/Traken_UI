// import { Calendar } from "@/components/Calendar/Calendar"; //Calendar me variants defined nhi hai
// import { Calendar } from "@/components/Calendar2/Calendar"; // Calendar2 me 3variants defined hai
import { Calendar } from "@/components/Calendar3/Calendar"; // Calendar3 final version he,
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

const Example = () => {

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateSelect = (date: Date) => {
    setSelectedDates([date]);
  };

  return (
    <div className="p-10">
      <Calendar
        selectedDates={selectedDates}
        onDateSelect={handleDateSelect}
        disablePast={false}
        disableFuture={false}
        variant="range-picker"
        color="default"
        size="md"
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Music', href: '#' },
          { label: 'Artist', href: '#' },
          { label: 'Album', href: '#' },
          { label: 'Song', isCurrent: true }
        ]}
      />      
    </div>
  );
};

export default Example;