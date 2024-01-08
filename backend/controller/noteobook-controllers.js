const Notebook = require("../models/notebook");

// [POST] handles create notebook request
// [DESC] creates a default notebook template based on the language selected
// [RETURNS] the created notebooks's id
const createNotebook = async (req, res, next) => {
  // 1. get language from request body
  const { lang, user } = req.body;
  // 2. create notebook template based on language
  const templateCode = {
    python: {
      title: "Template Notebook - python",
      code: "# Write code as you please",
    },
    javascript: {
      title: "Template Notebook - javascript",
      code: "// Write code as you please",
    },
  };
  // 3. save notebook to mongoDB
  const today = new Date();
  const newNotebook = new Notebook({
    code: templateCode[lang].code,
    title: templateCode[lang].title,
    type: lang,
    createdDate: today,
    author: { email: user.email, avatar: user.avatar },
    sharedWith: {},
    lastOpenAt: today,
  });

  console.log("Attempting to save");
  // 4. return created notebook's id back
  newNotebook.save().then((savedNotebook) => {
    const notebookId = savedNotebook._id;
    res.status(201).json({ id: notebookId });
  });

  // TBC error
};

exports.createNotebook = createNotebook;
