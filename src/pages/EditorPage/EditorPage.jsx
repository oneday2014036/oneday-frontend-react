import {useEffect, useRef, useState} from "react";
import axios from "axios";

import './EditorPage.scss';

export default function EditorPage() {
    const [poem, setPoem] = useState({
        'title': '',
        'token': '',
        'content': ''
    });
    const ref = useRef();
    function handleClick() {
        console.log(poem.content.split('\n'))
        axios({
            method: 'POST',
            url: '/api/poem',
            data: {
                title: poem.title,
                content: poem.content.split('\n').map(i => {
                    return i ? {'p': i} : {'el': i}
                }),
                poet: 1
            },
            headers: {
                'Content-Type': 'application/json;',
                'token': poem.token
            }
        }).then(res => console.log(res.data)).catch(err => console.error(err.response.data));
    }

    function handleInput(e){
        setPoem(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        ref.current.disabled = !poem.content || !poem.title || !poem.token
    }, [poem]);

    return (
        <>
            <div className='poem-editor'>
                <div className='header'>
                    <h1>Poems are words in the wind.&nbsp;</h1>
                </div>
                <div className="input-area">
                    <label>
                        标题
                        <input
                            name='title'
                            onChange={handleInput}
                            placeholder='title'
                            value={poem.title}
                            type='text' />
                    </label>
                    <label>
                        Token
                        <input
                        name='token'
                        onChange={handleInput}
                        placeholder='token'
                        value={poem.token}
                        type='password' />
                    </label>
                    <textarea id="input-words"
                              name='content'
                              onChange={handleInput}
                              value={poem.content}
                              className="placeholder"
                              placeholder="Write down some words in your mind."></textarea>
                    <button
                            onClick={handleClick}
                            id="publish"
                            ref={ref}
                            >
                        Publish</button>
                </div>
            </div>
        </>
    )
}