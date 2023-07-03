import React, { SyntheticEvent } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useIntl } from 'react-intl';
import { BASE_URL, LIMIT, QUERY_KEY } from '../../../api/constants';
import { fetchData } from '../../../api/helpers';
import { TEventItem } from './types';
import EventsTabContent from './Items/EventsTabContent';
import EventsTabSkeletons from './Items/EventsTabSkeletons';

const TabEvents = () => {
    const queryClient = useQueryClient();
    const { formatMessage } = useIntl();
    const [comment, setComment] = React.useState({} as TEventItem);
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

    const { isLoading, error, data } = useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => fetchData<Array<TEventItem>>(`${BASE_URL}/posts?_limit=${LIMIT}`),
        refetchOnWindowFocus: false,
    });

    const addComment = () => {
        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        };

        return fetchData(`${BASE_URL}/posts`, options);
    };

    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.setQueryData([QUERY_KEY],
                (prevState) => [comment, ...prevState as Array<TEventItem>]);
        },
    });

    const handleAddComment = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment({
            id: Date.now(),
            title: formatMessage({ id: 'comment' }),
            body: inputValue,
            isComment: true,
        });
        mutation.mutate();
        setInputValue('');
    };

    if (!data && !isLoading) return <div>Тут нічого немає</div>;

    if (error) return <div>Упс щось пішло не так</div>;

    return (
        <div className="flex flex-col h-full">
            {isLoading
                ? <EventsTabSkeletons/>
                : (
                    <EventsTabContent
                        data={data}
                        inputValue={inputValue}
                        onAddComment={handleAddComment}
                        onChange={handleChange}
                    />
                )}
        </div>
    );
};

export default TabEvents;
