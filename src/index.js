import React from 'react';
import ReactDOM from 'react-dom/client'; // React18 - /client 추가
import App from './App';

// ReactDOM.render is no longer supporede in React18을 지원하지 않으므로 변경 Start
    /* 이전 버전 소스 
        ReactDOM.render(<App />, document.getElementById('root')); */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>
)
// ReactDOM.render is no longer supporede in React18을 지원하지 않으므로 변경 End