export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

/**
 * Validate form add new position 
*/

export const validateAddNewEmployee = (error, value, type) => {
    switch(type) {
        case 'date':
            if (error.date) {
                return Promise.reject('Nhân viên phải trên 18 tuổi');
            }
            break;
        default:
            return Promise.resolve();
    }
};