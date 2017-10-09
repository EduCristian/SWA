function menuItem(name)
    {
          this.name = name;
    }  

    var menuItem1 = new menuItem("About"),
     menuItem2 = new menuItem("Work"),
     menuItem3 = new menuItem("Shop"),
     menuItem4 = new menuItem("Contact")

var menu = [
    menuItem1,menuItem2,menuItem3,menuItem4
]

var menuHeader = document.getElementsByClassName("clearfix");

//0,2,3,5

function populateMenu(menu1){
    menuHeader[0].children[0].textContent = menu[0].name
    menuHeader[0].children[2].textContent = menu[1].name
    menuHeader[0].children[3].textContent = menu[2].name
    menuHeader[0].children[5].textContent = menu[3].name
}

populateMenu(menu)
    

