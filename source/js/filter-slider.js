const priceSlider = document.querySelector('.catalogue-filter__price-slider');
const minPriceInput = document.querySelector('.catalogue-filter__price--min');
const maxPriceInput = document.querySelector('.catalogue-filter__price--max');

const noDigitsAfterPoint = (numberString) => {
  let newNumber = Number(parseFloat(numberString).toFixed(0));
  return newNumber;
};

noUiSlider.create(priceSlider, {
  range: {
    min: noDigitsAfterPoint(minPriceInput.min),
    max: noDigitsAfterPoint(minPriceInput.max),
  },
  start: [noDigitsAfterPoint(minPriceInput.placeholder), noDigitsAfterPoint(maxPriceInput.value)],
  connect: true,
  step: 50,
});

maxPriceInput.addEventListener('change', () => {
  let minValue = Number(minPriceInput.value);
  if (maxPriceInput.value < minValue) {
    maxPriceInput.value = minValue;
  }
  priceSlider.noUiSlider.set([null, noDigitsAfterPoint(maxPriceInput.value)]);
});

minPriceInput.addEventListener('change', () => {
  let maxValue = Number(maxPriceInput.value);
  if (minPriceInput.value > maxValue) {
    minPriceInput.value = maxValue;
  }
  priceSlider.noUiSlider.set([noDigitsAfterPoint(minPriceInput.value), null]);
});

priceSlider.noUiSlider.on('slide', () => {
  const values = priceSlider.noUiSlider.get();
  minPriceInput.value = noDigitsAfterPoint(values[0]);
  maxPriceInput.value = noDigitsAfterPoint(values[1]);
});
