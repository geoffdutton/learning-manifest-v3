// let us know we're running
console.log("Content script has loaded via Manifest V2.");

// send a message to the background requesting an additional script
chrome.runtime.sendMessage({
  cmd: "runLogic"
});
