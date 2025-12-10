Overview
The application lets you create, view, edit, and delete personal notes about books.
Each note is linked to a book by its ISBN, and the main page shows the book cover together with a short preview of your note.

Features
Add a new note with book ISBN, title, and your own text.

Automatically display the book cover on the main page using the ISBN.

See all your notes as cards on the main page.

Open a dedicated view page for each note with the full cover and full text.

Edit existing notes or delete them when you no longer need them.

Tech stack
Node.js – runtime for the backend.

Express.js – routing and HTTP request handling.

EJS – server-side templating for generating HTML pages.

Bootstrap 5 – styling and responsive layout.

Pages
/ – main page with a grid of note cards (cover, title, note preview, and View / Edit / Delete buttons).

/add – page with a form to add a new note (ISBN, book title, note text).

/view/:id – page to view a single note in detail (full cover and full note text).

/update/:id – page with a form to update an existing note.

/about – page describing the project and the tech stack.

Basic usage
Go to /add and enter the ISBN, book title, and your note text.

Open / to see the new note as a card with the book cover.

Use View to open the full note page, or Edit to change the content.

Use Delete to remove a note (handled on the client side via the note id).

Project goals
This is a small pet project created to practice:

building a simple CRUD app with Node.js and Express;

using EJS templates and server-side rendering;

responsive UI with Bootstrap;

integrating an external book cover service using ISBN.
