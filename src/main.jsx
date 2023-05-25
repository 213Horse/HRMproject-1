import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalResetCss from './components/GlobalStyles/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GlobalResetCss>
    <App />
  </GlobalResetCss>
  // </React.StrictMode>,
)
