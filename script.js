document.addEventListener('DOMContentLoaded', () => {
    const menuTypeSelect = document.getElementById('menu-type');
    const menuContent = document.getElementById('menu-content');
    const addItemButton = document.getElementById('add-item');
    const toggleRemoveButton = document.getElementById('toggle-remove');
    const printMenuButton = document.getElementById('print-menu');
    const shareMenuButton = document.getElementById('share-menu');
    const itemEditor = document.getElementById('item-editor');
    const itemNameInput = document.getElementById('item-name');
    const itemDescriptionInput = document.getElementById('item-description');
    const itemQuantityInput = document.getElementById('item-quantity');
    const itemPriceInput = document.getElementById('item-price');
    const itemTypeSelect = document.getElementById('item-type');
    const saveItemButton = document.getElementById('save-item');

    let currentMenu = 'a-la-carte';
    let removeFeatureEnabled = false;

    menuTypeSelect.addEventListener('change', () => {
        currentMenu = menuTypeSelect.value;
        displayMenu(currentMenu);
    });

    addItemButton.addEventListener('click', () => {
        itemEditor.style.display = 'block';
    });

    saveItemButton.addEventListener('click', () => {
        const itemName = itemNameInput.value;
        const itemDescription = itemDescriptionInput.value;
        const itemQuantity = itemQuantityInput.value;
        const itemPrice = itemPriceInput.value;
        const itemType = itemTypeSelect.value;
        addItemToMenu(currentMenu, itemName, itemDescription, itemQuantity, itemPrice, itemType);
        displayMenu(currentMenu);
        itemEditor.style.display = 'none';
        clearForm();
    });

    toggleRemoveButton.addEventListener('click', () => {
        removeFeatureEnabled = !removeFeatureEnabled;
        toggleRemoveFeature(removeFeatureEnabled);
    });

    printMenuButton.addEventListener('click', () => {
        window.print();
    });

    shareMenuButton.addEventListener('click', () => {
        const menuText = menuContent.innerText;
        navigator.clipboard.writeText(menuText).then(() => {
            alert('Menu copied to clipboard!');
        });
    });

    function displayMenu(menuType) {
        const menuItems = getMenuItems(menuType);
        menuContent.innerHTML = '';

        const categories = {
            'appetizer': 'Appetizer',
            'main-course': 'Main Course',
            'dessert': 'Dessert',
            'beverage': 'Beverage',
            'amuse-bouche': 'Amuse-bouche',
            'seafood-course': 'Seafood Course',
            'meat-course': 'Meat Course',
            'cheese-course': 'Cheese Course',
            'dessert-course': 'Dessert Course',
            'breakfast': 'Breakfast',
            'lunch': 'Lunch',
            'dinner': 'Dinner',
            'side': 'Side'
        };

        Object.keys(categories).forEach(category => {
            const categoryItems = menuItems.filter(item => item.type === category);
            if (categoryItems.length > 0) {
                const categoryHeader = document.createElement('h3');
                categoryHeader.textContent = categories[category];
                menuContent.appendChild(categoryHeader);

                categoryItems.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'menu-item';
                    itemElement.innerHTML = `
                        <strong>${item.name}</strong><br>
                        <span class="description">${item.description}</span><br>
                        <span>${item.quantity} - ₹${item.price}</span>
                        <button class="remove-button">Remove</button>
                    `;
                    itemElement.querySelector('.remove-button').addEventListener('click', () => {
                        removeItemFromMenu(currentMenu, item.name);
                        displayMenu(currentMenu);
                    });
                    if (!removeFeatureEnabled) {
                        itemElement.querySelector('.remove-button').style.display = 'none';
                    }
                    menuContent.appendChild(itemElement);
                });
            }
        });
    }

    function addItemToMenu(menuType, itemName, itemDescription, itemQuantity, itemPrice, itemType) {
        const menuItems = getMenuItems(menuType);
        menuItems.push({ name: itemName, description: itemDescription, quantity: itemQuantity, price: itemPrice, type: itemType });
        saveMenuItems(menuType, menuItems);
    }

    function removeItemFromMenu(menuType, itemName) {
        const menuItems = getMenuItems(menuType);
        const updatedMenuItems = menuItems.filter(item => item.name !== itemName);
        saveMenuItems(menuType, updatedMenuItems);
    }

    function getMenuItems(menuType) {
        return database[menuType] || [];
    }

    function saveMenuItems(menuType, menuItems) {
        database[menuType] = menuItems;
    }

    function clearForm() {
        itemNameInput.value = '';
        itemDescriptionInput.value = '';
        itemQuantityInput.value = '';
        itemPriceInput.value = '';
        itemTypeSelect.value = 'appetizer';
    }

    function toggleRemoveFeature(enable) {
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.style.display = enable ? 'block' : 'none';
        });
    }

    displayMenu(currentMenu);

    gsap.to('body', { duration: 10, background: 'linear-gradient(45deg, #2575fc, #6a11cb)', yoyo: true, repeat: -1 });
});