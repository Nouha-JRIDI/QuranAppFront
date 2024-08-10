import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AddProgramModal from "../addProgramModal/AddProgramModal"

const Revision = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const type= "revision"
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
        <Navbar />
        <div className="flex-sa">
        <button onClick={openModal} className="white-btn">
            <FontAwesomeIcon icon={faPlus} />
                 برنامج مراجعة 

            </button>
            <SearchBar />
        </div>
        <div className="main">
        {isModalOpen && <AddProgramModal closeModal={closeModal} type={type} />}
        <table className="blue-table">
          <tr>
            <th>أيام المراجعة</th>
            <th>مقدار المراجعة</th>
            <th>الطلبة</th>
          </tr>
          <tr>
            <td>كل الأيام</td>
            <td>20% من الحفظ</td>
            <td>
              <ul>
                <li>مريم</li>
                <li>سناء</li>
                <li>أحمد</li>
              </ul>
            </td>
            
          </tr>
          <tr>
            <td>كل الأيام</td>
            <td>5 أحزاب</td>
            <td>
              <ul>
                <li>زينب</li>
                <li>فاطمة</li>
                <li>يوسف</li>
                <li>أمجد</li>
              </ul>
            </td>
            
          </tr>
        </table>
            
        </div>
    </div>
  )
}

export default Revision