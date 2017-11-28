const spudFacts = [
    {
      text: "China produces the more potatoes than any other country.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    },
    {
      text: "The potato originates from Peru.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    },
    {
      text: "Potato domestication began roughly 7,000 to 10,000 years ago.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    },
    {
      text: "There are over 1000 varities of potatoes.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    },
    {
      text: "A single potato contains nearly 25% of both your Vitamin B6 & Vitamin C recommended Daily Value.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    },
    {
      text: "Potato blight, the disease that contributed to the Great Irish Famine of the 1840s, originated in Mexico.",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Phytophthora_infestans"
    },
    {
      text: "842,157,200,000 pounds of potatoes were produced globally in 2014 - that's 110 lbs per person in the world!",
      sourceName: "Wikipedia",
      sourceURL: "https://en.wikipedia.org/wiki/Potato"
    }
];

const container = document.getElementById("content");
let arr = [];

for (let i = 0; i < 3; i++) {
  function rand() {
    let num = Math.round(Math.random() * (spudFacts.length - 1));
    while (arr.indexOf(num) !== -1) {
      num = Math.round(Math.random() * (spudFacts.length - 1));
    }
    return num;
  }

  arr.push(rand());

  let factTitle = document.createElement("h3");
  let factDiv = document.createElement("div");
  let sourceDiv = document.createElement("div");

  let titleNode = document.createTextNode(`Fact #${i + 1}`);
  factTitle.appendChild(titleNode);
  container.appendChild(factTitle);

  console.log(spudFacts[i]["text"]);
  let textNode = document.createTextNode(spudFacts[arr[i]]["text"]);
  factDiv.appendChild(textNode);
  factDiv.className = "fact-text";
  container.appendChild(factDiv);

  let textSource = document.createTextNode("Source: ");
  sourceDiv.appendChild(textSource);
  let urlElm = document.createElement("a");
  urlElm.href = spudFacts[arr[i]]["sourceURL"];
  urlElm.setAttribute("target", "_blank");
  let sourceURLNode = document.createTextNode(spudFacts[arr[i]]["sourceName"]);
  urlElm.appendChild(sourceURLNode);
  sourceDiv.appendChild(urlElm);
  sourceDiv.className = "fact-source";
  container.appendChild(sourceDiv);
}
