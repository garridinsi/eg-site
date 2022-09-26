import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import CarbonBadge from "@garridinsi/react-carbonbadge";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWordpress,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";

// simplest form (only email)

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  const currentTime = new Date(Date.now());
  const currentYear = currentTime.getFullYear();
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-6 footer-widget widget-one">
            <h6 className="widget-title">About me</h6>
            <p>
              Soy un desarrollador web al que le gustan los transportes. <br />{" "}
              En especial los trenes. Choo choo 🚄 :)
            </p>
            <CarbonBadge darkMode={true} />
          </div>
          <div className="col footer-widget widget-two">
            <h6 className="widget-title">Legales</h6>
            <ul className="widget-list">
              <li>
                <Link className="widget-list-link" link="/privacidad/">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/cookies/">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="col footer-widget widget-four">
            <h6 className="widget-title">Sociales</h6>
            <ul className="widget-list">
              <li>
                <Link
                  className="widget-list-link flex-div"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://twitter.com/garridinsi"
                >
                  <FaTwitter />
                  {" Twitter"}
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link flex-div"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/garridinsi/"
                >
                  <FaInstagram /> {" Instagram"}
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link flex-div"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://github.com/garridinsi"
                >
                  <FaGithub /> {" GitHub"}
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link flex-div"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://profiles.wordpress.org/garridinsi/"
                >
                  <FaWordpress />
                  {" WordPress.org"}
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link flex-div"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.linkedin.com/in/garridinsi/"
                >
                  <FaLinkedin />
                  {" LinkedIn"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-div">
          <FaCopyright />
          {" " + currentYear + ", " + state.frontity.title}
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
      text-decoration: underline dashed;
      font-weight: bold;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}
`;
