<script setup>
import CustomButton from './CustomButton.vue';
import Swal from 'sweetalert2';

const sendEmail = (type) => {
  console.log('Sending email...');
  let subject = '';
  let message = '';

  switch (type) {
    case 'robot':
      subject = 'Je hebt een Super Like ontvangen!';
      message = '[Bedrijfs Naam en andere informatie]';
      break;
    case 'accept':
      subject = 'Je hebt een Like ontvangen!';
      message = '[Bedrijfs Naam en andere informatie]';
      break;
    default:
      Swal.fire('Afwijzing', 'Geen e-mail verzonden bij afwijzing.', 'info');
      return;
  }

  // Verstuur de e-mail naar de server
  fetch('http://localhost:8080/IntFind/send_mail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subject, message }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Server fout: ' + response.status);
    }
    return response.json();  // Zorg ervoor dat de response goed wordt verwerkt
  })
  .then(data => {
    console.log(data);
    Swal.fire('Succes', 'E-mail verzonden!', 'success');
  })
  .catch(error => {
    console.error('Error:', error);
    Swal.fire('Fout', 'Er is een fout opgetreden bij het verzenden van de e-mail.', 'error');
  });
};


const showAlert = (message) => {
  Swal.fire('Informatie', message, 'info');
};
</script>

<template>
  <div class="flex space-x-6 mb-8">
    <CustomButton icon="❌" color="bg-red-500" @click="() => { showAlert('Afwijzing gekozen'); }" />
    <CustomButton icon="🤖" color="bg-yellow-500" @click="() => { sendEmail('robot'); showAlert('Robot optie gekozen'); }" />
    <CustomButton icon="✅" color="bg-green-500" @click="() => { sendEmail('accept'); showAlert('Acceptatie optie gekozen'); }" />
  </div>
</template>