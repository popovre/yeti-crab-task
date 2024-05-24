# API

## Заявки

1. GET /api/orders/ - все заявки;
2. GET /api/orders/:orderId - заявка по айди
3. DELETE /api/order/:orderId - удалить заявку по айди
4. POST api/order - создать чистую заявку

## Измeняемый контент в заявке

1. GET /api/content/:contentId - получить наполнение выбранной заявки по айди
2. PATCH /api/content/:contentId - Записать наполнение выйбранной заявки по айди

## Статус заявки

1. PATCH /api/order/status/:orderId - обновить значение статуса заявки
