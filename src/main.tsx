import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from "./store/store.ts";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
)
