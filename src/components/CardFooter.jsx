import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import './CardFooter.css';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: '1px',
  },
}));
function CardFooter({ registerationStatus, registeredUsers }) {
  const classes = useStyles();
  const [popOpen, setpopOpen] = useState(false);
  const [avatarIndex, setavatarIndex] = useState(-1);
  const handlePopoverOpen = (index) => {
    setavatarIndex(index);
    setpopOpen(true);
  };

  const handlePopoverClose = () => {
    setpopOpen(false);
  };
  return (
    <div className="cardfooter">
      <div className="registered">
        {registeredUsers.top_users.length > 0 && (
          <div className="avatars">
            {registeredUsers.top_users.map((eachTopUser, index) => (
              <div className="avatar-wrapper">
                <Avatar
                  alt={eachTopUser.name}
                  src={eachTopUser.image_url}
                  className={classes.small}
                  onMouseEnter={() => handlePopoverOpen(index)}
                  onMouseLeave={handlePopoverClose}
                />
                {popOpen && avatarIndex === index && (
                  <div className="popoveravatar">{eachTopUser.name}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {registeredUsers.other_users_count > 0 &&
          registeredUsers.top_users.length > 0 && (
            <div className="number-of-registrations">
              and <b>{registeredUsers.other_users_count}</b> others registered
            </div>
          )}
      </div>
      {registerationStatus === 'REGISTRATIONS_OPEN' && (
        <div className="registerbutton">
          <img
            src="https://files.codingninjas.in/0000000000001272.png"
            alt="Register Button"
          />
        </div>
      )}
    </div>
  );
}

export default CardFooter;
