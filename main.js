// --------------------------------------ADD NEW TAG OR ELEMENT-------------------------------------------
// const newHeading = document.createElement('h1');

// newHeading.className = 'title';
// newHeading.innerHTML = 'Books List';

// const oldHeading = document.querySelectorAll('.title')[1];
// const parentHeading = document.querySelector('#book-list');

// parentHeading.replaceChild(newHeading, oldHeading);

// console.log(oldHeading);




//------------------------------------- DELET TAG OR ELEMENT-------------------------------------------------
// const li = document.querySelectorAll('li')[2];
// const ul = document.querySelector('ul');

// li.remove();
// // or 
// // ul.children[2].remove();
// console.log(ul);



//-------------------------------------- Give behavior to an element-----------------------------------------
// const Link = document.querySelector('.button').addEventListener('click', 
// function(e){
// console.log("Hello world");
// e.preventDefault();
// });


// ---------------------------------------GIVE ALL BEHAVIOR AN ELEMENT ==> MOUSE----------------------------------------

// document.querySelector('.button').addEventListener('dblclick', 
// function(e){
// console.log('clicked 2X');
// e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mousedown', 
// function(e){
// console.log('mouse down');
// e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mouseup', 
// function(e){
// console.log('mouse up');
// e.preventDefault();
// });

// document.querySelector('.button').addEventListener
// ('mouseenter', function(e){
//     console.log('mouse in');
//     e.preventDefault();
// })

// document.querySelector('.button').addEventListener
// ('mouseout', function(e){
//     console.log('mouse out');
//     e.preventDefault();
// })


// document.querySelector('.button').addEventListener
// ('mouseout', function(e){
//     console.log('mouse out');
//     e.preventDefault();
// })

// document.querySelector('.button').addEventListener
// ('mousemove', function(e){
//     console.log('mouse moving...');
//     e.preventDefault();
// })

// document.body.addEventListener
// ('mousemove', function(e){
//     console.log('it is ok...');
//     e.preventDefault();
// })

// const heading = document.querySelectorAll('.title')[1];
// document.body.addEventListener
// ('mousemove', function(e){
//     console.log(`mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`);
//     e.preventDefault();
// });




// ---------------------------------------ADD------------------------------------------
// const inputText = document.querySelector('#add-book input');
// const link= document.querySelector('.button');

// inputText.value = '';

// link.addEventListener('click', function(e){
//     console.log(inputText.value);
//     inputText.value = '';
//     e.preventDefault();
// });

// inputText.addEventListener('keydown', function(e){
//     console.log(inputText.value);
// })

// inputText.addEventListener('keyup', function(e){
//     console.log(inputText.value);
// })

// inputText.addEventListener('focus', function(e){
//     console.log('selected');
// })

// inputText.addEventListener('blur', function(e){
//     console.log('unselected');
// })


// const checkBox = document.querySelector('#hide input');
// const heading = document.querySelectorAll('.title')[1];
// const ul = document.querySelector('ul');

// // console.log(checkBox);

// // checkBox.checked = true;
// // checkBox.checked = false;

// checkBox.addEventListener('click', function(e){
//     if(checkBox.checked){
//         heading.style.display = 'none';
//         ul.style.display = 'none';
//     }else{
//         heading.style.display = 'block';
//         ul.style.display = 'initial';
//     }
// })





// -----------------------------------Save information in localstorage--------------------------------


// const link = document.querySelector('.button');
// const inputText = document.querySelector('#add-book input');
// const ul = document.querySelector('ul');

// const spanDelete = `<span class="delete">DELETE</span>`;

// link.addEventListener('click', function(e){

//     const li = document.createElement('li');
//     const spanName = document.createElement('span');

//     spanName.className = 'Name';
//     spanName.textContent = inputText.value;

//     li.appendChild(spanName);
//     li.innerHTML += spanDelete;

//     ul.appendChild(li);

//     inputText.value = '';
//     e.preventDefault();

// });


// localStorage.setItem('midia', 'hamdi');
// const name = localStorage.getItem('midia');
// console.log(name);

// =========0r IF WE WANT DELETE ONE OF THEM =====
// localStorage.setItem('midia1', 'hamdi1');
// localStorage.setItem('midia2', 'hamdi2');
// localStorage.setItem('midia3', 'hamdi3');

// localStorage.removeItem('midia2');
// localStorage.clear();

// ---------------------------save in local storage with array and object====
// const arr = ['midia1', 'midia2'];
// const obj = {name:"midia", age:21};

// localStorage.setItem('array', arr);

// const myArray = localStorage.getItem('array').split(',');

// console.log(myArray);

// ==== for object ====
// const arr = ['midia1', 'midia2'];
// const obj = {name:"midia", age:21};

// localStorage.setItem('object', JSON.stringify(obj));

// const myObject = JSON.parse(localStorage.getItem('object'));

// console.log(myObject);




