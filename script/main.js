
    const detailBtn = document.querySelector('.js_btnClick');
    const spreadIc = document.querySelector('.js_spreadIc');
    const lineBtnP = document.querySelector('.js_lineBtnP');

detailBtn.addEventListener('click' , function() {
    const main = document.querySelector('.js_main');

    // main.classList.toggle("js_hToggle")

    if ( main.classList.contains("js_hToggle") === true ){
        lineBtnP.innerHTML = '접기'
        main.classList.remove("js_hToggle")
        
        spreadIc.classList.remove("ic_spread_down")
        spreadIc.classList.add("ic_spread_up")
        
    } else {
        lineBtnP.innerHTML = '자세히 보기'
        main.classList.add("js_hToggle")

        spreadIc.classList.remove("ic_spread_up")
        spreadIc.classList.add("ic_spread_down")
    }

})