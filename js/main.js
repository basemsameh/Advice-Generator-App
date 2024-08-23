
async function fetchData() {
  let numAdvice = Math.floor(Math.random() * 200);
  let getData = await fetch(`https://api.adviceslip.com/advice/${numAdvice}`);
  let data = await getData.text();
  document.querySelector("#numAdvice").innerHTML = numAdvice;
  document.querySelector(".quote").innerHTML = `"${JSON.parse(data).slip.advice}"`;
}
fetchData();

document.querySelector(".btn-dice").onclick = () => { fetchData() };