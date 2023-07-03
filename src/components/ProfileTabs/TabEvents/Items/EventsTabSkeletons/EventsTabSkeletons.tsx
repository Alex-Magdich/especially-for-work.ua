import React from 'react';
import { LIMIT } from '../../../../../api/constants';

const EventsTabSkeletons = () => {
    const items = Array(LIMIT).fill(null);

    return (
        <div>
            {items.map((_, i) => (
                <div key={i} className="px-8 py-3 border-b-neutral-300 border-b h-32 animate-pulse">
                    <div className="h-3 bg-neutral-300 rounded mb-4 w-1/2"/>
                    <div className="grid grid-cols-3 gap-4 mb-2">
                        <div className="h-2 bg-neutral-300 rounded col-span-1"/>
                        <div className="h-2 bg-neutral-300 rounded col-span-1"/>
                        <div className="h-2 bg-neutral-300 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-neutral-300 rounded col-span-2"/>
                        <div className="h-2 bg-neutral-300 rounded col-span-1"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventsTabSkeletons;
