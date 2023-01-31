import React from 'react'
// import photos from "./team-photos";
import teamdata from "./team-data.json";
import sprite from "./sprite.svg";

const TeamModal = () => {
  return (
    <div>
        <div className="TeamModalWrapper">
        <h2 className="TeamName">
          "Our development team" <b>"Team 7"</b>
        </h2>
        <ul className="TeamModalList">
          {teamdata.map((data) => (
            <li className="TeamModalListItem" key={data.name}>
              {/* <img
                src={photos[data.id]}
                className="TeamMemberPhoto"
                alt={data.name}
              /> */}
          
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