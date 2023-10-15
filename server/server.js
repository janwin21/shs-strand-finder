require("dotenv").config();
require("express-async-errors");

const express = require("express");
const Connect = require("./database/Connection");
const app = express();

// ROUTES
const testRoute = require("./router/testRoute");
const userRoute = require("./router/userRoute");
const subjectTypeRoute = require("./router/subjectTypeRoute");
const subjectRoute = require("./router/subjectRoute");
const strandTypeRoute = require("./router/strandTypeRoute");
const strandSubjectRoute = require("./router/strandSubjectRoute");
const strandRoute = require("./router/strandRoute");
const selectedStrandRoute = require("./router/selectedStrandRoute");
const selectedPERoute = require("./router/selectedPERoute");
const questionRoute = require("./router/questionRoute");
const peRoute = require("./router/peRoute");
const blocklistTokenRoute = require("./router/blocklistTokenRoute");
const answerRoute = require("./router/answerRoute");
const answerKeyRoute = require("./router/answerKeyRoute");

// ROUTES => PAGES
const resultRoute = require("./router/page/resultRoute");

// IMPORT DB TEST
const User = require("./model/users");

// ERROR HANDLING

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MAIN MIDDLEWARE
app.use("/shs-strand-finder/test", testRoute);
app.use("/shs-strand-finder/api/V1.0.0/user", userRoute);
app.use("/shs-strand-finder/api/V1.0.0/subjectType", subjectTypeRoute);
app.use("/shs-strand-finder/api/V1.0.0/subject", subjectRoute);
app.use("/shs-strand-finder/api/V1.0.0/strandType", strandTypeRoute);
app.use("/shs-strand-finder/api/V1.0.0/strandSubject", strandSubjectRoute);
app.use("/shs-strand-finder/api/V1.0.0/strand", strandRoute);
app.use("/shs-strand-finder/api/V1.0.0/selectedStrand", selectedStrandRoute);
app.use("/shs-strand-finder/api/V1.0.0/selectedPE", selectedPERoute);
app.use("/shs-strand-finder/api/V1.0.0/question", questionRoute);
app.use("/shs-strand-finder/api/V1.0.0/pe", peRoute);
app.use("/shs-strand-finder/api/V1.0.0/blocklistToken", blocklistTokenRoute);
app.use("/shs-strand-finder/api/V1.0.0/answer", answerRoute);
app.use("/shs-strand-finder/api/V1.0.0/answerKey", answerKeyRoute);

// MIDDLEWARE => PAGES
app.use("/shs-strand-finder/api/V1.0.0/result", resultRoute);

// LISTEN
const PORT = process.env.SHS_PORT;
const DB_URL = process.env.SHS_DATABASE_URL;

// CONNECTION
const connection = new Connect(DB_URL);

app.listen(PORT, async () => {
  console.log(`listen on server ${PORT}`);
  connection.connect(() => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  });
});
