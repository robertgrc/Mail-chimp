import React, { useState } from "react";
import { gmailDropdownData, mailChimpDropdownData } from "../../pages/data";

const Practica = () => {
  const [mail, setMail] = useState({
    gmail: gmailDropdownData,
    mailChimp: mailChimpDropdownData,
  });

  //   const array = new Array(5).fill(3);
  //   console.log(array);

  console.log(mail.gmail);
  console.log(mail.mailChimp);
  console.log(mail.gmail.length);
  console.log(mail.gmail[1]);

  for (let i = 0; i < mail.mailChimp.length; i++)
    console.log(mail.mailChimp[i]);

  //for (let i = 0; i < mail.gmail.length; i++) console.log(mail.gmail[i]);
  //const newArray3 = mail.gmail.label.map((element) => element + "hi");
  //const newNombre = mail.gmail.map((element) => element + "hi");

  let vengadores = [
    { nombre: "steve rogers", nombreHeroe: "captain america" },
    { nombre: "tony stark", nombreHeroe: "iron man" },
    { nombre: "bruce banner", nombreHeroe: "the hulk" },
    { nombre: "peter parker", nombreHeroe: "spiderman" },
    { nombre: "tchalla", nombreHeroe: "black panther" },
  ];

  let nombresReales = vengadores.map((vengador) => vengador.nombre);
  console.log(nombresReales);

  const names = ["whale", "squid", "turtle", "coral", "starfish"];

  const myUsers = [
    { name: "shark", likes: "ocean" },
    { name: "turtle", likes: "pond" },
    { name: "otter", likes: "fish biscuits" },
  ];
  const usersByLikes = myUsers.map((item) => {
    const container = {};
    container[item.name] = item.likes;
    container.age = item.name.length * 10;
    return container;
  });
  console.log(usersByLikes);

  return (
    <div>
      <h1>Practicando</h1>
      <button>AddContacts</button>
      <div>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Practica;
