import { useLocation } from "react-router-dom";

import useFetch from "../../utils/useFetch.jsx";
import Card from "../../components/Card/Card.jsx";

export default function IndexPage() {
    const location = useLocation();
    const [articles, isLoading] = useFetch(`/api/articles?tag=${location.pathname.split('/')[1]}&s=1&limit=5`);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='article-list'>
            {Boolean(Object.keys(articles).length) && articles.map((i) => <Card key={i.id} articleData={i} articleID={i.id}/>)}
        </div>
    )
}