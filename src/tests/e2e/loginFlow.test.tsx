/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

describe('super awesome end to end tests', () => {
  it('should login', async () => {
    await page.goto('http://localhost:3000/');
    const title = await page.title();
    expect(title).toBe('eco.mio Webtool');
  });
});
