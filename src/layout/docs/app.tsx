// import Accordion from "@/components/accordion/Accordion";
// import AccordionItem from "@/components/accordion/AccordionItem";
import { Calendar } from "@/components/Calendar";
// import Calendar from "@/components/Calendar/Calendar";
import { useState } from "react";

const Example = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="p-10">
    <h1 className="text-2xl font-bold mb-4">Select a Date</h1>
    <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
  </div>
  );
};

export default Example;
