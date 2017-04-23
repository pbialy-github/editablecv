
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

const validatePhone = (phone) => {
    // no letters
    const patt = /[^A-Za-z]$/;
    return patt.test(phone);
}

const validateLength = (value, length=20) => {
    const pattStr = '^.{0,len}$';
    const patt = new RegExp(pattStr.replace('len', length));
    return patt.test(value);
}

export {
    validateName,
    validateJob,
    validatePhone,
    validateLength
}

