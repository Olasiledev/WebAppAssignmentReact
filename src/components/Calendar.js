import React, { useState } from 'react';
import '../cssStyles/Calender.css'; 


function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
  
    const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
  
    const generateCalendarDays = () => {
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
      const dates = [];
      for (let i = startDate.getDay(); i > 0; i--) {
        dates.unshift(new Date(startDate.getFullYear(), startDate.getMonth(), -i + 1));
      }
      for (let d = 1; d <= endDate.getDate(); d++) {
        dates.push(new Date(startDate.getFullYear(), startDate.getMonth(), d));
      }
      for (let i = 1; dates.length % 7 !== 0; i++) {
        dates.push(new Date(endDate.getFullYear(), endDate.getMonth(), i));
      }
  
      return dates;
    };
  
    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth}>Prev</button>
          <span>{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
          <button onClick={nextMonth}>Next</button>
        </div>
        <div className="calendar-grid">
          {days.map(day => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
          {generateCalendarDays().map((date, index) => (
            <div key={index} className={`calendar-day ${date.getMonth() !== currentDate.getMonth() ? "calendar-day--not-current" : ""}`}>
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Calendar;