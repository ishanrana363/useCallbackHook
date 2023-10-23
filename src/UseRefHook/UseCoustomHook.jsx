import {useEffect} from 'react';

const UseCoustomHook = (count) => {
    useEffect(()=>{
        document.title = `count ${count} `
    })
};

export default UseCoustomHook;