const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
  it('Should say Hello World', () => {
    const response = sayHelloWorld.sayHello();

    expect(response).toBe('Hello World!');
  });

  it('Should say Hello Bruno', () => {
    const response = sayHelloWorld.sayHello('Bruno');

    expect(response).toBe('Hello Bruno!');
  });
});
