const form = document.querySelector('form')
form.onsubmit = (e) => {
  e.preventDefault()
  const confirmSubmit = confirm('Are you sure you want to submit this form?');
  if (confirmSubmit) {
    console.log('submitted')
  }
}