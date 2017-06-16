

export function formatCurrency (num) {
  if (num && !isNaN(num)) {
    if (typeof num === 'string')
      num = Number(num);
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  } else {
    return '';
  }
}

export function formatLocalCurrency (num) {
  if (num) {
    return num.toLocaleString( "en-US" )
  } else {
    return '';
  }
}

export function formatCurrencyTest (num, minFractionDigits, maxFractionDigits) {
  if (num && !isNaN(num)) {
    if (typeof num === 'string')
      num = Number(num);
    return num.toLocaleString( "en-US", {
      minimumFractionDigits:minFractionDigits,
      maximumFractionDigits:maxFractionDigits
    })
  } else {
    return '';
  }
}
