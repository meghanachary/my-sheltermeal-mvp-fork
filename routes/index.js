var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/establishment", async (req, res) => {
  try {
    const query = "SELECT * FROM establishment;";
    const results = await db(query);
    res.send(results.data);
  } catch (error) {
    console.error("Error getting establishment:", error);
    res.status(500).send("Error getting establishment:");
  }
});

// This is so we can access the shelters
router.get("/shelters", async (req, res) => {
  try {
    const query = "SELECT * FROM shelters;";
    const results = await db(query);
    res.send(results.data);
  } catch (error) {
    console.error("Error getting shelter:", error);
    res.status(500).send("Error getting shelter:");
  }
});

router.get("/establishment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `SELECT * FROM establishment WHERE id = ${id};`;
    const results = await db(query);
    res.send(results.data);
  } catch (error) {
    console.log("Error getting establishment by id", error);
    res.status(500).send("Error getting establishment by id");
  }
});

router.post("/establishment", async (req, res) => {
  const { name, address, area, latitude, longitude } = req.body;

  try {
    await db(
      `INSERT INTO establishment (name, address, area, latitude, longitude) VALUES ('${name}', '${address}','${area}', '${latitude}, ${longitude});`
    );
    const result = await db("SELECT * FROM establishment;");
    res.send(result.data);
  } catch (error) {
    console.error("Error adding establishment", error);
    res.status(500).send("Error adding establishment");
  }
});

router.delete("/establishment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db(`DELETE FROM establishment WHERE id = ${id};`);
    res.status(200).send("establishment was deleted successfully");
  } catch (error) {
    console.error("Failed to delete establishment:", error);
    res.status(500).send("Failed deleting establishment");
  }
});

router.get("/postmeal", async (req, res) => {
  try {
    const query = "SELECT * FROM postmeal;";
    const results = await db(query);
    res.send(results.data);
  } catch (error) {
    console.error("Error getting postmeal:", error);
    res.status(500).send("Error getting postmeal:");
  }
});

router.get("/postmeal/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `SELECT * FROM postmeal WHERE id = ${id};`;
    const results = await db(query);
    res.send(results.data);
  } catch (error) {
    console.log("Failed to get postmeal by id", error);
    res.status(500).send("Failed getting postmeal by id");
  }
});

router.post("/postmeal", async (req, res) => {
  const { restaurant_id, shelter_name, description, time_frame } = req.body;

  try {
    await db(
      `INSERT INTO postmeal (restaurant_id, shelter_name, description, is_taken,  time_frame) 
       VALUES ('${restaurant_id}', '${shelter_name}','${description}', 'false', '${time_frame}');`
    );
    const result = await db("SELECT * FROM postmeal;");
    res.send(result.data);
  } catch (error) {
    console.error("Error adding postmeal", error);
    res.status(500).send("Error adding postmeal");
  }
});

router.delete("/postmeal/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db(`DELETE FROM postmeal WHERE id = ${id};`);
    res.status(200).send("postmeal deleted successfully");
  } catch (error) {
    console.error("Error deleting postmeal:", error);
    res.status(500).send("Error deleting postmeal");
  }
});

router.get("/restaurants", async (req, res) => {
  let { area } = req.query;

  try {
    let query;
    if (typeof area === "undefined" || area === "") {
      // No area specified, fetch all restaurants
      query = `SELECT * FROM establishment;`;
    } else {
      // Area specified, fetch restaurants for that area
      query = `SELECT * FROM establishment WHERE area = '${area}';`;
    }
    console.log("Query:", query);
    const results = await db(query);
    console.log("results:", results);
    if (results.data.length === 0) {
      console.log("No restaurants found with area:", area);
      res.status(404).send("Restaurant not found");
    } else {
      const restaurantData = results.data;
      console.log("Restaurant data:", restaurantData);
      res.send(restaurantData);
    }
  } catch (error) {
    console.error("Error getting restaurants:", error);
    res.status(500).send("Error getting restaurants");
  }
});

router.get("/restaurant/:id/", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `SELECT * FROM establishment WHERE id = '${id}';`;
    console.log("Query:", query);
    const results = await db(query);
    console.log("Results:", results);
    if (results.data.length === 0) {
      console.log("No restaurant found with ID:", id);
      res.status(404).send("Restaurant not found");
    } else {
      const restaurantData = results.data[0];
      console.log("Restaurant data:", restaurantData);
      res.send(restaurantData);
    }
  } catch (error) {
    console.error("Error getting restaurant:", error);
    res.status(500).send("Error getting restaurant");
  }
});

router.get("/restaurant/:id/meals", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `SELECT * FROM postmeal WHERE restaurant_id = '${id}';`;
    const results = await db(query);
    res.send(results);
  } catch (error) {
    console.error("Error getting meals for restaurant:", error);
    res.status(500).send("Error getting meals for restaurant");
  }
});

module.exports = router;
