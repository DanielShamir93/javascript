const group2 = {
    name: 'group2',
    
    printName() {
        console.log(this.name);
    },
    
    printAfter() {
        setTimeout(this.printName.bind(group2), 1000);
    }
    
}


group2.printAfter();