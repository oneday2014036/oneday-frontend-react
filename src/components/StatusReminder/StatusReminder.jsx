import warningIcon from '../../../src/assets/icons/warning_icon.svg'
import lockIcon from '../../../src/assets/icons/lock.svg'
import './StatusReminder.scss'

 export default function StatusReminder({status}) {
    if (status === 'OUTDATED') {
        return (
            <div className='status-reminder warning'>
                <img src={warningIcon} alt='warning icon'/>
                <p>虎仔按：此部分内容很可能已经过时或不再适用</p>
            </div>
        )
    } else if (status === 'LOGIN') {
        return (
            <div className='status-reminder ban'>
                <img src={lockIcon} alt='lock icon'/>
                <p>你需要登录以继续浏览此内容</p>
            </div>
        )
    }
 }