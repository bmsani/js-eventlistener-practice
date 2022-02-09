

// function handleJustFunctionClick(){
//     document.getElementById('input-text').v

//     const p = document.getElementById('clicking-methoud');
    
//     // p.innerText = inputItem;
// }

// document.getElementById('update-name').addEventListener('click',function(){
//     const nameField = document.getElementById('input-text');
//     // const inputItem = nameField.value
//     const p = document.getElementById('clicking-methoud').innerText = nameField.value;

//     nameField.value = '';
    
// })

////////////////****************************////////////////

//1. add button event handler
// document.getElementById('submit-comment').addEventListener('click', function(){
//     // 2. get user comment
//     const inputText = document.getElementById('input-text');
//     console.log(inputText);

//     // 3. new comment
//     const newComment = document.createElement('p');
//     newComment.innerText = inputText.value;

//     // 4. append the comment
//     const commentContainer = document.getElementById('comment-section');
//     commentContainer.appendChild(newComment);

//     // 5. Clean the comment box
//     inputText.value = '';



// })

document.getElementById('delete-btn').addEventListener('click', function (){
    document.getElementById('secret-thing').style.display = 'none';
})

// focus
document.getElementById('delete-confirm').addEventListener('focus', function (){
    document.body.style.backgroundColor = 'red';
})
// blur
document.getElementById('delete-confirm').addEventListener('blur', function (){
    document.body.style.backgroundColor = 'white';
})

// keyup
document.getElementById('delete-confirm').addEventListener('keyup', function (event){
    const deleteButton = document.getElementById('delete-btn');
    if(event.target.value == 'delete'){
        deleteButton.removeAttribute('disabled');
    }else{
        deleteButton.setAttribute('disabled', true);
    }
})

// change
document.getElementById('delete-confirm').addEventListener('change', function (){
    const deleteInputText = document.getElementById('delete-confirm');
    console.log(deleteInputText.value);
})