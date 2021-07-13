var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
//   var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {

      form.reset();
    })
    .catch((error) => {
    //   status.innerHTML = "Oops! There was a problem submitting your form";
    console.log(error)
    });
}
form.addEventListener("submit", handleSubmit);
