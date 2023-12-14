function contact_number() {
  let place = document.forms["frm1"].country.value;
  let cnum = "Please select any Place";

  switch (place) {
    case "Bommanahalli":
      cnum = "+91-80-2573-5642";
      break;

    case "Mahadevapura":
      cnum = "+91-80-2851-2301";
      break;

    case "Byatarayanapura":
      cnum = "+91-80-2363-6677";
      break;

    case "Dasarahalli":
      cnum = "+91-80-2839-4909";
      break;

    case "Mayor":
      cnum = "+91-80-2223-7457";
      break;
  }

  document.getElementById("capt").innerHTML = cnum;
}
