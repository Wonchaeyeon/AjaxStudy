var el;                                                     //변수를 선언

function charCount(e) {                                     //함수를 선언
    var textEntered, charDisplay, counter, lastkey;         //변수를 선언
    textEntered = document.getElementById('message').value;//사용자가 입력한 텍스트
    charDisplay = document.getElementById('charactersLeft');     //문자 갯수를 출력할 요소
    counter = (180 - (textEntered.length));                     //입력가능한 문자의 갯수
    charDisplay.textContent = counter;                             //남은 문자의 갯수를 보여준다

lastkey = document.getElementById('lastKey');                   //마지막에 입력된 키를 얻어온다.
lastkey.textContent = '마지막 입력의 ASCII 코드 : '+e.keyCode;
    
}
el=document.getElementById('message');
el.addEventListener('keypress',charCount,false);