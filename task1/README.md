## Usage

Clone the repository in your local machine.
Run the following command to install the dependencies

```bash
npm install
# or
yarn
```

Then run the following command to start the dev server:

```bash
npm run dev
# OR
yarn dev
```

## Lint

To analyze the code statically using ESLint, use the following command:

```bash
npm run lint
# OR
yarn lint
```

## Build

To generate the production build, run the following command:

```bash
npm run build
# OR
yarn build
```

## Acceptance criteria

1. The logo should link to the main page.
2. The logo can be implemented using a variety of approaches:an inline SVG element (allows additional versatility when styling, doesn’t require additional asset variations to provide the best quality on displays with higher pixel density, indexable by google bot, should include a descriptive title tag for screen readers, and crawlers); an external file referenced in an `img` tag (if png/webp is used additional assets should be provided for devices with higher pixel density, the alt attribute should be utilised to add descriptive text for screen readers and crawlers,
3. The layout should handle i18n and a variable number of menu items.
4. The layout should support `rtl` and `ltr` languages.
5. A skip-to-content link should be provided for screen readers and keyboard-based navigation.
6. Both dark and light themes should be supported to correspond with users’ browser/system settings.
7. Prominent animations should have subtle or non-animated alternatives for users with `@media (prefers-reduced-motion: reduce)` set-up.
8. Hover and Focus states should be clear and comprehensive.
9. The Active element in the navigation should be marked with `aria-current=”page”`.
10. All interactive elements should be accessible via the keyboard.
11. A screen reader should indicate when the menu is opened/closed.
12. If the menu is closed on mobile the menu items should not be focusable
13. If the menu is open, the focus should be ‘trapped’ in the menu layer until the menu is closed.
14. Menu toggle button should have textual content for screen readers.

## Known issues

1. Proper color theme handling should be implemented.
2. There's some code repetition when it comes to hamburger button focus styling
3. Svg animation (hamburger button) is not triggered with keyboard
4. Focus trap in mobile main nav hasn't been implemented.
5. The solution has been tested only in chrome.
6. It could be a good idea to separate css from the bundle.js file
7. Dark/light system settings support hasn't been implemented.
