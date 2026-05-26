import { expect } from '@playwright/test';
import { test } from '../fixtures/index';

test('Should display products page title after successful login', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.expectProductsPage();
});

test('Should display menu button on products page', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.menuButton).toBeVisible();
});

test('Should Display Menu options when clicking menu button', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.menuButton.click();
    await expect(productsPage.menuCloseButton).toBeVisible();
    await expect(productsPage.allItemsButton).toBeVisible();
    await expect(productsPage.aboutButton).toBeVisible();
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

test('Should order Z to A correctly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.productSortSelect.selectOption('za');

    const products = await productsPage.productNames.allTextContents();
    const sortedProducts = [...products].sort().reverse();
    expect(products).toEqual(sortedProducts);
});

test('Should order A to Z correctly', async ({ loginPage, productsPage }) => {
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

test('Should change state of add to cart button to remove after clicking it', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.getProductAddToCartButton(0).click();
    await expect(productsPage.getProductRemoveButton(0)).toBeVisible();
});

test('Should display shopping cart with zero items when no products are added to cart', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.shoppingCartBadge).not.toBeVisible();
});

test('Should remove product from cart and update shopping cart badge accordingly', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.getProductAddToCartButton(0).click();
    await expect(productsPage.shoppingCartBadge).toBeVisible();
    await expect(productsPage.shoppingCartBadge).toHaveText('1');
    await productsPage.getProductRemoveButton(0).click();
    await expect(productsPage.shoppingCartBadge).not.toBeVisible();
});

for (let i = 0; i < 6; i++) {
    test(`Should display product name for product ${i + 1}`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await expect(productsPage.getProductName(i)).toBeVisible();
    });

    test(`Should display product image for product ${i + 1}`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await expect(productsPage.getProductImage(i)).toBeVisible();
    });

    test(`Should display product price for product ${i + 1}`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await expect(productsPage.getProductPrice(i)).toBeVisible();
    });

    test(`Should display product description for product ${i + 1}`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await expect(productsPage.getProductDescription(i)).toBeVisible();
    });

    test(`Should display add to cart button for product ${i + 1}`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await expect(productsPage.getProductAddToCartButton(i)).toBeVisible();
    });

    test(`Should display remove button for product ${i + 1} after adding it to cart`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.getProductItem(i)).toBeVisible();
        await productsPage.getProductAddToCartButton(i).click();
        await expect(productsPage.getProductRemoveButton(i)).toBeVisible();
    });

    test(`Should display shopping cart with ${i + 1} items`, async ({ loginPage, productsPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        for (let j = 0; j <= i; j++) {
            await productsPage.getProductAddToCartButton(j).click();
            await expect(productsPage.shoppingCartBadge).toBeVisible();
            await expect(productsPage.shoppingCartBadge).toHaveText(`${j + 1}`);
        }
    });
}