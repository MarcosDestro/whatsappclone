import React from "react"

import './style.scss';

export function ChatListItem({onClick, active, data}) {
    return (
        <div
            className={`chatlistitem ${active ? 'active' : ''}`}
            onClick={onClick}
            >
            <img className="avatar" src={data.image} />
            <div className="lines">
                <div className="line">
                    <div className="name">
                        { data.title }
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

