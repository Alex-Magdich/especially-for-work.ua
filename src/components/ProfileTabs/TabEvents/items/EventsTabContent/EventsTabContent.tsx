import React, {SyntheticEvent} from 'react';
import {TEventItem} from "../../types";
import EventCard from "../EventCard";
import AddCommentBlock from "../AddCommentBlock";

export type TProps = {
    data: Array<TEventItem>;
    inputValue: string;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    onAddComment:  (e: SyntheticEvent<HTMLFormElement>) => void;
}

const EventsTabContent:React.FC<TProps> = ({
   data,
   inputValue,
   onChange,
   onAddComment,
}) => (
    <>
        <div className='overflow-y-auto'>
            {(data as Array<TEventItem>).map((item, index) => (
                <EventCard key={item.id} index={index} item={item}/>
            ))}
        </div>
        <AddCommentBlock value={inputValue} onChange={onChange} onSubmit={onAddComment}/>
    </>
)

export default EventsTabContent;