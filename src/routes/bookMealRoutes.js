const express = require('express');
const bookMealController = require('../controllers/bookMealController');

const router = express.Router();

/**
 * @swagger
 * /bookMeal:
 *   get:
 *     summary: Retrieve a list of booked meals
 *     tags:
 *       - BookMeal
 *     responses:
 *       200:
 *         description: A list of booked meals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meal'
 */
router.get('/bookMeal', bookMealController.getAllBookedMeals);

/**
 * @swagger
 * /bookMeal/{id}:
 *   get:
 *     summary: Retrieve a single booked meal
 *     tags:
 *       - BookMeal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meal ID
 *     responses:
 *       200:
 *         description: A single booked meal
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookMeal'
 *       404:
 *         description: Meal not found
 */
router.get('/bookMeal/:id', bookMealController.getBookedMealById);

/**
 * @swagger
 * /bookMeal:
 *   post:
 *     summary: Book a new meal
 *     tags:
 *       - BookMeal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookMeal'
 *     responses:
 *       201:
 *         description: Meal booked successfully
 */
router.post('/bookMeal', bookMealController.bookMeal);

/**
 * @swagger
 * /bookMeal/{id}:
 *   put:
 *     summary: Update a booked meal
 *     tags:
 *       - BookMeal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookMeal'
 *     responses:
 *       200:
 *         description: Meal updated successfully
 *       404:
 *         description: Meal not found
 */
router.put('/bookMeal/:id', bookMealController.updateBookedMeal);

/**
 * @swagger
 * /bookMeal/{id}:
 *   delete:
 *     summary: Delete a booked meal
 *     tags:
 *       - BookMeal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meal ID
 *     responses:
 *       200:
 *         description: Meal deleted successfully
 *       404:
 *         description: Meal not found
 */

router.delete('/bookMeal/:id', bookMealController.deleteBookedMeal);
/**
 * @swagger
 * /bookMeal/employee:
 *   post:
 *     summary: Retrieve booked meals by employee and date
 *     tags:
 *       - BookMeal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: string
 *                 description: The employee ID
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the booked meals
 *     responses:
 *       200:
 *         description: A list of booked meals for the employee on the specified date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meal'
 *       404:
 *         description: No meals found for the specified employee and date
 */
router.post('/bookMeal/employee', bookMealController.getEmployeeBookedMealByDate);
module.exports = router;