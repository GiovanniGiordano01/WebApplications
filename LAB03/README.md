API DESIGN

# retrieve the list of all the available films

HTTP Method: GET

URL: /api/films

Description: retrieve the list of all the films

Response: 200 OK (success) or 500 Internal server error (error)

Response body:
[
    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":2024-03-10,
        userId:1
    },
    ... 
]


# rtrieve a list of films that fullfill all the following filters:
# All the favorite films.

HTTP Method: GET

URL: /api/films/favorites

Description: retrieve the list of all the favorite films

Response: 200 OK (success) or 500 Internal server error (error)

Response body:
[
    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":2024-03-10,
        userId:1
    },
    ... 
]

# All the best films (i.e., those rated 5 out of 5).

HTTP Method: GET

URL: /api/films/bests

Description: retrieve the list of all the best films (rating=5)

Response: 200 OK (success) or 500 Internal server error (error)

Response body:
[
    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":2024-03-10,
        userId:1
    },
    ... 
]
# All the films seen in the last month.

HTTP Method: GET

URL: /api/films/favorites

Description: retrieve the list of all the films seen on the last month

Response: 200 OK (success) or 500 Internal server error (error)

Response body:
[
    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":2024-03-10,
        userId:1
    },
    ... 
]
# All the unseen films (i.e., the films without a specified “watchDate”).

HTTP Method: GET

URL: /api/films/unseen

Description: retrieve the list of all the films that are yet to be seen

Response: 200 OK (success) or 500 Internal server error (error)

Response body:
[
    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":NULL,
        userId:1
    },
    ... 
]




# retrieve a specific film, given its <id>

HTTP Method: GET

URL: /api/films/<id>

Description: retrieve a specific movie, given its <id>

Response: 200 OK (success) or 500 Internal server error (error) or 404 not found (wrong id)

Response body:

    {
        "id": 1,
        "title": Pulp Fiction,
        "isFavorite":1,
        "rating":5,
        "WatchDate":2024-03-10,
        userId:1
    }


# create a new film

HTTP Method: POST

URL: /api/films

Description: create a new film

Request body:

    {
        "title": Toy Story,
        "isFavorite":1,
        "rating":4,
        "WatchDate":2024-03-25,
        userId:1
    }

Response: 201 CREATED (success) or 503  service unavailable (error) or 422 unprocessable entity (validation error)

Response body: none

# update an existing film

HTTP Method: PUT

URL: /api/films/<id>

Description:  update an already existing film with id=<id>

Request body:

    {
        "title": Toy Story,
        "isFavorite":1,
        "rating":4,
        "WatchDate":2024-03-25,
        userId:1
    }

Response: 200 OK (success) or 503  service unavailable (error) or 422 unprocessable entity (validation error) or 404 not found (wrong id)

Response body: none

# update the rating of a specific film

HTTP Method: PUT

URL: /api/films/ratings/<id>

Description:  update an the rating of an already existing film with id=<id>

Request body:
    {
        "rating":4,
    }

Response: 200 OK (success) or 503  service unavailable (error) or 422 unprocessable entity (validation error) or 404 not found (wrong id)

Response body: none

# mark an existing film as favorite/unfavorite

HTTP Method: PUT

URL: /api/films/favorites/<id>

Description:  mark an existing film with id=<id> as favorite

Request body: none

Response: 200 OK (success) or 503  service unavailable (error) or 422 unprocessable entity (validation error) or 404 not found (wrong id)

Response body: none

# delete an existing film

HTTP Method: DELETE

URL: /api/films/<id>

Description:  udelete the film with id=<id>

Request body:

    {
        "id": <id>
    }

Response: 200 OK (success) or 503  service unavailable (error) or 422 unprocessable entity (validation error) or 404 not found (wrong id)

Response body: none



