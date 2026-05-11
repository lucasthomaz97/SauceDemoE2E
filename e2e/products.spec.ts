import { expect } from '@playwright/test';
import { test } from '../fixtures/index';

test('Should display products page title after successful login', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.productsHeading).toBeVisible();
});

test('Should display menu button on products page', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.menuButton).toBeVisible();
});

test('Should Display Menu options when clicking menu button', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.menuButton.click();
    await expect(productsPage.logoutButton).toBeVisible();
});

test('Should Display logout button when opening menu', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.menuButton.click();
    await expect(productsPage.logoutButton).toBeVisible();
});

test('Should logout successfully', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.productsHeading).toBeVisible();
    await productsPage.menuButton.click();
    await productsPage.logoutButton.click();
    await expect(loginPage.headingTitle).toBeVisible();
});

test('Should Display close menu button when opening menu', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.menuButton.click();
    await expect(productsPage.menuCloseButton).toBeVisible();
});

test('Should close menu when clicking the close menu button', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.menuButton.click();
    await expect(productsPage.logoutButton).toBeVisible();
    await productsPage.menuCloseButton.click();
    await expect(loginPage.headingTitle).toBeVisible();
});

test('Should display shopping cart link on products page', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.shoppingCartLink).toBeVisible();
});

test('Should display product sort select on products page', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.productSortSelect).toBeVisible();
});

test('Should display six products on products page', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    for (let i = 0; i < 6; i++) {
        await expect(productsPage.getProductItem(i)).toBeVisible();
    }
});

test('Should order z to a correctly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.productSortSelect.selectOption('za');

    const products = await productsPage.productNames.allTextContents();
    const sortedProducts = [...products].sort().reverse();
    expect(products).toEqual(sortedProducts);
});

test('Should order a to z correctly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.productSortSelect.selectOption('az');

    const products = await productsPage.productNames.allTextContents();
    const sortedProducts = [...products].sort();
    expect(products).toEqual(sortedProducts);
});

test('Should order by price low to high correctly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.productSortSelect.selectOption('lohi');

    const prices = await productsPage.productPrices.allTextContents();
    const pricesAsNumbers = prices.map(p => parseFloat(p.replace('$', '')));
    const sortedPrices = [...pricesAsNumbers].sort((a, b) => a - b);
    expect(pricesAsNumbers).toEqual(sortedPrices);
});

test('Should order by price high to low correctly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.productSortSelect.selectOption('hilo');

    const prices = await productsPage.productPrices.allTextContents();
    const pricesAsNumbers = prices.map(p => parseFloat(p.replace('$', '')));
    const sortedPrices = [...pricesAsNumbers].sort((a, b) => b - a);
    expect(pricesAsNumbers).toEqual(sortedPrices);
});