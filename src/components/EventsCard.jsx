import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider, useMediaQuery } from '@material-ui/core';
import dateFormat from 'dateformat';
import CardFooter from './CardFooter';
import TagsInCard from './TagsInCard';
import './EventCard.css';

const useStyles = makeStyles({
  event: {
    letterSpacing: '.2px',
    fontSize: '18px',
    fontWeight: 700,
    minHeight: '50px',
  },
  detailheadergrid: {
    color: '#757575',
    fontWeight: 400,
    marginRight: '4px',
  },
  detailinfogrid: {
    color: '#212121',
    fontWeight: 600,
    fontSize: '14px',
  },
  description: {
    padding: '20px 0 50px 0',
  },
  detail: {
    marginBottom: '10px',
  },
  plusone: {
    display: 'inline-block',
    color: '#fa7328',
    fontWeight: 600,
  },
  tagsection: {
    marginBottom: '27px',
    height: '40px',
  },
  imageWrapper: {
    position: 'relative',
    height: '180px',
    backgroundImage: 'linear-gradient(-180deg,rgba(3,3,3,0),#454545)',
    width: '100%',
  },
  eventStatus: {
    backgroundColor: '#fff',
    color: 'black',
    padding: '7px 13px',
    borderRadius: '2px',
    boxShadow: '0 1px 11px 0 rgb(0 0 0 / 11%)',
    position: 'absolute',
    bottom: '7px',
    right: '7px',
    fontSize: '12px',
    display: 'flex',
  },
});

export default function UpcomingEventsCard({ event }) {
  const theme = useTheme();
  const matchesLaptop = useMediaQuery('(min-width:960px)');
  const matchesMob = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
  // event start date
  const startEventDate = new Date(event.event_start_time * 1000).toUTCString();
  const formattedEventDate = dateFormat(startEventDate, 'h:MM TT, d mmm, yyyy');
  // registration finishing date
  const registrationFinishEventDate = new Date(
    event.registration_end_time * 1000
  ).toUTCString();
  const formattedRegistrationFinishDate = dateFormat(
    registrationFinishEventDate,
    'h:MM TT, d mmm, yyyy'
  );
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.imageWrapper}>
          <img
            height="180"
            width="100%"
            src={matchesMob ? event.mobile_cover_picture : event.cover_picture}
            alt={event.name}
          />
          {event.registration_status === 'REGISTRATIONS_OPEN' && (
            <div
              className={classes.eventStatus}
              style={matchesMob ? { fontSize: '10px' } : {}}
            >
              <div className="blobs-container">
                <div className="blob red" />
              </div>
              Registrations&nbsp;<b>open</b>&nbsp;till
              <b>&nbsp;{formattedRegistrationFinishDate}</b>
            </div>
          )}
          {event.registration_status === 'REGISTRATIONS_CLOSED' && (
            <div className={classes.eventStatus}>
              <p>
                Registrations <b>closed</b>
              </p>
            </div>
          )}
        </CardMedia>
        <CardContent>
          <Typography variant="p" component="h2" className={classes.event}>
            {event.name}
          </Typography>
          <Grid container alignItems="baseline" className={classes.detail}>
            <Grid item container direction="row" xs={5}>
              <Grid item xs={12} className={classes.detailheadergrid}>
                Starts on
              </Grid>
              <Grid item xs={12} className={classes.detailinfogrid}>
                {formattedEventDate}
              </Grid>
            </Grid>
            <Grid item container direction="row" xs={3}>
              <Grid item xs={12} className={classes.detailheadergrid}>
                Entry Fee
              </Grid>
              <Grid item xs={12} className={classes.detailinfogrid}>
                {event.fees === 0 ? 'Free' : `${event.currency} ${event.fees}`}
              </Grid>
            </Grid>
            <Grid item container direction="row" xs={3}>
              <Grid item xs={12} className={classes.detailheadergrid}>
                Venue
              </Grid>
              <Grid item xs={12} className={classes.detailinfogrid}>
                {event.venue}
              </Grid>
            </Grid>
          </Grid>
          <Divider light />
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {event.short_desc}
              </Typography>
            </Grid>
            {matchesLaptop && (
              <Grid item xs={12}>
                <div className={classes.tagsection}>
                  {event.card_tags.forEach((eachTag, index) => {
                    if (index < 3) return <TagsInCard text={eachTag} />;
                  })}
                  {event.card_tags.length > 3 && (
                    <div className={classes.plusone}>+1 more</div>
                  )}
                </div>
              </Grid>
            )}
          </Grid>
          <Divider light />
          <CardFooter
            registerationStatus={event.registration_status}
            registeredUsers={event.registered_users}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
