
//id, passward input 길이 체크 후 로그인 버튼 활성화
function checkIdLength(){
    let userName = document.getElementsByClassName('user')[0].value;
    return userName.length >= 4;
}

function checkPwLength(){
    let pw = document.getElementsByClassName('password')[0].value;
    return pw.length >= 8;
}


//로그인 버튼 활성화 
var LoginButtonActived = false;

function activeButton(){
   
    if(checkIdLength() && checkPwLength()){
        document.getElementsByClassName('loginButton')[0].style.backgroundColor = "rgba(56, 151, 240, 1)";
        document.getElementsByClassName('loginButton')[0].className = 'loginButton active'; // cursor: pointer 적용
    }
    else{
        document.getElementsByClassName('loginButton')[0].style.backgroundColor = "rgba(56, 151, 240, 0.3)";
        document.getElementsByClassName('loginButton')[0].className ='loginButton'
    }
}




function searchPw() {
    alert('대충 그것도 기억못하냐고 꾸짖는 쓴소리');
}

function singIn() {
    alert("대충 가입을 축하한다는 멘트");
}

function downloadApp(link){
    alert(link+" 로 연결하기");
}