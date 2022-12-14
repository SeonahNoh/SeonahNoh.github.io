window.onload = function() {
    let userId = document.querySelector('#user-id');
    let userPw = document.querySelector('#user-pw');
    let loginBtn = document.querySelector('#login-btn');
    let validTxt = document.querySelector('.valid-txt')

    let korCheck = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
    let engCheck = /[a-zA-Z]/;
    let numCheck = /[0-9]/;
    let speCheck = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/;
    let emailReg = /^[A-Za-z0-9!#$%^&*_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+){1,2}$/;


    loginBtn.onclick = function(e) {
        e.preventDefault();
        if(idCheck() && pwCheck()) {
            location.href = 'https://www.naver.com';
        }
    }

    function idCheck() { // 이거 바꿔야 함 
        if(!emailReg.test(userId.value)) {
            validTxt.innerHTML = '아이디(이메일) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.';
            validTxt.style.fontSize = '14px';
            validTxt.style.color = 'red';
            userId.focus();
        } else {
            validTxt.innerHTML = '';
            return true;
        }
    }

    function pwCheck() {
        if(userPw.value.length < 8) {
            validTxt.innerHTML = '비밀번호를 입력해 주세요.';
            validTxt.style.fontSize = '14px';
            validTxt.style.color = 'red';
            userPw.focus();
        } else {
            if(!engCheck.test(userPw.value) || !numCheck.test(userPw.value) || !speCheck.test(userPw.value) || korCheck.test(userPw.value)) {
                validTxt.innerHTML = '아이디(이메일) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.';
                validTxt.style.fontSize = '14px';
                validTxt.style.color = 'red';
                pw.focus();
            } else {
                validTxt.innerHTML = '';
                return true;
            }
        }
    }

}


function preparation() {
    alert('준비중입니다.');
}