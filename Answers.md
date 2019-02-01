1.  Explain the differences between `client-side routing` and `server-side routing`.
    The biggest fundamental difference between server-side routing and client-side routing is that server-side will refresh the page with every request and will, as a result, have to re-render the entire page along with all of its DOM elements, etc... every time a request is made, which can cause slow speeds for a robust or heavy site. Client-side routing, by contrast, will utilize the Component architecture of React along with state to load only the portions of data that a user needs, rather than refreshing the entire page, which often results in much faster speeds. Most other differences between server and client-side routing stem from this fundamental difference between them.

2.  What does HTTP stand for?
    Hyper Text Transfer Protocol

3.  What does CRUD stand for?
    Create, Read, Update, Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    POST requests Create, GET requests Read, PUT requests Update, and DELETE requests... Delete(That one is really so anticlimactic every time)

5.  Mention three tools we can use to make AJAX requests
    We can use the fetch API, we can use a library like axios, or we can use jQuery (among a host of other options).
