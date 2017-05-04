export const COPYTEXT = function(elem_ID) {
  var lipsum = document.querySelector(elem_ID);
  var range = document.createRange();
  range.selectNode(lipsum);
  // To fix Discontigious Selection issue
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  try {
    var successful = document.execCommand('copy');
    var msg = successful
      ? 'successful'
      : 'unsuccessful';
    showMessage('Copied!');
  } catch (err) {
    showMessage(err);
  }
  window.getSelection().removeAllRanges();
}
function showMessage(message) {
  $('.message').html(message).css('opacity', '1');
  setTimeout(function() {
    $('.message').css('opacity', '0');
  }, 1000);
}
