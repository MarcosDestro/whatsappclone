import { useState } from 'react';

import { ChatListItem } from './components/ChatListItem';

import { DonutLarge, Chat, MoreVert, Search } from '@mui/icons-material';
import './global.scss'

export function App() {
  const [chatlist, setChatList] = useState([{},{},{},{}]);

  return (
    <div className='app-window'>
      <div className='sidebar'>
        
        <header>
          <img className='header-avatar' src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"/>
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
            <Search font-size='small' />
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className="chatlist">
          {
            chatlist.map((item, key)=>(
              <ChatListItem 
                key={key}
              />
            ))
          }
        </div>

      </div>
      <div className='contentarea'>
        ...
      </div>
    </div>
);
}