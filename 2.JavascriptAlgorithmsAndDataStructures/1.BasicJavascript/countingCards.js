var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(4); cc(5); console.log(cc(6));
count = 0;
cc(7); cc(8); console.log(cc(9));
count = 0;
cc(10); cc("J"); cc("Q"); cc("K"); console.log(cc("A"));
count = 0;
cc(3); cc(7); cc("Q"); cc(8); console.log(cc("A"));
count = 0;
cc(2); cc("J"); cc(9); cc(2); console.log(cc(7));
count = 0;
cc(2); cc(2); console.log(cc(10));
count = 0;
cc(3); cc(2); cc("A"); cc(10); console.log(cc("K"));