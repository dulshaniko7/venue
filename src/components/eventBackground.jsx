import React from "react";
import Card from "./eventCard";
import cal from '../resources/images/icons/calendar.png'
import loc from '../resources/images/icons/location.png'


const details = {
     eventDate:'7 August 2017',
     time:'@ 10.00 pm',
     location:'356 Super Street Oakland, CA 9835'
}
//https://picsum.photos/200
const EventBack = () => {
  return (
    <div className="back">
      <div className="row">
        <div className="col-md-6">
          <Card date={details.eventDate} time={details.time} title='Event Date @ Time' icon='https://img.icons8.com/doodle/48/000000/apple-calendar.png'/>
        </div>
        <div className="col-md-6">
          <Card location={details.location} title='Event Location' icon='https://img.icons8.com/carbon-copy/100/000000/worldwide-location.png'/>
        </div>
      </div>
    </div>
  );
};

export default EventBack;
