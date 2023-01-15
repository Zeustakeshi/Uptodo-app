export const fakeImg =
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

export const timeFomat = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    const fomatNumLessThanTen = (num) => {
        if (num < 9) return "0" + num;
        return num;
    };

    const getDateFomat = () => {
        if (date.getDate() == today.getDate()) {
            return "Today";
        } else {
            const day = fomatNumLessThanTen(date.getDate());
            const month = fomatNumLessThanTen(date.getMonth() + 1);
            const year = date.getFullYear();
            return day + "-" + month + "-" + year;
        }
    };

    const getTimeFomat = () => {
        const hours = fomatNumLessThanTen(date.getHours());
        const minutes = fomatNumLessThanTen(date.getMinutes());
        return hours + ":" + minutes;
    };

    const dateFomat = getDateFomat();
    const timeFomat = getTimeFomat();

    return dateFomat + " At " + timeFomat;
};

export const validatePassword = (pass) => {
    return String(pass).match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
    );
};

export const getIcon = (name) => {};
