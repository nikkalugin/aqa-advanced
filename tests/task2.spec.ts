import { test, expect, Locator } from '@playwright/test';
import { mainUserEmail, mainUserPassword } from '../test-data/credentials';
import AuthController from '../api-controllers/AuthController';
import CarsController from '../api-controllers/CarsController';

test.describe('Task2 for Lection 28', () => {
    let carsController: CarsController;
    let sid: string;

    test.beforeAll(async ({ request }) => {
        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword);
    })

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request, sid);
      });

    test('Successful adding car with Status 201', async () => {
        const response = await carsController.createCar(1, 5, 15000);
        const body = await response.json();
        expect(response.status()).toBe(201);
        expect(body.data.brand).toEqual('Audi');
    });

    test('Unsuccessful adding unfounded model value with Status 404', async () => {
        const response = await carsController.createCar(2, 11, 15000);
        const body = await response.json();
        expect(response.status()).toBe(404);
        expect(body.message).toContain('Model not found');
    });

    test('Unsuccessful adding invalid mileage value with Status 400', async () => {
        const response = await carsController.createCar(3, 13, 1000000);
        const body = await response.json();
        expect(response.status()).toBe(400);
        expect(body.message).toContain('Mileage has to be from 0 to 999999');
    });
});