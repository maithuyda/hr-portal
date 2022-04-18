import FooterList from "./FooterList";
import { Link } from "react-router-dom";

import "./index.scss";

const FOOTER_DATA = [
  {
    id: "fl1",
    header: "THE BASICS",
    items: [
      {
        content: "About TMBD",
        path: "/about",
      },
      {
        content: "Contact Us",
        path: "/about/staying-in-touch",
      },
      {
        content: "Support Forums",
        path: "/talk",
      },
      {
        content: "API",
        path: "/documentation/api",
      },
      {
        content: "System Status",
        path: "/status",
      },
    ],
  },
  {
    id: "fl2",
    header: "GET INVOLVED",
    items: [
      {
        content: "Contribution Bible",
        path: "/bible",
      },
      {
        content: "Add New Movie",
        path: "/movie/new",
      },
      {
        content: "Add New TV Show",
        path: "/tv/new",
      },
    ],
  },
  {
    id: "fl3",
    header: "COMMUNITY",
    items: [
      {
        content: "Guidelines",
        path: "/documentation/community/guidelines",
      },
      {
        content: "Discussions",
        path: "/discuss",
      },
      {
        content: "Leaderboard",
        path: "/leaderboard",
      },
      {
        content: "Twitter",
        path: "/twitter",
      },
    ],
  },
  {
    id: "fl4",
    header: "LEGAL",
    items: [
      {
        content: "Terms of Use",
        path: "/terms-of-use",
      },
      {
        content: "API Terms of Use",
        path: "/documentation/api/terms-of-use",
      },
      {
        content: "Privacy Policy",
        path: "/privacy-policy",
      },
    ],
  },
];

const Footer = (props) => {
  const footerLists = FOOTER_DATA.map((list) => (
    <FooterList key={list.id} header={list.header} items={list.items} />
  ));

  return (
    <footer>
      <div className="footer-content_wrapper">
        <div className="join">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
          />
          <Link className="rounded" to="/signup">
            Join the Community
          </Link>
        </div>
        <div className="footer-list_wrapper">{footerLists}</div>
      </div>
    </footer>
  );
};

export default Footer;
