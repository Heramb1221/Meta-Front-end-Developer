try {
    throw new ReferanceError();
} catch(err) {
    console.log(err);
    console.log('There was a Reference Error');
}
console.log("My program does not stop");
