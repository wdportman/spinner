let spinnerArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinnerArray[i]}   `);
  }, 200 * i);
};