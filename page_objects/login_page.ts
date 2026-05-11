import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get headingTitle(): Locator {
        return this.page.getByText('Swag Labs');
    }

    get usernameInput(): Locator {
        return this.page.getByPlaceholder('Username');
    }

    get passwordInput(): Locator {
        return this.page.getByPlaceholder('Password');
    }

    get loginButton(): Locator {
        return this.page.getByRole('button', { name: 'Login' });
    }

    get closeButton(): Locator {
        return this.page.locator('[data-test="error-button"]');
    }

    get errorMessageLockedOut(): Locator {
        return this.page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }

    get errorMessageInvalidCredentials(): Locator {
        return this.page.getByText('Epic sadface: Username and password do not match any user in this service');
    }

    get errorMessageUsernameRequired(): Locator {
        return this.page.getByText('Epic sadface: Username is required');
    }

    get errorMessagePasswordRequired(): Locator {
        return this.page.getByText('Epic sadface: Password is required');
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}