/**
 * Small "external stores" that live outside React and expose the
 * subscribe / getSnapshot / getServerSnapshot shape that
 * `useSyncExternalStore` expects.
 *
 * https://react.dev/reference/react/useSyncExternalStore
 */

/** Subscribe to the browser's online/offline status. */
export const onlineStatusStore = {
    subscribe(callback: () => void) {
        window.addEventListener('online', callback);
        window.addEventListener('offline', callback);
        return () => {
            window.removeEventListener('online', callback);
            window.removeEventListener('offline', callback);
        };
    },
    getSnapshot() {
        return navigator.onLine;
    },
    // On the server there is no navigator; assume online so markup matches
    // the common client case and avoids a hydration mismatch.
    getServerSnapshot() {
        return true;
    },
};

/** Subscribe to the viewport width via the window `resize` event. */
export const windowWidthStore = {
    subscribe(callback: () => void) {
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    },
    getSnapshot() {
        return window.innerWidth;
    },
    getServerSnapshot() {
        // No width is knowable during SSR; return a stable placeholder.
        return 0;
    },
};
