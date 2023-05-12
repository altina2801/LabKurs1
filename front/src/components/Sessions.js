import React from 'react';
import '../css/Sessions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Sessions = () => {
  return (
    <div className="main-container">
      <div className="left-container">
      <button className="create-session-btn">
       <FontAwesomeIcon icon={faPlus} className="create-session-icon" />
    Create New Session
  </button>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="last-session-btn-container">
          <p className="last-session-btn-text">Last Session</p>
          <div className="last-session-btn-options">
          <div className="edit-session-btn">
          <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-session-btn" role="button">
           <FontAwesomeIcon icon={faTrash} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;