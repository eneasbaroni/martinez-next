const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'http://localhost:3000'; //editar y colocar la url de produccion
//export const server = dev ? 'http://localhost:3000' : 'https://your_live_url'; //editar y colocar la url de produccion