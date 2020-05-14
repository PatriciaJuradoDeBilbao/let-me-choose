require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Restaurant = require('../models/Restaurant.model')
const Comment = require('../models/Comment.model')
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
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/60/99/5f/entrada.jpg',
        name: 'Menomale',
        type: 'Italiana',
        price: 'Asequible(€)',
        direction: 'Calle de San Bernardo, 86, 28015, Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/9d/a9/65/entrada.jpg',
        name: 'Piccola Napoli',
        type: 'Italiana',
        price: 'Asequible(€)',
        direction: 'Calle de Palencia, 29, 28020 Madrid'
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/861/394861/source/davanti-food-market-vista-sala-bc5e4.jpg',
        name: 'Davanti Food & Market',
        type: 'Italiana',
        price: 'Caro(€€€)',
        direction: 'Calle de Augusto Figueroa, 41, 28004 Madrid'
    },
    {
        imageUrl: 'https://i1.wp.com/quehacerhoyenmadrid.com/wp-content/uploads/2019/11/IMG_9821.jpg?fit=1242%2C1294&ssl=1',
        name: 'Pizzaiolo',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle de Hortaleza, 84, 28004 Madrid'
    },
    {
        imageUrl: 'https://lamadridmorena.files.wordpress.com/2017/08/grosso-napoletano-1.jpg',
        name: 'Grosso Napoletano',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle, Paseo de la Habana, 27, 28036 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/d6/53/43/street-view.jpg',
        name: 'La Tagliatella',
        type: 'Italiana',
        price: 'Moderado(€€)',
        direction: 'Calle de Preciados, 36, 28013 Madrid'
    },
    {
        imageUrl: 'https://maridajegourmetymas.com/wp-content/uploads/2014/11/ARS_VIVENDI_MARIDAJEGOURMETYMAS.jpg',
        name: 'Ars Vivendi',
        type: 'Italiana',
        price: 'Caro(€€€)',
        direction: 'Calle de Zurbano, 6, 28010 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/30/9e/df/casa-de-jiang-fachada.jpg',
        name: 'Casa Jiang',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Hortaleza, 21, 28004 Madrid'
    },
    {
        imageUrl: 'https://www.somosmalasana.com/wp-content/uploads/2015/02/IMG_20150218_185103934-e1424302640777.jpg',
        name: 'Ni Hao',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Silva, 20, 28004 Madrid'
    },
    {
        imageUrl: 'https://unbuendiaenmadrid.com/wp-content/uploads/2016/06/DSC_0779_opt.jpg',
        name: 'Casa Lafu',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de la Flor Baja, 1, 28013 Madrid'
    },
    {
        imageUrl: 'https://www.gastronomistas.com/wp-content/uploads/lamian_soy_kitchen_madrid_002.jpg',
        name: 'Lamian',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Plaza de los Mostenses, 4, 28015 Madrid'
    },
    {
        imageUrl: 'https://comercongusto.es/wp-content/uploads/2017/06/Asia-Gallery-Entrada.jpg',
        name: 'Asian Gallery',
        type: 'Asiática',
        price: 'Muy caro(€€€€)',
        direction: 'Plaza de las Cortes, 7, 28014 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/66/fd/img-20170320-142858-largejpg.jpg',
        name: 'Fang',
        type: 'Asiática',
        price: 'Asequible(€)',
        direction: 'Calle de Embajadores, 186, 28045 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/05/21/cb/b5/getlstd-property-photo.jpg',
        name: 'Yoshi - Sushi & Japanese Grill',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de Gravina, 17, 28004 Madrid'
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/923/66923/source/ninja-ramen-vista-entrada-56b87.jpg',
        name: 'Ninja Ramen',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle Barceló, 1, 28004 Madrid'
    },
    {
        imageUrl: 'https://www.restauranthotelbar.com/fotos/4/sumo_restaurante23.jpg',
        name: 'SUMO',
        type: 'Asiática',
        price: 'Moderado(€€)',
        direction: 'Calle de Fuencarral, 116, 28010 Madrid'
    },
    {
        imageUrl: 'https://comerjapones.com/restaurantes/gra/img/restaurantes/espana/dokidoki/foto%20fachada.jpg',
        name: 'Doki Doki',
        type: 'Asiática',
        price: 'Caro(€€€)',
        direction: 'Calle Villalar, 4, 28001 Madrid'
    },
    {
        imageUrl: 'https://cdn.restaurantes.com/static/img/restaurants/863/86336/86336_622.jpg',
        name: 'Arepa Olé - Chueca',
        type: 'Venezolana',
        price: 'Asequible(€)',
        direction: 'Calle de Pelayo, 2, 28004 Madrid'
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/869/497869/source/apartaco-vista-sala-cb2bd.jpg',
        name: 'Apartaco',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle de Luchana, 7, 28010 Madrid'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtDOlJDODaaeJlVlb_RnpFrNf9NbGcx9_6c56RgBd_-LIaIUS2&usqp=CAU',
        name: 'Empandish',
        type: 'Venezolana',
        price: 'Asequible(€)',
        direction: 'Calle de Azcona, 36, 28002 Madrid'
    },
    {
        imageUrl: 'https://www.theblegger.com/sites/default/files/La%20Candalita%20Front.JPG',
        name: 'La Candelita',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle del Barquillo, 30, 28004 Madrid'
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/633/297633/source/tepizzare-vista-sala-5a9ef.jpg',
        name: 'Tepizzare',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        direction: 'Calle de Ventura de la Vega, 15, 28014 Madrid'
    },
    {
        imageUrl: 'https://cdn.restaurantes.com/static/img/restaurants/197/1976/1976_1740.gl.jpg',
        name: 'Taj Indian',
        type: 'India',
        price: 'Moderado(€€)',
        direction: 'Calle del Marqués de Cubas, 6, 28014 Madrid'
    },
    {
        imageUrl: 'https://www.neo2.com/wp-content/uploads/Restaurante_Benares_Madrid_02.jpg',
        name: 'Benares',
        type: 'India',
        price: 'Caro(€€€)',
        direction: 'Calle de Zurbano, 5, 28010 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/cd/73/60/calle-nunez-de-arce-15.jpg',
        name: 'Taste of India',
        type: 'India',
        price: 'Asequible(€)',
        direction: 'Calle de Núñez de Arce, 15, 28012 Madrid'
    },
    {
        imageUrl: 'https://madriddiferente.com/wp-content/uploads/2017/04/SURYA-sofa-mesas-y-butacasjpg-770x466.jpg',
        name: 'Surya - Callao',
        type: 'India',
        price: 'Moderado(€€)',
        direction: 'Calle de Tudescos, 4, 28004 Madrid'
    },
    {
        imageUrl: 'https://venganzamalinche.com/wp-content/uploads/jardines_restaurante_mexicano_madrid.jpg',
        name: 'La Venganza de Malinche',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'Calle de los Jardines, 5, 28013 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/f9/a4/b0/taqueria-mi-ciudad-from.jpg',
        name: 'Taquería Mi Ciudad',
        type: 'Mexicana',
        price: 'Asequible(€)',
        direction: 'Calle de las Fuentes, 11, 28013 Madrid'
    },
    {
        imageUrl: 'https://s1.eestatic.com/2019/05/24/invertia/empresas/Hosteleria_y_restauracion-Empresas_400972245_123733351_1024x576.jpg',
        name: 'Tierra Burrito',
        type: 'Mexicana',
        price: 'Asequible(€)',
        direction: 'Calle de Bravo Murillo, 107, 28039 Madrid'
    },
    {
        imageUrl: 'https://console.listae.com/files/2019/05/restaurante_la_chamana_madrid.jpg',
        name: 'La Chamana',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'Calle de las Navas de Tolosa, 7, 28013 Madrid'
    },
    {
        imageUrl: 'https://www.infoceliaco.com/images/stories/infoceliaco/2017/LaMordida.jpg',
        name: 'La Mordida - Princesa',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        direction: 'C. de la Princesa, 3, 28008 Madrid'
    },
    {
        imageUrl: 'https://3.bp.blogspot.com/-fMP2zaxbHOU/VA3nutSpnkI/AAAAAAAABEw/qdhV82XGBMY/s1600/SUS%2B2.JPG',
        name: 'Entre Suspiro y Suspiro',
        type: 'Mexicana',
        price: 'Caro(€€€)',
        direction: 'Calle de los Caños del Peral, 3, 28013 Madrid'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbCWT_PqULJ0dmLFVPZVVC4QQfRx3BRuExa7VURYHNaYhPl9hC&usqp=CAU',
        name: 'Arrocería Meditarráneo',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'Paseo de la Habana, 33, 28036 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/15/55/b1/photo0jpg.jpg',
        name: 'La Sirena Verde',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'C/ Gran Vía, 62, 28013 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/ab/7f/a3/img-20180417-201638-555.jpg',
        name: 'Nomade',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        direction: 'Calle de Segovia, 17, 28005 Madrid'
    },
    {
        imageUrl: 'https://www.gastroeconomy.com/wp-content/uploads/2012/07/Restaurante-Sando-by-Arzak-Instructions-120.jpg',
        name: 'Sandó',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        direction: 'Calle de Isabel la Católica, 2, 4, 28013 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b6/eb/dc/exterior.jpg',
        name: 'Badila',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        direction: 'Calle de San Pedro Martir, 6, 28012 Madrid'
    },
    {
        imageUrl: 'https://t1.salir.ltmcdn.com/es/places/4/7/9/img_31974_la-opera-de-madrid_4_600.jpg',
        name: 'La Ópera de Madrid',
        type: 'Mediterránea',
        price: 'Caro(€€€)',
        direction: 'Calle de la Amnistia, 5, 28013 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/e6/a2/ed/exterior-del-restaurante.jpg',
        name: 'Abolea',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Calle de Sandoval, 10, 12, 28010 Madrid'
    },
    {
        imageUrl: 'https://www.vidademadrid.com/es/wp-content/uploads/2017/10/la-huerta-de-almeria.jpg',
        name: 'La Huerta de Almería',
        type: 'Saludable',
        price: 'Asequible(€)',
        direction: 'Calle de Sandoval, 10, 12, 28010 Madrid'
    },
    {
        imageUrl: 'https://www.los5mejores.com/wp-content/uploads/DSC_0479-425x6401.jpg',
        name: 'Magasand',
        type: 'Saludable',
        price: 'Asequible(€)',
        direction: 'Travesía de San Mateo, 16, 28004 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d3/69/37/entrada.jpg',
        name: 'Frutas Prohibidas',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Local Frutas Prohibidas, Calle del Conde Duque, 26, 28015 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/2a/ac/97/ohana-oasis.jpg',
        name: 'Ohanasana',
        type: 'Saludable',
        price: 'Moderado(€€)',
        direction: 'Calle del Barquillo, 34, 28004 Madrid'
    },
    {
        imageUrl: 'https://ecovamos.com/wp-content/uploads/2017/07/Punto-Vegano-Restaurantes-Vegetarianos-en-Ca%CC%81ceres-Espan%CC%83a-Ecovamos.com_.jpg',
        name: 'Punto Vegano',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        direction: 'Calle de Luisa Fernanda, 27, 28008 Madrid'
    },
    {
        imageUrl: 'https://console.listae.com/files/2015/06/restaurante_vega_madrid_vegano.jpg',
        name: 'VEGA',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de la Luna, 9, 28004 Madrid'
    },
    {
        imageUrl: 'https://1.bp.blogspot.com/-EkQTYTn4uOo/Vs2PHhh1huI/AAAAAAAAAS4/5q4ENHjfYHM/s1600/img_20150603_204721.jpg',
        name: 'B13 bar',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        direction: 'Calle de la Ballesta, 13, 28004 Madrid'
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOGikMPgHDb4EHyP5saOuA8iwhEYMH0lokZL68F=s1600-h1295',
        name: 'Yerbabuena',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de Bordadores, 3, 28013 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/55/b6/45/fachada.jpg',
        name: 'La Encomienda',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        direction: 'Calle de la Encomienda, 19, 28012 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/06/b9/d4/a4/getlstd-property-photo.jpg',
        name: 'La Libanesa',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Calle de Jacometrezo, 15, 28013 Madrid'
    },
    {
        imageUrl: 'https://www.mygon.com/ImageAdapterV2/shop/16610/shopimage_4.jpg',
        name: 'Byblos',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Corredera Baja de San Pablo, 4, 28004 Madrid'
    },
    {
        imageUrl: 'https://directoriohalal.com/wp-content/uploads/job-manager-uploads/main_image/2018/12/MADRESFUNF01-1-960x640.jpg',
        name: 'Fun Falafel',
        type: 'Árabe',
        price: 'Asequible(€)',
        direction: 'Calle de Jacometrezo, 9, 28013 Madrid'
    },
    {
        imageUrl: 'https://www.atrapalo.com/common/photo/res/42009/154289/ticr_0_0.jpg',
        name: 'Al Mounia',
        type: 'Árabe',
        price: 'Moderado(€€)',
        direction: 'Calle de Recoletos, 5, 28001 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/07/5c/67/2c/foodtruck.jpg',
        name: 'Food Truck',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de San Lucas, 11, 28004 Madrid'
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/725/281725/source/mad-grill-vista-entrada-2288b.jpg',
        name: 'Mad Grill',
        type: 'Americana',
        price: 'Moderado(€€)',
        direction: 'Calle de Campoamor, 13, 28004 Madrid'
    },
    {
        imageUrl: 'https://www.vidademadrid.com/es/wp-content/uploads/2016/05/la-casa-tomada-madrid-01.jpg',
        name: 'La Casa Tomada',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de San Lorenzo, 9, 28004 Madrid'
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/2b/fb/ff/cabana-en-chueca.jpg',
        name: 'Burger Shack',
        type: 'Americana',
        price: 'Asequible(€)',
        direction: 'Calle de Augusto Figueroa, 32, 28004 Madrid'
    },
    {
        imageUrl: 'https://www.barrioletras.com/wp-content/uploads/2018/12/tony.jpg',
        name: 'Tony Roma\'s',
        type: 'Americana',
        price: 'Moderado(€€)',
        direction: 'Calle del Prado, 4, 28014 Madrid'
    },
    {
        imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/02/13/15500739922405.jpg',
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
                for (let i = 1; i <= 250; i++) {
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