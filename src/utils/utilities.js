/* eslint-disable no-case-declarations */
export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

/**
 * Validate form add new employee
 */

export const validateAddNewEmployee = (value, type) => {
    const regex = /^\d{12}$/;
    const containsSpecialCharacters = /[^\d]/.test(value);
    const containsLetters = /[a-zA-Z]/.test(value);

    // date
    let selectedYear, currentYear;
    if (type === 'date' || type === 'birthdate') {
        selectedYear = value && value.format('DD-MM-YYYY').split('-');
        currentYear = new Date().getFullYear();
    }

    return new Promise((resolve, reject) => {
        switch (type) {
            case 'date':
                if (!value) {
                    reject('Ngày cấp không được để trống');
                } else {
                    resolve();
                }
                break;
            case 'birthdate':
                if (!value) {
                    reject('Ngày sinh không được để trống');
                } else if (currentYear - +selectedYear[2] < 18) {
                    reject('Nhân viên phải trên 18 tuổi');
                } else {
                    resolve();
                }
                break;
            case 'password':
                if (!value) {
                    reject('Mật khẩu không được để trống');
                } else if (value.length < 6) {
                    reject('Mật khẩu tối thiểu là 6 ký tự');
                } else {
                    resolve();
                }
                break;
            case 'cccd':
                if (!value) {
                    reject('Không được để trống');
                } else if (containsLetters) {
                    reject('không được chứa chữ cái');
                } else if (containsSpecialCharacters) {
                    reject('không được chứa ký tự đặc biệt');
                } else if (!regex.test(value)) {
                    reject('phải chứa chính xác 12 chữ số');
                } else {
                    resolve();
                }
                break;
            case 'bankAccount':
                if (!value) {
                    reject('Số tài khoản không được để trống');
                } else if (containsLetters) {
                    reject('không được chứa chữ cái');
                } else if (containsSpecialCharacters) {
                    reject('không được chứa ký tự đặc biệt');
                } else {
                    resolve();
                }
                break;
            default:
                resolve();
        }
    });
};
