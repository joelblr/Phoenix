document
  .getElementById("complaint-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit-complaint.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        document.getElementById("status").innerHTML = xhr.responseText;
      }
    };
    xhr.send(
      "name=" + name + "&email=" + email + "&description=" + description
    );
  });
