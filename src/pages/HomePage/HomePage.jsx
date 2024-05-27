import axios from "axios";

import Poem  from "../../components/Poem/Poem.jsx";
import SideDate from "../../components/SideDate/SideDate.jsx";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

export default function HomePage() {
    const now = new Date();
    const [poem, setPoem] = useState(null);

    useEffect(() => {
        axios.get('/api/poems')
            .then(res => {
                setPoem(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    if (!poem) {
        return <div>Loading...</div>
    }

    return (
    <>
        <Poem
            id={poem.id}
            date={<SideDate date={{year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}}/>}
            title={poem.title}
            poet={poem.poet}
            source={poem.source}
        >
            {poem && <Markdown>{poem.content}</Markdown>}
        </Poem>
    </>

    )
}