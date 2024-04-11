import { useState } from "react";

type CalendarHookReturn = {
  currentDate: Date;
  getMonthMatrix: () => Date[][];
  handleYearMonthChange: (newYearMonth: string) => void;
};

export const useCalendar = (): CalendarHookReturn => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getMonthMatrix = () => {
    const matrix = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let week = Array(firstDayOfMonth).fill(null);
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(new Date(year, month, day));
      if (week.length === 7 || day === daysInMonth) {
        matrix.push(week);
        week = [];
      }
    }
    return matrix;
  };

  const handleYearMonthChange = (newYearMonth: string) => {
    const [newYear, newMonth] = newYearMonth.split(".");
    setCurrentDate(new Date(+newYear, +newMonth - 1));
  };

  return { currentDate, getMonthMatrix, handleYearMonthChange };
};
