function PlusClick(id){
    let clicks = 1
    clicks++;
    document.getElementById(id).innerHTML=clicks
}

function MinusClick(id){
    let clicks = 1
    if (clicks > 1) {
        clicks -= 1;
    }
    // if (clicks <= 0){
    //     clicks = 1
    // }
    document.getElementById(id).innerHTML=clicks
}
