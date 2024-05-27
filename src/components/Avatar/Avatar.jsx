import defaultAvatar from "../../assets/default_avatar.jpg";

export default function Avatar({id, src, size}) {
    const style = {
        'width': `${size}px`
    }

    return (
        <img
        tabIndex='-1'
        src={src ? src : defaultAvatar}
        style={style}
        className='avatar'
        alt='avatar'
        id={id}/>)
}