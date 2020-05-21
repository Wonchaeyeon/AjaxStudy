var sx = document.getElementById('sx');
var sy = document.getElementById('sy');     //바꾸고 싶은거 Alt누르고 커서로 선택하기
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.screenX;
    py.value = event.screenY;
    cx.value = event.screenX;
    cy.value = event.screenY;   
}

var el = document.getElementById('body');
el.addEventListener('mousemove',showPosition, false);