import React,{ useState } from 'react'
import './ReminderCard.css'

function ReminderCard() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleInputChange = (event)=>{
    setNewReminder(event.target.value);
    console.log("new reminder: ", newReminder);
  }

  const handleAddReminder = ()=>{
    setReminders([...reminders, newReminder]);
    setNewReminder('');
  }

  const handleDeleteReminder = (index)=>{
    setReminders(reminders.filter((item, itmIndex)=> itmIndex!=index))
  }

  return (
    <div className='container-card'>
      <h1>Reminder App</h1>

      <div className='input-container'>
        <input type="text" placeholder='Enter a reminder' value={newReminder} onChange={handleInputChange} />
        <button className='add-btn' onClick={handleAddReminder}>Add Reminder</button>
      </div>
      <div>
        {
          reminders.length>0?
            <ul className='reminder-list'>
              {
                reminders.map((reminder,index)=> <li key={index} className='list-item'>{reminder} <button className='delete-btn' onClick={()=>handleDeleteReminder(index)}>Delete</button></li>)
              }
            </ul>:
            <p>No Reminders</p>
        }
        
      </div>
    </div>
  )
}

export default ReminderCard
