import React, {SyntheticEvent} from 'react';
import {TEventItem} from "./types";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import EventsTabContent from "./items/EventsTabContent";
import EventsTabSkeletons from "./items/EventsTabSkeletons";

export const LIMIT = 4

const TabEvents = () => {
    const queryClient = useQueryClient();
    const [comment, setComment] = React.useState({} as TEventItem);
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

    const { isLoading, error, data } = useQuery({
        queryKey: ['appData'],
        queryFn: () =>
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}`).then(
                (res) => res.json(),
            ),
        refetchOnWindowFocus: false
    })

    const addComment = () => (fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }))

    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.setQueryData(['appData'], (prevState) => [comment, ...prevState as Array<TEventItem>])
        },
    })

    const handleAddComment = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setComment({
            id: Date.now(),
            title: 'Коментар',
            body: inputValue,
            isComment: true
        })
        mutation.mutate()
        setInputValue('')
    }

    if (!data && !isLoading) return <div>Тут нічого немає</div>;

    if (error) return <div>Упс щось пішло не так</div>

    return (
        <div className='flex flex-col h-full'>
            {!isLoading ? (
                <EventsTabContent
                    data={data}
                    inputValue={inputValue}
                    onChange={handleChange}
                    onAddComment={handleAddComment}
                />
            ) : <EventsTabSkeletons/> }
        </div>
    )
};

export default TabEvents;