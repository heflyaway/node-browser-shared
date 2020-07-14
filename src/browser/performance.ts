import { isBrowser } from '../env';

let sharedPerformance;
if (isBrowser()) {
    sharedPerformance = performance;
} else {
    sharedPerformance = {
        now() {},
        timing: {},
        navigation: {},
        timeOrigin: Date.now(),
    };
}

export {
    sharedPerformance,
}
