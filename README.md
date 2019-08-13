Demonstrates how to use nginx to reverse-proxy two services to look like they are hosted together.

* http://localhost:8080/     --> mapped to service "root"
* http://localhost:8080/foo/ --> mapped to service "foo"