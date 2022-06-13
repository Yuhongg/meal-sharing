const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    let titles = await knex("meals").select("title");

    const maxPrice = request.query.maxPrice;
    const availableReservations = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;

    if (availableReservations) {
      titles = await knex("meals")
        .where({ availableReservations: true })
        .select("title");
    }
    if (createdAfter) {
      titles = await knex("meal").where("created_date", "<", createdAfter);
    }
    if (title) {
      titles = await knex("meal").whereLike("title", "%");
    }
    if (maxPrice) {
      titles = await knex("meal").where("price", "<=", maxPrice);
    }
    if (limit) {
    }
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const mealId = request.params.id;
  try {
    const title = await knex("meals")
      .where({ id: mealId })
      .select("title", "idmeals");
    response.json(title);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const meal = request.body;
  try {
    const postedMeal = await knex("meal").insert(meal);
    response.json(postedMeal);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  const mealId = request.params.id;
  const meal = request.body;
  try {
    const updatedMeal = await knex("meals").where({ id: mealId }).update(meal);
    response.json(updatedMeal);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  const mealId = request.params.id;
  const meal = request.body;
  try {
    const deletedMeal = await knex("meals").where({ id: mealId }).del(meal);
    response.json(deletedMeal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
