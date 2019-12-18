const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e){

    removeBorder();
    removeShow();
    this.classList.add("tab-border");

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
}


function removeBorder(){
    tabItems.forEach(tab=> tab.classList.remove("tab-border"));
}

function removeShow(){
    tabContentItems.forEach(content=> content.classList.remove("show"));
}

tabItems.forEach(tab=> tab.addEventListener("click", selectItem));

