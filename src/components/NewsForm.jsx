import React, {useState} from 'react';
import Input from './Input';
import Button from './Button';

const NewsForm = ({create}) => {
    const [news, setNews] = useState({date: '', title: '', text: ''})

    const addNews = (e) => {
        e.preventDefault();
        let errors = 0;
        
        for (let i=0; i<Object.keys(news).length; i++) {
            let inputName = Object.keys(news)[i];
            let input = document.querySelector('input[name="' + inputName + '"]');

            if (!Object.values(news)[i]) {
                input.classList.add('_error');
                errors++;
            } else {
                input.classList.remove('_error');
            }
        };
        
        if (errors === 0) {
            const newItem = {...news, approved: false, id: Date.now()};
            create(newItem);
            setNews({date: '', title: '', text: ''});
        }
    }

    return (
        <div>
            <form className='news-form'>
                <Input
                    value={news.date}
                    onChange={e => setNews({...news, date: e.target.value})}
                    type='text'
                    placeholder='Дата'
                    name='date'
                />
                <div className='input-error'>Введите дату</div>
                <Input
                    value={news.title}
                    onChange={e => setNews({...news, title: e.target.value})}
                    type='text'
                    placeholder='Заголовок'
                    name='title'
                />
                <div className='input-error'>Введите заголовок</div>
                <Input
                    value={news.text}
                    onChange={e => setNews({...news, text: e.target.value})}
                    type='text'
                    placeholder='Текст новости'
                    name='text'
                />
                <div className='input-error'>Введите текст новости</div>
                <Button onClick={addNews}>Отправить на модерацию</Button>
            </form>
        </div>
    );
};

export default NewsForm;