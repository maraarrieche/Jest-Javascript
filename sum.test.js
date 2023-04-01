const { sum, fromEuroToDollar } = require('./app.js');

// comienza tu primera prueba
test('prove if 100 euros equal 120 dollars ', () => {
    //dentro de la prueba llamamos a nuestra función fromEuroToDollar con 1 números
    let total = fromEuroToDollar(100);

    // espero que 100 euros sea igual a 120
    expect(total).toBe(120);
});