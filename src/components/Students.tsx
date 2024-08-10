import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import WhiteBtn from './WhiteBtn';
import Title from './Title';
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useEffect, useState } from 'react';
import { ColDef } from 'ag-grid-community';


const students = [
  {
    id: 1,
    fullname: 'جميلة عامري',
    email: 'jamilaamri@gmail.com',
    memoQuantity: '3 صفحات',
    disciplineMark: '+++',
  },
  {
    id: 2,
    fullname: 'مريم بن سالم',
    email: 'meriembensalem@gmail.com',
    memoQuantity: '2 أجزاء',
    disciplineMark: '++',
  },
  {
    id: 3,
    fullname: 'أحمد السريدي',
    email: 'ahmedsridi@gmail.com',
    memoQuantity: '5 صفحات',
    disciplineMark: '++',
  },
  {
    id: 4,
    fullname: 'محسن بن قاسم',
    email: 'mohsenbenkacem@gmail.com',
    memoQuantity: '3 أجزاء',
    disciplineMark: '+++',
  },
];


interface StudentRow {
  "الإسم و اللقب": string;
  "البريد الإلكتروني": string;
  "مقدار الحفظ": string;
  "علامة الإنضباط": string;
}

const Students = () => {
  const [rowData, setRowData] = useState<StudentRow[]>([]);

  useEffect(() => {
    
    const mappedData = students.map(student => ({
      "الإسم و اللقب": student.fullname,
      "البريد الإلكتروني": student.email,
      "مقدار الحفظ": student.memoQuantity,
      "علامة الإنضباط": student.disciplineMark,
    }));

    setRowData(mappedData);
  }, []);
  
  
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "الإسم و اللقب" ,headerClass:"custom-header"},
    { field: "البريد الإلكتروني",
      cellStyle: {  width:"fit-content"}
      ,headerClass:"custom-header"
   },
    { field: "مقدار الحفظ",headerClass:"custom-header" },
    { field: "علامة الإنضباط" ,headerClass:"custom-header"}
  ]);


  return (
    <div>
      <div className="w-[60vw] p-2.5 m-2.5 mx-auto max-w-[1170px] flex justify-around">
        <Link to="/search-student">
          <WhiteBtn>
          <FontAwesomeIcon icon={faUserPlus} />
          إضافة طالب </WhiteBtn>
        </Link>
        <SearchBar />
      </div>
      <div className="w-[90vw] m-2.5 mx-auto max-w-[1170px] flex flex-col justify-center items-center">
        <div className="w-[59.1vw]">
          <Title>لائحة الطلبة</Title>

         
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
        <div></div>
      </div>
    </div>
  );
};

export default Students;
