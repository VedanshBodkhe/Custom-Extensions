
browser.browserAction.onClicked.addListener((tab) => {
  if (tab.title) {
    navigator.clipboard.writeText(tab.title).then(() => {
      console.log(`Copied to clipboard: ${tab.title}`);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  } else {
    console.error('No title found for this tab.');
  }
});
