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
            title.innerText = "OC Timetable";
            desc.innerText = "Timetable management system";
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
        const msg = document.getElementById('authMsg') as HTMLElement;

        console.log('Login attempt:', { username: u, hasPassword: !!p });

        if (!u || !p) {
            msg.innerText = "Please enter username and password.";
            msg.style.color = "#ef4444";
            return;
        }

        // Check default accounts from localStorage
        const adminAccount = JSON.parse(localStorage.getItem('oc_admin_account') || 'null');
        const userAccount = JSON.parse(localStorage.getItem('oc_user_account') || 'null');

        console.log('Stored accounts:', { adminAccount, userAccount });

        // Check admin credentials
        if (u === 'admin' && adminAccount && adminAccount.password === p) {
            console.log('Admin login successful');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('currentUser', u);
            sessionStorage.setItem('userRole', adminAccount.role || 'admin');
            
            msg.innerText = "Login successful! Loading...";
            msg.style.color = "#4ade80";
            
            // Hide login and show full-screen app
            setTimeout(() => {
                const loginContainer = document.getElementById("loginContainer");
                const appContainer = document.getElementById("appContainer");
                
                console.log('Switching to full-screen app');
                if (loginContainer) loginContainer.style.display = "none";
                if (appContainer) appContainer.style.display = "flex";
                
                // Initialize tab functionality after login
                if ((window as any).initializeTabs) {
                    (window as any).initializeTabs();
                } else {
                    console.error('initializeTabs function not found');
                }
            }, 1000);
            return;
        }

        // Check user credentials
        if (u === 'user' && userAccount && userAccount.password === p) {
            console.log('User login successful');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('currentUser', u);
            sessionStorage.setItem('userRole', userAccount.role || 'user');
            
            msg.innerText = "Login successful! Loading...";
            msg.style.color = "#4ade80";
            
            // Hide login and show full-screen app
            setTimeout(() => {
                const loginContainer = document.getElementById("loginContainer");
                const appContainer = document.getElementById("appContainer");
                
                console.log('Switching to full-screen app');
                if (loginContainer) loginContainer.style.display = "none";
                if (appContainer) appContainer.style.display = "flex";
                
                // Initialize tab functionality after login
                if ((window as any).initializeTabs) {
                    (window as any).initializeTabs();
                } else {
                    console.error('initializeTabs function not found');
                }
            }, 1000);
            return;
        }

        // Check stored credentials (for registered users)
        const storedU = localStorage.getItem('oc_username');
        const storedP = localStorage.getItem('oc_password');

        if (u === storedU && p === storedP) {
            console.log('Registered user login successful');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('currentUser', u);
            sessionStorage.setItem('userRole', 'user');
            
            msg.innerText = "Login successful! Loading...";
            msg.style.color = "#4ade80";
            
            // Hide login and show full-screen app
            setTimeout(() => {
                const loginContainer = document.getElementById("loginContainer");
                const appContainer = document.getElementById("appContainer");
                
                console.log('Switching to full-screen app');
                if (loginContainer) loginContainer.style.display = "none";
                if (appContainer) appContainer.style.display = "flex";
                
                // Initialize tab functionality after login
                if ((window as any).initializeTabs) {
                    (window as any).initializeTabs();
                } else {
                    console.error('initializeTabs function not found');
                }
            }, 1000);
        } else {
            console.log('Login failed');
            msg.innerText = "Invalid credentials. Try admin/admin123 or user/user123";
            msg.style.color = "#ef4444";
        }
    };

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
}

export function logout(): void {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("userRole");
    localStorage.removeItem("isAutoLoggedIn");
    
    // Show login container and hide full-screen app
    const loginContainer = document.getElementById("loginContainer");
    const appContainer = document.getElementById("appContainer");
    
    if (loginContainer) loginContainer.style.display = "flex";
    if (appContainer) appContainer.style.display = "none";
    
    // Clear form
    const user_input = document.getElementById("user") as HTMLInputElement;
    const pass_input = document.getElementById("pass") as HTMLInputElement;
    const msg = document.getElementById("authMsg") as HTMLElement;
    
    if (user_input) user_input.value = "";
    if (pass_input) pass_input.value = "";
    if (msg) msg.innerText = "";
}
