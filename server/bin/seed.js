require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Restaurant = require('../models/restaurant.model')
const Comment = require('../models/comment.model')
const faker = require('faker/locale/es')
const dbName = 'let-me-choose'

mongoose.connect(`${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)



const restaurants = [

    {
        name: 'Menomale',
        type: 'Italiana',
        price: 'Asequible(€)',
        direction: 'Calle de San Bernardo, 86, 28015, Madrid'
    },
    {
        name: 'Piccola Napoli',
        type: 'Italiana',
        price: 'Asequible(€)',
        direction: 'Calle de Palencia, 29, 28020 Madrid'
    },
    {
        name: 'Davanti Food & Market',
        type: 'Italiana',
        price: 'Caro(€€€)',
        direction: 'Calle de Augusto Figueroa, 41, 28004 Madrid'
    },
    {
        name: 'Pizzaiolo',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle de Hortaleza, 84, 28004 Madrid'
    },
    {
        name: 'Grosso Napoletano',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle, Paseo de la Habana, 27, 28036 Madrid'
    },
    {
        name: 'La Tagliatella',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle de Preciados, 36, 28013 Madrid'
    },
    {
        name: 'Ars Vivendi',
        type: 'Italiana',
        price: 'Caro(€€€)',
        direction: 'Calle de Zurbano, 6, 28010 Madrid'
    },
    {
        name: 'Casa Jiang',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Hortaleza, 21, 28004 Madrid'
    },
    {
        name: 'Ni Hao',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Silva, 20, 28004 Madrid'
    },
    {
        name: 'Casa Lafu',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de la Flor Baja, 1, 28013 Madrid'
    },
    {
        name: 'Lamian',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Plaza de los Mostenses, 4, 28015 Madrid'
    },
    {
        name: 'Asian Gallery',
        type: 'Asiática',
        price: 'Muy caro(€€€€)',
        direction: 'Plaza de las Cortes, 7, 28014 Madrid'
    },
    {
        name: 'Fang',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Embajadores, 186, 28045 Madrid'
    },
    {
        name: 'Yoshi - Sushi & Japanese Grill',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de Gravina, 17, 28004 Madrid'
    },
    {
        name: 'Ninja Ramen',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle Barceló, 1, 28004 Madrid'
    },
    {
        name: 'SUMO',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de Fuencarral, 116, 28010 Madrid'
    },
    {
        name: 'Doki Doki',
        type: 'Asiática',
        price: 'Caro(€€€)',
        direction: 'Calle Villalar, 4, 28001 Madrid'
    },
    {
        name: 'Arepa Olé - Chueca',
        type: 'Venezolana',
        price: 'Asequible(€)',
        direction: 'Calle de Pelayo, 2, 28004 Madrid'
    },
    {
        name: 'Apartaco',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle de Luchana, 7, 28010 Madrid'
    },
    {
        name: 'Empandish',
        type: 'Venezolana',
        price: 'Asequible(€)',
        direction: 'Calle de Azcona, 36, 28002 Madrid'
    },
    {
        name: 'La Candelita',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle del Barquillo, 30, 28004 Madrid'
    },
    {
        name: 'Tepizzare',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle de Ventura de la Vega, 15, 28014 Madrid'
    },
    {
        name: 'Taj Indian',
        type: 'India',
        price: 'Moderado(€€)',
        direction: 'Calle del Marqués de Cubas, 6, 28014 Madrid'
    },
    {
        name: 'Benares',
        type: 'India',
        price: 'Caro(€€€)',
        direction: 'Calle de Zurbano, 5, 28010 Madrid'
    },
    {
        name: 'Taste of India',
        type: 'India',
        price: 'Asequible(€)',
        direction: 'Calle de Núñez de Arce, 15, 28012 Madrid'
    },
    {
        name: 'Surya - Callao',
        type: 'India',
        price: 'Moderado(€€)',
        direction: 'Calle de Tudescos, 4, 28004 Madrid'
    },
    {
        name: 'Venganza Malinche',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'Calle de los Jardines, 5, 28013 Madrid'
    },
    {
        name: 'Taquería Mi Ciudad',
        type: 'Mexicana',
        price: 'Asequible(€)',
        direction: 'Calle de las Fuentes, 11, 28013 Madrid'
    },
    {
        name: 'Tierra Burrito',
        type: 'Mexicana',
        price: 'Asequible(€)',
        direction: 'Calle de Bravo Murillo, 107, 28039 Madrid'
    },
    {
        name: 'La Chamana',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'Calle de las Navas de Tolosa, 7, 28013 Madrid'
    },
    {
        name: 'La Mordida - Princesa',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'C. de la Princesa, 3, 28008 Madrid'
    },
    {
        name: 'Entre Suspiro y Suspiro',
        type: 'Mexicana',
        price: 'Caro(€€€)',
        direction: 'Calle de los Caños del Peral, 3, 28013 Madrid'
    },
    {
        name: 'Arrocería Meditarráneo',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'Paseo de la Habana, 33, 28036 Madrid'
    },
    {
        name: 'La Sirena Verde',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'C/ Gran Vía, 62, 28013 Madrid'
    },
    {
        name: 'Nomade',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        direction: 'Calle de Segovia, 17, 28005 Madrid'
    },
    {
        name: 'Sandó',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'Calle de Isabel la Católica, 2, 4, 28013 Madrid'
    },
    {
        name: 'Badila',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        direction: 'Calle de San Pedro Martir, 6, 28012 Madrid'
    },
    {
        name: 'La Ópera de Madrid',
        type: 'Mediterránea',
        price: 'Caro(€€€)',
        direction: 'Calle de la Amnistia, 5, 28013 Madrid'
    },
    {
        name: 'Abolea',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Calle de Sandoval, 10, 12, 28010 Madrid'
    },
    {
        name: 'La Huerta de Almería',
        type: 'Saludable',
        price: 'Asequible(€)',
        direction: 'Calle de Sandoval, 10, 12, 28010 Madrid'
    },
    {
        name: 'Magasand',
        type: 'Saludable',
        price: 'Asequible(€)',
        direction: 'Travesía de San Mateo, 16, 28004 Madrid'
    },
    {
        name: 'Frutas Prohibidas',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Local Frutas Prohibidas, Calle del Conde Duque, 26, 28015 Madrid'
    },
    {
        name: 'Ohanasana',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Calle del Barquillo, 34, 28004 Madrid'
    },
    {
        name: 'Punto Vegano',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        direction: 'Calle de Luisa Fernanda, 27, 28008 Madrid'
    },
    {
        name: 'VEGA',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de la Luna, 9, 28004 Madrid'
    },
    {
        name: 'B13 bar',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        direction: 'Calle de la Ballesta, 13, 28004 Madrid'
    },
    {
        name: 'Yerbabuena',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de Bordadores, 3, 28013 Madrid'
    },
    {
        name: 'La Encomienda',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de la Encomienda, 19, 28012 Madrid'
    },
    {
        name: 'La Libanesa',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Calle de Jacometrezo, 15, 28013 Madrid'
    },
    {
        name: 'Byblos',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Corredera Baja de San Pablo, 4, 28004 Madrid'
    },
    {
        name: 'Fun Falafel',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Calle de Jacometrezo, 9, 28013 Madrid'
    },
    {
        name: 'Al Mounia',
        type: 'Árabe',
        price: 'Moderado(€€)',
        direction: 'Calle de Recoletos, 5, 28001 Madrid'
    },
    {
        name: 'Food Truck',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de San Lucas, 11, 28004 Madrid'
    },
    {
        name: 'Mad Grill',
        type: 'Americana',
        price: 'Moderado(€€)',
        direction: 'Calle de Campoamor, 13, 28004 Madrid'
    },
    {
        name: 'La Casa Tomada',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de San Lorenzo, 9, 28004 Madrid'
    },
    {
        name: 'Burger Shack',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de Augusto Figueroa, 32, 28004 Madrid'
    },
    {
        name: 'Tony Roma\'s',
        type: 'Americana',
        price: 'Moderado(€€)',
        direction: 'Calle del Prado, 4, 28014 Madrid'
    },
    {
        name: 'Trikki',
        type: 'Americana',
        price: 'Moderado(€€)',
        direction: 'Calle de Sta Engracia, 109, 28010 Madrid'
    }
]


const randomNum = (max) => Math.floor(Math.random() * (max - 1))


let allRest = []
let allU = []
let allRevs = []

const deleteUsers = User.deleteMany()
const deleteRestaurant = Restaurant.deleteMany()
const deleteComment = Comment.deleteMany()

Promise.all([deleteUsers, deleteRestaurant, deleteComment])
    .then(() => {

        Restaurant.create(restaurants)
            .then(allRestaurants => {
                allRest = allRestaurants
                const users = []
                for (let i = 1; i <= 30; i++) {
                    users.push({
                        name: faker.name.firstName(),
                        username: faker.internet.userName(),
                        email: faker.internet.email(),
                        password: bcrypt.hashSync('paty', salt),
                        avatar: faker.internet.avatar(),
                        myFavs: [allRestaurants[randomNum(allRest.length)]._id, allRestaurants[randomNum(allRest.length)]._id, allRestaurants[randomNum(allRest.length)]._id],
                        myWishList: [allRestaurants[randomNum(allRest.length)]._id, allRestaurants[randomNum(allRest.length)]._id, allRestaurants[randomNum(allRest.length)]._id]
                    })
                }
                return User.create(users)
            })
            .then(allUsers => {
                allU = allUsers
                for (let i = 1; i <= 150; i++) {
                    let comment = {
                        creator: allUsers[randomNum(allU.length)],
                        myRestaurant: allRest[randomNum(allRest.length)],
                        content: faker.lorem.sentences(),
                        rating: randomNum(6),
                    }

                    Comment.create(comment)
                        .then(commentCreated => {
                          const updateUser = User.findByIdAndUpdate(comment.creator, {
                                $push: {
                                    myReviews: commentCreated._id
                                }, 
                            },{new:true})
                           const updateRestaurant = Restaurant.findByIdAndUpdate(comment.myRestaurant, {
                                $push: {
                                    myReviews: commentCreated._id
                                }
                            },{new:true})

                            return Promise.all([updateUser, updateRestaurant])
                        })
                        .then(()=>console.log("Creados correctamente"))
                        .catch((err) => console.log("Error :( ", err))
                };
            })
            .catch(err => console.log(`Ha ocurrido un error: ${err}`))

    })
    .catch(err => console.log(`Ha ocurrido un error: ${err}`))