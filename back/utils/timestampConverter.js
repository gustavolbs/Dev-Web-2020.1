module.exports = function timeConverter(){
  var a = new Date();
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ':' + min + ':' + sec + ' ' + date + '/' + month + '/' + year;
  
  console.log(time)
  return time;
}