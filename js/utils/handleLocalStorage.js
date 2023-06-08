const setInfo = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
};

const getInfo = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

export { setInfo, getInfo };
