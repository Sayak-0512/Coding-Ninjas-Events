import { Grid } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Grid container spacing={3}>
        <Grid item className="image-container" xs={12} md={3}>
          <img
            src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
            alt="Coding Ninja"
            className="codingninja-img"
          />
        </Grid>
        <Grid
          item
          container
          className="content-container"
          xs={12}
          md={6}
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <h6>
              <b>CODING NINJAS</b>
            </h6>
            <a href="/">About Us</a>
            <br />
            <a href="/"> Privacy Policy</a>
            <br />
            <a href="/">Terms & Condition</a>
            <br />
            <a href="/">Pricing & Refund Policy</a>
            <br />
            <a href="/">Bug Bounty</a>
            <br />
            <a href="/"> Customers</a>
            <br />
            <a href="/">Press Release</a>
            <br />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h6>
              <b>PRODUCTS</b>
            </h6>
            <a href="/">Courses</a>
            <br />
            <a href="/">Try courses for free</a>
            <br />
            <a href="/">Career Camp</a>
            <br />
            <a href="/">Hire Talent</a>
            <br />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h6>
              <b> COMMUNITY</b>
            </h6>
            <a href="/">Code Studio</a>
            <br />
            <a href="/">Blog</a>
            <br />
            <a href="/">Events</a>
            <br />
            <a href="/">Campus Ninja</a>
            <br />
            <a href="/">Bug Bounty</a>
            <br />
            <a href="/">Affiliate</a>
            <br />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className="contact-container"
          spacing={3}
          xs={12}
          md={3}
        >
          <Grid item xs={12} sm={6} md={12}>
            <h6>
              <b>FOLLOW US ON</b>
            </h6>
            <a href="/" className="icon">
              <FacebookIcon />
            </a>
            <a href="/" className="icon">
              <InstagramIcon />
            </a>
            <a href="/" className="icon">
              <YouTubeIcon />
            </a>
            <a href="/" className="icon">
              <TwitterIcon />
            </a>
            <a href="/" className="icon">
              <LinkedInIcon />
            </a>
            <a href="/" className="icon">
              <TelegramIcon />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <h6>
              <b>CONTACT US</b>
            </h6>
            <CallIcon className="iconphoneandmail" />
            <a href="tel:1800-123-3598">&nbsp;1800-123-3598</a>
            <br />
            <MailIcon className="iconphoneandmail" />
            <a href="mailto:contact@codingninjas.com?Subject=Enquiry">
              &nbsp;contact@codingninjas.com
            </a>
            <br />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
