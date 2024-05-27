import axios from 'axios';

import authorIcon from '../../assets/icons/author_icon.svg'
import viewIcon from '../../assets/icons/views.svg'
import tagIcon from '../../assets/icons/tags.svg'
import defaultCover from '../../assets/default_cover.jpeg'


import SideDate from "../SideDate/SideDate.jsx";

import './Card.scss'

import {Link, useLocation} from "react-router-dom";

export default function Card({articleData}) {
    const location = useLocation()

    return (
        <div className='article-card'>
            <SideDate className='side-date' date={articleData.date}/>
            <img className='thumbnail' src={articleData.cover ? articleData.cover : defaultCover}/>
            <div className='info'>
                <Link to={`${location.pathname}/${articleData.id}`}>
                    <h1>{articleData.title}</h1>
                </Link>
                <div className='small-info'>
                    <div className='author'>
                        <img src={authorIcon} className='icon'/>
                        {articleData.author.name}
                    </div>
                    <div className='view-num'>
                        <img src={viewIcon} className='icon'/>
                        {articleData.views}
                    </div>
                    <div className='tag'>
                        <img src={tagIcon} className='icon'/>
                        {articleData.tags.map(i => Object.values(i)[0]).join(';')}
                    </div>
                </div>
                <div className='intro'>
                    <p>{articleData.intro}</p>
                </div>
            </div>
        </div>
    )
}