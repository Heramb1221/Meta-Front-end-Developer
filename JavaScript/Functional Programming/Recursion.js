let counter = 1;
function example(){
    console.log(counter);
    counter -= 1;
    if(counter === 0) {
        return;
    }
    example();
}