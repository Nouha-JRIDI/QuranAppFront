
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddProgramModal from "../addProgramModal/AddProgramModal"
import { Link } from "react-router-dom"

const programs = [{id:1,weekday:"الإثنين",memoQuantity:"3 صفحات",repetition:"15",students:["فلان","مريم","جميلة"]},
{id:2,weekday:"السبت",memoQuantity:"2 صفحات",repetition:"10",students:["فلان3","فلان2","فلان1","سناء"]},
]
const Memorization = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const type ="memorization"
  return (
    <div>
        <Navbar />
        <div className="flex-sa">
          
            <button onClick={openModal} className="white-btn">
            <FontAwesomeIcon icon={faPlus} />
                 برنامج حفظ 

            </button>
            <SearchBar />
          </div>
        <div className="main"> 
        {isModalOpen && <AddProgramModal closeModal={closeModal} type={type} />}
          
          
          <table className="blue-table">
            <tr>
            <th> </th>
                <th>أيام الأسبوع</th> 
                <th>مقدار الحفظ </th>
                <th>مقدار التكرار</th>
                <th>الطلبة </th>
            </tr>
            {programs.map((program) => (
              <tr key={program.id}>
              <td><Link to={`/memoProgram/${program.id}`}>{program.id}</Link></td>
              <td>{program.weekday}</td>
              <td>{program.memoQuantity}</td>
              <td>{program.repetition}</td>
              <td>{program.students.join(' - ')}</td>
          </tr>
            ))}
          
            
            </table>
          </div>
        </div>
    
  )
}

export default Memorization