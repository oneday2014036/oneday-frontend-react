import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import DashBoardCard from "../../components/DashBoardCard/DashBoardCard.jsx";
import './DashboardPage.scss'

export function DashboardPage() {
    const pageState = useSelector(state => state.page)
    const isAuth = pageState.isAuthenticated
    const dashboardItems = [
        ['个人中心', `/user?id=${pageState.userInfo.id}`],
        ['发布文章', '/article/edit']
    ]
    return (
        isAuth ? <div className='dashboard-page'>
            {dashboardItems.map(item => <DashBoardCard key={item[1]} target={item[1]}>{item[0]}</DashBoardCard> )}
        </div>: <Navigate to='/login' state={{ from: '/dashboard' }} replace/>
    )
}