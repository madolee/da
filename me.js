

 function chtext() {
    const content = document.getElementById('content');
    content.textContent = '변경된 텍스트입니다.'; // Change the text content
  }

  function chfs() {
    const content = document.getElementById('content');
    content.style.fontSize = '54px'; // Change the font size
  }


var mpl=("/var/www/html/see4.mp4");
var pgl=("/var/www/html/tom.jpg");
var mps=("/var/www/html/wU/snow.mp4","/var/www/html/wU/power.mp4");
const that=50;

function closeWin(thetime) {
    setTimeout(() => window.close(), thetime);
}

function chfont() {
    document.getElementById('content').style.fontSize = '35px';
}

function disno() {
    document.getElementById('content').style.display = 'none';
}

function display() {
    document.getElementById('content').style.display = 'block';
}

function popi() {
    alert('You alert!');
}

function daysak() {
    const colors = ["#FF0000", "#FFFF00", "#ADFF2F", "#0000FF", "#808080", "#800080", "#008000"];
    const today = new Date().getDay();
    document.body.style.backgroundColor = colors[today];
}

function sayHo() {
 // Use prompt to get user input.
 let name = prompt('Enter your name:');
 // Use console.log to display results.
 console.log('Hello, ' + name + '!');
}
function num64();{
return Math.floor(Math,random()*64)+1;
}

    // 1. 알림창
    function showAlert() {
        alert("안녕하세요!");
    }

    // 2. 텍스트 변경
    function changeText() {
        document.getElementById("text").innerText = "텍스트가 변경되었습니다!";
    }

    // 3. 계산 기능
    function calc() {
        let a = 10;
        let b = 20;
        document.getElementById("result").innerText = a + b;
    }

    // 4. 입력값 읽기
    function readInput() {
        let name = document.getElementById("name").value;
        document.getElementById("hello").innerText = name + "님 반갑습니다";
    }

    // 5. 스타일 변경
    function changeColor() {
        document.getElementById("box").style.backgroundColor = "orange";
    }

    // 6. 시간 표시
    function showTime() {
        document.getElementById("time").innerText = new Date().toLocaleTimeString();
    }
/**

<h2>1. 알림</h2>
<button onclick="showAlert()">알림 표시</button>

<h2>2. 텍스트 변경</h2>
<p id="text">기본 문장</p>
<button onclick="changeText()">변경</button>

<h2>3. 계산</h2>
<button onclick="calc()">10 + 20</button>
결과: <span id="result"></span>

<h2>4. 입력 처리</h2>
<input id="name" placeholder="이름 입력">
<button onclick="readInput()">확인</button>
<p id="hello"></p>

<h2>5. 스타일 변경</h2>
<div id="box" style="width:100px;height:50px;border:1px solid black;"></div>
<button onclick="changeColor()">색 변경</button>

<h2>6. 시간 표시</h2>
<button onclick="showTime()">현재 시간</button>
<p id="time"></p>
---------------------------
<video src="snow.mp4" muted autoplay playsinline loop></video>
<audio src="http://182.221.61.30/mee.mp3" controls="" >

<video
height="200" width="200" controls="" loop="2"   preload="bbb"
srclang="ko" label="korean" default="">
<source src="http://182.221.61.30/see1.mp4" type="video/mp4"
<p>이 브라우저는 video를 재생할 수 없습니다.</p>
</video>

*/
