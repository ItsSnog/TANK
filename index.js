  var course;
  var bullet;
  var elem = document.getElementById('player');
  document.body.onkeydown = function (e) {
    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_SPACE = 32;
    var KEYCODE_ENTER = 13;
    if (e.keyCode == KEYCODE_LEFT) {
      elem.style.transform = 'rotate(-90deg)';
      elem.style.left = (parseInt(elem.style.left) - 10) + 'px';
      course = "left";
    } else if (e.keyCode == KEYCODE_RIGHT) {
      elem.style.transform = 'rotate(90deg)';
      elem.style.left = (parseInt(elem.style.left) + 10) + 'px';
      course = "right";
    } else if (e.keyCode == KEYCODE_UP) {
      elem.style.transform = 'rotate(0deg)';
      elem.style.top = (parseInt(elem.style.top) - 10) + 'px';
      course = "up";
    } else if (e.keyCode == KEYCODE_DOWN) {
      elem.style.transform = 'rotate(180deg)';
      elem.style.top = (parseInt(elem.style.top) + 10) + 'px';
      course = "down";
    } else if (e.keyCode == KEYCODE_SPACE || e.keyCode == KEYCODE_ENTER) {
      function fire() {
        bullet = document.createElement('div');
        bullet.className = 'bullet';
        var elem = document.getElementById('player');
        elem.appendChild(bullet);
      }
      fire();
        var bulletRight = document.getElementsByClassName('bullet')[0];
      if (course === 'right') {
        setTimeout(function () {
          bulletRight.classList.add('fire');
        }, 10);
        setTimeout(delBullet, 400);
        
      } else if (course === 'left') {
        setTimeout(function () {
          bulletRight.classList.add('fire');
        }, 10);
        setTimeout(delBullet, 400);
        
      } else if (course === 'up') {
        setTimeout(function () {
          bulletRight.classList.add('fire');
        }, 10);
        setTimeout(delBullet, 400);
        
      } else if (course === 'down') {
        setTimeout(function () {
          bulletRight.classList.add('fire');
        }, 10);
        setTimeout(delBullet, 400);
        
      }
    }
  }

  function delBullet() {
    document.getElementById('player').removeChild(bullet);
  }