const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// GET /api/bikes
router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "bikes"
      ORDER BY "id";
  `

  pool.query(sqlText)
    .then((dbRes) => {
      const bikes = dbRes.rows;
      res.send(bikes);
    }).catch((dbErr) => {
      console.log('Error in GET /api/bikes', dbErr);
      res.sendStatus(500);
    })
});

// POST /api/bikes
router.post('/', (req, res) => {
  const sqlText = `
    INSERT INTO "bikes"
      ("manufacturer", "model")
      VALUES
      ($1, $2);
  `;
  const sqlValues = [
    req.body.manufacturer,
    req.body.model,
  ];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    }).catch((dbErr) => {
      console.log('Error in POST /api/bikes', dbErr);
      res.sendStatus(500);
    })
});


module.exports = router;
