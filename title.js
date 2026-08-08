function addTask() {
    const title = document.getElementById('title')
    const desc = document.getElementById('description')

    const input_t = title.value.trim().toUpperCase()
    const input_d = desc.value.trim()

    if(input_t === '' && input_d === '') {
        alert('Please input the Title and Description')
        return
    }

    const li = document.createElement('li')
    const li2 = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = input_t
    span.onclick = function() {
        li.classList.toggle('completed')
    }


    const span2 = document.createElement('span')
    span2.textContent = input_d
    span2.className = 'li2'
    span2.onclick = function() {
        li2.classList.toggle('completed')
    }

    const del = document.createElement('button')
    del.textContent = 'Delete'
    del.style.color = 'white'
    del.style.border = 'none'
    del.onclick = function() {
        li.remove()
        li2.remove()
    }

    li.appendChild(span)
    li.appendChild(del)
    li2.appendChild(span2)

    const aside2 = document.getElementById('aside2')
    aside2.appendChild(li)
    aside2.appendChild(li2)

    title.value = ''
    desc.value = ''
}





