import 'jest-dom/extend-expect';
import 'jest-styled-components';

// this is just a little hack to silence a warning that we'll get until react-dom@16.9.0 is released
const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
