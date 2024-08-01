var countSeniors = function(details) {
    let count = 0;
    details.forEach((val) => {
      // Extract the age from the 12th and 13th characters and convert it to a number
      let age = Number(val.slice(11, 13));
      if (age > 60) {
        count++;
      }
    });
    return count;
  };