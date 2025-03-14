function toggleFilter() {
    document.getElementById('filterPanel').classList.toggle('active');
}

function filterProducts() {
    const checkedCategories = [...document.querySelectorAll('input[name="category"]:checked')]
        .map(el => el.value);

    document.querySelectorAll('.card').forEach(product => {
        product.style.display = checkedCategories.length === 0 ||
            checkedCategories.includes(product.dataset.category)
            ? 'block'
            : 'none';
    });
}