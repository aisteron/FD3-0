
## npm run start

### Соответствие критериям

1. динамичность веб-страницы
	+ есть поддержка. компонент PageIndex  > ListItem при клике на строку *add to cart*, добавляет в стейт продукт, а в самом компоненте строка меняется на *in cart*
2. производительность отрисовки
	 + приложение работает без фризов. в компоненте PageIndex > Form можно плавно добавить элемент в стейт. А в PageIndex > ListItem - плавно удалить. Используется CSSTransitionGroup
3. навигация в приложении
	+ есть поддержка. в т.ч. сверстана пагинация в компоненте PagePagination > Paginator. кнопки браузер вперед-назад работают корректно.
4.	кроссбраузерность
	 + есть поддержка. реализовано с помощью нескольких @media запросов
5. коммуникации
	+ есть поддержка. для получения данных используется fetch. пока данные не пришли используется текст-загрушка "Загрузка"
6.	 модель данных
		+ есть поддержка. приложение обернуто в redux provider. Информация о товарах в корзине передается между компонентами PageIndex > ListItem и PageCart. Для компонента PagePagination возможность использования редакс стейта исключена намеренно за отсутствием необходимости.
7. прод-сборку задеплоил на grad.ashaev.by
8. тесты
	+ частичная поддержка. написал 2 теста: для компонента PageIndex > ListItem, где я передаю мок-данные и проверяю отрисовалась ли строка в таблице товаров. И PagePagination > Paginator, где я проверяю отрисовалась ли пагинация. В тестах самого redux toolkit долго разбираться. А простой диспатчинг ивентов типа клик по *remove* для удаления товара из таблицы стейт почему-то не меняет