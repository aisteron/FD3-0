import { BrowserRouter } from 'react-router-dom';
import { PagesLinks } from './PagesLinks';
import { PagesRouter } from './PagesRouter';

export const App = () => (
    <BrowserRouter>
        <PagesLinks />
        <PagesRouter/>
    </BrowserRouter>
);