// Pre-configured accounts
const defaultAccounts = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' }
};

export function setupAuth() {
    // Initialize default accounts if they don't exist
    if (!localStorage.getItem('oc_admin_account')) {
        localStorage.setItem('oc_admin_account', JSON.stringify(defaultAccounts.admin));
    }
    if (!localStorage.getItem('oc_user_account')) {
        localStorage.setItem('oc_user_account', JSON.stringify(defaultAccounts.user));
    }

    const toggleAuth = (isRegistering: boolean) => {
        const title = document.querySelector('header h2') as HTMLElement;
        const desc = document.querySelector('header p') as HTMLElement;
        const loginBox = document.getElementById('loginActions') as HTMLElement;
        const registerBox = document.getElementById('registerActions') as HTMLElement;
        const msg = document.getElementById('authMsg') as HTMLElement;

        msg.innerText = "";

        if (isRegistering) {
            title.innerText = "Create Account";
            desc.innerText = "Save credentials to this browser";
            loginBox.style.display = "none";
            registerBox.style.display = "block";
        } else {
            title.innerText = "OC Timetable Pro";
            desc.innerText = "Your personal timetable management system";
            loginBox.style.display = "block";
            registerBox.style.display = "none";
        }
    };

    (window as any).toggleAuth = toggleAuth;

    (window as any).handleRegister = () => {
        const u = (document.getElementById('user') as HTMLInputElement).value.trim();
        const p = (document.getElementById('pass') as HTMLInputElement).value.trim();
        const msg = document.getElementById('authMsg') as HTMLElement;

        if (u && p) {
            localStorage.setItem('oc_username', u);
            localStorage.setItem('oc_password', p);
            msg.innerText = "Registration successful! You can now login.";
            msg.style.color = "#4ade80";
            setTimeout(() => toggleAuth(false), 1500);
        } else {
            msg.innerText = "Please fill in all fields.";
            msg.style.color = "#ef4444";
        }
    };

    (window as any).handleLogin = () => {
        const u = (document.getElementById('user') as HTMLInputElement).value.trim();
        const p = (document.getElementById('pass') as HTMLInputElement).value.trim();
        const storedU = localStorage.getItem('oc_username');
        const storedP = localStorage.getItem('oc_password');
        const msg = document.getElementById('authMsg') as HTMLElement;

        // Check default accounts first
        const adminAccount = JSON.parse(localStorage.getItem('oc_admin_account') || '{}');
        const userAccount = JSON.parse(localStorage.getItem('oc_user_account') || '{}');

        if ((u === 'admin' && p === adminAccount.password) || 
            (u === 'user' && p === userAccount.password)) {
            
            const role = u === 'admin' ? 'admin' : 'user';
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('currentUser', u);
            sessionStorage.setItem('userRole', role);
            window.location.href = "/timetable.html";
            return;
        }

        // Check registered accounts
        if (!storedU || !storedP) {
            msg.innerText = "Invalid credentials. Try admin/admin123 or user/user123";
            msg.style.color = "#ef4444";
            return;
        }

        if (u === storedU && p === storedP) {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('currentUser', u);
            sessionStorage.setItem('userRole', 'user');
            window.location.href = "/timetable.html";
        } else {
            msg.innerText = "Invalid credentials. Try admin/admin123 or user/user123";
            msg.style.color = "#ef4444";
        }
    };

    // Add event listeners
    document.addEventListener('DOMContentLoaded', () => {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', (window as any).handleLogin);
        }
        
        if (registerBtn) {
            registerBtn.addEventListener('click', (window as any).handleRegister);
        }

        // Add enter key support
        const userInput = document.getElementById('user') as HTMLInputElement;
        const passInput = document.getElementById('pass') as HTMLInputElement;
        
        if (userInput && passInput) {
            [userInput, passInput].forEach(input => {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const loginBox = document.getElementById('loginActions');
                        if (loginBox && loginBox.style.display !== 'none') {
                            (window as any).handleLogin();
                        } else {
                            (window as any).handleRegister();
                        }
                    }
                });
            });
        }
    });
}
