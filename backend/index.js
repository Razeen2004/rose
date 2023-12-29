const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const port = 3001;

app.use(express.json());

app.get("/admin", adminRouter);

app.get("/user", userRouter);


app.listen(port, (req, res) => {
    console.log("listening on port " + port);
});