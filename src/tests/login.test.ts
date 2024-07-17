import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import { user } from '../testdata/uitestdata';

test('test', async ({ page }) => {
    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(user.email, user.password);
    await page.waitForTimeout(3000);

    //Home
    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Nexus 6');
    expect(await status).toBe(true);
});
