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
        loc: {
            street: 'Calle de San Bernardo, 86, 28015, Madrid',
            coordinates: [40.428672, -3.705865]
        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/9d/a9/65/entrada.jpg',
        name: 'Piccola Napoli',
        type: 'Italiana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Palencia, 29, 28020 Madrid',
            coordinates: [40.449808, -3.701397]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/861/394861/source/davanti-food-market-vista-sala-bc5e4.jpg',
        name: 'Davanti Food & Market',
        type: 'Italiana',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle de Augusto Figueroa, 41, 28004 Madrid',
            coordinates: [40.422096, -3.696836]

        }
    },
    {
        imageUrl: 'https://i1.wp.com/quehacerhoyenmadrid.com/wp-content/uploads/2019/11/IMG_9821.jpg?fit=1242%2C1294&ssl=1',
        name: 'Pizzaiolo',
        type: 'Italiana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Hortaleza, 84, 28004 Madrid',
            coordinates: [40.423707, -3.698538]

        }
    },
    {
        imageUrl: 'https://lamadridmorena.files.wordpress.com/2017/08/grosso-napoletano-1.jpg',
        name: 'Grosso Napoletano',
        type: 'Italiana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle, Paseo de la Habana, 27, 28036 Madrid',
            coordinates: [40.451288, -3.686658]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/d6/53/43/street-view.jpg',
        name: 'La Tagliatella',
        type: 'Italiana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Preciados, 36, 28013 Madrid',
            coordinates: [40.419752, -3.706800]

        }
    },
    {
        imageUrl: 'https://maridajegourmetymas.com/wp-content/uploads/2014/11/ARS_VIVENDI_MARIDAJEGOURMETYMAS.jpg',
        name: 'Ars Vivendi',
        type: 'Italiana',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle de Zurbano, 6, 28010 Madrid',
            coordinates: [40.427210, -3.693706]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/30/9e/df/casa-de-jiang-fachada.jpg',
        name: 'Casa Jiang',
        type: 'Asiática',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Hortaleza, 21, 28004 Madrid',
            coordinates: [40.421668, -3.700176]

        }
    },
    {
        imageUrl: 'https://www.somosmalasana.com/wp-content/uploads/2015/02/IMG_20150218_185103934-e1424302640777.jpg',
        name: 'Ni Hao',
        type: 'Asiática',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Silva, 20, 28004 Madrid',
            coordinates: [40.421393, -3.705814]

        }
    },
    {
        imageUrl: 'https://unbuendiaenmadrid.com/wp-content/uploads/2016/06/DSC_0779_opt.jpg',
        name: 'Casa Lafu',
        type: 'Asiática',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de la Flor Baja, 1, 28013 Madrid',
            coordinates: [40.421975, -3.709439]

        }
    },
    {
        imageUrl: 'https://www.gastronomistas.com/wp-content/uploads/lamian_soy_kitchen_madrid_002.jpg',
        name: 'Lamian',
        type: 'Asiática',
        price: 'Moderado(€€)',
        loc: {
            street: 'Plaza de los Mostenses, 4, 28015 Madrid',
            coordinates: [40.423592, -3.708918]

        }
    },
    {
        imageUrl: 'https://comercongusto.es/wp-content/uploads/2017/06/Asia-Gallery-Entrada.jpg',
        name: 'Asian Gallery',
        type: 'Asiática',
        price: 'Muy caro(€€€€)',
        loc: {
            street: 'Plaza de las Cortes, 7, 28014 Madrid',
            coordinates: [40.415450, -3.695763]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/66/fd/img-20170320-142858-largejpg.jpg',
        name: 'Fang',
        type: 'Asiática',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Embajadores, 186, 28045 Madrid',
            coordinates: [40.393208, -3.694308]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/05/21/cb/b5/getlstd-property-photo.jpg',
        name: 'Yoshi - Sushi & Japanese Grill',
        type: 'Asiática',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Gravina, 17, 28004 Madrid',
            coordinates: [40.422846, -3.696984]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/923/66923/source/ninja-ramen-vista-entrada-56b87.jpg',
        name: 'Ninja Ramen',
        type: 'Asiática',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle Barceló, 1, 28004 Madrid',
            coordinates: [40.426455, -3.701099]

        }
    },
    {
        imageUrl: 'https://www.restauranthotelbar.com/fotos/4/sumo_restaurante23.jpg',
        name: 'SUMO',
        type: 'Asiática',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Fuencarral, 116, 28010 Madrid',
            coordinates: [40.429760, -3.702460]

        }
    },
    {
        imageUrl: 'https://comerjapones.com/restaurantes/gra/img/restaurantes/espana/dokidoki/foto%20fachada.jpg',
        name: 'Doki Doki',
        type: 'Asiática',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle Villalar, 4, 28001 Madrid',
            coordinates: [40.421030, -3.689809]

        }
    },
    {
        imageUrl: 'https://cdn.restaurantes.com/static/img/restaurants/863/86336/86336_622.jpg',
        name: 'Arepa Olé - Chueca',
        type: 'Venezolana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Pelayo, 2, 28004 Madrid',
            coordinates: [40.421744, -3.699154]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/869/497869/source/apartaco-vista-sala-cb2bd.jpg',
        name: 'Apartaco',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Luchana, 7, 28010 Madrid',
            coordinates: [40.429721, -3.701345]

        }
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtDOlJDODaaeJlVlb_RnpFrNf9NbGcx9_6c56RgBd_-LIaIUS2&usqp=CAU',
        name: 'Empandish',
        type: 'Venezolana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Azcona, 36, 28002 Madrid',
            coordinates: [40.434126, -3.669384]

        }
    },
    {
        imageUrl: 'https://www.theblegger.com/sites/default/files/La%20Candalita%20Front.JPG',
        name: 'La Candelita',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle del Barquillo, 30, 28004 Madrid',
            coordinates: [40.422723, -3.695541]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/633/297633/source/tepizzare-vista-sala-5a9ef.jpg',
        name: 'Tepizzare',
        type: 'Venezolana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Ventura de la Vega, 15, 28014 Madrid',
            coordinates: [40.415311, -3.698932]

        }
    },
    {
        imageUrl: 'https://cdn.restaurantes.com/static/img/restaurants/197/1976/1976_1740.gl.jpg',
        name: 'Taj Indian',
        type: 'India',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle del Marqués de Cubas, 6, 28014 Madrid',
            coordinates: [40.417227, -3.695668]

        }
    },
    {
        imageUrl: 'https://www.neo2.com/wp-content/uploads/Restaurante_Benares_Madrid_02.jpg',
        name: 'Benares',
        type: 'India',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle de Zurbano, 5, 28010 Madrid',
            coordinates: [40.427606, -3.693890]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/cd/73/60/calle-nunez-de-arce-15.jpg',
        name: 'Taste of India',
        type: 'India',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Núñez de Arce, 15, 28012 Madrid',
            coordinates: [40.415095, -3.701097]

        }
    },
    {
        imageUrl: 'https://madriddiferente.com/wp-content/uploads/2017/04/SURYA-sofa-mesas-y-butacasjpg-770x466.jpg',
        name: 'Surya - Callao',
        type: 'India',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Tudescos, 4, 28004 Madrid',
            coordinates: [40.421103, -3.705434]

        }
    },
    {
        imageUrl: 'https://venganzamalinche.com/wp-content/uploads/jardines_restaurante_mexicano_madrid.jpg',
        name: 'La Venganza de Malinche',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de los Jardines, 5, 28013 Madrid',
            coordinates: [40.419022, -3.701363]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/f9/a4/b0/taqueria-mi-ciudad-from.jpg',
        name: 'Taquería Mi Ciudad',
        type: 'Mexicana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de las Fuentes, 11, 28013 Madrid',
            coordinates: [40.417383, -3.708716]

        }
    },
    {
        imageUrl: 'https://s1.eestatic.com/2019/05/24/invertia/empresas/Hosteleria_y_restauracion-Empresas_400972245_123733351_1024x576.jpg',
        name: 'Tierra Burrito',
        type: 'Mexicana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Bravo Murillo, 107, 28039 Madrid',
            coordinates: [40.447986, -3.705052]

        }
    },
    {
        imageUrl: 'https://console.listae.com/files/2019/05/restaurante_la_chamana_madrid.jpg',
        name: 'La Chamana',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de las Navas de Tolosa, 7, 28013 Madrid',
            coordinates: [40.419106, -3.706982]

        }
    },
    {
        imageUrl: 'https://www.infoceliaco.com/images/stories/infoceliaco/2017/LaMordida.jpg',
        name: 'La Mordida - Princesa',
        type: 'Mexicana',
        price: 'Moderado(€€)',
        loc: {
            street: 'C. de la Princesa, 3, 28008 Madrid',
            coordinates: [40.419098, -3.706998]

        }
    },
    {
        imageUrl: 'https://3.bp.blogspot.com/-fMP2zaxbHOU/VA3nutSpnkI/AAAAAAAABEw/qdhV82XGBMY/s1600/SUS%2B2.JPG',
        name: 'Entre Suspiro y Suspiro',
        type: 'Mexicana',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle de los Caños del Peral, 3, 28013 Madrid',
            coordinates: [40.418668, -3.709067]

        }
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbCWT_PqULJ0dmLFVPZVVC4QQfRx3BRuExa7VURYHNaYhPl9hC&usqp=CAU',
        name: 'Arrocería Meditarráneo',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        loc: {
            street: 'Paseo de la Habana, 33, 28036 Madrid',
            coordinates: [40.453052, -3.685180]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/15/55/b1/photo0jpg.jpg',
        name: 'La Sirena Verde',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        loc: {
            street: 'C/ Gran Vía, 62, 28013 Madrid',
            coordinates: [40.422210, -3.708351]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/ab/7f/a3/img-20180417-201638-555.jpg',
        name: 'Nomade',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Segovia, 17, 28005 Madrid',
            coordinates: [40.413777, -3.712387]

        }
    },
    {
        imageUrl: 'https://www.gastroeconomy.com/wp-content/uploads/2012/07/Restaurante-Sando-by-Arzak-Instructions-120.jpg',
        name: 'Sandó',
        type: 'Mediterránea',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Isabel la Católica, 2, 4, 28013 Madrid',
            coordinates: [40.420868, -3.708880]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b6/eb/dc/exterior.jpg',
        name: 'Badila',
        type: 'Mediterránea',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de San Pedro Martir, 6, 28012 Madrid',
            coordinates: [40.411806, -3.703782]

        }
    },
    {
        imageUrl: 'https://t1.salir.ltmcdn.com/es/places/4/7/9/img_31974_la-opera-de-madrid_4_600.jpg',
        name: 'La Ópera de Madrid',
        type: 'Mediterránea',
        price: 'Caro(€€€)',
        loc: {
            street: 'Calle de la Amnistia, 5, 28013 Madrid',
            coordinates: [40.417100, -3.710542]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/e6/a2/ed/exterior-del-restaurante.jpg',
        name: 'Abolea',
        type: 'Saludable',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Sandoval, 10, 12, 28010 Madrid',
            coordinates: [40.430097, -3.703893]

        }
    },
    {
        imageUrl: 'https://www.vidademadrid.com/es/wp-content/uploads/2017/10/la-huerta-de-almeria.jpg',
        name: 'La Huerta de Almería',
        type: 'Saludable',
        price: 'Asequible(€)',
        loc: {
            street: 'Corredera Baja de San Pablo, 47, 28004 Madrid',
            coordinates: [40.423202, -3.702902]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/q_auto,f_auto,w_612,h_344/restaurant_photos/860/62860/169/612/magasand-columela-entrada-3d789.jpg',
        name: 'Magasand',
        type: 'Saludable',
        price: 'Asequible(€)',
        loc: {
            street: 'Travesía de San Mateo, 16, 28004 Madrid',
            coordinates: [40.424808, -3.697427]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d3/69/37/entrada.jpg',
        name: 'Frutas Prohibidas',
        type: 'Saludable',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle del Conde Duque, 26, 28015 Madrid',
            coordinates: [40.427443, -3.710339]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/2a/ac/97/ohana-oasis.jpg',
        name: 'Ohanasana',
        type: 'Saludable',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle del Barquillo, 34, 28004 Madrid',
            coordinates: [40.422971, -3.695522]

        }
    },
    {
        imageUrl: 'https://ecovamos.com/wp-content/uploads/2017/07/Punto-Vegano-Restaurantes-Vegetarianos-en-Ca%CC%81ceres-Espan%CC%83a-Ecovamos.com_.jpg',
        name: 'Punto Vegano',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Luisa Fernanda, 27, 28008 Madrid',
            coordinates: [40.424809, -3.715743]

        }
    },
    {
        imageUrl: 'https://console.listae.com/files/2015/06/restaurante_vega_madrid_vegano.jpg',
        name: 'VEGA',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de la Luna, 9, 28004 Madrid',
            coordinates: [40.422309, -3.706137]

        }
    },
    {
        imageUrl: 'https://1.bp.blogspot.com/-EkQTYTn4uOo/Vs2PHhh1huI/AAAAAAAAAS4/5q4ENHjfYHM/s1600/img_20150603_204721.jpg',
        name: 'B13 bar',
        type: 'Vegetariana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de la Ballesta, 13, 28004 Madrid',
            coordinates: [40.421895, -3.703493]

        }
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOGikMPgHDb4EHyP5saOuA8iwhEYMH0lokZL68F=s1600-h1295',
        name: 'Yerbabuena',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Bordadores, 3, 28013 Madrid',
            coordinates: [40.416369, -3.707836]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/55/b6/45/fachada.jpg',
        name: 'La Encomienda',
        type: 'Vegetariana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de la Encomienda, 19, 28012 Madrid',
            coordinates: [40.410559, -3.705985]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/06/b9/d4/a4/getlstd-property-photo.jpg',
        name: 'La Libanesa',
        type: 'Árabe',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Jacometrezo, 15, 28013 Madrid',
            coordinates: [40.420099, -3.707414]

        }
    },
    {
        imageUrl: 'https://www.mygon.com/ImageAdapterV2/shop/16610/shopimage_4.jpg',
        name: 'Byblos',
        type: 'Árabe',
        price: 'Asequible(€)',
        loc: {
            street: 'Corredera Baja de San Pablo, 4, 28004 Madrid',
            coordinates: [40.421693, -3.704646]

        }
    },
    {
        imageUrl: 'https://directoriohalal.com/wp-content/uploads/job-manager-uploads/main_image/2018/12/MADRESFUNF01-1-960x640.jpg',
        name: 'Fun Falafel',
        type: 'Árabe',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Jacometrezo, 9, 28013 Madrid',
            coordinates: [40.420044, -3.706948]

        }
    },
    {
        imageUrl: 'https://www.atrapalo.com/common/photo/res/42009/154289/ticr_0_0.jpg',
        name: 'Al Mounia',
        type: 'Árabe',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Recoletos, 5, 28001 Madrid',
            coordinates: [40.422271, -3.690540]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/07/5c/67/2c/foodtruck.jpg',
        name: 'Food Truck',
        type: 'Americana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de San Lucas, 11, 28004 Madrid',
            coordinates: [40.423759, -3.696214]

        }
    },
    {
        imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/725/281725/source/mad-grill-vista-entrada-2288b.jpg',
        name: 'Mad Grill',
        type: 'Americana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Campoamor, 13, 28004 Madrid',
            coordinates: [40.426408, -3.695634]

        }
    },
    {
        imageUrl: 'https://www.vidademadrid.com/es/wp-content/uploads/2016/05/la-casa-tomada-madrid-01.jpg',
        name: 'La Casa Tomada',
        type: 'Americana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de San Lorenzo, 9, 28004 Madrid',
            coordinates: [40.425253, -3.698977]

        }
    },
    {
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/2b/fb/ff/cabana-en-chueca.jpg',
        name: 'Burger Shack',
        type: 'Americana',
        price: 'Asequible(€)',
        loc: {
            street: 'Calle de Augusto Figueroa, 32, 28004 Madrid',
            coordinates: [40.421917, -3.696697]

        }
    },
    {
        imageUrl: 'https://www.barrioletras.com/wp-content/uploads/2018/12/tony.jpg',
        name: 'Tony Roma\'s',
        type: 'Americana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle del Prado, 4, 28014 Madrid',
            coordinates: [40.414472, -3.699733]

        }
    },
    {
        imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/02/13/15500739922405.jpg',
        name: 'Trikki',
        type: 'Americana',
        price: 'Moderado(€€)',
        loc: {
            street: 'Calle de Sta Engracia, 109, 28010 Madrid',
            coordinates: [40.437533, -3.700069]

        }
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
                            }, {
                                new: true
                            })
                            const updateRestaurant = Restaurant.findByIdAndUpdate(comment.myRestaurant, {
                                $push: {
                                    myReviews: commentCreated._id
                                }
                            }, {
                                new: true
                            })

                            return Promise.all([updateUser, updateRestaurant])
                        })
                        .then(() => console.log("Creados correctamente"))
                        .catch((err) => console.log("Error :( ", err))
                };
            })
            .catch(err => console.log(`Ha ocurrido un error: ${err}`))

    })
    .catch(err => console.log(`Ha ocurrido un error: ${err}`))