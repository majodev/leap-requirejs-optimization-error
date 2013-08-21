define(["Leap"],
  function(Leap) {
    
    if(Leap !== undefined) {
      alert("Leap loaded successful!");
    } else {
      alert("FAIL, Leap isn't loaded! (after optimization, ERROR?!?)");
    }
  }
);