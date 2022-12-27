import React from "react";

function SocialBtn({ icon, hover, link }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className={`${hover} customButton`}
        rel="noreferrer"
      >
        <i className={icon}></i>
      </a>
    </>
  );
}

export default SocialBtn;
