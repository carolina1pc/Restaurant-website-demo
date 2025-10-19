document.querySelector('.reservation-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById('status-message');

  const lang = document.documentElement.lang || 'en';

  const messages = {
    ro: {
      success: 'Rezervarea a fost trimisă cu succes!',
      error: 'A apărut o eroare. Încearcă din nou.'
    },
    en: {
      success: 'Your reservation has been sent successfully!',
      error: 'An error occurred. Please try again.'
    }
  };

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.textContent = messages[lang].success;
    status.style.display = 'block';
    form.reset();
  } else {
    status.textContent = messages[lang].error;
    status.style.display = 'block';
  }
});