const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Swagger configuration
const swaggerOptions = {   
    swaggerDefinition: {

        info: {
            title: 'Food Service API',
            description: 'API documentation for the Food Service application',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'User ID'
                        },
                        name: {
                            type: 'string',
                            description: 'User name'
                        },
                        email: {
                            type: 'string',
                            description: 'User email'
                        }
                    },
                    required: ['id', 'name', 'email']
                }
            }
        },tags: [
            {
                name: 'Users',
                description: 'User management'
            }
        ]
    }, 
    
    apis: ['./src/routes/*.js'], // Path to the API docs
};
console.log(swaggerOptions)
const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = (app)  =>{
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
