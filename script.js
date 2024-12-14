function hamber() {
    captcha = document.getElementById("captcha").value;
    usercaptcha = document.getElementById("usercaptcha").value;
    if(captcha==usercaptcha){
        return true;
    }
    else{
        return false;
    }

}