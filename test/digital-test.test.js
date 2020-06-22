import { html, fixture, expect } from '@open-wc/testing';

import '../digital-test.js';

describe('DigitalTest', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <digital-test></digital-test>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <digital-test></digital-test>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <digital-test title="attribute title"></digital-test>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <digital-test></digital-test>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
