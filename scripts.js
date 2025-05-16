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

// Tests for DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.querySelector(".btn");
    if (exploreBtn) {
        console.log("DOMContentLoaded event listener test passed");
    } else {
        console.error("DOMContentLoaded event listener test failed");
    }
});

// Tests for exploreBtn click event
document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.querySelector(".btn");
    exploreBtn.addEventListener("click", function() {
        if (window.location.href === "/marketplace/items") {
            console.log("exploreBtn click event test passed");
        } else {
            console.error("exploreBtn click event test failed");
        }
    });
});

// Tests for fetchMarketplaceItems function
async function testFetchMarketplaceItems() {
    try {
        const response = await fetch('/marketplace/items');
        const items = await response.json();
        if (Array.isArray(items) && items.length > 0) {
            console.log("fetchMarketplaceItems function test passed");
        } else {
            console.error("fetchMarketplaceItems function test failed");
        }
    } catch (error) {
        console.error('fetchMarketplaceItems function test failed:', error);
    }
}

// Tests for displayMarketplaceItems function
function testDisplayMarketplaceItems() {
    const items = [
        { id: 1, name: "Test Item 1", price: 10 },
        { id: 2, name: "Test Item 2", price: 20 }
    ];
    displayMarketplaceItems(items);
    const itemsContainer = document.getElementById('items-container');
    if (itemsContainer.children.length === items.length) {
        console.log("displayMarketplaceItems function test passed");
    } else {
        console.error("displayMarketplaceItems function test failed");
    }
}

// Tests for addBuyButtonListeners function
function testAddBuyButtonListeners() {
    const items = [
        { id: 1, name: "Test Item 1", price: 10 },
        { id: 2, name: "Test Item 2", price: 20 }
    ];
    displayMarketplaceItems(items);
    addBuyButtonListeners();
    const buyButtons = document.querySelectorAll('.buy-btn');
    if (buyButtons.length === items.length) {
        console.log("addBuyButtonListeners function test passed");
    } else {
        console.error("addBuyButtonListeners function test failed");
    }
}

// Tests for buyItem function
async function testBuyItem() {
    try {
        const response = await fetch('/marketplace/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId: 1 })
        });
        const result = await response.json();
        if (result.success) {
            console.log("buyItem function test passed");
        } else {
            console.error("buyItem function test failed");
        }
    } catch (error) {
        console.error('buyItem function test failed:', error);
    }
}
