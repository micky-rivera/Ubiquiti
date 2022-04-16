## Things left to complete:

- List of products is currently prompted to render twice. Once on 'search' update, and once on 'filters' update. This should only prompt once.

- Ubiquiti logo should be an interactive button that navigates back to homepage. 'Hover' and 'active' svgs can be found on the project's Figma design.

- 'Filters' is currently not case insensitive. This is causing issues with the 'AirMAX' product line, since the database has both 'AirMAX' and 'airMAX'.

- There should be a loading bar displayed while pictures and whatnot are still being rendered.

- 'Render' in index.tsx needs to be updated to createRoot for React 18. This is causing annoying warnings in the console and causing tests to look ugly while running.

- 'Filter' popup window should be closed when the user clicks outside of it.

- CSS files should be moved to their component's respective folder. (and probably migrated to SASS).

- CSS is currently a mix between px and rem. It is better to stick to a single form of measurement.

- Some buttons don't have a visual change on hover and active. (ex. exit button in Filter popup and back button on product page).

- Backend needs to be tested!