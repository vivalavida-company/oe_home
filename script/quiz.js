const questionArray = [
    '어떤 모임에 처음 나가게 되었습니다. 모임원들이 처음 온 당신에게 질문공세를 합니다. 이때 당신은?',
    '옆을 보니 나와 같이 처음 나온 듯한 사람이 있다. 이럴때 당신은?',
    '첫 모임이라 모임원들과 재밌는 환영식까지 마치고, 집에 들어와 침대에 누웠다. 잠들기전 곰곰히 생각해보니..',
    '어느덧 모임에 익숙해졌다. 모임장이 나에게 이번 정모는 어떻게 하면 좋겠냐고 물어온다. 이때 당신의 대답은? ',
    '모임장이 우리 모임의 발전을 위해서 당신에게 의견을 물어왔다. 이때 당신은?',
    '당신이 새로운 모임장으로 임명되었고, 기존 방식이 마음에 안드는 부분이 있었다. 이때 당신은?',
    '모임원 중 한 명이 다른 모임원과 갈등이 있어 힘들어한다. 이때 당신은?',
    '모임원들 사이에서 나에 대한 칭찬이 들린다. 이때 당신은 어떤 칭찬이 좋나요?',
    '총무를 담당하던 사람이 힘들어서 총무를 못할 것 같다고 말해온다. 이때 당신은?',
    '모임에서 펜션으로 놀러가기로 정해졌어요. 모임장으로써 당신은 어떤 스타일인가요?',
    '모임원이 계획한 시간보다 늦게 도착했어요. 이때 당신은?',
    '당신이 모임을 하나 개설하려고 해요. 이때 당신은?'
]
const answer1Array = [
    '바로 답변하고 대화 속에서 생각을 하는 편이다.',
    '그 사람이 먼저 말을 걸어 주면 금방 친해질 수 있을것 같다. ',
    '아차! 이런말은 괜히 했다는 생각이 들 때가 있다. ',
    '지금 떠 오르는곳은 없지만, 몇번 했던 것 보단 이번엔 새로운 곳으로 가보는게 어때?',
    '모임의 발전을 위해서는 지금보다는 조금 멀리보고 한 단계 더 발전할 수 있는 방향을 말하는 편이다.',
    '기존 방식을 유지하면서, 방식을 조금씩 바꿀 것 같다. ',
    '무슨일이야? 누구랑 그런거야? 어떻게 된건데?라고 먼저 물어본다.',
    '우리 모임장은 사람들을 잘 챙겨주고, 잘 공감해주는 따뜻한 사람이야',
    '이 친구가 많이 힘들었구나.. 그럼 총무 역할은 이제 어떻게 해야하지?',
    '00시 어디서 같이 출발! 선발대가 장보고, 후발대는 바비큐!로 디테일하게 정한다.',
    '시간 약속을 어겼다는 것에 신뢰도가 내려가는 편이다. ',
    '모임 만들기 전에 어떻게 진행할 것인지 먼저 계획을 세우는 편이다.  ',
]
const answer2Array = [
    '일단 생각을 충분히 한 뒤 말을 시작하는 편이다. ',
    '내가 먼저 말을 걸더라도 빨리 친해지고 싶다. ',
    '내가 생각하고 있는 이야기를 전부 하지 못해 아쉬운 생각이 들 때가 있다. ',
    '저번에 갔던 그곳 정말 좋았잖아. 거기 다시 가면 어때?',
    '지금 잘하고 있는 부분과 조금 미흡하다고 생각되는 부분에 더 집중하여 의견을 말하는 편이다.',
    '새로운 아이디어로 기존에 안좋다고 생각했던 방식을 확실히 바꿀 것 같다. ',
    '아.. 요즘 표정이 안좋던데.. 힘든일이 있었구나! 공감부터 해준다. ',
    '우리모임장은 일처리도 빠르고, 똑 부러지는 성격이라서 너무 좋아',
    '이 친구가 많이 힘들었구나.. 좋은 친구인데 이렇게 힘들어하는줄 몰랐네.. ',
    '000 펜션으로 잡혔으니, 00시까지 모이시면 돼요! 필요한 물건들은 그때 만나서 사요~',
    '무슨 일이 있어 늦은 것일 수 있으니 이유를 한 번 물어보는 편이다. ',
    '일단 사람들이 안들어 올지 모르니 모임부터 개설하고 계획은 같이 만들어가는 편이다. '
]

let currentIndex = 0
let timeOut

const spanOrder = document.getElementById('spanOrder')
const pOrder = document.getElementById('pOrder')
const pAnswer1 = document.getElementById('pAnswer1')
const pAnswer2 = document.getElementById('pAnswer2')
const h1Question = document.getElementById('h1Question')
const answers = []

function setCurrentIndex(index){
    if(0 <= index && index < 12){
        h1Question.innerText = questionArray[index]
        pAnswer1.innerText = answer1Array[index]
        pAnswer2.innerText = answer2Array[index]
    }
    pOrder.innerText = `${index+1} / 12`
    spanOrder.innerText = `${index+1}`
    
    currentIndex = index
}

function getMBTI(){
    console.log(answers)
    let result = ''
    result += answers.filter(x => x === 'e').length > 1 ? 'e' : 'i'
    result += answers.filter(x => x === 'n').length > 1 ? 'n' : 's'
    result += answers.filter(x => x === 't').length > 1 ? 't' : 'f'
    result += answers.filter(x => x === 'j').length > 1 ? 'j' : 'p'
    return result
}

function goToResult(){ 
    switch(getMBTI()){
        case 'entj':
            location.href = './result/SaRa.html'
            break
        case 'entp':
            location.href = './result/SeChan.html'
            break
        case 'enfj':
            location.href = './result/DanDan.html'
            break
        case 'enfp':
            location.href = './result/SeRyeon.html'
            break
        case 'estj':
            location.href = './result/AenaKim.html'
            break
        case 'estp':
            location.href = './result/DaeBeom.html'
            break
        case 'esfj':
            location.href = './result/YeonSil.html'
            break
        case 'esfp':
            location.href = './result/MiRim.html'
            break
        case 'intj':
            location.href = './result/ChaGeon.html'
            break
        case 'intp':
            location.href = './result/JunO.html'
            break
        case 'infj':
            location.href = './result/JeNi.html'
            break
        case 'infp':
            location.href = './result/MiSuk.html'
            break
        case 'istj':
            location.href = './result/YoungGuk.html'
            break
        case 'istp':
            location.href = './result/SeJong.html'
            break
        case 'isfj':
            location.href = './result/DaeRan.html'
            break
        case 'isfp':
            location.href = './result/SuCheol.html'
            break
    }
}

pAnswer1.addEventListener('click', (e) => {
    if(!timeOut){
        pAnswer1.classList.add('on')
        timeOut = setTimeout(() => {
            pAnswer1.classList.remove('on')
            timeOut = null
            if(currentIndex < 12){
                switch(currentIndex+1){
                    case 1:
                        answers.push('e')
                        break
                    case 2:
                        answers.push('i')
                        break
                    case 3:
                        answers.push('e')
                        break
                    case 4:
                        answers.push('n')
                        break
                    case 5:
                        answers.push('n')
                        break
                    case 6:
                        answers.push('s')
                        break
                    case 7:
                        answers.push('t')
                        break
                    case 8:
                        answers.push('f')
                        break
                    case 9:
                        answers.push('t')
                        break
                    case 10:
                        answers.push('j')
                        break
                    case 11:
                        answers.push('p')
                        break
                    case 12:
                        answers.push('j')
                        break
                }
            }
            if(currentIndex < 11){
                setCurrentIndex(currentIndex + 1)
            }else{
                goToResult()
            }
        }, 800)
    }
})
pAnswer2.addEventListener('click', (e) => {
    if(!timeOut){
        pAnswer2.classList.add('on')
        timeOut = setTimeout(() => {
            pAnswer2.classList.remove('on')
            timeOut = null
            if(currentIndex < 12){
                switch(currentIndex+1){
                    case 1:
                        answers.push('i')
                        break
                    case 2:
                        answers.push('e')
                        break
                    case 3:
                        answers.push('i')
                        break
                    case 4:
                        answers.push('s')
                        break
                    case 5:
                        answers.push('s')
                        break
                    case 6:
                        answers.push('n')
                        break
                    case 7:
                        answers.push('f')
                        break
                    case 8:
                        answers.push('t')
                        break
                    case 9:
                        answers.push('f')
                        break
                    case 10:
                        answers.push('p')
                        break
                    case 11:
                        answers.push('j')
                        break
                    case 12:
                        answers.push('p')
                        break
                }
            }
            if(currentIndex < 11){
                setCurrentIndex(currentIndex + 1)
            }else{
                goToResult()
            }
        }, 800)
    }
})

setCurrentIndex(0)