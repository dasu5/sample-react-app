import React from "react";
import moment from "moment";

function NameListItems(props) {
  return (
    <li className="list-group-item shadow-sm">
      <div className="row align-items-center">
        <div className="col-2">
          <img src={props.avatar} alt={props.name} className="border border-dark rounded-circle"/>
        </div>
        <div className="col-7">
          <h3>{props.name}</h3>
          <p>{props.city} | {props.email}</p>
          <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
        </div>
      </div>

      {/* <p>Birthday: {new Intl.DateTimeFormat('en-US').format(new Date(props.birthday))}</p> */}
    </li>
  );
}

export default NameListItems;
