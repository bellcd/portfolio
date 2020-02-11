import React from 'react';
export default ({ card }) => {
  const { title, description, externalUrl, imagePath, altTagText } = card;
  return (
    <div className="card">
      <a href={externalUrl} target="_blank">
        <img className="card-image" src={imagePath} alt={altTagText} />
      </a>
      <div className="card-details">
        <a href={externalUrl} target="_blank">
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}