import { Route, Routes } from 'react-router-dom';

import { PageIndex } from '../pages/index/PageIndex';
import { PageCart } from '../pages/PageCart';
import { PagePagination } from '../pages/pagination/PagePagination';


export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageIndex/>} />
        <Route path="/cart" element={<PageCart/>} />
        <Route path="/pagination" element={<PagePagination/>}/>
      </Routes>
    );
    
}; 
