# Rails Review Donut Shoppe

- Create our donuts: `rails g resource Donut name sprinkles:boolean filling tasty:boolean`

  - `resource` gives us: a migration, a model, a controller, RESTful routes, and an empty views folder

- We could also accomplish this with:
  - `rails g controller Donuts`. This will give us an empty views folder and a `DonutsController`
  - `rails g model Donut name sprinkles:boolean filling:string tasty:boolean`. This will create a migration and a model
    for us.

---

- Forms
- REST: What should our routes be? How should I be thinking about my routes.

---

### MVC Architecture:

![](https://github.com/learn-co-students/nyc-web-080618/raw/master/18-REST-review-donut-shoppe/mvc_request.jpg)

---

### Mapping HTTP Verbs to CRUD and SQL:

![](https://github.com/learn-co-students/nyc-web-080618/raw/master/18-REST-review-donut-shoppe/http_crud.jpg)

---

### RESTful Routes:

![](https://github.com/learn-co-students/nyc-web-080618/raw/master/18-REST-review-donut-shoppe/RESTful_routes.png)

---

### External Resources:

- [Rails Docs on Generators](https://guides.rubyonrails.org/command_line.html#rails-generate)
- [Rails Docs on Routing](https://guides.rubyonrails.org/routing.html#resource-routing-the-rails-default)
- [Restular](http://www.restular.com/)
