# sinatra-mvc-intro

## Objectives

- Explain the Model View Controller \(MVC\) pattern and give an example
- Explain how web frameworks \(like Sinatra\) use the MVC pattern and why
- Define 'convention over configuration'
- Implement one model that inherit from ActiveRecord
- Implement one controller to route and process requests
  - Demonstrate how the params hash changes and where the data comes from
- Implement ERB template and get it to render data from controller and model
- Practice file structure in Sinatra
- Identify the connection between REST and CRUD

---

### MVC Architecture

In a typical application you will find these three fundamental parts:

- Data \(Model\)

  An interface to view and modify the data

- \(View\)

  Operations that can be performed on the data

- \(Controller\)

The MVC pattern, in a nutshell, is this:

- The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.
- The view displays the data through the controller, and sends user actions \(e.g. button clicks\) to the controller. The view is independent of both the model and the controller.
- The controller provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model.

Rule 1 is the golden rule of MVC:

The model represents the data, and does nothing else. The model does NOT depend on the controller or the view. In other words, _THE MODEL DOES NOT INTERACT WITH THE VIEW, AND THE CONTROLLER DOES ALL THE_ WORK*!*

Think of your MVC app as a restaurant. The model is the food being made in the kitchen, this is the meat of the experience/app. The controller is the restaurant's staff, they handle the experience, prepare the food, and are your first contact if you need anything. The view is you, and your experience. You do not see inside the kitchen, nor do you have visibility on what happens to give you the experience you get. If you want more information, you can always talk to the staff, but they have rules about how much or how little you get to do or see.

![](https://raw.githubusercontent.com/flatiron-school/education-team-wiki/master/assets/m2_sinatra_request.jpg?token=ASv3_aZC_kU1QiIQoNTDPzqqZA03SbMlks5bjW69wA%3D%3D)

### CRUD, URLs, and REST

![](https://raw.githubusercontent.com/flatiron-school/education-team-wiki/master/assets/m2_sinatra_crud.jpg?token=ASv3_amiQppf4hG4WN4Z48_3CZKlkXTgks5bjW7bwA%3D%3D)

![](https://raw.githubusercontent.com/flatiron-school/education-team-wiki/master/assets/m2_sinatra_rest.png?token=ASv3_cr_7d029Svn8UVlYpbUytB1q_PKks5bjW7twA%3D%3D)

_Note: One thing that helps justify why things are the way they are, is that REST methods try their best to minimize the number of URLs but maximizing functionality. This is why we overload on the same URLs._

It's not necessary that all of this functionality exists, we just choose to expose which things we find important/want our users to be able to do. Remember, web requests are stateless, which means that at the default, there is no relationship between any two requests to the server.

### Sinatra App

Sinatra has the added benefit of giving us convention on modularizing our code, which has an immense long-term impact to productivity.

- Params in requests

  ![](https://raw.githubusercontent.com/flatiron-school/education-team-wiki/master/assets/m2_sinatra_routing_code.jpg?token=ASv3_SpB4fiPRmbjC4cIPWJLB6tivAqkks5bjW8CwA%3D%3D)

- Nested erb naming \(with directories\)

View:

- `<%= %>` vs `<% %>`
- `<%= yield %>`

---

## External Resources

- [Stateless Requests](https://stackoverflow.com/questions/13200152/why-say-that-http-is-a-stateless-protocol)
- [Corneal](https://github.com/thebrianemory/corneal)
- [ERB Shorcut Package on Atom](https://atom.io/packages/rails-snippets)
- [Restular](http://www.restular.com/)
