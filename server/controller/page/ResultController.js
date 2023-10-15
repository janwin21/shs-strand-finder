// MODEL
const Answer = require("../../model/answers");
const AnswerKey = require("../../model/answer_keys");
const Question = require("../../model/questions");
const Subject = require("../../model/subjects");
const Strand = require("../../model/strands");
const StrandSubject = require("../../model/strand_subjects");

// lodash
const _ = require("lodash");

// KNN
const KNN = require("../../facade/KNN");

class ResultController {
  // READ THE RESULT BY USER ID
  async resultByUserId(req, res) {
    const { userID } = req.params;

    // Find the user's answers
    const answers = await Answer.find({ user: userID }).exec();
    const strands = await Strand.find({}).exec();
    const strandSubjects = await StrandSubject.find({}).exec();

    // Create a mapping of group.no to their corresponding values
    const groupMap = new Map();
    const newStrandSubjects = [];

    strandSubjects.forEach((strandSubject) => {
      const strandID = strandSubject.strand.toString();
      const subjectID = strandSubject.subject.toString();

      if (!groupMap.has(strandID)) {
        groupMap.set(strandID, []);
      }

      groupMap.get(strandID).push(subjectID);
    });

    // Convert the mapping into the desired format
    groupMap.forEach((values, strandID) => {
      newStrandSubjects.push({
        strandID,
        subjects: values,
      });
    });

    const answerKeyIDs = _.map(answers, "answerKey");
    const mappedAnswers = answers.map((answer) => {
      return { ...answer.toObject(), answerKey: answer.answerKey.toString() };
    });

    // Find AnswerKeys with specific IDs
    const answerKeys = await AnswerKey.find({
      _id: { $in: answerKeyIDs },
    }).exec();
    const questionIDs = _.map(answerKeys, "question");
    const uniqueQuestionIDs = _.uniq(questionIDs.map((id) => id.toString()));

    // Find Questions with specific IDs
    let questions = await Question.find({
      _id: { $in: uniqueQuestionIDs },
    }).exec();

    // Map question to w/ User answers
    questions = questions.map((question) => {
      const userAnswers = answerKeys
        .filter(
          (answerKey) =>
            answerKey.question.toString() === question._id.toString()
        )
        .map((answerKey) => answerKey._id.toString())
        .map((id) => {
          // console.log(id, mappedAnswers);
          return _.find(mappedAnswers, { answerKey: id });
        });

      return {
        subject: question.subject,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
        correct: userAnswers[0].correct,
        noOfUnVisit: userAnswers[0].noOfUnVisit,
      };
    });

    // FIND ALL SUBJECT DATA
    const subjects = await Subject.find({}).exec();
    const mappedSubjects = subjects.map((subject) => {
      let corrects = 0;
      let mistakes = 0;
      let totalNoOfUnVisit = 0;
      const subjectQuestions = questions.filter(
        (question) => subject._id.toString() === question.subject.toString()
      );

      subjectQuestions.forEach((question) => {
        if (!question.correct) mistakes++;
        else corrects++;
        totalNoOfUnVisit += question.noOfUnVisit;
      });

      const orderedQuestions = _.orderBy(
        subjectQuestions,
        ["createdAt"],
        ["asc"]
      );

      const oldestQuestion = orderedQuestions[0];
      const latestQuestion = orderedQuestions[orderedQuestions.length - 1];
      const oldestDate = new Date(oldestQuestion.createdAt);
      const latestDate = new Date(latestQuestion.createdAt);

      const differenceInMilliseconds = latestDate - oldestDate;

      return {
        _id: subject._id,
        // name: subject.name,
        // counts: subjectQuestions.length,
        // corrects,
        mistakes,
        duration: differenceInMilliseconds,
        noOfUnVisit: totalNoOfUnVisit,
      };
    });

    // KNN ALGORITHM
    const referencePoint = [0, 0, 0]; // STARTING reference point
    const k = mappedSubjects.length; // Number of nearest points to find

    // Predict using KNN
    const nearestPoints = KNN.predict(mappedSubjects, referencePoint, k);

    // Extract and order the _id along with the predicted values
    const results = nearestPoints.map((item, index) => ({
      _id: item.point._id,
      score: k - index,
      // mistakes: item.point.mistakes,
      // duration: item.point.duration,
      // noOfUnVisit: item.point.noOfUnVisit,
    }));

    // RESPONSE
    res.json({ count: mappedSubjects.length, results });
  }
}

module.exports = ResultController;
