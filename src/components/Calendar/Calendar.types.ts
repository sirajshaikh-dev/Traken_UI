export type CalendarProps = {
    selectedDate?: Date[];
    onSelectDate: (date: Date) => void;
    disablePast?: boolean;
    disableFuture?: boolean;
    className?: string;
  };
  