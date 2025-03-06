(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "paaiq4EnjKRBqM4tW",
  });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm('service_vs52bbx', 'template_9el5469', this)
      .then(() => {
          console.log('SUCCESS!');
          alert('메일 전송에 성공하였습니다.');
      }, (error) => {
          console.log('FAILED...', error);
          alert('메일 전송에 실패하였습니다.');
      });
});