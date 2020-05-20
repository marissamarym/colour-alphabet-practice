/*
http://www.colour-journal.org/2010/5/10/10510article.htm
http://www.colour-journal.org/2010/5/10/figures/13.jpg
*/

var lookupMap = { "!": '<br clear="all" />' },
  oldAlphabetColors = {
    a: "#ea8cff",
    b: "#0b5dd3",
    c: "#852e05",
    d: "#3a0049",
    e: "#242424",
    f: "#0a4c25",
    g: "#2ac839",
    h: "#12897c",
    i: "#8f8f8f",
    j: "#86ffa6",
    k: "#7c6905",
    l: "#8dc507",
    m: "#b20074",
    n: "#05236d",
    o: "#fc930b",
    p: "#fd94ad",
    q: "#345600",
    r: "#fb0010",
    s: "#52f0ed",
    t: "#12897c",
    u: "#daff54",
    v: "#5f00ff",
    w: "#850004",
    x: "#feff6c",
    y: "#f8dd0a",
    z: "#fc380a"
  },
  alphabetColors = {
    a: "rgb(240,163,255)",
    b: "rgb(0,117,220)",
    c: "rgb(153,63,0)",
    d: "rgb(76,0,92)",
    e: "rgb(128,128,128)",
    f: "rgb(0,92,49)",
    g: "rgb(43,206,72)",
    h: "rgb(255,204,153)",
    i: "rgb(225,225,225)",
    j: "rgb(148,255,181)",
    k: "rgb(143,124,0)",
    l: "rgb(157,204,0)",
    m: "rgb(194,0,136)",
    n: "rgb(0,51,128)",
    o: "rgb(255,164,5)",
    p: "rgb(255,168,187)",
    q: "rgb(66,102,0)",
    r: "rgb(255,0,16)",
    s: "rgb(94,241,242)",
    t: "rgb(0,153,143)",
    u: "rgb(224,255,102)",
    v: "rgb(116,10,255)",
    w: "rgb(153,0,0)",
    x: "rgb(255,255,128)",
    y: "rgb(255,225,0)",
    z: "rgb(255,80,5)"
  };

var letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var chromaconate = function(input) {
  var output = "";

  // Make input string into lowercase, use '!' to denote linebreaks, and remove
  // all other non-color-coded characters.
  input = input
    .toLowerCase()
    .replace(/\n\s*/gi, "!")
    .replace(/[^a-z! ]/gi, "");

  // Chew through the input, memoizing the characters into the lookup map as we go
  for (var i = 0; i < input.length; i++) {
    var currentChar = input[i];
    if (!(currentChar in lookupMap)) {
      lookupMap[currentChar] =
        '<div style="background-color: ' +
        (alphabetColors[currentChar] || "transparent") +
        '"></div>\n';
    }
    output += lookupMap[currentChar];
  }

  return output;
};
