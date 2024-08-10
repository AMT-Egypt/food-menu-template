import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import LoadingPage from './LoadingPage/LoadingPage.tsx'
import store from './store/store.ts'
import './style/index.css'
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </Provider>
)
