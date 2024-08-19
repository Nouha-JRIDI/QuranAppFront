import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';
import {
  faArrowLeft,
  faArrowRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';

import WhiteBtn from './WhiteBtn';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from 'ag-grid-community';
import Title from './Title';
import React from 'react';
import Modal from 'react-modal';
import ArabicDatePicker from './ArabicDatePicker';
import LightBlueBtn from './LightBlueBtn';
import Input from './Input';
import Select from './Select';

const weekdays = [
  'الإثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
  'الأحد',
];
interface PresentBtnProps {
  value: boolean;
}
interface ExamRow {
  "الطالب": string;
  "المقدار": string;
  "العرض":boolean;
  
}

const exams = [
  {
    id: 1,
    student: 'مريم',
    quantity: '"سورة البقرة : من الآية 30 إلى الآية 40"',
    present:false,
  },
  {
    id: 2,
    student: 'جميلة',
    quantity: '"سورة البقرة : من الآية 30 إلى الآية 40"',
    present: false,
    
  },
  {
    id: 3,
    student: 'أحمد',
    quantity: '"سورة البقرة : من الآية 30 إلى الآية 40"',
    present: false,
    
  },
];
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',  
    height: 'auto',  
    padding: '20px',  
    
  },
};

Modal.setAppElement('#root');

const Exams = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [displayDate, setDisplayDate] = useState('');


  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  useEffect(() => {
    console.log(displayDate);
  }, [displayDate]);

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      days.push(
        <li
          key={i}
          onClick={() => {
            handleDateClick(i, year);
          }}
          className={`w-14 h-14 grid place-items-center font-bold relative transition-colors duration-300 ease-in-out ${
          isToday ? 'bg-[#46c0de] text-white rounded-full' : 'hover:bg-gray-300 cursor-pointer rounded-full'
        }`}
        >
          {i}
        </li>,
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleDateClick = useCallback(
    (date: number, year: number) => {
      const month = currentDate.getMonth();
      const dateString =
        'يوم ' +
        date +
        ' ' +
        new Date(year, month).toLocaleString('ar-TN', { month: 'long' }) +
        ' ' +
        year;
      setDisplayDate(dateString);
    },
    [currentDate],
  );
  const PresentBtn = ({ value }: PresentBtnProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [confirmedOption, setConfirmedOption] = useState<string | null>(null);
  
    const handleButtonClick = () => {
      setIsClicked(true);
    };
  
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
  
    const handleConfirmClick = () => {
      if (selectedOption) {
        setConfirmedOption(selectedOption);
        setIsClicked(false); 
      }
    };
  
    if (confirmedOption) {
      return <span>{confirmedOption}</span>; 
    }
  
    return value === false ? (
      isClicked ? (
        <div className="flex items-center">
          <select
            value={selectedOption || ''}
            onChange={handleSelectChange}
            className="bg-white text-black rounded px-2 py-1"
          >
            <option value="" disabled>
              اختر الخيار
            </option>
            <option value="متوسط">متوسط</option>
            <option value="حسن">حسن</option>
            <option value="حسن جدا">حسن جدا</option>
          </select>
          <button
            onClick={handleConfirmClick}
            className="bg-green-500 text-white rounded ml-2 px-2 py-1"
          >
            تأكيد
          </button>
        </div>
      ) : (
        <button
          onClick={handleButtonClick}
          className="bg-light-blue text-white rounded w-100px"
        >
          تم
        </button>
      )
    ) : null;
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [rowData, setRowData] = useState<ExamRow[]>([]);

  useEffect(() => {
   
    const mappedData = exams.map(exam => ({
      "الطالب": exam.student,
      "المقدار": exam.quantity,
      "العرض":exam.present
    }));
    
    setRowData(mappedData);
  }, []);
  

  
  
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {field: "الطالب",headerClass:"custom-header"},
    { field: "المقدار" ,headerClass:"custom-header",cellStyle: {  width:"fit-content"},flex:2},
    {field: "العرض",headerClass:"custom-header", cellRenderer: PresentBtn}
   
  ]);
  return (
    <div>
      <div className="w-[60vw] p-2.5 m-2.5 mx-auto max-w-[1170px] flex justify-around">
        <WhiteBtn onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
          امتحانات
        </WhiteBtn>
        <SearchBar />
      </div>
      <div className="w-[90vw] m-2.5 mx-auto max-w-[1170px] flex flex-col justify-center items-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <Title>إضافة إمتحان </Title>
            <div>
              <form className="grid grid-cols-2 gap-5 items-center m-5">
                <label htmlFor="memorization">
      
                  مقدار المحفوظ :
                  <Input id="memorization" name="memorization" />
                </label>

                <label htmlFor="students">
      
                  الطلبة :
                  <Select name="students" id="students">
                    <option value=""></option>
                  </Select>
                </label>
                <label className="text-xs" htmlFor="date">
                  تاريخ الإمتحان:
                  <ArabicDatePicker />
                </label>

                <div className="flex items-center gap-[20px]">
                  <LightBlueBtn>إضافة</LightBlueBtn>
                  <button className="text-black text-base bg-white border-2 border-black py-2 px-4 mt-2.5 w-[150px] transition-all duration-300 hover:bg-[#f7f3ff] cursor-pointer" onClick={closeModal}>
        
                    إلغاء
                  </button>
                </div>
              </form>
            </div>

        </Modal>

        <div className="flex gap-[50px]">
          <div className="bg-white w-2/5 m-2.5 grid h-auto grid-rows-[8rem_auto] shadow-[0_0.5rem_0.5rem_rgb(179,196,211)]">
            <section className="px-5 text-[#7d8994] flex justify-between items-center">
              <FontAwesomeIcon
                onClick={prevMonth}
                className="w-[50px] p-2 rounded-[5px] hover:bg-[#dfdada] cursor-pointer"
                icon={faArrowRight}
              />
              <h3>
                {currentDate.toLocaleString('ar-TN', { month: 'long' })}{' '}
                {currentDate.getFullYear()}
              </h3>

              <FontAwesomeIcon
                onClick={nextMonth}
                className="w-[50px] p-2 rounded-[5px] hover:bg-[#dfdada] cursor-pointer"
                icon={faArrowLeft}
              />
            </section>
            <section className="border-t border-gray-300">
              <ul className="flex justify-between items-center h-16">
                {weekdays.map((day) => (
                  <li key={day} className="flex-1 font-bold uppercase text-center text-custom-gray mx-0.5">{day}</li>
                ))}
              </ul>
              <ul className="grid gap-1 grid-cols-7 justify-items-center text-center">{generateCalendar()}</ul>
            </section>
          </div>
          <div className='w-[60vw]'>
            <Title>{displayDate}</Title>
            
            <div
  className="ag-theme-quartz" 
  
 >
   <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
       enableRtl={true}
       domLayout='autoHeight'
       
   />
 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
