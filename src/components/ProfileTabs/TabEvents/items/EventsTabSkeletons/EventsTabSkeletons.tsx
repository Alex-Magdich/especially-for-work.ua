import React from 'react';
import {LIMIT} from "../../TabEvents";

const EventsTabSkeletons = () => (
    <div>
        {Array(LIMIT).fill(null).map((_, i) => (
            <div key={i} className='px-8 py-3 border-b-neutral-300 border-b h-32 animate-pulse'>
                <div className="h-3 bg-neutral-300 rounded mb-4 w-1/2"></div>
                <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="h-2 bg-neutral-300 rounded col-span-1"></div>
                    <div className="h-2 bg-neutral-300 rounded col-span-1"></div>
                    <div className="h-2 bg-neutral-300 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-neutral-300 rounded col-span-2"></div>
                    <div className="h-2 bg-neutral-300 rounded col-span-1"></div>
                </div>
            </div>
        ))}
    </div>
)

export default EventsTabSkeletons;