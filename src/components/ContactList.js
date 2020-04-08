import React from "react"
import Contact from "./Contact";
const users = [
    {
      id: "1",
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: "online",
      on: "status-online"
    },
    {
      id: "2",
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: "online",
      on: "status-online"
    },
    {
      id: "3",
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: "online",
      on: "status-online"
    },
    {
      id: "4",
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: "offline",
      on: ""
    },
    {
      id: "5",
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: "online",
      on: "status-online"
    }
  ];

  const ContactList = () => (
    <div>
      {users.map(item => (
      <Contact name={item.name} avatar={item.avatar} online={item.online} on={item.on} key={item.id} />
      ))}
    </div>
  );
    
export default ContactList