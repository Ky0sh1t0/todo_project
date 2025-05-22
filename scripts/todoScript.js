function checkEl () {
    const todoListAll = document.querySelectorAll('.todo-item');

    todoListAll.forEach((item) => {
        if (item.children.item(0).checked) {
            item.classList.add('done');
        } else {
            item.classList.remove('done');
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let todoText = '';
    let todoList = []

    const todoListEl = document.querySelector('.todo');
    const todoTextEl = document.querySelector('.todo-input');
    const hideHintEl = document.querySelector('.hide_hint');
    const hintEl = document.querySelector('.hint');
    const addNoteEl = document.querySelector('.btn_create_note');
    const swiperEl = document.querySelector('.swiper .swiper-wrapper');
    const noteTitle = document.querySelector('.todo_title');


    function createTodoItem(item) {
        return `<div class="todo-item">
                    <input type="checkbox" onchange="checkEl()" class="todo-check" name="" id=""/>
                    <label class="todo-text">${item}</label>
                    <a class="remove-todo-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M18 18L6 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>`
    }

    todoTextEl.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            const textTmp = todoTextEl.value;
            if (textTmp !== "" && textTmp !== " ")  {
                todoListEl.innerHTML += createTodoItem(textTmp);
                const deleteBtns = document.querySelectorAll('.remove-todo-item');
                todoTextEl.value = '';
                
                deleteBtns.forEach((btn) => {
                    btn.addEventListener('click', () => {
                        const elToRemove = btn.parentNode;
                        elToRemove.remove();
                    })
                })
            }
        }
    })
    
    hideHintEl.addEventListener('click', () => {
        if (hintEl.classList.contains('hide')) {
            hintEl.classList.remove('hide');
            hideHintEl.textContent = "Hide hint"
        } else {
            hintEl.classList.add('hide');
            hideHintEl.textContent = "Show hint";
        }
    });

    noteTitle.addEventListener('', () => {
        
    })

    // addNoteEl.addEventListener('click', () => {
    //     const newNote = document.createElement('div');
    //     newNote.classList.add('todo');
    //     newNote.classList.add('swiper-slide');
    //     swiperEl.append(newNote);
    //     setTimeout(()=> {
    //         swiper.update();
    //     }, 50)
    // })
})