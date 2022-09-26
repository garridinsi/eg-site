const settings = {
  name: "awsm",
  state: {
    frontity: {
      url: "https://enekogarrido.com",
      title: "Eneko Garrido",
      description: "Desarrollador web",
    },
  },
  packages: [
    {
      name: "@awsmin/f1",
      state: {
        theme: {
          menu: [
            ["Inicio", "/"],
            ["Blog", "/blog"],
            ["Porfolio", "/porfolio"],
            ["Contacto", "/contacto"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://enekogarrido.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
