// assets/js/notifications.js
// Professional Notification System

(function() {
    // Create container if it doesn't exist
    function ensureContainer() {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
                z-index: 10000; width: 90%; max-width: 480px; display: flex;
                flex-direction: column; gap: 12px; pointer-events: none;
            `;
            document.body.appendChild(container);
        }
        return container;
    }

    function createToast(type, message) {
        const container = ensureContainer();
        const toast = document.createElement('div');

        const icons = {
            success: 'fa-circle-check',
            error: 'fa-circle-xmark',
            warning: 'fa-triangle-exclamation',
            info: 'fa-circle-info'
        };
        const colors = {
            success: 'bg-green-600',
            error: 'bg-red-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500'
        };

        toast.className = `flex items-center gap-3 p-4 rounded-xl shadow-2xl text-white font-bold text-sm pointer-events-auto fade-in ${colors[type]}`;
        toast.innerHTML = `
            <i class="fas ${icons[type]} text-xl"></i>
            <span class="flex-1">${message}</span>
            <button class="text-white/80 hover:text-white transition" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(toast);

        // Auto-remove after 4 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    }

    // Expose to global scope
    window.showSuccess = (msg) => createToast('success', msg);
    window.showError = (msg) => createToast('error', msg);
    window.showWarning = (msg) => createToast('warning', msg);
    window.showInfo = (msg) => createToast('info', msg);
})();
