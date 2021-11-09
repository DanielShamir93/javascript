const printOneToN = (n) => {
    for(let i = 1; i <= n; i++) {
        if (i % 7 == 0) {
            if (i.toString().includes('7')) {
                // Divided by 7 and has 7
                console.log('BOOM-BOOM');
            } else {
                // Divided by 7 only
                console.log('BOOM');
            }
        } else {
            // Not divided by 7 and doesn't have 7 
            console.log(i);    
        }
    }
}

printOneToN(80);