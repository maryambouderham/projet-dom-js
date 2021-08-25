//creer une liste des commandes
var COMMANDES =[
{title:'laptop case',
prix:20.34,
thumnail:"lap-case.jpg",
quantity:2},
{title:'laptop case',
prix:20.34,
thumnail:"lap-case.jpg",
quantity:2},
{title:'laptop case',
prix:20.34,
thumnail:"lap-case.jpg",
quantity:2},

]
 
//je cible ul
var list_command = document.getElementById("list-commands")
//ajouter shopping item a la liste
//list_command.innerHTML =shopping_item
for(const command of COMMANDES){
    var shopping_item=`<li class="shopping-cart-item">
    <div>
        <img src="${command.thumnail}" alt="">
        <p>
        <span>${command.title}</span>
        <span>${command.prix}$</span>
        </p>
    </div>
    <div class="li-droite">
        <button>
            <i class="fas fa-minus-circle"></i>
        </button>
        <input type="number" placeholder="${command.quantity}">
        <button>
            <i class="fas fa-plus-circle"></i>
        </button>
        <button>
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
   </li>`
   list_command.innerHTML+=shopping_item

}