const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const specificMeal = await knex("reservation").where({ id: id });
  response.json(specificMeal);
});

router.post("/", async (request, response) => {
  const reservation = request.body;
  const postedReservation = await knex("reservation").insert(reservation);
  response.json(postedReservation);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  const reservation = request.body;
  const updatedReservation = await knex("reservation")
    .where({ id: id })
    .update(reservation);
  response.json(updatedReservation);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const reservation = request.body;
  const deletedReservation = await knex("reservation")
    .where({ id: id })
    .del(reservation);
  response.json(deletedReservation);
});

module.exports = router;
