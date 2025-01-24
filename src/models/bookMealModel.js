import { MEAL_TYPES,MEAL_CATEGORIES } from '../config/constants';
const mongoose = require('mongoose');


const bookMealSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        enum: MEAL_TYPES,
        required: true
    },
    mealCategory: {
        type: String,
        enum: MEAL_CATEGORIES,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const BookMeal = mongoose.model('BookMeal', bookMealSchema);

module.exports = BookMeal;