# Stretch challenges

These are optional. Try them if you finish a stage early. None of them is needed for the next checkpoint.

## After checkpoint 01 (theme switch)

1. **Use the console.** Open DevTools (F12) and the Console tab. Type `localStorage.getItem("theme")` and press Enter. Then type `localStorage.removeItem("theme")`, reload the page, and explain what happens.
2. **The year in the footer.** Make the year in the footer always show the current year. Give the year its own `span` with a class, then set its text with `new Date().getFullYear()`.
3. **Follow the system again.** At the moment, once a visitor has chosen a theme, the site never follows the system setting again. Add a way to go back to the system setting, using `localStorage.removeItem()`.
4. **Hide the button without JavaScript.** The button does nothing if JavaScript is switched off. Add the `hidden` attribute to the button in the HTML, then remove it in `main.js`. This way, only visitors who can use the button will see it.
5. **React to the system setting.** If the visitor has not chosen a theme, update the page when they change their system setting while the page is open. Look up the `change` event of `window.matchMedia()`.

## After checkpoint 02 (publications from data)

6. **Add a publication.** Add a new object to the `publications` array. Notice that you do not need to touch the HTML.
7. **Add a year.** Give each publication a `year` property, show it in the reference, and sort the list so the newest comes first. Look up the `sort()` method of arrays.
8. **Search.** Add a text box above the list. As the visitor types, show only publications whose title contains the typed text. Use the `input` event and the `includes()` method. Make it work together with the filter buttons.
9. **Compare with CSS.** If you did the CSS-only filter in the HTML and CSS session, compare the two. What can the JavaScript version do that the CSS version cannot? What happens to each when JavaScript is switched off?
10. **Move the data to a file.** Move the array into `data/publications.json` and load it with `fetch()`. This only works through Live Server, not by opening the file directly. Why? (This is exactly what the server-side session builds on.)

## After checkpoint 03 (contact form)

11. **Check while typing.** Show or clear each error as soon as the visitor leaves the field, using the `blur` event, not only when they press Send.
12. **Count characters.** Show "12 of 20 characters" under the message box, updated as the visitor types.
13. **A better email check.** Our check only looks for `@`. Use the browser's own check instead: `emailField.validity.valid`. What does it accept and reject?
14. **Avoid repetition.** The three checks repeat the same pattern. Rewrite them so each field and its rule are listed once, for example in an array of objects, and one loop checks them all.
15. **Bypass the checks.** Open DevTools, find the form in the Elements panel, and work out at least two ways to send it without passing the checks. Write down why the server must check the data again.
