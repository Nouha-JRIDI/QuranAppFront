import './AddProgramModal.css'

import ModalProps from '../../types'
const weekdays= ['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']
const AddProgramModal = ({closeModal} : ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>إضافة برنامج حفظ </h2>
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
        
        </form></div>
        
      </div>
    </div>
  )
}

export default AddProgramModal