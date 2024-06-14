document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference in localStorage
    var savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    }

    // Event listeners for language buttons
    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });

    document.getElementById('lang-pt').addEventListener('click', function() {
        setLanguage('pt');
    });
});

function setLanguage(lang) {
    if (lang === 'en') {
        document.querySelectorAll('.lang-en').forEach(function(element) {
            element.classList.remove('d-none');
        });
        document.querySelectorAll('.lang-pt').forEach(function(element) {
            element.classList.add('d-none');
        });
    } else if (lang === 'pt') {
        document.querySelectorAll('.lang-en').forEach(function(element) {
            element.classList.add('d-none');
        });
        document.querySelectorAll('.lang-pt').forEach(function(element) {
            element.classList.remove('d-none');
        });
    }
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            var savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang) {
                setLanguage(savedLang);
            }
        });
}
