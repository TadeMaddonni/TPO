import { setInfo } from "./handleLocalStorage.js";

const handleLogin = (data, array) => {
    console.log(data, array);
    const IsOnDatabase = array.find((user) =>
        user.email == data.email ? true : false
    );
    if (!IsOnDatabase) {
        const newData = {
            ...data,
            role: "client",
            id: array[array.length - 1]?.id + 1 || array.length + 1,
        };
        array.push(newData);
        setInfo("userAccount", newData);
        return true;
    } else {
        if (IsOnDatabase.password == data.password) {
            setInfo("userAccount", IsOnDatabase);
            return true;
        } else {
            return false;
        }
    }
};

export { handleLogin };
