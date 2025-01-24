const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {   
    swaggerDefinition: {
        openapi: "3.0.0",
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
                        },
                        password: {
                            type: 'string',
                            description: 'User password'
                        },employeeId: {
                            type: 'string',
                            description: 'Employee ID'
                        },

                    },
                    required: [ 'name', 'email', 'password',"employeeId"]
                },
                BookMeal : {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'Meal ID'
                        },
                        employeeId: {
                            type: 'string',
                            description: 'Employee ID'
                        },
                        mealType: {
                            type: 'string',
                            description: 'Meal type'
                        },
                        mealCategory: {
                            type: 'string',
                            description: 'Meal category'
                        },
                        date: {
                            type: 'string',
                            description: 'Date'
                        }
                    },
                    required: [ 'employeeId', 'mealType', 'mealCategory',"date"]}
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
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
