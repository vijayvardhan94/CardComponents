import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C5603AQH7uyvrgLumAg/profile-displayphoto-shrink_200_200/0/1611731464584?e=1639008000&v=beta&t=uBe0EtFOVwWf0tYK3jmjWHTgzhzH61QsP4rE96On9r4" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
