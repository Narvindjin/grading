import"../libs/nouislider/nouislider.js";const priceSlider=document.querySelector(".catalogue-filter__price-slider"),minPriceInput=document.querySelector(".catalogue-filter__price--min"),maxPriceInput=document.querySelector(".catalogue-filter__price--max"),noDigitsAfterPoint=e=>Number(parseFloat(e).toFixed(0));noUiSlider.create(priceSlider,{range:{min:noDigitsAfterPoint(minPriceInput.min),max:noDigitsAfterPoint(minPriceInput.max)},start:[noDigitsAfterPoint(minPriceInput.placeholder),noDigitsAfterPoint(maxPriceInput.value)],connect:!0,step:50}),maxPriceInput.addEventListener("change",(()=>{let e=Number(minPriceInput.value);maxPriceInput.value<e&&(maxPriceInput.value=e),priceSlider.noUiSlider.set([null,noDigitsAfterPoint(maxPriceInput.value)])})),minPriceInput.addEventListener("change",(()=>{let e=Number(maxPriceInput.value);minPriceInput.value>e&&(minPriceInput.value=e),priceSlider.noUiSlider.set([noDigitsAfterPoint(minPriceInput.value),null])})),priceSlider.noUiSlider.on("slide",(()=>{const e=priceSlider.noUiSlider.get();minPriceInput.value=noDigitsAfterPoint(e[0]),maxPriceInput.value=noDigitsAfterPoint(e[1])}));