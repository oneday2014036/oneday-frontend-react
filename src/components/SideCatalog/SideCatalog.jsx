import Avatar from "react-avatar";

import './SideCatalog.scss'


export default function SideCatalog({catalog}) {
    /*
    catalog = [{chapter 1: [你是谁, 我是谁]}, {chapter 2: [三花是谁, 虎仔是谁]}]
    */
    console.log(catalog)
    return (
        <aside className='side-catalog'>
            <div className='menu'>
                <div className='container'>
                    <h1>目<span></span>录</h1>
                </div>
                {catalog.map((item) => {
                    return (
                    <>
                        <h2><a href={`#${Object.keys(item)[0]}`}>{Object.keys(item)[0]}</a></h2>
                        {Object.values(item)[0].map(v => <h3 key={v}><a href={`#${v}`}>{v}</a></h3>)}
                    </>)
                })}
            </div>
            <div className='social-icons'>
                <Avatar className='avatar' alt='avatar' size={30}/>
                <Avatar className='avatar' alt='avatar' size={30}/>
                <Avatar className='avatar' alt='avatar' size={30}/>
            </div>
        </aside>
    )
}