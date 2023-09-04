import config from '../config/config.js';
import __dirname from '../server/utils.js';

const url = config.urls.urlLocal;
const ports = config.ports.prodPort;
const email = config.gmail.user;

export const swaggerOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Ecommerce ',
            version: '1.0.0',
            description: '',
            termsOfService: 'https://www.coderhouse.com/legales',
            contact: {
                name: 'Daniel Perco',
                email: email,
            },
            license: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT',
            },
        },
        servers: [
            {
                url: `${url}:${ports}`,
            },
        ],
        externalDocs: {
            description: 'Volver al sitio web',
            target: '_self',
            url: '/',
        },
    },
    apis: [
        `${__dirname}/docs/**/*.yaml`,
    ],
};
