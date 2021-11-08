import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function InfiniteScrollPage() {
    const [items, setItems]=useState([]);
    const [hasMore, setHasMore]=useState(true);
    const [page, setPage]=useState(2);

    useEffect(()=> {
        const getComments=async()=> {
            const res=await fetch(`http://localhost:3333/todo/get`);
            const data=await res.json();
            setItems(data);
        };
        getComments();
    }, []);

    const fetchComments=async()=> {
        const res=await fetch(`http://localhost:3333/todo/get`);
        const data=await res.json();

        setItems(data);
    };

    const fetchData=async()=> {
        const commentsFormServer=await fetchComments();
        setItems([...items, ...commentsFormServer]);

        if(commentsFormServer.length===0||commentsFormServer.length<20) {
            setHasMore(false);
        }
        setPage(page+1);
    }

    return (
        <InfiniteScroll dataLength={items.length} next={fetchData} hasMore={hasMore}>
            <div className="container"></div>
        </InfiniteScroll>
    );
}

export default InfiniteScrollPage;