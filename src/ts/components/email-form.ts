const init = () => {
  const $emailForm = $('#email-form');

  $emailForm.on('submit', (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
        $.ajax({
          url: "https://formspree.io/haifischy91@gmail.com", 
          method: "POST",
          data: $emailForm.serialize(),
          dataType: 'json',
          success: (response) => {
            resolve(response);
          },
          error: (error) => {
            reject(error);
          },
        });
      })
      .then(() => {
        return $emailForm.toggle();
      })
      .then((response) => {
        $('.success').addClass('success__is-visible');
      })
      .catch((error) => {
        $('.error').addClass('error__is-visible');
      });
  });
};

export { init };
