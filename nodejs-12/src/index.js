const PROMOTIONS = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const CATEGORIES = ['T-SHIRTS', 'PANTS', 'SHOES', 'BAGS'];

function getShoppingCart (ids, productsList) {
  const products = findProducts(ids, productsList);
  const promotion = findPromotion(products);
  const totalRegularPrice = calculateTotalRegularPrice(products);
  const totalPrice = calculateTotalPrice(products, promotion);
  const discountValue = calculateTotalDiscount(totalRegularPrice, totalPrice);
  const discount = calculateTotalDiscountPercentage(totalRegularPrice, discountValue);

  return {
    products: getProductsResult(products),
    promotion,
    totalPrice,
    discountValue,
    discount
  };
}

function findProducts (ids, productsList) {
  return productsList.filter(({ id }) => ids.includes(id));
}

function findPromotion (products) {
  const categories = categoriesInsideProducts(products);
  const indexPromotion = categories.length - 1;
  return PROMOTIONS[indexPromotion];
}

function categoriesInsideProducts (products) {
  return CATEGORIES.filter( category => {
    return products.some(product => product.category === category);
  });
}

function calculateTotalPrice (products, promotion) {
  const totalPrice = products.reduce(( total, product ) => {
    const currentPromotion = findProductPromotion(product, promotion);
    total += currentPromotion ? currentPromotion.price : product.regularPrice;
    return total;
  }, 0);

  return round(totalPrice);
}

function calculateTotalRegularPrice (products) {
  const totalPrice = products.reduce(( total, product ) => {
    total += product.regularPrice;
    return total;
  }, 0);

  return round(totalPrice);
}

function calculateTotalDiscount(totalRegularPrice, totalPrice) {
  return round(totalRegularPrice - totalPrice);
}

function calculateTotalDiscountPercentage(totalPrice, discountValue) {
  const percentage = ( discountValue / totalPrice ) * 100;
  return `${ round(percentage) }%`;
}

function findProductPromotion (product, promotion) {
  return product.promotions.find( ({ looks }) => looks.includes(promotion));
}

function round (value) {
  return value.toFixed(2);
}

function getProductsResult (products) {
  return products.map( ({ name, category }) => ({ name, category }));
}

module.exports = { getShoppingCart };
