import { useParams } from "react-router-dom";

import Article from "../../components/Article/Article.jsx";
import SideCatalog from "../../components/SideCatalog/SideCatalog.jsx";

import './DetailPage.scss'
import useFetch from "../../utils/useFetch.jsx";

export default function DetailPage() {
    const {id: articleID} = useParams()
    const [article, isLoading] = useFetch(`/api/articles/${articleID}?type=detail`)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='detail-page'>
                <SideCatalog catalog={article.catalog}/>
                <Article article={article}/>
            </div>
        </>

    )
}