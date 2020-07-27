import React from "react";
import NameListItems from "./NameListItems";

function NameList() {
  const nameList = [
    {
      id: 1,
      name: { title: "mr", first: "brad", last: "gibson" },
      location: { city: "kilcoole" },
      email: "brad.gibson@example.com",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },
    {
      id: 2,
      name: { title: "Mr", first: "William", last: "Kristensen" },
      location: { city: "Roslev" },
      email: "william.kristensen@example.com",
      dob: { date: "1949-07-29T00:43:04.425Z", age: 71 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/63.jpg" },
    },
    {
      id: 3,
      name: { title: "Mrs", first: "Marta", last: "Lopez" },
      location: { city: "Cuenca" },
      email: "marta.lopez@example.com",
      dob: { date: "1977-06-02T09:26:27.154Z", age: 43 },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      },
    },
  ];

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItems
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <ul className="list-group">{nameListComponent()}</ul>
      </div>

      {/* <NameListItems
          name={`${nameList[0].name.first} ${nameList[0].name.last}`}
          city={nameList[0].location.city}
          email={nameList[0].email}
          birthday={nameList[0].dob.date}
          avatar={nameList[0].picture.medium}
        /> */}
      {/* <NameListItems
          name={`${nameList[1].name.first} ${nameList[1].name.last}`}
          city={nameList[1].location.city}
          email={nameList[1].email}
          birthday={nameList[1].dob.date}
          avatar={nameList[1].picture.medium}
        />
        <NameListItems
          name={`${nameList[2].name.first} ${nameList[2].name.last}`}
          city={nameList[2].location.city}
          email={nameList[2].email}
          birthday={nameList[2].dob.date}
          avatar={nameList[2].picture.medium}
        /> */}
    </React.Fragment>
  );
}

export default NameList;
