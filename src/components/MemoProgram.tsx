import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import Title from './Title';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from 'ag-grid-community';

const programs = [
  {
    id: 1,
    fullname: 'جميلة عامري',
    email: 'jamilaamri@gmail.com',
    date: '2024-07-22',
    stop: 'سورة يوسف - الآية 37',
    repeat: '10',
    present: false,
    remark:"",
  },
  {
    id: 2,
    fullname: 'مريم بن سالم',
    email: 'meriembensalem@gmail.com',
    date: '2024-07-22',
    stop: 'سورة يوسف - الآية 20',
    repeat: '10',
    present: true,
    remark:"",
  },
];
interface DetailProgramRow {
  "الطالب":string;
  "التاريخ": string;
  "رأس الوقف": string;
  "التكرار": string;
  "العرض": boolean;
  "الملاحظة":string;

  
}



const MemoProgram = () => {
  const { id } = useParams();
    const [rowData, setRowData] = useState<DetailProgramRow[]>([]);

  useEffect(() => {
   
    const mappedData = programs.map(program => ({
      "الطالب":program.fullname,
      "التاريخ": program.date,
      "رأس الوقف": program.stop,
      "التكرار": program.repeat,
      "العرض": program.present,
      "الملاحظة":program.remark,
    }));
    
    setRowData(mappedData);
  }, []);
  
  
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {field: "الطالب",headerClass:"custom-header"},
    { field: "التاريخ" ,headerClass:"custom-header"},
    { field: "رأس الوقف",
     
      headerClass:"custom-header"
   },
    { field: "التكرار",headerClass:"custom-header" },
    { field: "العرض" ,headerClass:"custom-header"},
    { field: "الملاحظة" ,headerClass:"custom-header",editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
          values: ['متوسط', 'حسن', 'حسن جدا'],
      }, },
   
  ]);


  return (
    <div>
      <div className="w-[90vw] p-2.5 my-2.5 mx-auto max-w-[1170px] flex flex-col justify-center">
        <div className="self-center text-center">
          <Title>برنامج الحفظ رقم {id}</Title>
          <SearchBar />
        </div>
        <div className='w-[88.5vw]'>
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

export default MemoProgram;
