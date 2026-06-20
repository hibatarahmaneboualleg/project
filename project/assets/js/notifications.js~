// assets/js/notifications.js
// Professional Toast Notification System

function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    const config = {
        success: { bg: '#27ae60', icon: '✅' },
        error: { bg: '#e74c3c', icon: '❌' },
        warning: { bg: '#f39c12', icon: '⚠️' },
        info: { bg: '#3498db', icon: 'ℹ️' }
    };

    const { bg, icon } = config[type] || config.success;

    const toast = document.createElement('div');
    toast.style.cssText = `
        background: ${bg};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-family: 'Cairo', sans-serif;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        pointer-events: auto;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        min-width: 300px;
        direction: rtl;
    `;
    toast.textContent = `${icon} ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showSuccess(msg) { showToast(msg, 'success'); }
function showError(msg) { showToast(msg, 'error'); }
function showWarning(msg) { showToast(msg, 'warning'); }
function showInfo(msg) { showToast(msg, 'info'); }
