let items = [];

let counter = 0;
function AddToCart()
{
    counter ++;
    console.log(counter);
}

function Pineapple()
{
   let itemName = "Pineapple";
   let itemPrice = 2.50;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Banana()
{
   let itemName = "Banana";
   let itemPrice = 2.00;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Mango()
{
   let itemName = "Mango";
   let itemPrice = 3.50;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Grapes()
{
   let itemName = "Grapes";
   let itemPrice = 2.75;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Oranges()
{
   let itemName = "Oranges";
   let itemPrice = 2.50;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}
function Kiwi()
{
   let itemName = "Kiwi";
   let itemPrice = 1.50;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Blueberry()
{
   let itemName = "Blueberries";
   let itemPrice = 2.75;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Apple()
{
   let itemName = "Apples";
   let itemPrice = 2.50;
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}
let sum = 0
function DisplayCart()
{
    for(let i = 0; i<items.length;i++)
    {
        console.log(items[i].item);
        console.log(items[i].price);
        sum += items[i].price
    }
    console.log(`subtotal: $${sum}`);
    total = sum * 1.06;
    totalround = total.toFixed(2)
    console.log(`total with tax: $${totalround}`)
}
