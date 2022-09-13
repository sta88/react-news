import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NewsService from "../components/NewsService";
import {useFetching} from "../hooks/useFetching";

const NewsItem = () => {
    const params = useParams();
    const [newsItem, setNewsItem] = useState({});
    const [newsItemContent, setNewsItemContent] = useState([]);

    const [fetchNewsItem, isLoading, error] = useFetching(async (id) => {
        const response = await NewsService.getById(id)
        setNewsItem(response);
        setNewsItemContent(response.content);
        console.log(111);
    })

    // async function fetchNewsItem(id) {
    //     const newsItemData = await NewsService.getById(id);
    //     setNewsItem(newsItemData);
    // };

    useEffect(() => {
        fetchNewsItem(params.id);
    }, []);
    // setNewsItemContent(newsItem.content);
        //
    // let newsItemContentHtml = '';
    // for (let i=0; i<newsItem.content.length; i++) {
    //     if (newsItem.content[i].name == 'core/image') {
    //         newsItemContent += `<img src=${newsItem.content[i].link} alt="Img" />`;
    //     } else if (newsItem.content[i].name == 'core/paragraph') {

    //         newsItemContent += newsItem.content[i].text;
    //     }
    // }

    return (
        <div className="wrapper">
            <h1>{newsItem.title}</h1>
            <div className="news-item-content">
                {/* {newsItemContentHtml} */}
                {newsItemContent.map((newsItemContent, idx) => {
                    if (newsItemContent.name === 'core/image') {
                        return <img src={newsItemContent.link} alt="Img" />
                    } else if (newsItemContent.name === 'core/paragraph') {
                        return <div dangerouslySetInnerHTML={{ __html: newsItemContent.text }} />;
                    } else if (newsItemContent.name === 'core/heading' && newsItemContent.type === 'h2') {
                        return <h2>{newsItemContent.text}</h2>
                    }
                    return false;
                })}
            </div>
        </div>
    )
};

export default NewsItem;
