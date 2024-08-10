import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import { faArrowLeft, faArrowRight, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons"
import './Exams.css'
import { useCallback, useEffect, useState } from "react"
import ArabicDatePicker from "../ArabicDatePicker"


const weekdays= ['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']
const Exams = () => {

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const[displayDate,setDisplayDate] = useState('');
  const [isRepresented,setIsRepresented]=useState(false);
  const [isDelayed, setIsDelayed]=useState(false);

 

    const getDaysInMonth = (year:number, month:number) => {
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
        
          const isToday = (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear());
          days.push(<li key={i} onClick={()=>{ handleDateClick(i, year)
            

          }} className={isToday ? 'active' : ''}>{i}</li>);
      }
        

        return days;
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };
   

    const handleDateClick = useCallback((date: number, year: number) => {
      const month = currentDate.getMonth();
      const dateString = "يوم " + date + ' ' + new Date(year, month).toLocaleString('ar-TN', { month: 'long' }) + ' ' + year;
      setDisplayDate(dateString);
    }, [currentDate]);

  return (
    <div>
        <Navbar />
        <div className="flex-sa">
            
            <button className="white-btn">
            <FontAwesomeIcon icon={faPlus} />
                امتحانات 

            </button>
            <SearchBar />

          </div>
        <div className="main">
          
          <div style={{display:"flex", gap:"50px"}}>
                <div className="card">
                <section className="card-header">
                  <FontAwesomeIcon onClick={prevMonth} className="arrow" icon={faArrowRight} />
                  <h3>{currentDate.toLocaleString('ar-TN', { month: 'long' })} {currentDate.getFullYear()}</h3>
                
                  <FontAwesomeIcon  onClick={nextMonth}className="arrow" icon={faArrowLeft} />
                </section>
                <section className="card-body">
                    <ul className="card-days">
                      {weekdays.map((day) =>(
                        <li>{day}</li>
                      ))}
                    
                    </ul>
                    <ul className="card-dates">
                    
                    {generateCalendar()}
                      
                    </ul>
              </section>
            
          </div>
          <div>
            <h1>{displayDate}</h1>
            <table className="blue-table">
              <tr>
                <th>الطالب</th>
                <th>المقدار</th>
                
              </tr>
              <tr>
                <td>مريم</td>
                <td>سورة البقرة : من الآية 30 إلى الآية 40</td>
                <td>
                  {isRepresented ? (<div>
                    <label>الملاحظة :
                  <select>
                    <option>متوسط</option>
                    <option>حسن</option>
                    <option>حسن جدا</option>
                  </select>
                </label>
                <button onClick={() => setIsRepresented(false)} className="blue-btn" ><FontAwesomeIcon icon={faCheck} /></button>
                  </div>) : isDelayed ? (
                    <div className="flex">
                      

                      <ArabicDatePicker />
                        <button onClick={() => setIsDelayed(false)} className="blue-btn"><FontAwesomeIcon icon={faCheck} /></button>
                  
                    </div> ):(
                    <div>
                      <button onClick={() => setIsRepresented(true)} className="blue-btn">تم العرض</button>
                  <button onClick={() => setIsDelayed(true)} className="blue-btn">تأجيل</button>
                  
                    </div> )}
                
                </td>
                
                
              </tr>
            </table>
          </div>
          </div>
        
  



            
        </div>
    </div>
    )
}

export default Exams