import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { PageIndex } from "./PageIndex";

import { store } from '../../store/store'
import { Provider } from 'react-redux'


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


it("render 50 goods", async () => {

  const fakeData = [{
    name: "Maiores dolor est ea.",
    upc: "422524173120",
    price: "17.04"
  }];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<Provider store={store}><PageIndex/></Provider>, container);
  });

  expect(container.querySelector("tbody .upc").textContent).toBe(fakeData[0].upc);


  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
});