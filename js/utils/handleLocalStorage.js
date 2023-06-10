const setInfo = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
};

const getInfo = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const deleteInfo = (key) => {
    localStorage.removeItem(key);
    return true;
};

export { setInfo, getInfo, deleteInfo };
