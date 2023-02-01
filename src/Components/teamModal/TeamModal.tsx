import React from 'react'

import teamData from "./team-data.js";
import sprite from "./sprite.svg";
import './teamModal.css'

const TeamModal = () => {
  return (
    <div className='TeamModalContainer'>
        <div className="TeamModalWrapper">
        <h2 className="TeamName">
          "Our development team" <b>"Team 7"</b>
        </h2>
        <ul className="TeamModalList">
          {teamData.map((data) => (
            <li className="TeamModalListItem" key={data.name}>
              <img
                src={data.photo}
                className="TeamMemberPhoto"
                alt={data.name}
              />
          
              <div>
                <h3 className="TeamMemberName">{data.name}</h3>
                <p className="TeamMemberPosition">{data.position}</p>
              </div>
              <ul className="SocialList">
                {data.links.map((link) => (
                  <li className="SocialListItem" key={link.name}>
                    <a
                      className="SocialListLink"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        className="SocialListLinkIcon"
                        width="15"
                        height="15"
                      >
                        <use href={sprite + `${link.icon}`}></use>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
      
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamModal