const router = require("express").Router();

const db = require("../model/exercise");
//api routes
router.get("/api/workouts", (q, r) => {
	db.find()
    .then((res) => {
        r.json(res);
    })
    .catch((e) => {
        r.json(e);
    });
});

router.get("/api/workouts/range", (q, r) => {
	db.find()
    .then((res) => {
        r.json(res);
    })
    .catch((e) => {
        r.json(e);
    });
});

router.post("/api/workouts", ({ body }, r) => {
	db.create(body)
		.then((res) => {
			r.json(res);
		})
		.catch((e) => {
			r.json(e);
		});
});

router.put("/api/workouts/:id", ({ body, params }, r) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((res) => {
        r.json(res);
    })
    .catch((e) => {
        r.json(e);
    });
});
//end api routes

//exports module
module.exports = router;