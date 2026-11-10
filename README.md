# JavaScript: adding behaviour to the academic website

The same four-page academic website from the HTML and CSS session, now extended with JavaScript in three stages. Each stage adds one visible feature and one core idea.

| Stage | Feature | Core idea |
|---|---|---|
| 1 | A theme switch that remembers the choice | JavaScript responds to what the user does |
| 2 | Publications built from data, with filter buttons | JavaScript turns data into page content |
| 3 | A contact form with validation | JavaScript can check and guide, but it cannot be trusted alone |

## Session plan (90 minutes)

| Time (minutes) | Activity | Ends at |
|---|---|---|
| 0 to 5 | Setup check | `00-start` open in Live Server |
| 5 to 25 | Stage 1: theme switch | `01-theme-switch` |
| 25 to 30 | **Exercise 1: count page views** | |
| 30 to 55 | Stage 2: publications from data | `02-publications` |
| 55 to 60 | **Exercise 2: a new type of publication** | |
| 60 to 80 | Stage 3: contact form | `03-contact-form` |
| 80 to 85 | **Exercise 3: a stricter name check** | |
| 85 to 90 | Wrap-up and the link to the server-side session | |

The exercises are in `EXERCISES.md`, and the solutions for the teacher are in `SOLUTIONS.md`. Each exercise comes right after its checkpoint is reached, so students who caught up by copying a checkpoint can still do it.

## How to use the checkpoints

Every folder is a complete, working copy of the site at one point in the session.

1. Everyone starts in `00-start`, which is the final site from the HTML and CSS session.
2. At the end of each stage, the class moves to the next checkpoint together.
3. If your own copy is broken or behind, copy the files from the next checkpoint folder into your working folder and continue from there.
4. If you finish early, try the challenges in `STRETCH.md`.

## What each checkpoint adds

| Folder | What is new | Key ideas |
|---|---|---|
| `00-start` | The final site from the HTML and CSS session | Starting point, no JavaScript yet |
| `01-theme-switch` | A button that switches between light and dark, and remembers the choice on every page | Linking a script, `querySelector`, variables, functions, `if`, events, attributes, `localStorage` |
| `02-publications` | The publications list is built from data, and buttons filter it by type | Arrays, objects, `for...of` loops, template literals, `createElement`, `innerHTML`, `filter()` |
| `03-contact-form` | A contact form on the Bio page that checks what the visitor typed | The `submit` event, `preventDefault()`, reading form values, `trim()`, showing errors, `textContent` for user input |

New and changed CSS rules are marked with comments such as `NEW in JS 02` and `CHANGED in JS 01`.

## How the scripts are organised

| File | Linked from | Purpose |
|---|---|---|
| `js/main.js` | All four pages | The theme switch, needed everywhere |
| `js/publications.js` | `publications.html` only | The publication data, the list and the filters |
| `js/contact.js` | `index.html` only | The contact form checks |

This mirrors the CSS: shared code in one file, page-specific code only where it is needed.

## What changed in each checkpoint

**01: theme switch**
- HTML (all four pages): a `button` after the navigation, and a `script` tag at the end of the `body`.
- CSS, section 1: each colour variable holds both of its values with `light-dark()`, so the separate dark mode block is no longer needed.
- CSS, section 10: two short rules let the visitor's choice override the system setting.
- CSS, sections 17 and 18 (new): the button, and the header arranged around it.

**02: publications from data**
- HTML (`publications.html`): the three hand-written lists are replaced by filter buttons, a count, one empty list and a `noscript` message.
- CSS, section 18: the filter buttons share the theme switch style.
- CSS, section 19 (new): the selected filter and the count.

**03: contact form**
- HTML (`index.html`): a form with three fields in the Contact section.
- CSS, section 1: a new `--color-error` variable.
- CSS, section 20 (new): the form, its fields and error messages.

## Points to raise in class

- **Without JavaScript**, the site still works, except for two things. The publications list is empty, because it only exists in JavaScript. A `noscript` message explains this. The form falls back to the browser's own checks. Search engines may also see no publications. The server-side session solves this by building the list on the server.
- **`innerHTML` and `textContent`.** Stage 2 uses `innerHTML`, which is safe here because the data is ours. Stage 3 uses `textContent` for the visitor's name, so any HTML they type is shown as plain text and cannot run. Try typing `<b>Ada</b>` in the name field.
- **The form checks can be bypassed.** Switch off JavaScript, or send data directly to a server, and the checks never run. This is why the server must check everything again. The form has nowhere to send its data yet; the server-side session gives it one.
