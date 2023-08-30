let nestedList = [...document.querySelector(".interests_main").querySelectorAll('.interests')]

nestedList.forEach(el => {
    let needElement = el.closest('.interest').querySelector('.interest__check')
    let allNestedInterest = [...el.querySelectorAll('.interest__check')]
    
    needElement.addEventListener('change', () => {
        for(let i of allNestedInterest) {
            i.checked = needElement.checked
        }
    })
})