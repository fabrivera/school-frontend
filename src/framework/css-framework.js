export function tabSelect(e) {
    e.preventDefault();
    let son, father, tabBody, getId;

    if(e.target.classList.contains('tab')){
        son = e.target;
    } else if(e.target.parentNode.classList.contains('tab')){
        son = e.target.parentNode;
    } else if(e.target.parentNode.parentNode.classList.contains('tab')){
        son = e.target.parentNode.parentNode;
    } else if(e.target.parentNode.parentNode.parentNode.classList.contains('tab')){
        son = e.target.parentNode.parentNode.parentNode;
    }
    father = son.parentNode;
    tabBody = father.nextSibling;

    son.classList.add('this');
    
    for (let i = 0; i < father.childNodes.length; i++) {
        father.childNodes[i].classList.remove('active');
        if (father.childNodes[i].classList.contains('this')){
            getId = i;
        }
        father.childNodes[i].classList.remove('this');
    }

    for (let i = 0; i < tabBody.childNodes.length; i++) {
        tabBody.childNodes[i].classList.remove('active');
        if(i === getId){
            tabBody.childNodes[i].classList.add('active');
        }
    }
    
    son.classList.add('active');
}

export function addShowClass(e){
    e.preventDefault();
    let btnSelected;

    if(e.target.classList.contains('show-btn')){
        btnSelected = e.target;
    } else if(e.target.parentNode.classList.contains('show-btn')){
        btnSelected = e.target.parentNode;
    } else if(e.target.parentNode.parentNode.classList.contains('show-btn')){
        btnSelected = e.target.parentNode.parentNode;
    } else if(e.target.parentNode.parentNode.parentNode.classList.contains('show-btn')){
        btnSelected = e.target.parentNode.parentNode.parentNode;
    }

    btnSelected.classList.toggle('show');
} 
