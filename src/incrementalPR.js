const destinationHash = window.getSelection().toString();
if (destinationHash === '') {
  alert('Please first highlight the hash of the last commit you reviewed');
  throw new Error('quitting')
}
const sourceHash = $('div[data-qa="commit-hash-wrapper-0"]').text();
const repo = window.location.href.split('pull-requests')[0];
const win = window.open(`${repo}branches/compare/${sourceHash}%0D${destinationHash}#diff`, '_blank');
if (!win) {
  alert('Please allow popups')
}
