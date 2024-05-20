import { useParams } from "react-router-dom";

import Article from "../../components/Article/Article.jsx";
import SideCatalog from "../../components/SideCatalog/SideCatalog.jsx";

import './DetailPage.scss'

export default function DetailPage() {
    const {id: articleId} = useParams()

    return (
        <>
            <div className='detail-page'>
                <SideCatalog catalog={[{'chapter1':['我是谁', '你是谁']}, {'chapter2': ['虎仔是谁', '白雪是谁']}]}/>

            </div>
        </>

    )
}