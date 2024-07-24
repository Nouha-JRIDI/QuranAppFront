import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import { faArrowLeft, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons"
import './Exams.css'
import { useState } from "react"

const weekdays= ['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']
const Exams = () => {

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const getDaysInMonth = (year:number, month:number) => {
        return new Date(year, month + 1, 0).getDate();
    };
 

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);


        const days = [];
      
      for (let i = 1; i <= daysInMonth; i++) {
        
          const isToday = (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear());
          days.push(<li key={i} onClick={()=>{displayEvent(i,year);
            
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
    const displayEvent = (date:number,year:number)=>{
      return ("يوم " + date +' '+ currentDate.toLocaleString('ar-TN', { month: 'long' }) +' '+year)
    };

  return (
    <div>
        <Navbar />
        <div className="main-section">
        <div className="flex-sa">
          
          <button className="white-btn">
          <FontAwesomeIcon icon={faPlus} />
               امتحانات 

          </button>
          <SearchBar />
        </div>
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
        
  



            
        </div>
    </div>
    )
}

export default Exams