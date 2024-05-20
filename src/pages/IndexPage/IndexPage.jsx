import thumbTest from '../../../test/thumb_test.jpeg'

import Card from "../../components/Card/Card.jsx";

export default function IndexPage() {
    return (
        <div className='article-list'>
            <Card
                date={{
                    year: '2024',
                    month: '5',
                    day: '11'
                }}
                title='Jimei is friend of Huzai'
                tags={{
                    'views': '200',
                    'author': 'Baixue',
                    'tags': ['love', 'friendship']
            }}
                thumb_img={thumbTest}
                intro='hello, world!'
            />
        </div>
    )
}