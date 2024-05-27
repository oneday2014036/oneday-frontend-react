import {Link} from "react-router-dom";
import './DashBoardCard.scss'

export default function DashBoardCard({children, target}) {
    return (
        <div className='dashboard-card'>
            <Link to={target}>
                {children}
            </Link>
        </div>
    )
}