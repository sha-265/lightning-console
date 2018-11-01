function gameOver(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  browser.tabs.create({
    url:"https://tip.ln.bitembassy.org"
  });
}

browser.webRequest.onBeforeRequest.addListener(
  gameOver,
  {urls: ["https://www.airconsole.com/highscore"]}
);
