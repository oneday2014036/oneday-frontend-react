import {createContext} from "react";

const navContext = createContext({
                                        '前端笔记': 'front-end',
                                        '读书笔记': 'reading',
                                        '翻译文章': 'translation',
                                        'One导航': 'onespace',
                                        '工具箱': 'onetool'
})

export default navContext;