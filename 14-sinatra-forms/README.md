## Routes Overview

Let's take a book website as an example. You'd want to have a controller action to create a new book (new route), to display one book (show route), to display all books (index route), to delete a book (delete route), and a page to edit a book (edit route).

| HTTP VERB | ROUTE             | Action        | Used For                                           |
| --------- | ----------------- | ------------- | -------------------------------------------------- |
| GET       | '/books'          | index action  | index page to display all books                    |
| GET       | '/books/new'      | new action    | displays create book form                          |
| POST      | '/books'          | create action | creates one blog book                              |
| GET       | '/books/:id'      | show action   | displays one blog book based on ID in the url      |
| GET       | '/books/:id/edit' | edit action   | displays edit form based on ID in the url          |
| PATCH     | '/books/:id'      | update action | _modifies_ an existing book based on ID in the url |
| PUT       | '/books/:id'      | update action | _replaces_ an existing book based on ID in the url |
| DELETE    | '/books/:id'      | delete action | deletes one book based on ID in the url            |

---

### External Resources

- [Restular](http://www.restular.com/)
