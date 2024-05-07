const controller = {
  "/home": (req, res) => {
    res.end("Home page");
  },
  "/contacts": (req, res) => {
    res.end("Contacts page");
  },
  "/404": (req, res) => {
    res.end("Page not found");
  },
};

const getControllerMethod = (url) => {
  switch (url) {
    case "/home": {
      return (req, res) => {
        res.end("Home page");
      };
    }
    case "/contacts": {
      return (req, res) => {
        res.end("Contacts page");
      };
    }
    default: {
      return (req, res) => {
        res.end("Page not found");
      };
    }
  }
};
module.exports = controller;
