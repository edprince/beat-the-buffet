

var bool = true;
var count = 2;

function update() {
  console.log(count);
  count += 1;
  console.log(count);
  console.log(count.toString() + "px");
  //var query = '\"' + count.toString() + '%\"';
  var query = count + '%';
  console.log(query);
  document.getElementById('howard').style.value = query;
}

function playGame() {
  setInterval(update, 1000);
}

