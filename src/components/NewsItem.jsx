import React, {useContext} from 'react';
// import {AuthContext} from '../App';
// import {AdminContext} from '../App';
import Button from './Button/Button';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

const NewsItem = (props) => {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const isAuth = useSelector(state => state.isAuth);
    const isAdmin = useSelector(state => state.isAdmin);
    const router = useNavigate();

    let newsButtons;
    if (isAuth) {
        if (isAdmin) {
            newsButtons =
                <div className="news-item-buttons">
                    {!props.newsItem.approved ? <Button onClick={() => props.approve(props.newsItem)}>Одобрить</Button> : ''}
                    <Button onClick={() => props.remove(props.newsItem)}>Удалить</Button>
                </div>;
        } else {
            newsButtons =
                <div><em>
                    {!props.newsItem.approved ? 'На модерации' : ''}
                </em></div>;
        }
    }

    return (
        <div className="news-item" onClick={() => router(`/news/${props.newsItem.slug}`)}>
            <div className="news-item-info">
                <div className="news-item__date">{props.newsItem.date}</div>
                {props.newsItem.image ?
                    <img className="news-item__image" src={props.newsItem.image} alt="Image" />
                    :
                    <div></div>
                }
                <h3 className="news-item__title">
                    {props.newsItem.title}
                </h3>
                <div className="news-item__text">{props.newsItem.body}</div>
            </div>
            {newsButtons}
        </div>
    );
};

export default NewsItem;