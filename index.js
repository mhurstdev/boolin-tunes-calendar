const itemClass = '.month-container__items-container__item';
jQuery.expr[':'].contains = function (a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
const resetColors = () => {
  $(itemClass).css({
    display: 'block',
  });
};
const handleSearch = () => {
  resetColors();
  $(`${itemClass}:not(:contains("${$('#search-field').val()}"))`).css({
    display: 'none',
  });
};
const handleReset = () => {
  $('#search-field').val('');
  handleSearch();
};
$(document).ready(() => {
  $('#search-button').click(() => {
    handleSearch();
  });
  $('#reset-button').click(() => {
    handleReset();
  });
});
