const init = () => {
  const $emailForm = $('#email-form');

  $emailForm.on('submit', (event) => {
    event.preventDefault();
    const $this = $(event.target);
    const $loading = $this.next();
    $this.addClass('hidden');
    $loading.removeClass('hidden');
    return new Promise((resolve, reject) => {
        $.ajax({
          url: "https://formspree.io/ivan.shtarbanov1991@gmail.com", 
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
        $loading.addClass('hidden');
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
