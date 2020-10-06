import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import "./styles.css";
import { Form } from "react-bootstrap";

/*
Documentation:
  https://reactjs.org/docs/forms.html
*/
class SurveyForm extends React.Component {
  componentDidMount = () => initializeTestRunner();

  render() {
    return (
      <div id="main">
        <Form id="survey-form" action="#">
          <h1 id="title">Survey Form</h1>
          <p id="description">Form Description</p>

          <div className="form-group">
            <label id="name-label">
              Name:
              <input type="text" name="name" id="name" placeholder="John Smith" required />
            </label>
          </div>

          <div className="form-group">
            <label id="email-label">
              Email:
              <input id="email" type="email" placeholder="john.smith@example.com" required />
            </label>
          </div>

          <div className="form-group">
            <label id="number-label">
              Number (0-5)
              <input type="number" id="number" placeholder="5?" min="0" max="5" />
            </label>
          </div>

          <div className="form-group">
            <label>
              Dropdown option:
              <select name="dropdown" id="dropdown">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>
              <input type="radio" name="radio" value="1" id="radio-1" />
              Option 1:
            </label>
            <br />
            <label>
              <input type="radio" name="radio" value="2" id="radio-2" />
              Option 2:
            </label>
            <br />
            <label>
              <input type="radio" name="radio" value="3" id="radio-3" />
              Option 3:
            </label>
          </div>

          <label>
            <input name="name" type="checkbox" value="1" />
            Option 1
          </label>
          <br />
          <label>
            <input name="name" type="checkbox" value="2" />
            Option 2
          </label>
          <br />
          <label>
            <input name="name" type="checkbox" value="3" />
            Option 3
          </label>

          <div className="form-group">
            <div>Additional text:</div>
            <textarea name="textarea" id="textarea"></textarea>
          </div>

          <button id="submit" type="submit">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export { SurveyForm };
