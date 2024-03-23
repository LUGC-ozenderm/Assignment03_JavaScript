//arrays for the dropdown lists
const Dough = ['Whole Wheat', 'Flat Bread', 'Gluten Free'];
const Sauce = ['Meranera', 'BBQ', 'Alfrado'];
const Cheese = ['Cheddar', 'Swiss', 'Mozerella', 'Provolone', 'permesan'];
const Topping = ['Pepperoni', 'Chicken','Bacon', 'Ham', 'Sausage', 'Beyond Meat', 'Tofu','Mushrooms', 'Onions', 'Peppers', 'Olives', 'Spinach','Pineapple', 'Jalapenos', 'Tomatoes', 'none'];
const Size = ['Small', 'Medium', 'Large', 'Extra Large'];


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); //Prevents the form from submitting normally
    var studentName = 'Oleg Zenderman'; //My name
    var studentNumber = '200589820'; //My student number
    document.getElementById('studentNum').textContent = 'Student Number: ' + studentNumber; //Displays my student number
    document.getElementById('studentName').textContent = 'Student Name: ' + studentName; //Displays my name
    event.preventDefault(); //Prevent the form from submitting normally
    createPizza();//Calls the createPizza function
});

//adds items to the dropdown lists
window.onload = function() {
    Dropdown('Dough', Dough);
    Dropdown('Sauce', Sauce);
    Dropdown('Cheese', Cheese);
    Dropdown('Size', Size);

    //Adds checkboxes for toppings
    let toppingsDiv = document.getElementById('toppingsDiv');
    for (let topping of Topping) {
        let checkboxDiv = document.createElement('div');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'topping';
        checkbox.value = topping;

        let label = document.createElement('label');
        label.textContent = topping;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        toppingsDiv.appendChild(checkboxDiv);
    }
};

//The function to populate the dropdown lists
function Dropdown(id, objects) {
    const select = document.getElementById(id);
    objects.forEach(function(option) {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

//The function that creates a pizza
function createPizza() {
    let toppings = [];
    let checkboxes = document.querySelectorAll('input[name="topping"]:checked');

    //Adds the checked toppings to the toppings array
    for (let checkbox of checkboxes) {
        toppings.push(checkbox.value);
    }

    //Creates an object with the the chosen options
    const objects = {
        Dough: document.getElementById('Dough').value,
        Sauce: document.getElementById('Sauce').value,
        Cheese: document.getElementById('Cheese').value,
        Toppings: toppings,
        Size: document.getElementById('Size').value
    };

    //Displays the pizza description
    let cusName = document.getElementById('customerName').value;
    let address = document.getElementById('address').value;

    //Creates a string of the toppings
    let toppingsString = objects.Toppings.join(', ');

    //Replaces the last comma with 'and'
    if (toppingsString.lastIndexOf(',') != -1) {
        toppingsString = toppingsString.substring(0, toppingsString.lastIndexOf(',')) + ' and' + toppingsString.substring(toppingsString.lastIndexOf(',') + 1);
    }

    //Creates the pizza description
    const pizzaDiscription = `Thank you for your purchase ${cusName}. Your ${objects.Size} ${objects.Dough} pizza with ${objects.Sauce} sauce, ${objects.Cheese} cheese, and the following toppings: ${toppingsString} will be delivered to ${address}.`;

    //Displays the pizza description
    document.getElementById('pizzaDiscription').textContent = pizzaDiscription;
}