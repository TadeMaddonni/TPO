const handleArraySearch = (array, search) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            return array[i];
        }
    }
};
