function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  for(i=0;i<arr1.length;i++)
    {
      for(j=0;j<arr2.length;j++)
        if(arr1[i][1]==arr2[j][1])
          {
            arr1[i][0]+=arr2[j][0];
            arr2.splice(j,1);
          }
    }
  return arr1.concat(arr2);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
