import React from "react";
import { FaTrello, FaSun, FaRegPaperPlane } from "react-icons/fa";
import moment from "moment";
import PropTypes from 'prop-types';

export const TaskDate = ({ setTaskDate, setShowTaskDate, showTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD//MM/YYYY"));
            }}
            onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format("DD//MM/YYYY"));
              }}
            data-testid="task-date-overlay"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaTrello />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div 
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(
              moment()
                .add(1, "day")
                .format("DD//MM/YYYY")
            );
          }}
          onKeyDown={() => {
            setShowTaskDate(false);
            setTaskDate(
              moment()
                .add(1, "day")
                .format("DD//MM/YYYY")
            );
          }}
          data-testid="task-date-tomorrow"
          tabIndex={0}
          role='button'
        >
          <span>
            <FaSun />
          </span>
          <span>Tomorrow</span>
          </div>
        </li>
        <li>
          <div 
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(
              moment()
                .add(7, "days")
                .format("DD//MM/YYYY")
            );
          }}
          onKeyDown={() => {
            setShowTaskDate(false);
            setTaskDate(
              moment()
                .add(7, "days")
                .format("DD//MM/YYYY")
            );
          }}
          data-testid="task-date-next-week"
          tabIndex={0}
          role='button'
        >
          <span>
            <FaRegPaperPlane />
          </span>
          <span> Next Week</span>
          </div>
        </li>
      </ul>
    </div>
  );

  TaskDate.prototype = {
    setTaskDate: PropTypes.func.isRequired,
    showTaskDate: PropTypes.func.isRequired,
    setShowTaskDate: PropTypes.func.isRequired,
  }