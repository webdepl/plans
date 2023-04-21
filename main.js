dollarPriceTextField = document.getElementById("dp");

function convertEnNumberToPersian(number) {
    const persian = {
      0: "۰",
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
    };
    number = number.toString().split("");
    let persianNumber = "";
    for (let i = 0; i < number.length; i++) {
      number[i] = persian[number[i]];
    }
    for (let i = 0; i < number.length; i++) {
      persianNumber += number[i];
    }
    return persianNumber;
};

async function logJSONData() {
    const response = await fetch("https://dapi.p3p.repl.co/api/?currency=usd");
    const jsonData = await response.json();
    dollarPriceTextField.innerHTML = await convertEnNumberToPersian(jsonData.Price);
}
logJSONData();