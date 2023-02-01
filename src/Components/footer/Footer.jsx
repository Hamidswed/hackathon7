import React, {useState} from 'react';
import footerBookIcon from "./footerBookIcon.svg";
import TeamModal from '../teamModal/TeamModal';
import Modal from '../modal/Modal';

import './footer.css'

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal((state) => !state);
    };

  return (
    <div className='footer-container'>
        <div className="footerWrapper">
        <p className="footerText">
          <svg className="FooterIcon" width="18" height="18">
            <use href={footerBookIcon + "#footerBookIcon"}></use>
          </svg>
          <b> Jira App </b>© 2021 "All Rights Reserved"
          "Developed by"
          <button type="button" className="footerButton" onClick={toggleModal}>
            "Integrify Hackathon Students"
          </button>
        </p>

        {showModal && (
          <Modal onClose={toggleModal}>
            <TeamModal onClose={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Footer