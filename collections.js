// Mobile Menu Functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Product data
const products = [
    {
        id: 1,
        name: "Summer Dress",
        price: 49.99,
        image: "img/products/f1.jpg",
        category: "summer",
        color: "red"
    },
    {
        id: 2,
        name: "Party Gown",
        price: 79.99,
        image: "img/products/f2.jpg",
        category: "party",
        color: "blue"
    },
    {
        id: 3,
        name: "Beach Wear",
        price: 39.99,
        image: "img/products/f3.jpg",
        category: "beach",
        color: "white"
    },
    {
        id: 4,
        name: "Casual Outfit",
        price: 59.99,
        image: "img/products/f4.jpg",
        category: "summer",
        color: "green"
    },
    {
        id: 5,
        name: "Evening Dress",
        price: 89.99,
        image: "img/products/f5.jpg",
        category: "party",
        color: "red"
    },
    {
        id: 6,
        name: "Summer Shorts",
        price: 34.99,
        image: "img/products/f6.jpg",
        category: "summer",
        color: "blue"
    },
    {
        id: 7,
        name: "Beach Cover-up",
        price: 29.99,
        image: "img/products/f7.jpg",
        category: "beach",
        color: "white"
    },
    {
        id: 8,
        name: "Party Top",
        price: 44.99,
        image: "img/products/f8.jpg",
        category: "party",
        color: "green"
    }
];

// Function to create product card
function createProductCard(product) {
    return `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300">
            <div class="relative group">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                <button class="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                    <i class="far fa-heart text-gray-600"></i>
                </button>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-2">$${product.price.toFixed(2)}</p>
                <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-500">${product.category}</span>
                    <span class="text-sm text-gray-500">•</span>
                    <span class="text-sm text-gray-500">${product.color}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to render products
function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Function to filter products
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="tags"]:checked'))
        .map(checkbox => checkbox.value);
    
    const filteredProducts = products.filter(product => {
        if (selectedCategories.length === 0) return true;
        return selectedCategories.includes(product.category) || selectedCategories.includes(product.color);
    });
    
    renderProducts(filteredProducts);
}

// Add event listeners to checkboxes
document.querySelectorAll('input[name="tags"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Initial render
renderProducts(products);

// Search functionality
const searchInput = document.querySelector('input[type="search"]');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.color.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}); 