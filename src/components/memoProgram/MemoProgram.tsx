import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SearchBar from "../SearchBar";
import { useState } from "react";


const program=[{id:1,fullname:"جميلة عامري",email:"jamilaamri@gmail.com",date:"2024-07-22",stop:"سورة يوسف - الآية 37",repeat:"10",presented:false},
    {id:2,fullname:"مريم بن سالم",email:"meriembensalem@gmail.com",date:"2024-07-22",stop:"سورة يوسف - الآية 20",repeat:"10",presented:true}
    
    
]

const MemoProgram = () => {
    const { id } = useParams();
    const [showSelect, setShowSelect] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [displaySelectedValue, setDisplaySelectedValue] = useState<boolean>(false);


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        
      };

      const handleConfirmClick = () => {
        setDisplaySelectedValue(true);
        setShowSelect(false);
      };
  return (
    <div>
        <Navbar />
        <div className="main-section">
        <div style={{alignSelf:"center",textAlign:"center"}}>
        <h1>برنامج الحفظ رقم {id}</h1>
        <SearchBar />
        </div>
        <table className="blue-table" style={{width:"95%"}}>
            <tr>
                <th>الطالب</th> 
                <th>التاريخ </th>
                <th> رأس الوقف</th>
                <th> التكرار</th>
                <th> العرض</th>
                <th> الملاحظة</th>
            </tr>
            {program.map((item) => (
                <tr key={item.id}>
                <td><Link className="student-name" to={`/studentInfo/${item.fullname}/${item.email}`}>{item.fullname}</Link></td>
                <td>{item.date}</td>
                <td>{item.stop}</td>
                <td>{item.repeat}</td>
                <td> {showSelect ? "نعم" : "لا"}
                      
                   
                   </td>
                   <td>
                   {showSelect ? (
                      <div><select value={selectedValue} onChange={handleSelectChange}>
                        <option value="+">+</option>
                        <option value="++">++</option>
                        <option value="+++">+++</option>
                      </select>
                      <button onClick={handleConfirmClick}>ok</button></div>
                    ) : displaySelectedValue ? (
                        <span>{selectedValue}</span>
                      ):("")}
                   </td>
                  {showSelect || displaySelectedValue ? "" :  (<button className="blue-btn" onClick={()=> setShowSelect(true)}>
                        تم العرض
                      </button>)
                }
            </tr>
            ))}
           
           
           
           
            
            </table>

    </div>
    </div>
    
  )
}

export default MemoProgram