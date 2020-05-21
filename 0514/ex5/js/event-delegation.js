function query() {
    var ret = confirm("네이버로 이동하시겠습니까?");
    return ret;         //confirm()의 리턴 값은 true또는 false
}

function noActioin(e) {
    e.preventDefault();     //이벤트의 디폴트 생동 강제취소
}

var link = document.getElementById('link');
link.addEventListener('click',query,false);
var no_Action = document.getElementById('no_action');
no_Action.addEventListener('click',noActioin,false);
