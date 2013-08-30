define(["Leap"],
  function(Leap) {
    
    if(Leap !== undefined) {
      console.log("Leap loaded successful!");
    } else {
      console.log("FAIL, Leap isn't loaded! (after optimization, ERROR?!?)");
    }
  }
);