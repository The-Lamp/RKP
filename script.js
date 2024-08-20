function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.left === '0px';
    sidebar.style.left = isOpen ? '-100%' : '0';
}

function showInterface() {
    document.getElementById('second-interface').style.display = 'block';
    document.querySelector('main').style.display = 'none';
    toggleMenu();
}

function closeInterface() {
    document.getElementById('second-interface').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

// Android back button handling
window.addEventListener('popstate', function(event) {
    if (document.getElementById('second-interface').style.display === 'block') {
        closeInterface();
    } else {
        history.back();
    }
});

// Initialize history for back button functionality
document.addEventListener('DOMContentLoaded', function() {
    history.pushState(null, null, location.href);
});