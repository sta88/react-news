import React, {useState, useMemo, useContext, useEffect} from "react";
import Search from "../components/Search";
import NewsList from "../components/NewsList";
import NewsForm from "../components/NewsForm";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from 'react-redux';
import NewsService from "../components/NewsService";
// import {AuthContext} from '../App';
// import {AdminContext} from '../App';

function News () {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.isAuth);
    const isAdmin = useSelector(state => state.isAdmin);
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        const newsData = await NewsService.getAll();
        setNews(newsData);
    }

    const searchedNews = useMemo(() => {
        console.log(news);
        let filteredNews = news.filter(newsItem => newsItem.title.toLowerCase().includes(filter.query.toLowerCase()) || newsItem.body.toLowerCase().includes(filter.query.toLowerCase()));
console.log('auth', isAuth);
        if (isAuth) {
            return filteredNews;
        } else {
            return filteredNews.filter(newsItem => newsItem.approved);
        }
    }, [filter.query, news, isAuth]);

    const createNewsItem = (newItem) => {
        setNews([...news, newItem]);
    }

    const removeNewsItem = (newsItem) => {
        setNews(news.filter(p => p.id !== newsItem.id));
    }

    const approveNewsItem = (newsItem) => {
        console.log(news);
        newsItem.approved = true;
        setNews([...news]);
        console.log('------------');
        console.log(news);
    }

    return (
        <div className="wrapper">
            <h1>News</h1>
            <Search filter={filter} setFilter={setFilter}/>
            {isAuth ? <Button onClick={() => setModal(true)}>Добавить новость</Button> : ''}
            <NewsList news={searchedNews} remove={removeNewsItem} setNews={setNews} approve={approveNewsItem}/>

            <Modal visible={modal} setVisible={setModal}>
                <h3>Ваша новость</h3>
                <p>Введите данные новости. Все поля обязательны для заполнения</p>
                <NewsForm create={createNewsItem} setVisible={setModal}/>
            </Modal>
        </div>
    )
};

export default News;