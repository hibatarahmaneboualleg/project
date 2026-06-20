// assets/js/auth.js
// Authentication Simulation using LocalStorage

const Auth = {
    isLoggedIn: () => {
        return localStorage.getItem('agrifuture_user') !== null;
    },

    getUser: () => {
        return JSON.parse(localStorage.getItem('agrifuture_user'));
    },

    login: (email, password) => {
        // Simulation: Check against registered users
        const users = JSON.parse(localStorage.getItem('agrifuture_users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('agrifuture_user', JSON.stringify({ name: user.name, email: user.email }));
            return { success: true, user };
        }
        return { success: false };
    },

    register: (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('agrifuture_users')) || [];
        const exists = users.find(u => u.email === email);
        if (exists) {
            return { success: false, message: 'البريد الإلكتروني مسجل بالفعل' };
        }
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('agrifuture_users', JSON.stringify(users));
        return { success: true };
    },

    logout: () => {
        localStorage.removeItem('agrifuture_user');
        window.location.href = 'login.html';
    },

    protectPage: () => {
        if (!Auth.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
};
