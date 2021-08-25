//creer une liste des commandes
var COMMANDES = [
  {
    id: 1,
    title: "laptop case",
    prix: 20.34,
    thumnail: "lap-case.jpg",
    quantity: 2,
  },
  {
    id: 2,
    title: "laptop case",
    prix: 20.34,
    thumnail: "lap-case.jpg",
    quantity: 2,
  },
  {
    id: 3,
    title: "laptop case",
    prix: 20.34,
    thumnail: "lap-case.jpg",
    quantity: 2,
  },
];

afficherShoppingCart()

function confirmation(id) {
  var r = confirm("voulez-vous supprimer la commande?");
  if (r == true) {
    //COMMANDES.slice(id)
    for (var i = 0; i < COMMANDES.length; i++) {
      if (COMMANDES[i] != undefined && COMMANDES[i].id == id) {
        delete COMMANDES[i];
      }
    }
    console.table(COMMANDES);
    afficherShoppingCart()
  }
}
function add_quantity(id){
 for(var i=0;i<COMMANDES.length;i++){
     if(COMMANDES[i] != undefined && COMMANDES[i].id==id  )
         COMMANDES[i].quantity++
     
 }
 afficherShoppingCart()
}
 function diminuer_quantite(id){
    for(var i=0;i<COMMANDES.length;i++){
        if(COMMANDES[i] != undefined && COMMANDES[i].id==id  )
            if(COMMANDES[i].quantity>1 ) COMMANDES[i].quantity--
        
    }
    afficherShoppingCart()
 }
 
function afficherShoppingCart(){
    //je cible ul

    var list_command = document.getElementById("list-commands");
    list_command.innerHTML = "";
    //ajouter shopping item a la liste
    //list_command.innerHTML =shopping_item
    for (const command of COMMANDES) {
      var shopping_item = `<li class="shopping-cart-item">
    <div>
        <img src="${command?.thumnail}" alt="">
        <p>
        <span>${command?.title}</span>
        <span>${command?.prix}$</span>
        </p>
    </div>
    <div class="li-droite">
        <button onclick="diminuer_quantite(${command?.id})">
            <i class="fas fa-minus-circle"></i>
        </button>
        <input type="number" placeholder="${command?.quantity}">
        <button onclick="add_quantity(${command?.id})">
            <i class="fas fa-plus-circle"></i>
        </button>
        <button onclick="confirmation(${command?.id})">
            <i class="fas fa-trash-alt" ></i>
        </button>
    </div>
   </li>`;
      if (command != undefined) list_command.innerHTML += shopping_item;
    }
}