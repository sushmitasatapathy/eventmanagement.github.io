import React, { useState } from 'react';
import './EventForm.css';

export default function EventForm() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [citySubCategory, setCitySubCategory] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    setShowConfirmation(true);
  };

  const handleBack = () => {
    setShowConfirmation(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional validation or manipulation with the file if needed
    setEventImage(file);
  };
  return (
    <div className="event-form">
      <div className="container">
        <div className="image-container">
          <h2>Create Your Event !!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventTitle">Event Title:</label>
            <input
              type="text"
              id="eventTitle"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventImage">Event Image:</label>
            <input
              type="file"
              id="eventImage"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subCategory">Sub Category:</label>
            <select
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="food">Food</option>
              <option value="education">Education</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="citySubCategory">City Sub Category:</label>
            <select
              type="text"
              id="citySubCategory"
              value={citySubCategory}
              onChange={(e) => setCitySubCategory(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              <option value="mumbai">Mumbai</option>
              <option value="chennai">Chennai</option>
              <option value="orissa">Orissa</option>
              <option value="northindia">North-India</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <h2>Confirmation Details</h2>
          <p>Event Title: {eventTitle}</p>
          <p>Event Image: {eventImage}</p>
          <p>Sub Category: {subCategory}</p>
          <p>City Sub Category: {citySubCategory}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}
