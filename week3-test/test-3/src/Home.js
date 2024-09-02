import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home Page</h1>
        <Link to="/userlist">Go to User List</Link>
      </div>
      <div id="banner">
        <p>
          <a href="#">
            <img src="images/home.gif" alt="homepage" />
          </a>{" "}
          |{" "}
          <a href="mailto:denise@mitchinson.net">
            <img src="images/mail.gif" alt="contact" />
          </a>
        </p>
        <h1>Your Company Name ...</h1>
      </div>
      <div id="menu">
        <ul id="nav">
          <li id="home">
            <a href="#">Home</a>
          </li>
          <li id="who" className="activelink">
            <a href="#">About</a>
          </li>
          <li id="prod">
            <a href="#">Product</a>
          </li>
          <li id="serv">
            <a href="#">Services</a>
          </li>
          <li id="cont">
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div id="container">
        <div id="content">
          <h1>
            Welcome to{" "}
            <span style={{ fontWeight: "bold", color: "#C4DA64" }}>
              StopWatch
            </span>{" "}
            Template
          </h1>
          <p className="big">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
            rhoncus molestie dui. Proin euismod dignissim justo. Curabitur id
            urna non lorem egestas viverra. Aenean feugiat nisl et urna.
            Suspendisse vestibulum. Duis ligula ante, porttitor id, tempor a,
            tincidunt sed, dolor. Aliquam feugiat sollicitudin tellus.{" "}
            <a href="#">This is a link to nowhere.</a> Aenean augue arcu,
            venenatis sed, pulvinar non, hendrerit nec, odio. Duis ligula. Nulla
            in urna eu tellus auctor convallis. Nam elementum posuere enim.
          </p>
          <div id="box">
            <h2>
              <img src="images/last.gif" alt="ad" /> Advertise Your Site Here
            </h2>
            <blockquote>
              This template has been tested in Mozilla and IE7 and validates as
              HTML 4.01 Strict using valid CSS. Icons are courtesy of{" "}
              <a
                href="http://www.exploding-boy.com/2005/09/13/explodingboy-pixel-icons/"
                title="exploding-boy"
              >
                Exploding Boy
              </a>
              <br />
              For more FREE CSS templates visit{" "}
              <a href="http://www.mitchinson.net" title="my website">
                my website
              </a>
              .
            </blockquote>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
            rhoncus molestie dui. Proin euismod dignissim justo. Curabitur id
            urna non lorem egestas viverra. Aenean feugiat nisl et urna.
            Suspendisse vestibulum. Duis ligula ante, porttitor id, tempor a,
            tincidunt sed, dolor. Aliquam feugiat sollicitudin tellus. Aenean
            augue arcu, venenatis sed, pulvinar non, hendrerit nec, odio. Duis
            ligula. Nulla in urna eu tellus auctor convallis. Nam elementum
            posuere enim.
          </p>
          <p>
            Praesent enim nulla, lacinia vel, accumsan ut, facilisis eget,
            ligula. Sed suscipit, nisi id semper varius, justo turpis pretium
            orci, in cursus lorem nunc id ipsum. Curabitur ipsum.
          </p>
        </div>
        <div id="content_right">
          <dl className="curved">
            <dt>RECOMMENDED LINKS</dt>
            <dd>
              <ul id="navlist">
                <li>
                  <a href="#">Snapp Happy</a>
                </li>
                <li>
                  <a href="#">Open Designs</a>
                </li>
                <li>
                  <a href="#">Andreas Viklund</a>
                </li>
                <li>
                  <a href="#">James Koster</a>
                </li>
                <li>
                  <a href="#">CSS play</a>
                </li>
                <li>
                  <a href="#">Listamatic</a>
                </li>
              </ul>
              <p className="last">&nbsp;</p>
            </dd>
          </dl>
          <dl className="curved">
            <dt>
              CURVED CORNERS<span className="small"> by Stu Nicholls</span>
            </dt>
            <dd>
              <p>Ok, finally a four corner box with no extra markup.</p>
              <p>No javascript and absolutely no hacks.</p>
              <p className="last">
                Examples at{" "}
                <a href="http://www.cssplay.co.uk">&#0187; CSS Play</a>
              </p>
            </dd>
          </dl>
          <dl className="curved">
            <dt>MORE INFORMATION</dt>
            <dd>
              <p> Nulla in urna eu tellus auctor convallis.</p>
              <p className="last">
                Morbi sodales vehicula nisi. Donec id tortor.{" "}
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <div id="footer">
        <p>
          <a href="#">homepage</a> |{" "}
          <a href="mailto:denise@mitchinson.net">contact</a> | &copy; 2007
          Anyone | Design by{" "}
          <a href="http://www.mitchinson.net"> www.mitchinson.net</a> | Licensed
          under a{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
            Creative Commons Attribution 3.0 License
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
