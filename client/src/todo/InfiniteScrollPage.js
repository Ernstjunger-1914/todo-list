import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function InfiniteScrollPage() {
    const [items, setItems]=useState([]);

    return (
        <InfiniteScroll dataLength={items.length} next={fetchData} />
    );
}
