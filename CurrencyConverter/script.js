// Exchange rates for demonstration purposes
const exchangeRates = {
  usd: {
    eur: 0.85,
    gbp: 0.75,
    inr: 83,       
  },
  eur: {
    usd: 1.18,
    gbp: 0.89,
    inr: 91,       
  },
  gbp: {
    usd: 1.33,
    eur: 1.12,
    inr: 106,      
  },
  inr: {
    usd: 1/83,     
    eur: 1/91,     
    gbp: 1/106     
  }
};

function convertCurrency(){
  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let amount = document.getElementById("amount").value;
  let fromCur = from.value;
  let toCur = to.value;
  // console.log(fromCur);
  let multiplier = (fromCur===toCur) ? 1 : exchangeRates[fromCur][toCur] ;
  let result =   (amount*multiplier).toFixed(2);
  
  document.getElementById('result').innerText = result;
}