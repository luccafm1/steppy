# Steppy

steppy is a small web app built with **Flask** that helps compute **calculus limits** using **SymPy** and generates a plot of the target function using **Matplotlib**.

The main page accepts a user input, computes the limit, and returns the result (and generated plot path) via an AJAX request.

---

## What it does

- Computes limits from user-provided expressions (powered by **SymPy**)
- Generates plots for the corresponding function and saves images under `static/graphic/`
- Returns results in JSON for asynchronous UI updates (AJAX)
- Provides a simple informational page at `/about`

---

## Tech stack

- **Backend:** Python, Flask
- **Math engine:** SymPy (with NumPy/Scipy utilities)
- **Plotting:** Matplotlib
- **Frontend:** HTML/CSS/JS (templates)

---

## Project structure (high level)

- `app.py` — Flask app entrypoint with routes (`/` and `/about`)
- `calculator/` — symbolic math logic (limit solving + plotting utilities)
- `templates/` — HTML templates
- `static/graphic/` — generated plot images (runtime output)

---

## Routes

- `GET /` — renders the main page
- `POST /` — receives input, solves the limit, generates a plot, and returns JSON
- `GET /about` — renders the about page

---

## Notes

- Generated plots are saved as PNG files in `static/graphic/`.
- The code clears previously generated plots in that folder when handling requests.

---

## License

MIT License.
