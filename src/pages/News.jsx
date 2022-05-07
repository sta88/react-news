import React, {useState, useMemo, useContext} from "react";
import Search from "../components/Search";
import NewsList from "../components/NewsList";
import NewsForm from "../components/NewsForm";
import {AuthContext} from '../App';
import {AdminContext} from '../App';

function News () {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const [filter, setFilter] = useState({query: ''})
    const [news, setNews] = useState([
        { date: '01.03.2022', 
            title: 'News 1',
            text: 'Text of News 1',
            approved: true,
            id: '111'
        },
        { date: '02.03.2022', 
            title: 'News 2',
            text: 'Text of News 2',
            approved: true,
            id: '222'
        },
        { date: '03.03.2022', 
            title: 'News 3',
            text: 'Text of News 3',
            approved: true,
            id: '333'
        },
        { date: '04.03.2022', 
            title: 'News 4',
            text: 'Text of News 4',
            approved: true,
            id: '444'
        },
    ]);

    const searchedNews = useMemo(() => {
        if (isAuth) {
            return news.filter(newsItem => newsItem.title.toLowerCase().includes(filter.query.toLowerCase()));
        } else {
            return news.filter(newsItem => newsItem.title.toLowerCase().includes(filter.query.toLowerCase()) && newsItem.approved);
        }
    }, [filter.query, news, isAuth, isAdmin]);
    
    const createNewsItem = (newItem) => {
        setNews([...news, newItem]);
    }

    const removeNewsItem = (newsItem) => {
        setNews(news.filter(p => p.id !== newsItem.id));
    }
    
    const approveNewsItem = (newsItem) => {
        newsItem.approved = true;
        setNews([...news]);
    }

    return (
        <div className="wrapper">
            <h1>News</h1>
            <Search filter={filter} setFilter={setFilter}/>
            {isAuth ? <NewsForm create={createNewsItem}/> : ''}            
            <NewsList news={searchedNews} remove={removeNewsItem} setNews={setNews} approve={approveNewsItem}/>
        </div>
    )
};

export default News;