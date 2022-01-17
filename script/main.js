


// 스크롤시 메뉴 고정

const gnb = document.querySelector('.js_nav');
let gnbPosition;

var navLine = document.querySelector('.bl_nav_bbLine');

window.addEventListener('scroll', function() {
    if(!gnbPosition){
        gnbPosition = window.pageYOffset + gnb.getBoundingClientRect().top;
    }

    const dummyNav = document.querySelector('.js_dummyNav');

    if (window.pageYOffset > gnbPosition) {
        gnb.classList.add('js_fixedNav');
        dummyNav.classList.remove('blind');
        navLine.style.display = 'none';
        
    } else {
        gnb.classList.remove('js_fixedNav');
        dummyNav.classList.add('blind')
        navLine.style.display = 'block';
    }


    // 스크롤할때 각 컨텐츠 위치에 가면 메뉴 활성화

    let smGroupPosition = window.scrollY + smGroup_cont.getBoundingClientRect().top;
    let quickGrupPosition = window.scrollY + quickGrup_cont.getBoundingClientRect().top;
    let contentsPosition = window.scrollY + contents_cont.getBoundingClientRect().top;
    let cummunityPosition = window.scrollY + cummunity_cont.getBoundingClientRect().top;

    let footer = document.querySelector('.js_footer')
    let footerPosition = window.scrollY + footer.getBoundingClientRect().top;

    if (window.scrollY < quickGrupPosition -100) {

        
        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        smGroup.classList.add('on');

    } else if (window.scrollY+100 >= quickGrupPosition && window.scrollY < contentsPosition -100) {

        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        quickGrup.classList.add('on');

    } else if (window.scrollY+100 >= contentsPosition && window.scrollY < cummunityPosition -100) {

        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        contents.classList.add('on');

    } else if (window.scrollY+100 >= cummunityPosition) {


        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        cummunity.classList.add('on');

    } else {
        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
    }

})


// 메뉴 클릭시 스크롤 애니메이션 이동

const smGroup = document.querySelector('.js_a')
const quickGrup = document.querySelector('.js_b')
const contents = document.querySelector('.js_c')
const cummunity = document.querySelector('.js_d')

const smGroup_cont = document.querySelector('.js_a_target')
const quickGrup_cont = document.querySelector('.js_b_target')
const contents_cont = document.querySelector('.js_c_target')
const cummunity_cont = document.querySelector('.js_d_target')

var navItem = document.querySelectorAll('.bl_nav_item')



smGroup.addEventListener('click', function () {

    

    if (window.innerWidth > 1180 ) {
        smGroup_cont.scrollIntoView({ behavior: 'smooth' , block:"center", inline: "center" })
    } else {
        smGroup_cont.scrollIntoView({ behavior: 'smooth' , block:"start", inline: "center" })
    }

})

quickGrup.addEventListener('click', function () {

    if (window.innerWidth > 1180 ) {
        quickGrup_cont.scrollIntoView({ behavior: 'smooth' , block:"center", inline: "center" })
    } else {
        quickGrup_cont.scrollIntoView({ behavior: 'smooth' , block:"start", inline: "center" })
    }
    
})

contents.addEventListener('click', function () {

    
    if (window.innerWidth > 1180 ) {
        contents_cont.scrollIntoView({ behavior: 'smooth' , block:"center", inline: "center" })
    } else {
        contents_cont.scrollIntoView({ behavior: 'smooth' , block:"start", inline: "center" })
    }

})

cummunity.addEventListener('click', function () {


    if (window.innerWidth > 1180 ) {
        cummunity_cont.scrollIntoView({ behavior: 'smooth' , block:"center", inline: "center" })
    } else {
        cummunity_cont.scrollIntoView({ behavior: 'smooth' , block:"start", inline: "center" })
    }

})


// 창 크기에 따라 이지 변경

if (window.innerWidth < 1180) {
    const cummunityImg = document.querySelector('.js_imgChange')
    cummunityImg.setAttribute('src', 'images/img_communityVeiw_js.svg');

}




