import React from 'react';

class Calendar extends React.Component {

  render() {
    return (
      <div className="calendar-page">
          <iframe id='calendar' src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=acht97kleocgk125jl1fnibe7k%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=Europe%2FMoscow">
        </iframe>
      </div>
    )
  }
}

export default Calendar;
