import React, { useState } from "react";
import "./CreateEvent.css";

import DatePicker from 'react-datepicker';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import 'react-datepicker/dist/react-datepicker.css';
import DropBox from "../imageDropBox/DropBox";

const CreateEvent = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(selectedStartDate)

  const minTime = (new Date());

  return (
    <div>
      <div className="event">
        <span className="title">Basic Info</span>
        <span>
          Name your event and tell event-goers why they should come. Add details
          that highlight what makes it unique.
        </span>
        <form>
          <div className="event-container">
            <label>Event Title</label>
            <textarea
              type="text"
              name="title"
              placeholder="Be clear and descriptive"
              maxLength="125"
              className="event-title"
              required
            />
          </div>
          <div className="event-container">
            <label>Organizer</label>
            <textarea
              type="text"
              name="org-name"
              placeholder="Tell attendees who is organising the event"
              className="event-org"
              maxLength="75"
              required
            />
          </div>
          <div className="event-description">
            <h2>Description</h2>
            <span>
              Add more details to your event like your schedule, sponsors, or featured guests.
            </span>
            <textarea
              type="text"
              name="description"
              placeholder="Your description goes here"
              className="event-desc"
              required
            />
          </div>
          <div className="event-location">
            <h2>Location</h2>
            <span>
              Help people in the area discover your event and let attendees know
              where to show up.
            </span>
            <label className="venue-label">Venue Location</label>
            <textarea
              type="text"
              name="location"
              placeholder="Type your address"
              className="location"
              required
            />
          </div>
          <div className="event-date-time">
            <h2>Date and Time</h2>
            <span>
              Tell event-goers when your event starts and ends so they can make
              plans to attend.
            </span>
            <div className="date-time">
              <div className="date">
                <DatePicker selected={selectedStartDate} onChange={date => setSelectedStartDate(date)}
                  dateFormat='dd/MM/yyyy'
                  className="datepicker"
                  placeholderText={'Start Date'}
                />
                <DatePicker selected={selectedEndDate} onChange={date => setSelectedEndDate(date)}
                  dateFormat='dd/MM/yyyy'
                  minDate={new Date()}
                  className='datepicker'
                  calendarClassName="calendars"
                  placeholderText={'End Date'}
                />
              </div>
              <div className="time">
                <TimePickerComponent
                  placeholder="Start Time"
                // selected={selectedStartTime}
                // onChange={time => setSelectedStartTime(time)}
                />
                <TimePickerComponent
                  placeholder="End Time"
                // selected={selectedEndTime}
                // onChange={time => setSelectedEndTime(time)}
                // min={new Date()}
                />
              </div>
            </div>
            <div className="event-image">
              <h2>Images</h2>
              <span className="image-desc">
              Add photos to show what your event will be about.
              </span>
              <div>
                <DropBox />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
