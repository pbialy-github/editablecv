
const validateName = (name) => {
    // no digits, 1-12 chars
    const patt = /^([^0-9]{1,12})$/;
    return patt.test(name);
}

const validateJob = (job) => {
    // 0-20 chars
    const patt = /^.{0,20}$/;
    return patt.test(job);
}

export {
    validateName,
    validateJob
}

