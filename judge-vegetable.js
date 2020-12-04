const judgeVegetable = function(vegetables, metric){
  let best = 0;
  var submitter = '';
  
  for(let i of vegetables){
    console.log(i[metric]);
    if(i[metric] > best){
      best = i[metric];
      submitter = i.submitter;
    }
  }
  
  return "'" + submitter + "'";
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));
