import React, { useState, useEffect } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './TagFooterMob.css';

function TagFooterMob({ tagsArray, handleMobSelectedTagList }) {
  const [openDropup, setopenDropup] = useState(false);
  const [selectedTags, setselectedTags] = useState([]);
  const [newSelectedTags, setnewSelectedTags] = useState([]);
  const [alreadySelected, setalreadySelected] = useState([]);
  const [selected, setselected] = useState([]);
  useEffect(() => {
    tagsArray.map(() => setselected((selected) => [...selected, false]));
  }, [tagsArray]);
  const handleselected = (index) => {
    const newSelected = [];
    selected.forEach((eachSelected, eachIndex) => {
      if (eachIndex === index) newSelected.push(!eachSelected);
      else newSelected.push(eachSelected);
    });
    setselected(newSelected);
  };
  const handleGoBack = () => {
    let dummySelected = [];
    let dummySelectedTags = [];
    selected.forEach((eachSelected) => {
      dummySelected.push(eachSelected);
    });
    selectedTags.forEach((eachSelected) => {
      dummySelectedTags.push(eachSelected);
    });
    newSelectedTags.forEach((eachNewSelected) => {
      const index = tagsArray.indexOf(eachNewSelected);
      const newSelected = [];
      dummySelected.forEach((eachSelected, eachIndex) => {
        if (eachIndex === index) newSelected.push(!eachSelected);
        else newSelected.push(eachSelected);
      });
      dummySelected = newSelected;
      dummySelectedTags = dummySelectedTags.filter(
        (item) => item !== eachNewSelected
      );
    });
    setselected(dummySelected);
    setselectedTags(dummySelectedTags);
  };
  const handleOpen = () => {
    const newSelected = [];
    let dummySelected = [];
    selected.forEach((eachSelected) => {
      dummySelected.push(eachSelected);
    });
    selectedTags.forEach((eachSelectedTag) => {
      newSelected.push(eachSelectedTag);
      const index = tagsArray.indexOf(eachSelectedTag);
      const newSelectedBool = [];
      dummySelected.forEach((eachSelected, eachIndex) => {
        if (eachIndex === index) newSelectedBool.push(true);
        else newSelectedBool.push(eachSelected);
      });
      dummySelected = newSelectedBool;
    });
    setselected(dummySelected);
    setalreadySelected(newSelected);
  };
  const handleApply = () => {
    const dummySelected = [];
    alreadySelected.forEach((eachSelected) => {
      dummySelected.push(eachSelected);
    });
    newSelectedTags.forEach((eachSelected) => {
      dummySelected.push(eachSelected);
    });
    setselectedTags(dummySelected);

    handleMobSelectedTagList(dummySelected);
  };

  return (
    <div>
      <div
        className="tag-footer"
        onClick={() => {
          handleOpen();
          setopenDropup(true);
        }}
      >
        <div className="filter-icon">
          <FilterListIcon />
        </div>
        <div className="text">Filter Events</div>
      </div>
      {openDropup && (
        <div className="dropup-menu">
          <div className="dropup-header">
            <ArrowBackIcon
              className="back-icon"
              onClick={() => {
                handleGoBack();
                setopenDropup(false);
                setnewSelectedTags([]);
              }}
            />
            Filter Events
          </div>
          <div className="dropup-body">
            {tagsArray.map((eachTag, index) => (
              <div
                onClick={() => {
                  handleselected(index);
                  !selected[index] && alreadySelected.includes(eachTag)
                    ? setalreadySelected((alreadySelected) => [
                        ...alreadySelected,
                        eachTag,
                      ])
                    : setalreadySelected(
                        alreadySelected.filter((item) => item !== eachTag)
                      );
                  !alreadySelected.includes(eachTag) &&
                    (!selected[index]
                      ? setselectedTags((selectedTags) => [
                          ...selectedTags,
                          eachTag,
                        ])
                      : setselectedTags(
                          selectedTags.filter((item) => item !== eachTag)
                        ));
                  !selected[index] && !alreadySelected.includes(eachTag)
                    ? setnewSelectedTags((newSelectedTags) => [
                        ...newSelectedTags,
                        eachTag,
                      ])
                    : setnewSelectedTags(
                        newSelectedTags.filter((item) => item !== eachTag)
                      );
                }}
                className="tagstext"
                style={
                  selected[index]
                    ? { backgroundColor: '#fa7328', color: '#fff' }
                    : {}
                }
              >
                {eachTag}
              </div>
            ))}
          </div>
          <div
            className="dropup-footer"
            onClick={() => {
              handleApply();
              setnewSelectedTags([]);
              setopenDropup(false);
            }}
          >
            Apply Filters
          </div>
        </div>
      )}
    </div>
  );
}

export default TagFooterMob;
