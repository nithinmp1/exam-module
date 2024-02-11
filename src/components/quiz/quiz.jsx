import React from 'react';

const Quiz = () => {
  return (
    <section className="qustn-section section">
      <div className="container">
        <div className="nair-wrap">
          <div className="head-lines">
            <h4>Question No 1</h4>
            <div className="count">
              <span className="bx time">02:00</span>
              <select>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>
          </div>
          <div className="marksheetscreen">
            <ul className="mark-list">
              <li>Mark</li>
              <li className="pass">13</li>
              <li className="fail">-3</li>
            </ul>
            <div className="qstnpnt">
              <p>
                <span className="numric">1)</span>
                Lorum Ipsum Whether you're a startup or an established enterprise, our flexible and diverse hosting solutions.
              </p>
            </div>
            <ul className="dropdownList questionList">
              <li>
                <input id="question-consent-1" name="question-consent" type="checkbox" value="yes" />
                <label htmlFor="question-consent-1">Question dummy</label>
              </li>
              <li>
                <input id="question-consent-2" name="question-consent" type="checkbox" value="yes" />
                <label htmlFor="question-consent-2">Question dummy</label>
              </li>
              <li>
                <input id="question-consent-3" name="question-consent" type="checkbox" value="yes" />
                <label htmlFor="question-consent-3">Question dummy</label>
              </li>
              <li>
                <input id="question-consent-4" name="question-consent" type="checkbox" value="yes" />
                <label htmlFor="question-consent-4">Question dummy</label>
              </li>
              <li>
                <input id="question-consent-5" name="question-consent" type="checkbox" value="yes" />
                <label htmlFor="question-consent-5">Question dummy</label>
              </li>
            </ul>
          </div>
          <div className="foot-lines">
            <ul className="pagination-list">
              {Array.from({ length: 10 }, (_, index) => (
                <li key={index} className={`numb ${index === 4 ? 'active' : ''}`}>
                  <a href=""><span>{index + 1}</span></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
