import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

const start = new Date(2015, 3, 1, 0, 0);
const end = new Date(2015, 10, 30, 23, 59);
const sundays = day => day.getDay() === 0;

export default function Restricted() {
  return (
    <DayPicker
      enableOutsideDays
      numberOfMonths={2}
      initialMonth={start}
      fromMonth={start}
      toMonth={end}
      disabledDays={[{ before: start }, { after: end }, sundays]}
      onDayClick={(day, { disabled }) => {
        if (!disabled) {
          console.log(day.toLocaleDateString());
        }
      }}
    />
  );
}
