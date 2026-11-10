# Exercises

Three short exercises, one at the end of each stage. Each takes no more than 5 minutes and adds to the code written in that stage, using only what the stage has just introduced.

Do each exercise in your own working folder. When the class moves to the next stage, you can keep your exercise code, or replace your files with the next checkpoint. The checkpoints do not include the exercises.

## Exercise 1: count page views (after stage 1)

**Goal:** the site counts how many of its pages this browser has opened, and writes the number in the console:

```
Pages viewed on this site: 3
```

**Steps:**

1. At the end of `js/main.js`, read a saved value called `"views"` from `localStorage`.
2. Turn it into a number with `Number()`. If nothing has been saved yet, `Number(null)` gives `0`.
3. Add 1, and save the new number with `localStorage.setItem()`.
4. Write the message with `console.log()`.

**Check:** open the console (F12, then Console), and click between the pages. The number goes up each time, and it is still there after closing and opening the browser.

## Exercise 2: a new type of publication (after stage 2)

**Goal:** add a new type, "Policy brief", with its own filter button, without changing any of the functions.

**Steps:**

1. In `js/publications.js`, add one more object to the `publications` array. Use the type `"Policy brief"`, and invent an example: for example, the author `"Student, A."` and the title `"An Example Policy Brief"`.
2. In `publications.html`, add a fifth filter button. Copy one of the existing buttons and change its `data-type` and its text.

**Check:** the count now says 6 publications. The new button shows only the new item, and the other buttons still work.

**Think about it:** which part of the code did you not have to change, and why?

## Exercise 3: a stricter name check (after stage 3)

**Goal:** the form gives two different messages for the name:

- Empty name: "Please enter your name."
- Only one character: "Your name must be at least 2 characters."

**Steps:**

1. In `js/contact.js`, find the check for the name.
2. Between the `if` and the `else`, add an `else if` that checks whether `name.length` is less than 2, and shows the new message.

**Check:** try an empty name, the name "A", and the name "Ada".
