import './AddProgramModal.css'

import ModalProps from '../../types'
const weekdays= ['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']
const AddProgramModal = ({closeModal, type} : ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        { (type === "memorization") ? (
          <div> <h2>إضافة برنامج حفظ </h2>
          <div className='add-program-form'>
          <form>
          <label htmlFor="memorization"> مقدار الحفظ :
          <input id="memorization" name="memorization" />
          </label>
          <label htmlFor="weekdays"> أيام الأسبوع :
          <select name="weekdays" id="weekdays">
          {weekdays.map((day) => (
              <option key={day} value={day}>{day}</option>
          ))}
   
          </select>
          </label>
           <label htmlFor="repetition"> مقدار التكرار :
          <input id="repetition" name="repetition" />
          </label>
  
      
          <label htmlFor="students">  الطلبة :
          <select name="students" id="students">
          
              <option value=''></option>
              
          
   
          </select>
          </label>
         
      
          <button className="submit-btn">إضافة</button>
          <button className='cancel-btn' onClick={closeModal}> إلغاء</button>
          
          </form></div></div>
        ) : (
          <div> <h2>إضافة برنامج مراجعة </h2>
          <div className='add-program-form'>
          <form>
          <label htmlFor="revision"> مقدار المراجعة :
          <input id="revision" name="revision" />
          </label>
          <label htmlFor="weekdays"> أيام الأسبوع :
          <select name="weekdays" id="weekdays">
          {weekdays.map((day) => (
              <option key={day} value={day}>{day}</option>
          ))}
          <option value="alldays">كل الأيام</option>
   
          </select>
          </label>
          
  
      
          <label htmlFor="students">  الطلبة :
          <select name="students" id="students">
          
              <option value=''></option>
              
          
   
          </select>
          </label>
         
      
          <div className='flex-gap'>
          <button className="submit-btn">إضافة</button>
          <button className='cancel-btn' onClick={closeModal}> إلغاء</button>
          </div>
          
          </form></div></div>
        )}
        
        
      </div>
    </div>
  )
}

export default AddProgramModal