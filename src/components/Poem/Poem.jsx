import './Poem.scss'
import {Link} from 'react-router-dom'

export default function Poem({ id, date, title, poet, source, children }) {
    return (
        <main>
            <article className='poem'>
                {date}
                <div className='content'>{children}</div>
                <div className='read-more'>阅读更多</div>
            </article>
            <div className='title'>
                <Link to={`/poem/${id}`}>
                    <p>{title}/{poet}{source && `/${source}`}</p>
                </Link>
            </div>
        </main>
    )
}