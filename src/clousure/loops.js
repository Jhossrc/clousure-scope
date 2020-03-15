const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        console.log("# ", i); // 1,2,3...
        setTimeout(() => {
            console.log(i); // 10,10,10...
        }, 1000);
    }
}

anotherFunction();