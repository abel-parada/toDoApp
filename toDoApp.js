'use strict';

const newTask = document.getElementById('item');//I call the input
const ul = document.querySelector('ul');//I call the list where I am appending my tasks
const form= document.querySelector('form');

// addTaskButton = document.querySelector('#addtask');//I call the button to add task

const takeNap = document.getElementById('takeanap');//I call the button to cleanTasks


let itemsArray= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[];
// let itemsArray;

// if (localStorage.getItem('items')){
    //     itemsArray = JSON.parse(localStorage.getItem('items'));
    // } else {
        //     itemsArray = [];
        // }
        
        //this will save items in the localStorage of the browser according to key-value pair
        localStorage.setItem('items', JSON.stringify(itemsArray));
        
        const data = JSON.parse(localStorage.getItem('items')); //parse changes the JSON string to a JSON object so I can use the '.' notation.
        
        console.log(data);
        
        function makeList (text) {
            
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
            
        }
        
        
        // const saveTask = (e) =>{
        //     e.prevenDefault();
            
        //     itemsArray.push(newTask.value);
        //     console.log(itemsArray);
        //     //now I save Items in the localStorage
        //     localStorage.setItem('items', JSON.stringify(itemsArray));
            
        //     //now we append it in the ul by calling the function
        //     makeList(newTask.value);
            
        //     newTask.value= " ";
        // };
        
        form.addEventListener('submit',function (e){

            e.preventDefault();
        
            itemsArray.push(newTask.value);
            console.log(itemsArray);
            //now I save Items in the localStorage
            localStorage.setItem('items', JSON.stringify(itemsArray));
            
            //now we append it in the ul by calling the function
            makeList(newTask.value);
            
            newTask.value= " ";// this empties my input after each written task
        });

        data.forEach(item => {
            makeList(item);
        });
        
        
        // form.addEventListener('submit',saveTask);
        
        // now we erase the list if we desire
        takeNap.addEventListener('click', function(){
            localStorage.clear();
            while(ul.firstChild){
                ul.removeChild(ul.firstChild);
            }
            itemsArray = [];
        })