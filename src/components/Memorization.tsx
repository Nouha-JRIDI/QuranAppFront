import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WhiteBtn from './WhiteBtn';

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from 'ag-grid-community';
import React from 'react';
import Modal from 'react-modal';
import LightBlueBtn from './LightBlueBtn';
import Title from './Title';
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
const programs = [
  {
    id: 1,
    weekday: 'الإثنين',
    memoQuantity: '3 صفحات',
    repetition: '15',
    students: ['فلان', 'مريم', 'جميلة'],
    
  },
  {
    id: 2,
    weekday: 'السبت',
    memoQuantity: '2 صفحات',
    repetition: '10',
    students: ['فلان3', 'فلان2', 'فلان1', 'سناء'],
   
    
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

const LinkCellRenderer = (props: any) => {
  return (
    <Link to={`/memo-program/${props.value}`}>
      {props.value}
    </Link>
  );
};
interface ProgramRow {
      "رقم": number;
      "أيام الأسبوع": string;
      "مقدار الحفظ": string;
      "مقدار التكرار": string;
      "الطلبة": string;
    
      
}
Modal.setAppElement('#root');

const Memorization = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [rowData, setRowData] = useState<ProgramRow[]>([]);

  useEffect(() => {
   
    const mappedData = programs.map(program => ({
      "رقم": program.id,
      "أيام الأسبوع": program.weekday,
      "مقدار الحفظ": program.memoQuantity,
      "مقدار التكرار": program.repetition,
      "الطلبة": program.students.join(', '),
    }));
    
    setRowData(mappedData);
  }, []);
  
  
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {field: "رقم",headerClass:"custom-header",
      cellRenderer: LinkCellRenderer,},
    { field: "أيام الأسبوع" ,headerClass:"custom-header"},
    { field: "مقدار الحفظ",
     
      headerClass:"custom-header"
   },
    { field: "مقدار التكرار",headerClass:"custom-header" },
    { field: "الطلبة" ,headerClass:"custom-header"},
   
  ]);
  return (
    <div>
      <div className="w-[60vw] p-2.5 m-2.5 mx-auto max-w-[1170px] flex justify-around">
        <WhiteBtn onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
          برنامج حفظ
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

<Title>إضافة برنامج حفظ </Title>
            <div>
              <form className="grid grid-cols-2 gap-5 items-center m-5">
                <label htmlFor="memorization">
      
                  مقدار الحفظ :
                  <Input id="memorization" name="memorization" />
                </label>
                <label htmlFor="weekdays">
      
                  أيام الأسبوع :
                  <Select name="weekdays" id="weekdays">
                    {weekdays.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Select>
                </label>
                <label htmlFor="repetition">
      
                  مقدار التكرار :
                  <Input id="repetition" name="repetition" />
                </label>

                <label htmlFor="students">
      
                  الطلبة :
                  <Select name="students" id="students">
                    <option value=""></option>
                  </Select>
                </label>

                <LightBlueBtn>إضافة</LightBlueBtn>
                <button className="text-black text-base bg-white border-2 border-black py-2 px-4 mt-2.5 w-[150px] transition-all duration-300 hover:bg-[#f7f3ff] cursor-pointer" onClick={closeModal}>
      
                  إلغاء
                </button>
              </form>
            </div>

        </Modal>

        
        <div className='w-[73.8vw]'>
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
  );
};

export default Memorization;
