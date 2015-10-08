
var number= randomNum(), noteBox = $('.note'), clicker=$('.clicker'), count=0;
function init(){
  var note = transNumbToNote(number);
  noteBox.find('span').remove();
  noteBox.append(note);
  test();
}
function test(){
  noteBox.on('touchstart',function(){
    timeout = setInterval(function(){
      clicker.text(count++);
    }, 500);
    return false;
  });
  noteBox.on('touchend',function(){
    if(count === number){
      right();
    }
    count=0;
    clearInterval(timeout);
    return false;
  });
}
function right(){
  var nextNumber = randomNum(), newNote;
 if(number !== nextNumber){
   newNote = transNumbToNote(nextNumber);
   noteBox.find('span').remove();
   noteBox.append(newNote);
   test();
 }
}
function transNumbToNote(num){
  switch (num){
    case 0:
      return '<span class="animated zoomIn icon-quanyinfu4"></span>';
    case 1:
      return '<span class="animated zoomIn icon-quanhezhifu4"></span>';
    case 2:
      return '<span class="animated zoomIn icon-erfenyin2"></span>';
    case 3:
      return '<span class="animated zoomIn icon-erfenxiuzhifu2"></span>';
    case 4:
      return '<span class="animated zoomIn icon-sifenyinfu1"></span>';
    case 5:
      return '<span class="animated zoomIn icon-sifenxiuzhifu1"></span>';
    case 6:
      return '<span class="animated zoomIn icon-bafenyinfu05"></span>';
    case 7:
      return '<span class="animated zoomIn icon-bafenxiuzhifu05"></span>';
    case 8:
      return '<span class="animated zoomIn icon-shiliufenyinfu025"></span>';
    default:
      return '<span class="animated zoomIn icon-music"></span>';
  }
}
function randomNum(){
  return Math.floor(Math.random()*10%9);
}
init();
