// https://www.testdome.com/questions/javascript/mega-store/116860

const DiscountType = {
  Standard: "Standard", //6%
  Seasonal: "Seasonal", //12%
  Weight: "Weight", //for weight<=10-6%, else for weight>10- 18%
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  // console.log(discountType)
  if (discountType === "Weight") {
    if (cartWeight <= 10) {
      return totalPrice - totalPrice * 0.06;
    } else {
      return totalPrice - totalPrice * 0.18;
    }
  } else if (discountType === "Seasonal") {
    return totalPrice - totalPrice * 0.12;
  } else return totalPrice - totalPrice * 0.06;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
