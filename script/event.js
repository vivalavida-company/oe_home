

    const detailBtn = document.querySelector('.js_btnClick');
    const spreadIc = document.querySelector('.js_spreadIc');
    const lineBtnP = document.querySelector('.js_lineBtnP');
    const oeMain = document.querySelector('.js_oeMain');



detailBtn.addEventListener('click' , function() {
    const main = document.querySelector('.js_main');

    // main.classList.toggle("js_hToggle")

    if ( main.classList.contains("js_hToggle") === true ){
        lineBtnP.innerHTML = '접기'
        main.classList.remove("js_hToggle")
        
        spreadIc.classList.remove("ic_spread_down__blue")
        spreadIc.classList.add("ic_spread_up__blue")

        detailBtn.classList.remove("hp_absolBottom8")
        detailBtn.classList.add("hp_absolBottom20")

        oeMain.classList.remove("el_topBoldLine")
        oeMain.classList.add("el_topBoldLine__top0")
        
    } else {
        lineBtnP.innerHTML = '자세히 보기'
        main.classList.add("js_hToggle")

        spreadIc.classList.remove("ic_spread_up__blue")
        spreadIc.classList.add("ic_spread_down__blue")

        detailBtn.classList.remove("hp_absolBottom20")
        detailBtn.classList.add("hp_absolBottom8")

        oeMain.classList.remove("el_topBoldLine__top0")
        oeMain.classList.add("el_topBoldLine")
    }

})

