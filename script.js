document.addEventListener('DOMContentLoaded', () => {
  let script1 = document.querySelector('#handlebars1').innerHTML;

  let obj = {
    "name": "<h2>Henry</h2>",
    "date": "<i>2020-12-10</i>",
  };

  let templateScript = Handlebars.compile(script1); // returns a function
  document.body.innerHTML = templateScript(obj);
});
