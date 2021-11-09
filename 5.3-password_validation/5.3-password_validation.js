const validPass1 = pass => {
    if (pass.length >= 7) {
        return 'Strong';
    } else {
        return 'Weak';
    }
}

const validPass2 = pass => {
    return pass.length >= 7 ? 'Strong' : 'Weak';
}

const validPass3 = pass => {
    if (pass.length !== 7 && !(pass.length < 7)) {
        return 'Strong';
    }
    return 'Weak';
}



const advanceValidPass = pass => {
    return pass.length >= 7 && pass !== pass.toLowerCase() ? 'Very Strong' : pass.length >= 7 ? 'Strong' : 'Weak';
}


console.log(advanceValidPass('wodfsfdFsw'));
