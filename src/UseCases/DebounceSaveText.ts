function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
 }

function handleReturnName(text, returnName) {
    returnName(text);
}
const delayedReturnName = debounce((text, returnName) => {
    handleReturnName(text, returnName);
}, 500);

export { delayedReturnName }