function setData1(){
    let start = Date.now()
    let i = 0
    const main = document.getElementById('main')
    while(i<1000){
        main.innerHTML += `<p>The value of i is ${i}</p>`
        i++;
    }
    const end = Date.now()
    console.log( end-start);
}
function setData2(){
    let start = Date.now()
    let i = 0
    const main = document.getElementById('main')
    const fragment = document.createDocumentFragment()
    while(i<1000){
        const p = document.createElement("p")
        p.textContent = `The value of i is ${i}`
        fragment.append(p)
        i++;
    }
    main.append(fragment)
    const end = Date.now()
    console.log( end-start);
}
//window.addEventListener('DOMContentLoaded',setData2)

const btn = document.getElementById('btn')
const text = document.getElementById('text')

btn.addEventListener('click',addText)

function addText(){
    const t = sanitizeText(`<img src='x' onerror="alert('Hacked')"></img>`)
    text.innerHTML = t
}

function sanitizeText(t){
    const p = document.createElement('p')
    p.textContent = t
    return p.innerHTML;
}