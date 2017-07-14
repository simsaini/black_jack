function handValue(hand) {

  let total = 0

  for (var i = 0; i < hand.length; i++) {

    if (hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7" || hand[i] === "8" || hand[i] === "9" || hand[i] === "10") {

      total += +hand[i];

    } else if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K") {
      total += 10;
    } else if (hand[i] == "A" && total < 11) {
      total += 11;

    } else if (hand[i] == "A" && total >= 11) {
      total += 1;
    }
  }

  return total;
}
