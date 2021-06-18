import React, { useEffect, useState, useRef } from 'react';
import './Events.css';
import axios from 'axios';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import DesktopMacSharpIcon from '@material-ui/icons/DesktopMacSharp';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import AccountTreeSharpIcon from '@material-ui/icons/AccountTreeSharp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid } from '@material-ui/core';
import EventsCard from './EventsCard';
import TagFooterMob from './TagFooterMob';
import Tags from './Tags';

function Events() {
  const scrollRef = useRef(null);
  const [tagsArray, settagsArray] = useState([]);
  const [showmore, setshowmore] = useState(false);
  const [selectedHeadingEvent, setselectedHeadingEvent] =
    useState('ALL_EVENTS');
  const [selectedSubHeadingEvent, setselectedSubHeadingEvent] =
    useState('Upcoming');
  const [selectedtagslistArray, setselectedtagslistArray] = useState([]);
  const [inputPageNoDummy, setinputPageNoDummy] = useState(1);
  const [events, setevents] = useState([]);
  const [minPageNo] = useState(1);
  const [maxPageNo, setmaxPageNo] = useState(0);
  const [inputPageNo, setinputPageNo] = useState(1);
  const matchesMob = useMediaQuery('(max-width:960px)');
  const matchesLaptop = useMediaQuery('(min-width:960px)');
  useEffect(() => {
    axios
      .get('https://api.codingninjas.com/api/v3/event_tags')
      .then((response) => {
        settagsArray(response.data.data.tags);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [events]);
  useEffect(() => {
    let taglisturlquery = '';
    selectedtagslistArray.forEach((eachtaglist) => {
      taglisturlquery += `${eachtaglist},`;
    });
    setinputPageNoDummy(inputPageNo);
    axios
      .get('https://api.codingninjas.com/api/v3/events', {
        params: {
          event_category: selectedHeadingEvent,
          event_sub_category: selectedSubHeadingEvent,
          tag_list: taglisturlquery.substr(0, taglisturlquery.length - 1),
          offset: 20 * (inputPageNo - 1),
        },
      })
      .then((response) => {
        setevents(response.data.data.events);
        setmaxPageNo(response.data.data.page_count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    selectedHeadingEvent,
    selectedSubHeadingEvent,
    selectedtagslistArray,
    inputPageNo,
  ]);
  const handleMobSelectedTagList = (selectedMobTagListArray) => {
    setselectedtagslistArray(selectedMobTagListArray);
  };
  const handleselectedtaglistclick = (eachTag, selected) => {
    if (!selected)
      setselectedtagslistArray((selectedtagslistArray) => [
        ...selectedtagslistArray,
        eachTag,
      ]);
    else
      setselectedtagslistArray(
        selectedtagslistArray.filter((item) => item !== eachTag)
      );
  };

  return (
    <div className="events">
      <div className="header">
        <div className="header-title">Events & News</div>
        <div className="header-subtitle">Learn, Compete & Grow</div>
      </div>
      <div className="events-outer-wrapper" ref={scrollRef}>
        <div className="events-wrapper">
          <div className="heading-section">
            <p
              onClick={(e) =>
                setselectedHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedHeadingEvent === 'ALL_EVENTS'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="ALL_EVENTS"
            >
              <DateRangeSharpIcon
                className={
                  selectedHeadingEvent === 'ALL_EVENTS'
                    ? 'selected-icon'
                    : 'icon'
                }
              />
              All Events
            </p>
            <p
              onClick={(e) =>
                setselectedHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedHeadingEvent === 'WEBINAR' ? { color: '#fa7328' } : {}
              }
              name="WEBINAR"
            >
              <DesktopMacSharpIcon
                className={
                  selectedHeadingEvent === 'WEBINAR' ? 'selected-icon' : 'icon'
                }
              />
              Webinars
            </p>
            <p
              onClick={(e) =>
                setselectedHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedHeadingEvent === 'CODING_EVENT'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="CODING_EVENT"
            >
              <EventIcon
                className={
                  selectedHeadingEvent === 'CODING_EVENT'
                    ? 'selected-icon'
                    : 'icon'
                }
              />
              Coding Events
            </p>
            <p
              onClick={(e) =>
                setselectedHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedHeadingEvent === 'BOOTCAMP_EVENT'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="BOOTCAMP_EVENT"
            >
              <AccountTreeSharpIcon
                className={
                  selectedHeadingEvent === 'BOOTCAMP_EVENT'
                    ? 'selected-icon'
                    : 'icon'
                }
              />
              Bootcamp Events
            </p>
            <p
              onClick={(e) =>
                setselectedHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedHeadingEvent === 'WORKSHOP' ? { color: '#fa7328' } : {}
              }
              name="WORKSHOP"
            >
              <OndemandVideoIcon
                className={
                  selectedHeadingEvent === 'WORKSHOP' ? 'selected-icon' : 'icon'
                }
              />
              Workshop
            </p>
          </div>
          <div className="subheading-section">
            <p
              onClick={(e) =>
                setselectedSubHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedSubHeadingEvent === 'Upcoming'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="Upcoming"
            >
              Upcoming
            </p>
            <p
              onClick={(e) =>
                setselectedSubHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedSubHeadingEvent === 'Archived'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="Archived"
            >
              Archived
            </p>
            <p
              onClick={(e) =>
                setselectedSubHeadingEvent(e.target.getAttribute('name'))
              }
              style={
                selectedSubHeadingEvent === 'All Time Favorites'
                  ? { color: '#fa7328' }
                  : {}
              }
              name="All Time Favorites"
            >
              All Time Favorites
            </p>
          </div>
          <div className="event-card-section">
            <Grid container spacing={3}>
              <Grid item container xs={12} md={10}>
                {events.length > 0 ? (
                  events.map((eachEvent) => (
                    <Grid item xs={12} md={6} className="event-card">
                      <EventsCard event={eachEvent} />
                    </Grid>
                  ))
                ) : (
                  <h1 className="no-events-found">No Events Found</h1>
                )}
              </Grid>
              {matchesLaptop && (
                <Grid item xs={12} md={2}>
                  <div className="heading">Tags</div>
                  <div>
                    {tagsArray.map((eachTag, index) => {
                      if (index < 12)
                        return (
                          <Tags
                            onClick={(selected) =>
                              handleselectedtaglistclick(eachTag, selected)
                            }
                            text={eachTag}
                          />
                        );
                      return (
                        showmore && (
                          <Tags
                            onClick={(selected) =>
                              handleselectedtaglistclick(eachTag, selected)
                            }
                            text={eachTag}
                          />
                        )
                      );
                    })}
                    {!showmore && (
                      <div className="count" onClick={() => setshowmore(true)}>
                        See {tagsArray.length - 12} more tags
                      </div>
                    )}
                  </div>
                </Grid>
              )}
            </Grid>
          </div>
          {events.length > 0 && (
            <div className="pagination">
              <button
                className="arrow-btn"
                onClick={() => {
                  setinputPageNo((inputPageNo) =>
                    inputPageNo > minPageNo ? inputPageNo - 1 : inputPageNo
                  );
                  inputPageNo > minPageNo && scrollRef.current.scrollIntoView();
                }}
                style={inputPageNo <= minPageNo ? { opacity: '0.5' } : {}}
              >
                <img
                  src="https://files.codingninjas.in/left-arrow-5581.svg"
                  alt="left arrow"
                />
              </button>
              <p>Page</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  inputPageNoDummy > maxPageNo
                    ? setinputPageNo(1)
                    : setinputPageNo(inputPageNoDummy);
                  scrollRef.current.scrollIntoView();
                }}
              >
                <input
                  type="number"
                  min={minPageNo}
                  step={1}
                  max={maxPageNo}
                  onBlur={() => {
                    inputPageNoDummy > maxPageNo
                      ? setinputPageNo(1)
                      : setinputPageNo(inputPageNoDummy);
                    scrollRef.current.scrollIntoView();
                  }}
                  onChange={(e) =>
                    setinputPageNoDummy(
                      parseInt(e.target.value) > maxPageNo
                        ? 1
                        : parseInt(e.target.value)
                    )
                  }
                  value={inputPageNoDummy}
                />
              </form>
              <p>of {maxPageNo}</p>
              <button
                className="arrow-btn"
                onClick={() => {
                  setinputPageNo((inputPageNo) =>
                    inputPageNo < maxPageNo ? inputPageNo + 1 : inputPageNo
                  );
                  inputPageNo < maxPageNo && scrollRef.current.scrollIntoView();
                }}
                style={inputPageNo >= maxPageNo ? { opacity: '0.5' } : {}}
              >
                <img
                  src="https://files.codingninjas.in/right-arrow-5582.svg"
                  alt="right arrow"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        {matchesMob && (
          <TagFooterMob
            tagsArray={tagsArray}
            handleMobSelectedTagList={handleMobSelectedTagList}
          />
        )}
      </div>
    </div>
  );
}

export default Events;
