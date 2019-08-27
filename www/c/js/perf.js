function timeInSeconds(time) {
  return Math.round(time/10)/100 + "s"
}

new PerformanceObserver( performanceEntryList => {
  for (const performanceEntry of performanceEntryList.getEntries()) {
      const time = timeInSeconds(performanceEntry.startTime);
      console.log(`${performanceEntry.name}: ${time}`); 
    }
}).observe({entryTypes: ["paint"]});


new PerformanceObserver( performanceEntryList => {
  for (const performanceEntry of performanceEntryList.getEntries()) {
      const time = timeInSeconds(performanceEntry.startTime);
      console.log(`${performanceEntry.entryType}: ${time} at ${performanceEntry.url}`); 
    }
}).observe({type: "largest-contentful-paint", buffered: true});

console.log("Connected with " + navigator.connection.effectiveType);
console.log("Redirects: " + performance.navigation.redirectCount);

console.log("Time to First Byte: " + timeInSeconds(window.performance.timing.responseStart - window.performance.timing.fetchStart));

