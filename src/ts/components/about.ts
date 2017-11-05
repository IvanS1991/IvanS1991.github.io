const init = () => {
  $('.technology__expand').on('mouseenter', (event) => {
    event.preventDefault();
    const $this = $(event.target);
    const $summary = $this.parent().next();
    const $summaries = $('.technology__summary');
    $summaries.addClass('hidden');
    $summary.removeClass('hidden');
  });
};

export { init };
