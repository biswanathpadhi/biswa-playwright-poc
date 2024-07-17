import { Page } from 'playwright';

export class CartPage {
    readonly page: Page;
    readonly noOfProducts: string;

    constructor(page: Page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName: string) {
        const productsInCart = await this.page.$$(this.noOfProducts);
        for (const product of productsInCart) {
            console.log(await product.textContent());
            if (productName === (await product.textContent())) {
                return true;
                break;
            }
        }
    }
}
