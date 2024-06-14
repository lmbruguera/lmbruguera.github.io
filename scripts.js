document.getElementById('lang-en').addEventListener('click', function() {
    document.querySelectorAll('.lang-en').forEach(function(element) {
        element.classList.remove('d-none');
    });
    document.querySelectorAll('.lang-pt').forEach(function(element) {
        element.classList.add('d-none');
    });
});

document.getElementById('lang-pt').addEventListener('click', function() {
    document.querySelectorAll('.lang-en').forEach(function(element) {
        element.classList.add('d-none');
    });
    document.querySelectorAll('.lang-pt').forEach(function(element) {
        element.classList.remove('d-none');
    });
});
