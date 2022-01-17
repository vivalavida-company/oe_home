


// 스크롤시 메뉴 고정

const gnb = document.querySelector('.js_nav');

var gnbPosition = window.pageYOffset + gnb.getBoundingClientRect().top;
var navLine = document.querySelector('.bl_nav_bbLine');

window.addEventListener('scroll', function() {
            
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

    if (window.scrollY+300 >= smGroupPosition && window.scrollY < quickGrupPosition -300) {
        
        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        smGroup.classList.add('on');

    } else if (window.scrollY+300 >= quickGrupPosition && window.scrollY < contentsPosition -300) {

        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        quickGrup.classList.add('on');

    } else if (window.scrollY+300 >= contentsPosition && window.scrollY < cummunityPosition -300) {

        for (var j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove('on')
        }
        contents.classList.add('on');

    } else if (window.scrollY+300 >= cummunityPosition && window.scrollY < footerPosition -300 ) {

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

// for (var i = 0; i < navItem.length; i++) {
//     // 변수번째의 아이템 클릭시
//     navItem[i].addEventListener('click', function () {
//         // 모든 아이템에 하나씩 돌면서 .on 제거
//         for (var j = 0; j < navItem.length; j++) {
//             navItem[j].classList.remove('on')
//         }
//         this.classList.add('on')
//     })
// }



// 창 크기에 따라 이지 변경

if (window.innerWidth < 1180) {
    const cummunityImg = document.querySelector('.js_imgChange')
    cummunityImg.setAttribute('src', 'images/img_communityVeiw_js.svg');

}



// 창 스크롤시, 메뉴 활성화

var footer = document.querySelector('.js_footer')

var smGroupPosition = window.scrollY + smGroup_cont.getBoundingClientRect().top;
var quickGrupPosition = window.scrollY + quickGrup_cont.getBoundingClientRect().top;
var contentsPosition = window.scrollY + contents_cont.getBoundingClientRect().top;
var cummunityPosition = window.scrollY + cummunity_cont.getBoundingClientRect().top;

var footerPosition = window.scrollY + footer.getBoundingClientRect().top;

