import React from 'react';

type TileContent = {
    front: React.ReactNode;
    back?: React.ReactNode;
}

const content: TileContent[] = [
    { front: (
        <div key={0}>

        </div>
    )},
    { front: (
        <div key={1}>

        </div>
    )}
]

export const getContent = (contentID: number) => {
    return {
        front: content[contentID].front,
        ...(content[contentID].back && { back: content[contentID].back })
    };
}