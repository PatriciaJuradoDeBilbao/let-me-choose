# Let me choose 
Proyecto final para Ironhack.

## Backend Routes

| Method | Path | Description |
|:-------:|:---:|:-----------|
| GET | /api/ | Muestra la página principal |

#### Auth Routes:
| Method | Path | Description | Comment |
|:-------:|:-----:|:-----------|:-----------|
| GET | /api/signup | Muestra formulario de registro de usuarios | ejemplo no tiene get |
| POST | /api/signup | Guarda nuevo usuario en la base de datos. |
| GET | /api/login | Muestra el formulario de inicio de sesión. | ejemplo no tiene get |
| POST | /api/login | Muestra la vista del perfil |
| GET | /api/logout | Muestra la vista de página principal | ejemplo no tiene get si no post |
| GET | /api/loggedin | Muestra saludo en navbar? |
| GET | /api/profile | Muestra la vista del perfil | ejemplo esta ruta en back no esta, es solo de front? |

#### Restaurants Routes:
| Method | Path | Description | Comment |
|:-------:|:-----:|:-----------|:-----------|
| GET | /api/restaurants | Muestra la vista de todos los restaurantes |
| GET | /api/restaurants/new | Muestra el formulario para añadir un nuevo rest | no hace falta?
| POST | /api/restaurants/new | Guarda el nuevo rest en la base de datos. |
| GET | /api/restaurants/edit?id=xxx | Muestra el formulario para editar un rest | no hace falta?
| POST | /api/restaurants/edit?id=xxx | Guarda los cambios realizados en la base de datos.  | uso put?
| GET | /api/restaurants/delete?id=xxx | Elimina un restaurant de la base de datos | uso delete?
| GET | /api/restaurants/details/:id | Muestra los detalles del restaurant |

#### Comments Routes:
| Method | Path | Description | Comment |
|:-------:|:-----|:-----------|:-----------|
| POST | /api/restaurants/details/:id/comment | Crea un nuevo comentario en el restaurante seleccionado |
| GET | /api/restaurants/details/:id/comment/edit/:id | Muestra el formulario para editar un comentario  | esta ruta es de front nada mas?
| POST | /api/restaurants/details/:id/comment/edit/:id | Guarda los cambios realizados en la base de datos. | uso put?
| POST | /api/restaurants/delete/:id | Elimina el comentario de la base de datos | uso delete?

## Frontend Routes
| Path | Description |
|:-----|:-----------|
| / | Muestra página principal con breve descripcion de aplicacion y boton a restaurant |
| /login | Muestra el formulario de inicio de sesión |
| /signup | Muestra formulario de registro |
| /profile | Muestra el perfil con lista de fav, want, myReview, myRest |
| /restaurants | Muestra el lista de todos los restaurantes |
| /restaurants/new | Muestra el formulario para añadir uno nuevo |
| /restaurants/details/:id | Muestra los detalles del restaurant  |
| /restaurants/edit?id=xxx | Muestra el formulario para editar el restaurant |
| /restaurants/details/:id/comment | Muestra el formulario para escribir un comentario |
| /restaurants/details/:id/comment/edit/id | Muestra el formulario para editar el comentario |

## Models

#### User model
```javascript
{
    name: String,
    username: String,
    email: String,
    password: String,
    avatar: String,
    myReview: {type: Schema.Types.ObjectId, ref: 'Comment'},
    myRestaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'}
}
```
#### Restaurant model
```javascript
{
    name: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {
        type: String,
        enum: ['Italiana', 'Asiática', 'Venezolana', 'India', 'Mexicana', 'Mediterránea', 'Saludable', 'Árabe', 'Americana', 'Vegetariana']
    },
    price: {
        type: String,
        enum: ['Asequible(€)', 'Moderado(€€)', 'Caro(€€€)', 'Muy caro(€€€€)']
    },
    direction: String,
    // tienen el myReview?

}
```
#### Comment model
```javascript
{
    /* user picture & name */
    content: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    rating: {
        type: Number,
        enum: ['1', '2', '3', '4', '5']
    },
    myRestaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'}
}
```
## Components
* App - home (clase)

* UI / Navbar (clase)
* Login (clase)
* Sign up (clase)
* Profile (funcional?)
* Restaurants list (clase)
* Restaurant Card (funcional)
* Restaurant form ADD (clase) uno solo
* Restaurant form EDIT (clase) ?
* Restaurant details (clase)
* Restaurant comment form ADD (clase) uno solo
* Restaurant comment form EDIT (clase) ?
* Footer (clase)
* MyFav ? mismo componente rehusable para c/u metido en profile
* MyReview ?
* MyRestaurants ?