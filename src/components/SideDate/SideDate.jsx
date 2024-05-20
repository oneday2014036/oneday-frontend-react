import './SideDate.scss'

export default function SideDate({date}) {
    return (
        <div className='side-date'>
            <span className='year'>{date.year}</span>
            <span className='month-day'>{date.month}/{date.day}</span>
        </div>
    )
}