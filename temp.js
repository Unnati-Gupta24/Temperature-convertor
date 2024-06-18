function calculatefah(){
    let inp = parseInt(document.querySelector('.js-input-fah').value);
    let ans = (inp*9/5)+32;
    document.querySelector('.kio').innerHTML = ans;
}
function calculatecel(){
    let inpr = parseInt(document.querySelector('.js-input-cel').value);
    let ansr = (inpr-32)/1.8;
    document.querySelector('.mio').innerHTML = ansr;
}