import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
import {BrowserRouter as Router} from 'react-router-dom';

import { Paginator } from "./Paginator";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));




let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render pagination", async () => {


  act(() => {
    render(<Router><Paginator /></Router>, container);
  });


	expect(container.querySelectorAll('nav ul li').length).toBe(7)

});