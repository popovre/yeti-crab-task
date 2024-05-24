const router = require('express').Router();
const { nanoid } = require('nanoid');
const { orders, comments, contents } = require('./normalized-mocks');
const {
  reply,
  getById,
  updateById,
  deleteById,
  updateStatusById,
} = require('./utils');

router.get('/orders', (req, res, next) => {
  console.log('request');
  reply(res, orders);
});

router.get('/order/:orderId', (req, res, next) => {
  const orderId = req.params?.orderId;
  let order;

  if (orderId) {
    order = getById(orders)(orderId);
  }

  reply(res, order);
});

router.get('/content/:contentId', (req, res, next) => {
  console.log('request', req.params);
  const contentId = req.params?.contentId;
  let content;

  if (contentId) {
    content = getById(contents)(contentId);
  }
  reply(res, content);
});

router.patch('/orders/:orderId', (req, res, next) => {
  console.log('request 500');

  const body = req.body;
  const orderId = req.params?.orderId;
  let updatedOrder;

  console.log(body, 'body');

  if (orderId) {
    updatedOrder = updateById(orders)(orderId, body);
  }

  reply(res, updatedOrder);
});

router.patch('/content/:contentId', (req, res, next) => {
  console.log('request patch');

  const body = req.body;
  const contentId = req.params?.contentId;

  let updatedContent;

  if (contentId) {
    updatedContent = updateById(contents)(contentId, body);
  }

  reply(res, updatedOrder);
});

router.patch('/order/status/:orderId', (req, res, next) => {
  const orderId = req.params?.orderId;
  const body = req.body;

  if (orderId) {
    updateStatusById(orders)(orderId, body);
  }

  reply(res);
});

router.delete('/order/:orderId', (req, res, next) => {
  const orderId = req.params?.orderId;
  const body = req.body;

  if (orderId) {
    deleteById(orders, contents)(orderId);
  }

  reply(res);
});

router.post('/order', (req, res, next) => {
  const contentId = nanoid();

  let newOrder = {
    id: nanoid(),
    code: Math.floor(Math.random() * (10000 - 1000) * 1000),
    status: 'В работе',
    date: Date.now(),
    number: Math.floor(Math.random() * 99 + 1),

    content: contentId,
  };

  let newContent = {
    id: contentId,
    clientName: '',
    driver: '',
    phone: '',
    comments: [],
  };

  orders.push(newOrder);
  contents.push(newContent);

  reply(res, newOrder);
});

module.exports = router;
