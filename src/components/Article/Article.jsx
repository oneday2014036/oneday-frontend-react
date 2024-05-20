import StatusReminder from "../StatusReminder/StatusReminder.jsx";
import Avatar from "react-avatar";

import './Article.scss'


export default function Article(props) {
    let { title, author, avatar, days_past, source, content} = props
    return (
        <article className='article'>
            <h1 className='title'>{title}</h1>
            <div className='info'>
                <div className='author'>
                    {/*<img src='./assets/images/avatar.png' alt='author avatar'/>*/}
                    {/*<Avatar size={30}/>*/}
                    <Avatar className='avatar' alt='avatar' size={30}/>
                    <p>{author}</p>
                </div>
                <div className='post-date'>{days_past}</div>
                <div className='source'>转载自：<span data-type='wechat'>微信公众号</span></div>
            </div>
            <StatusReminder status='OUTDATED'/>
            <div className='main-content'>
                <p>2022年3月底，河北省招标投标公共服务平台挂出共享单车公共资源市场化配置项目，是有价招标。但是4月，该招标公告被停止，紧随其后的是石家庄市公共资源交易中心挂出的拍卖公告。
                    这份拍卖公告前，石家庄很早就向相关企业吹过风，不止是共享单车企业，商业地产企业自持物业的户外广告收益，也要和政府分成。</p>
                <p>疫情三年大家都不容易，地方政府入不敷出后想了很多办法。比如四川省阆中市把公办学校、行政机关、事业单位、国资公司未来30年的食堂食材配送特许经营权给卖了。乐山把乐山大佛景区摆摊权和观光车的30年经营权一次性打包卖了17亿……
                    自从古希腊历史学家希罗多德记载了2000多年前古巴比伦人的拍卖场景开始，人类把这种报价游戏应用在各类商品上。从新娘到战利品，从奴隶到鲜花，西方人就没有什么是不能拍卖的。1979年版辞海对此解释到：
                    资本主义制度一种买卖方式。</p>
                <p>但对于政府拍卖公共资源甚至别人资产的行为，法律界人士非常愤慨，大家引经据典，从反垄断法、反不正当竞争法和特许经营管理条例等方方面面指责这些地方政府干扰市场经济秩序，知法犯法。
                    卖30年你们骂，那就拆开卖3年好了。</p>
                <p>去年5月11日，石家庄公共资源交易中心的大屏幕前坐满了大大小小的领导，市领导亲自坐镇观看。屏幕的另一端，是9家出行企业，大家熟知的滴滴青桔、哈啰、美团等企业都在现场。双方在等待拍卖石家庄市内共享单车3年运营权的拍卖。</p>
            </div>
        </article>
    )
}