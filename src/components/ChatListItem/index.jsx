import React from "react"
import avatar from '../../assets/avatar.png'

import './style.scss';

export function ChatListItem({onClick}) {
    return (
        <div
            className="chatlistitem"
            onClick={onClick}
            >
            <img className="avatar" src={avatar} />
            <div className="lines">
                <div className="line">
                    <div className="name">
                        Marcos Destro
                    </div>
                    <div className="date">
                        19:00
                    </div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>
                            Quanto tempo demora para criar alguma coisa?
                            Quanto tempo demora para criar alguma coisa?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

