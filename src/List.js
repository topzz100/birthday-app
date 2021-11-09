import React from 'react';

const List = ({profile}) => {
  return (
    <>
       {profile.map((person) => {
        const {id, name, age, image } = person;
        return (
          <div key = {id} className = "profile">
            <div className = "img-box">
              <img src = {image} alt = {name}/>
            </div>
            <div className = "info">
              <h4> {name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        )
      } )}
    </>
  );
};

export default List;
