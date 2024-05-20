import authorIcon from '../../assets/icons/author_icon.svg'
import viewIcon from '../../assets/icons/views.svg'
import tagIcon from '../../assets/icons/tags.svg'

import SideDate from "../SideDate/SideDate.jsx";

import './Card.scss'

export default function Card({date, thumb_img, title, tags, intro}) {
    return (
        <div className='article-card'>
            <SideDate className='side-date' date={date}/>
            <img className='thumbnail' src={thumb_img}/>
            <div className='info'>
                <h1>{title}</h1>
                <div className='small-info'>
                    <div className='author'>
                        <img src={authorIcon} className='icon'/>
                        {tags.author}
                    </div>
                    <div className='view-num'>
                        <img src={viewIcon} className='icon'/>
                        {tags.views}
                    </div>
                    <div className='tag'>
                        <img src={tagIcon} className='icon'/>
                        {tags.tags.join(';')}
                    </div>
                </div>
                <p>{intro}</p>
            </div>
        </div>
    )
}