import Avatar from "react-avatar";
import Markdown from "react-markdown";
import remarkRehype from 'remark-rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkSlug from 'remark-slug';


import StatusReminder from "../StatusReminder/StatusReminder.jsx";

import './Article.scss'


export default function Article({article}) {

    return (
        <div className='article'>
            <h1 className='title'>{article.title}</h1>
            <div className='info'>
                <div className='author'>
                    {/*<img src='./assets/images/avatar.png' alt='author avatar'/>*/}
                    <Avatar className='avatar' alt='avatar' size={30}/>
                    <p>{article.author.name}</p>
                </div>
                <div className='post-date'>发表于{article.date.past}天前</div>
                {Boolean(Object.keys(article.source).length) && <div className='source'>转载自：<span data-type={article.source.type && 'wechat'}>
                    <a href={article.source.url}>{article.source.name}</a>
                </span>
                </div>}
            </div>
            {article.date.past >= 0 && <StatusReminder status='OUTDATED'/>}
            <div className='main-content'>
                <Markdown remarkPlugins={[remarkSlug, remarkRehype]}
                          rehypePlugins={[rehypeAutolinkHeadings]}
                          className='markdown'>
                    {article.content}
                </Markdown>
            </div>
        </div>
    )
}