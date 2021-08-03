/**
 * import na from './na'
 * export default Object.assign({}, na, {
 *   // TODO
 *   // mx special categories
 * })
 */

export default {
  babyproducts: [{ name: 'Bebé', order: 0 }],
  cameraphoto: [{ name: 'Cámaras y Fotografía', order: 1 }],
  consumerelectronics: [{ name: 'Electrónicos', order: 0 }],
  electronicsaccessories: [
    { name: 'Accesorios', require: ['Electrónicos'], order: 1 },
    { name: 'Smartwatches', require: ['Electrónicos'], order: 2 },
  ],
  furniture: [{ name: 'Muebles', order: 1 }],
  grocery: [{ name: 'Alimentos y Bebidas', order: 0 }],
  home: [{ name: 'Hogar y Cocina', order: 0 }],
  //  homeentertainment: [{ name: 'Cocina', order: 1 }],
  homeimprovement: [{ name: 'Herramientas y Mejoras del Hogar', order: 0 }],
  kitchen: [{ name: 'Cocina', order: 1 }],
  majorappliances: [{ name: 'Electrodomésticos', order: 1 }],
  musicalinstruments: [{ name: 'Instrumentos Musicales', order: 0 }],
  officeproducts: [{ name: 'Oficina y Papelería', order: 0 }],
  outdoors: [{ name: 'Campismo y Senderismo', order: 0 }],
  personalcomputers: [{ name: 'Computadoras, Componentes y Accesorios', order: 1 }],
  petsupplies: [{ name: 'Productos para Animales', order: 1 }],
  sports: [{ name: 'Deportes y Aire libre', order: 0 }],
  tools: [{ name: 'Herramientas Manuales y Eléctricas', order: 1 }],
  toysgames: [{ name: 'Juguetes y Juegos', order: 0 }],
  // wireless
  books: [{ name: 'Libros', order: 0 }],
  music: [{ name: 'Música', order: 0 }],
  videodvd: [
    { name: 'Video y DVD', order: 0 },
    { name: 'Películas y Series de TV', order: 0 },
  ],
  softwarevideogames: [
    { name: 'Software y Videojuegos', order: 0 },
    { name: 'Videojuegos', order: 0 },
    { name: 'Software', order: 0 },
  ],
  // amazonhmade
  // amazondeviceaccessories
  gameconsoles: [{ name: 'Consolas', require: ['Videojuegos'], order: 3 }],
  automotivepowersports: [{ name: 'Automotriz y Motocicletas', order: 0 }],
  beauty: [{ name: 'Belleza', order: 0 }],
  beerwinespirits: [{ name: 'Cervezas, Vinos y Licores', order: 1 }],
  healthpersonalcare: [{ name: 'Salud y Cuidado Personal', order: 0 }],
  // personalcareappliances: [{ name: '', order: 0 }],
  clothingshoesaccessories: [{ name: 'Ropa, Zapatos y Accesorios', order: 1 }],
  luggage: [{ name: 'Bolsas, Maletas y Accesorios de Viaje', order: 1 }],
  watches: [{ name: 'Relojes', order: 3 }],
  jewelry: [{ name: 'Joyería', order: 3 }],
  businessindustrialscientific: [{ name: 'Industria, Empresas y Ciencia', order: 0 }],
}
// Sports et Plein air
