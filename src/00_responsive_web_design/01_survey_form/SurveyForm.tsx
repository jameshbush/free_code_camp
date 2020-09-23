import React from "react";
import "./styles.css";

export function SurveyForm(props: any, state: any): JSX.Element {
  return (
    <div id="main">
      <form id="survey-form" action="#">
        <h1 id="title">Survey Form</h1>
        <p id="description">Description</p>

        <div className="form-group">
          {/* <label id="name-label" for="name">Name</label>
        <input id="name" type="text" placeholder="John Smith" required> */}
        </div>

        <div className="form-group">
          {/* 
      <label id="email-label" for="email">Email</label>
      <input id="email" type="email" placeholder="john.smith@example.com" required>
            */}
        </div>

        <div className="form-group">
          {/* 
      <label id="number-label" for="number">Number (0-5)</label>
      <input id="number" type="number" placeholder="5?" min="0" max="5">
                  */}
        </div>

        <div className="form-group">
          <div>Dropdown option:</div>
          <select name="dropdown" id="dropdown">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <div>Radio option:</div>
          {/* 
      <label for="radio-option-1">Option 1</label>
      <input id="radio-option-1" type="radio" name="radio" value="1">
      <label for="radio-option-2">Option 2</label>
      <input id="radio-option-2" type="radio" name="radio" value="2">
      <label for="radio-option-3">Option 3</label>
      <input id="radio-option-3" type="radio" name="radio" value="3">
                        */}
        </div>

        <div className="form-group">
          <div>Checkbox options:</div>
          {/* 
      <label for="radio-option-1">Option 1</label>
      <input id="radio-option-1" type="checkbox" name="checkbox" value="1">
      <label for="checkbox-option-2">Option 2</label>
      <input id="checkbox-option-2" type="checkbox" name="checkbox" value="2">
      <label for="checkbox-option-3">Option 3</label>
      <input id="checkbox-option-3" type="checkbox" name="checkbox" value="3">
    */}
        </div>

        <div className="form-group">
          <div>Additional text:</div>
          {/* 
      <textarea name="textarea" id="textarea" cols="40" rows="4"></textarea>
          */}
        </div>

        <button id="submit" type="submit">
          Submit
        </button>
      </form>

      {/* <script src="../../../utils/takeMeHomeNavBar.js"></script> */}
      {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
    </div>
  );
}
