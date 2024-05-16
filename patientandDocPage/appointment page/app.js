// document.getElementById("submitBtn").addEventListener("click", function() {
    // var fname = document.getElementById("fname").ariaValueMax;
    // var lname = document.getElementById("lname").ariaValueMax;
    // var address = document.getElementById("address").ariaValueMax;
    // var pno = document.getElementById("pno").ariaValueMax;
        
//         // Send data to backend using AJAX
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "submit.php", true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.onreadystatechange = function() {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//             // Response from server
//             console.log(xhr.responseText);
//           }
//         };
//         xhr.send("name=" + name + "&email=" + email);
//       });


document.getElementById("submitBtn").addEventListener("click", function() {
    var fname = document.getElementById("fname").ariaValueMax;
    var lname = document.getElementById("lname").ariaValueMax;
    var address = document.getElementById("address").ariaValueMax;
    var pno = document.getElementById("pno").ariaValueMax;
    
    // Send data to backend using fetch API
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fname: fname, lname: lname, address: address, pno: pno })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from server
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  