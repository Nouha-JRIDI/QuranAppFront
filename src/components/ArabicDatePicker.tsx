import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { arTN } from 'date-fns/locale';

registerLocale('ar', arTN);

const ArabicDatePicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      <label htmlFor="start">Start date:</label>
      <DatePicker
        id="start"
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        locale="ar"
        dateFormat="yyyy-MM-dd"
        minDate={new Date(2018, 0, 1)}
        maxDate={new Date(2018, 11, 31)}
      />
    </div>
  );
};

export default ArabicDatePicker;
