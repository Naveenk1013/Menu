const database = {
    'a-la-carte': [
        { name: 'Bruschetta', description: 'Fresh bread topped with tomato, mozzarella, and basil.', quantity: '100 grm', price: '150', type: 'appetizer' },
        { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, Pecorino cheese, guanciale, and black pepper.', quantity: '250 grm', price: '300', type: 'main-course' },
        { name: 'Tiramisu', description: 'Coffee-flavored dessert made of ladyfingers and a mixture of mascarpone cheese and coffee.', quantity: '200 ml', price: '200', type: 'dessert' }
    ],
    static: [
        { name: 'Pancakes', description: 'Fluffy and delicious pancakes served with butter and syrup.', quantity: '2 pieces', price: '150', type: 'breakfast' },
        { name: 'Burgers', description: 'Juicy beef burger with lettuce, tomato, and cheese.', quantity: '1 piece', price: '200', type: 'lunch' },
        { name: 'Roast Chicken', description: 'Tender roasted chicken with herbs and spices.', quantity: '400 grm', price: '350', type: 'dinner' }
    ],
    'du-jour': [
        { name: 'Cream of Tomato Soup', description: 'Creamy tomato soup with a hint of basil.', quantity: '250 ml', price: '100', type: 'appetizer' },
        { name: 'Roasted Lamb with Rosemary Potatoes', description: 'Lamb roasted with rosemary and garlic potatoes.', quantity: '500 grm', price: '600', type: 'main-course' },
        { name: 'Pear Tart', description: 'Tart with a crisp pastry base and a sweet pear filling.', quantity: '200 ml', price: '150', type: 'dessert' }
    ],
    cycle: [
        { name: 'Roast Chicken', description: 'Tender roasted chicken with herbs and spices.', quantity: '400 grm', price: '350', type: 'main-course' },
        { name: 'Mashed Potatoes', description: 'Creamy mashed potatoes.', quantity: '250 grm', price: '50', type: 'side' },
        { name: 'Green Beans', description: 'Steamed green beans.', quantity: '150 grm', price: '30', type: 'side' }
    ],
    'prix-fixe': [
        { name: 'Chicken (Grilled or Roasted)', description: 'Grilled or roasted chicken with a side.', quantity: '400 grm', price: '400', type: 'main-course' },
        { name: 'Ice Cream (Vanilla or Chocolate)', description: 'Vanilla or chocolate ice cream.', quantity: '200 ml', price: '100', type: 'dessert' }
    ],
    'table-d-hote': [
        { name: 'Chicken (Roasted or Grilled)', description: 'Roasted or grilled chicken with a side.', quantity: '400 grm', price: '400', type: 'main-course' },
        { name: 'Cake (Chocolate or Vanilla)', description: 'Chocolate or vanilla cake.', quantity: '1 piece', price: '200', type: 'dessert' }
    ],
    tasting: [
        { name: 'Smoked Salmon Canapé', description: 'Delicate smoked salmon on a mini cracker.', quantity: '5 pieces', price: '200', type: 'amuse-bouche' },
        { name: 'Seared Scallops with Corn Puree', description: 'Seared scallops served with a creamy corn puree.', quantity: '150 grm', price: '300', type: 'seafood-course' },
        { name: 'Duck Confit with Cherry Sauce', description: 'Slow-cooked duck confit with a tangy cherry sauce.', quantity: '250 grm', price: '400', type: 'meat-course' },
        { name: 'Selection of Local Cheeses with Fig Jam', description: 'Assorted local cheeses with sweet fig jam.', quantity: '200 grm', price: '150', type: 'cheese-course' },
        { name: 'Chocolate Lava Cake with Raspberry Coulis', description: 'Rich chocolate cake with a molten center and raspberry coulis.', quantity: '200 grm', price: '250', type: 'dessert-course' }
    ],
    beverage: [
        { name: 'Budweiser', description: 'Classic American lager.', quantity: '330 ml', price: '80', type: 'beer' },
        { name: 'Cabernet Sauvignon', description: 'Full-bodied red wine.', quantity: '150 ml', price: '150', type: 'wine' },
        { name: 'Martini', description: 'Classic gin and vermouth cocktail.', quantity: '100 ml', price: '120', type: 'cocktail' }
    ],
    dessert: [
        { name: 'Tiramisu', description: 'Coffee-flavored dessert made of ladyfingers and a mixture of mascarpone cheese and coffee.', quantity: '200 ml', price: '200', type: 'dessert' },
        { name: 'Chocolate Cake', description: 'Rich chocolate cake with chocolate ganache.', quantity: '1 piece', price: '250', type: 'dessert' },
        { name: 'Apple Pie', description: 'Flaky crust with a sweet apple filling.', quantity: '1 piece', price: '180', type: 'dessert' }
    ]
};