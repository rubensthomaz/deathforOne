document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = (i === index) ? 'block' : 'none';
        });
    }

    showPage(currentPage);

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', function() {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', function() {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });
});
