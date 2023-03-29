import { Route, Routes } from 'react-router-dom';

import { PageIndex } from '../pages/index/PageIndex';
import { PagePagination } from '../pages/pagination/PagePagination';


export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageIndex/>} />
        <Route path="/pagination/:page?" element={<PagePagination/>} />
      </Routes>
    );
    
}; 
