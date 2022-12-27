import React from "react";

function SocialBtn({ icon, hover, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <button className={`${hover} customButton`}>
          <i className={icon}></i>
        </button>
      </a>
    </>
  );
}

export default SocialBtn;
