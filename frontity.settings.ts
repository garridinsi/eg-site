import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "@frontity/mars-theme-typescript/types";

const settings: Settings<Theme | WpSource> = {
  name: "eg-site",
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
            ["Blog", "/blog/"],
            ["Porfolio", "/porfolio/"],
            ["Contacto", "/contacto"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover",
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
  ],
};

export default settings;
