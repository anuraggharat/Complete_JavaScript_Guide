const socket = new WebSocket('ws://localhost:3000')
function sendMessage(e){
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.send(input.value)
    }
    input.focus()
}

document.querySelector('button').addEventListener('click',sendMessage)
socket.addEventListener('message',({data})=>{
    console.log(data)
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})