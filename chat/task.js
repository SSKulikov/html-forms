const sideBlock = document.querySelector('.chat-widget__side')
const chat = document.querySelector('.chat-widget')
const input = document.querySelector('.chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );
let timer

sideBlock.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
    timerQuestion()
})

function timerQuestion() {
    timer = setInterval(() => {
        if (chat.classList.contains('chat-widget_active')) {
            textOutput('message', 'Алло? И что дальше?')
        }
    }, 30000)
}

function randomText() {
    let listText = ['Добрый вечер!', 'Пока!', 'Ну и что?', 'Ой все!',]
    let text = listText[Math.floor(Math.random() * listText.length)]
    return text
}

function textOutput(needClass, output) {
    messages.innerHTML += `
            <div class="${needClass}">
                <div class="message__time">${String(new Date).slice(16, 21)}</div>
                <div class="message__text">
                ${output}
                </div>
            </div>
        `;
    messages.scrollIntoView(false)
}

input.addEventListener('keydown', (event) => {
    
    if (event.key == 'Enter' && !['', ' ', '  '].some(el => el == input.value)) {
        // event.preventDefault()
        let valueEnter = input.value
        input.value = ''
        textOutput("message message_client", valueEnter)
        textOutput("message", randomText())
        
        
        clearInterval(timer)
        timerQuestion()
    }
})