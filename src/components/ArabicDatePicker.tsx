import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { arTN } from 'date-fns/locale';

registerLocale('ar', arTN);

const ArabicDatePicker = () => {
  const [delayDate, setDelayDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DatePicker
        className="h-30 w-200 mr-6 border border-gray-300 p-3"
        id="date"
        selected={delayDate}
        onChange={(date: Date | null) => setDelayDate(date)}
        locale="ar"
        dateFormat="yyyy-MM-dd"
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
      />
    </div>
  );
};

export default ArabicDatePicker;
