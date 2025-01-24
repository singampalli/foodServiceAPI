const BookMealModel = require("../models/bookMealModel");
// Function to get the count of all booked meals
exports.getBookedMealsCount = async (req, res) => {
  try {
    const count = await BookMealModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Function to get all booked meals
exports.getAllBookedMeals = async (req, res) => {
  try {
    const meals = await BookMealModel.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single booked meal by ID
exports.getBookedMealById = async (req, res) => {
  try {
    const meal = await BookMealModel.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to create a new booked meal
exports.bookAMeal = async (req, res) => {
  const meal = new BookMealModel({
    employeeId: req.body.name,
    mealType: req.body.description,
    date: req.body.date,
  });

  try {
    const newMeal = await meal.save();
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to update a booked meal by ID
exports.updateBookedMeal = async (req, res) => {
  try {
    const meal = await BookMealModel.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    meal.name = req.body.name || meal.name;
    meal.description = req.body.description || meal.description;
    meal.price = req.body.price || meal.price;
    meal.date = req.body.date || meal.date;

    const updatedMeal = await meal.save();
    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a booked meal by ID
exports.deleteBookedMeal = async (req, res) => {
  try {
    const meal = await BookMealModel.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    await meal.remove();
    res.status(200).json({ message: "Meal deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get booked meals by employee ID and date
exports.getEmployeeBookedMealByDate = async (req, res) => {
  try {
    const { employeeId, date } = req.body;
    const meals = await BookMealModel.find({ employeeId, date });
    if (meals.length === 0) {
      return res.status(404).json({ message: "No meals found for this employee on the given date" });
    }
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};