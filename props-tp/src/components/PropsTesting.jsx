import React from "react";

export default function PropsTesting(props) {
  return (
    <>
      <div>
        <ul>
          {/* Use props.photos.map instead of photos.map */}
          {props.photos.map((photo, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={photo.photo1}
                alt=""
                className="w-24 h-24 rounded-full"
              />
              <div>
                <p className="font-semibold">{photo.nom}</p>
                <p>{`Age: ${photo.age}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
