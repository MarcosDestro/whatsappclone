import { useState } from 'react';

import { ChatListItem } from './components/ChatListItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatWindow } from './components/ChatWindow';

import { DonutLarge, Chat, MoreVert, Search } from '@mui/icons-material';

import avatar from './assets/avatar.png'
import './global.scss'

export function App() {
  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Fulando de Tal', image: avatar},
    {chatId: 2, title: 'Fulando de Tal', image: avatar},
    {chatId: 3, title: 'Fulando de Tal', image: avatar},
    {chatId: 4, title: 'Fulando de Tal', image: avatar},
    {chatId: 5, title: 'Fulando de Tal', image: avatar},
    {chatId: 6, title: 'Fulando de Tal', image: avatar},
    {chatId: 7, title: 'Fulando de Tal', image: avatar},
    {chatId: 8, title: 'Fulando de Tal', image: avatar},
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className='app-window'>
      <div className='sidebar'>
        
        <header>
          <img className='header-avatar' src={avatar} alt=''/>
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLarge />
            </div>

            <div className="header-btn">
              <Chat />
            </div>

            <div className="header-btn">
              <MoreVert />
            </div>
          </div>

        </header>

        <div className="search">
          <div className="search-input">
            <Search />
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className="chatlist">
          {
            chatlist.map((item, key)=>(
              <ChatListItem 
                key={key}
                onClick={()=>setActiveChat(chatlist[key])}
              />
            ))
          }
        </div>

      </div>
      <div className='contentarea'>
          
        {/* Se não tiver um chat ativo */}
        {
          activeChat.chatId !== undefined &&
          <ChatWindow />
        }

        {
          activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
);
}