import React from 'react';
import {TEventItem} from "../../types";

export type TProps = {
    item: TEventItem;
    index: number;
}

const EventCard:React.FC<TProps> = ({ item, index }) => {
    const { title, body, isComment} = item;
    const animation = isComment && index === 0 ? "animate-adding-comment" : '';

    return (
        <div className={`px-8 py-3 border-b-neutral-300 border-b ${animation}`}>
            <div className='font-bold mb-1 first-letter:capitalize'>{title}</div>
            <div className='first-letter:capitalize'>{body}</div>
        </div>
    )
}

export default EventCard;