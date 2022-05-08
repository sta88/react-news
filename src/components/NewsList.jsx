import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news, remove, approve}) => {
    if (!news.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                Новостей нет
            </h2>
        )
    }

    return (
        <div className="news">
            {news.map((newsItem) =>
                <NewsItem key={newsItem.id} newsItem={newsItem} remove={remove} approve={approve}/>
            )}
        </div>
    );
};

export default NewsList;