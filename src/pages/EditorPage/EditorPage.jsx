import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

import axiosFetcher from "../../utils/Axios.js";

import Logo from "../../components/Logo/Logo.jsx";
import './EditorPage.scss';
import store from "../../store/index.js";

function UploadEditor() {
    const pageState = useSelector(state => state.page);
    const [fileData, setFileData] = useState({
        'file': '',
        'title': '',
        'tags': '',
        'author_id': pageState.userInfo.id
    });
    const location = useLocation()

    if (!pageState.isAuthenticated) {
        return <Navigate to='/login' state={{from: location.pathname}} replace />
    }

    function handleChange(e) {
        const {name, value, type, files} = e.target;
        if (type === 'file') {
            setFileData(pre => {
                return {
                    ...pre,
                    [name]: files,
                    title: files[0].name.split('.')[0]
                }
            })
        } else {
            setFileData(pre => {
                return {
                    ...pre,
                    [name]: value
                }
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', fileData.file[0])
        formData.append('author_id', store.getState().page.userInfo.id)
        formData.append('title', fileData.title)
        fileData.tags.split(';').forEach(i => {
            formData.append('tags', i)
        })

        console.log('fileData', fileData)

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        axiosFetcher({
            method: 'POST',
            url: '/api/articles/upload',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => console.log(res.data)).catch(err => console.log('err', err.response));
    }

    return (
        <div className='upload-editor'>
            <Logo isWithTitle={true}/>
            <form>
                <div className='upload-zone'>
                    <input name='file' type='file' id='fileInput' accept=".md" onChange={handleChange}/>
                    <label htmlFor="fileInput">点击选择文件或拖拽文件到此</label>
                </div>
                <label>
                    标题
                    <input type='text'
                           name={'title'}
                           onChange={handleChange}
                           value={fileData.title}
                           placeholder='可以为空，默认为文件名'
                           required={true}
                    />
                </label>
                <label>
                    标签
                    <input
                        type='text'
                        name='tags'
                        onChange={handleChange}
                        value={fileData.tags}
                        placeholder='用;分割多个标签'
                    />
                </label>
            </form>
            <button onClick={handleSubmit}>
                上传
            </button>
        </div>
    )
}

function OnlineEditor() {
    const pageState = useSelector(state => state.page);
    const [poem, setPoem] = useState({
        'title': '',
        'content': ''
    });
    const ref = useRef();
    const textareaRef = useRef();

    function handleClick() {
        axiosFetcher({
            method: 'POST',
            url: '/api/poems',
            data: {
                title: poem.title,
                content: poem.content,
                poet: pageState.userInfo.id
            },
            headers: {
                'Content-Type': 'application/json;',
                'token': pageState.token
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
        ref.current.disabled = !poem.content || !poem.title
    }, [poem]);

    useEffect(() => {
        const textareaEle = textareaRef.current
        const handleInput = () => {
            textareaEle.style.height = 'auto';
            textareaEle.style.height = textareaEle.scrollHeight + 'px';
        }
        textareaEle.addEventListener('input', handleInput)

        return () => {
            textareaEle.removeEventListener('input', handleInput)
        }
    }, []);

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
                    <textarea id="input-words"
                              name='content'
                              ref={textareaRef}
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


export default function EditorPage() {
    const [isEditOnline, setIsEditOnline] = useState(null)
    if (typeof isEditOnline === 'boolean') {
        console.log('changed', isEditOnline)
        return (
            isEditOnline ? <OnlineEditor/> : <UploadEditor/>
        )
    }

    function handleClick(e) {
        if (e.currentTarget.id === 'upload') {
            setIsEditOnline(false)
        } else {
            setIsEditOnline(true)
        }
    }

    return (
        <div className='editor-page'>
            <div id='upload' onClick={handleClick}>
                <p>Upload file[recommend]</p>
            </div>
            <div onClick={handleClick}>
                <p>Edit online[developing]</p>
            </div>
        </div>
    )
}