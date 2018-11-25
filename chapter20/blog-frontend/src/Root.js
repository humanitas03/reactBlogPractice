/*
    Root컴포넌트는 클라이언트 쪽에서만 사용됨
    추후 Root 컴포넌트는 App컴포넌트를 웹 브라우저에서 사용하는 
    라우터인 BrowserRouter컴포넌트 안에 감쌀것임
*/
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'components/App';
import {Provider} from 'react-redux';
import configure from 'store/configure';

const store = configure();

const Root = ()=>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;