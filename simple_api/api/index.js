const router = require('express').Router();
const { nanoid } = require('nanoid');
const { orders, comments } = require('./normalized-mocks');
const { reply, getById, updateById } = require('./utils');

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

router.patch('/orders/:orderId', (req, res, next) => {
  console.log('request 500');

  const body = req.body;
  const orderId = req.params?.orderId;
  console.log(orderId);
  let updatedOrder;

  console.log(body, 'body');

  if (orderId) {
    updatedOrder = updateById(orders)(orderId, body);
  }

  reply(res, updatedOrder);
});

// router.get('/dishes', (req, res, next) => {
//   const { restaurantId, dishId } = req.query;
//   let result = products;

//   if (restaurantId) {
//     const restaurant = getById(restaurants)(restaurantId);
//     if (restaurant) {
//       result = restaurant.menu.map(getById(result));
//     }
//   }

//   if (!restaurantId && dishId) {
//     result = getById(result)(dishId);
//   }
//   reply(res, result);
// });

// router.get('/dish/:dishId', (req, res, next) => {
//   const dishId = req.params?.dishId;
//   let product;

//   if (dishId) {
//     product = getById(products)(dishId);
//   }
//   reply(res, product);
// });

// router.get('/reviews', (req, res, next) => {
//   const { restaurantId } = req.query;
//   let result = reviews;
//   if (restaurantId) {
//     const restaurant = getById(restaurants)(restaurantId);
//     if (restaurant) {
//       result = restaurant.reviews.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

router.get('/comments', (req, res, next) => {
  const { orderId } = req.query;
  let result = comments;
  if (orderId) {
    const order = getById(orders)(orderId);
    if (order) {
      result = order.comments.map(getById(result));
    }
  }
  reply(res, result);
});

router.post('/review/:restaurantId', (req, res, next) => {
  const body = req.body;
  const restaurantId = req.params?.restaurantId;
  const restaurant = restaurantId && getById(restaurants)(restaurantId);
  let newReview = {};

  if (restaurant && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    restaurant.reviews.push(newReviewId);
    reviews.push(newReview);
  }

  reply(res, newReview);
});

// router.patch('/review/:reviewId', (req, res, next) => {
//   const body = req.body;
//   const reviewId = req.params?.reviewId;
//   let updatedReview;

//   if (reviewId) {
//     updatedReview = updateById(reviews)(reviewId, body);
//   }

//   reply(res, updatedReview);
// });

router.get('/users', (req, res, next) => {
  reply(res, users);
});

module.exports = router;
