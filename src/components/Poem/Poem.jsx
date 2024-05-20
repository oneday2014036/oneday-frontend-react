import './Poem.scss'

export default function Poem({ date, title, poet, source, children }) {
    return (
        <main>
            <article className='poem'>
                {date}
                <p>{children}</p>
                <div className='read-more'><p>阅读更多</p></div>
                <div className='title'>
                    <p>{title}/{poet}{source && `/${source}`}</p>
                </div>
            </article>
        </main>
    )
}