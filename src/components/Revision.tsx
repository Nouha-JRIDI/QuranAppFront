import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect,  useState } from 'react';
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
const programs = [
  {
    days: 'كل الأيام',
    revisionQuantity: '3 أجزاء',
    students: ['سناء', 'مريم', 'جميلة'],
  },
  {
    days: 'كل الأيام',
    revisionQuantity: '3 صفحات',
    students: ['محمد', 'جميلة', 'فاطمة', 'أحمد'],
  },
];
interface RevisionRow {
  "أيام المراجعة": string;
  "مقدار المراجعة": string;
  "الطلبة": string;
}

Modal.setAppElement('#root');


const Revision = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  const [rowData, setRowData] = useState<RevisionRow[]>([]);

  useEffect(() => {
   
    const mappedData = programs.map(program => ({
      "أيام المراجعة": program.days,
      "مقدار المراجعة": program.revisionQuantity,
      "الطلبة": program.students.join(', '),
    }));
    
    setRowData(mappedData);
  }, []);
  
  
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "أيام المراجعة" ,headerClass:"custom-header"},
    { field: "مقدار المراجعة",
     
      headerClass:"custom-header"
   },
    { field: "الطلبة" ,headerClass:"custom-header"}
  ]);
  return (
    <div>
      
      <div className="w-[60vw] p-2.5 m-2.5 mx-auto max-w-[1170px] flex justify-around">
        <WhiteBtn onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
          برنامج مراجعة
        </WhiteBtn>
        
        <SearchBar />
      </div>
      <div className="w-[90vw] m-2.5 mx-auto max-w-[1170px] flex flex-col justify-center items-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      ><Title>إضافة برنامج مراجعة </Title>
      <div>
        <form className="grid grid-cols-2 gap-5 items-center m-5">
          <label htmlFor="revision">

            مقدار المراجعة :
            <Input id="revision" name="revision" />
          </label>
          <label htmlFor="weekdays">

            أيام الأسبوع :
            <Select name="weekdays" id="weekdays">
              {weekdays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
              <option value="alldays">كل الأيام</option>
            </Select>
          </label>

          <label htmlFor="students">

            الطلبة :
            <Select name="students" id="students">
              <option value=""></option>
            </Select>
          </label>

          <div className="flex items-center gap-[20px]">
            <LightBlueBtn>إضافة</LightBlueBtn>
            <button className="text-black text-base bg-white border-2 border-black py-2 px-4 mt-2.5 w-[150px] transition-all duration-300 hover:bg-[#f7f3ff] cursor-pointer" onClick={closeModal}>
  
              إلغاء
            </button>
          </div>
        </form>
      </div></Modal>
        
        <div className='w-[44.3vw]'>
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

export default Revision;
