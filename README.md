# toDoApp

The project aims to create an app that appends tasks on a list and erases them in bulk.

## Steps I took

1. Getting the elements from the html file and initializing them to variables.

2. I will use localStorage for the tasks (items). Hence, I initialize localStorage in an empty array, where I will set my new items and store them as data.

3. I make a function "makeList()" to append the new tasks:

   - I create li elements and assing them to a constant.
   - I access the textContent of the li and assign it to the text I write in the input.
   - I append the li in an ul.

4. I add an eventlistener to the form. Everytime the button is pushed:

   - the text (value) written in the input (newTasks) will be pushed into the array (that links to our localStorage).
   - the makeList function will be called passing as paramenter the text (value) written in the input
   - the input is emptied each time initializing its valut to nothing (" ");

5. I iterate through each item saved in the localStorage and repeat the steps above.

6. I create the option of clearing up the tasks listed.
