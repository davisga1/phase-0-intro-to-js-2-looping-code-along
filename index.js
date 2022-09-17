const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards() {
    const thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`); 
    }
return thanks
}
function countDown(x) {
    let n = x;
    while (n > -1) {
        console.log(n);
        n--;
    }
}