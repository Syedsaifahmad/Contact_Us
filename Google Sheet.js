const scriptURL = 'https://script.google.com/macros/s/AKfycbzc5h2XRTGuJGTQjG24RPcSVx9jFYpOktshCLMMayDT3NFQXTQGWMK1m2i91eqiQJOPtA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})