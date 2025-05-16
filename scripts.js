document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for buttons and other interactive elements
    const exploreBtn = document.querySelector(".btn");
    exploreBtn.addEventListener("click", function() {
        window.location.href = "/marketplace/items";
    });

    // Add more client-side functionality as needed
});

async function fetchMarketplaceItems() {
    try {
        const response = await fetch('/marketplace/items');
        const items = await response.json();
        displayMarketplaceItems(items);
    } catch (error) {
        console.error('Error fetching marketplace items:', error);
    }
}

function displayMarketplaceItems(items) {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button class="buy-btn" data-id="${item.id}">Buy</button>
        `;
        itemsContainer.appendChild(itemElement);
    });

    addBuyButtonListeners();
}

function addBuyButtonListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const itemId = this.getAttribute('data-id');
            await buyItem(itemId);
        });
    });
}

async function buyItem(itemId) {
    try {
        const response = await fetch('/marketplace/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId })
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error buying item:', error);
    }
}
