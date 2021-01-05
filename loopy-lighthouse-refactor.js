const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    for (let j = 0; j < multiples.length; j++) {
      if (multiplesOf(multiples, i)) {
        console.log(words[0] + words[1]);
      } else if (multiplesOf(multiples[j], i)) {
        console.log(words[0]);
      } else {
        console.log(i);
      }
    }
  }
};

const multiplesOf = function(multiples, index) {
  let total = multiples.reduce((previous, current) => previous * current);
  if (index % total === 0) {
    return true;
  }
  return false;
};

loopyLighthouse([10, 90], [2, 5, 4], ["Batty", "Beacon"]);