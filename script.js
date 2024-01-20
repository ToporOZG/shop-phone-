var Clicks = 1

function PlusClick(id){
    clicks++;
    document.getElementById(id).innerHTML=clicks
}

function MinusClick(id){
    if (clicks > 1) {
        clicks -= 1;
    }
    // if (clicks <= 0){
    //     clicks = 1
    // }
    document.getElementById(id).innerHTML=clicks
}
