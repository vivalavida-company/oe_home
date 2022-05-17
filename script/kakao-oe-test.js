// // 사용할 앱의 JavaScript 키를 설정해 주세요.
if(!Kakao.isInitialized()){
    Kakao.init('254334ad010c10fde6afb8daab6dd393')
}

function shareSinsaResult(imgUrl){ // 상대경로
    imgUrl = location.protocol + '//' + location.host + imgUrl
    // 절대경로로 변환
    Kakao.Link.sendCustom({
        templateId: 69724,
        templateArgs: {
            title: '신사와아가씨 유형 테스트', // 미구현
            description: '나는 신사와 아가씨에서 어떤 인물일까?', // 미구현
            IMAGE: imgUrl,
            PATH: location.pathname
        }
    })
}