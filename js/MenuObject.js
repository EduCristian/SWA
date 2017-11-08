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

function populateMenu(menu1){
    var menuElements = [0, 2, 3, 5]
    menuElements.forEach{ (e, i) => menuHeader[0].children[e].textContent = menu[i].name }
    }

populateMenu(menu)
    

