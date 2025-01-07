'use strict';

// create a new div element
// with the class name 'container'
// and set the innerHTML to the content
// of the html body
let theContainer = document.createElement('div');
theContainer.className = 'container';
theContainer.innerHTML = `
  <div class="user-profile">
    <div class="user-name">
      <img
        src="/images/image-jeremy.png"
        class="user-photo"
        alt="jeremy's photo"
      />
      <div class="user-report">
        <p class="report-for">Report for</p>
        <h2>Jeremy Robson</h2>
      </div>
    </div>
    <div class="user-routines">
      <div class="routine-interval">
        <p id="daily-interval">Daily</p>
        <p id="weekly-interval">Weekly</p>
        <p id="monthly-interval">Monthly</p>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box work">
      <img
        src="/images/icon-work.svg"
        class="routine-icon"
        alt="work icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="work-title">Work</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="work-duration">0hrs</p>
          <p id="previous-work-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box play">
      <img
        src="/images/icon-play.svg"
        class="routine-icon"
        alt="play icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="play-title">Play</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="play-duration">0hrs</p>
          <p id="previous-play-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box study">
      <img
        src="/images/icon-study.svg"
        class="routine-icon"
        alt="study icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="study-title">Study</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="study-duration">0hrs</p>
          <p id="previous-study-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box exercise">
      <img
        src="/images/icon-exercise.svg"
        class="routine-icon"
        alt="exercise icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="exercise-title">Exercise</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="exercise-duration">0hrs</p>
          <p id="previous-exercise-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box social">
      <img
        src="/images/icon-social.svg"
        class="routine-icon"
        alt="social icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="social-title">Social</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="social-duration">0hrs</p>
          <p id="previous-social-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
  <div class="activity-data">
    <div class="activity-icon-box self-care">
      <img
        src="/images/icon-self-care.svg"
        class="routine-icon"
        alt="self-care icon"
      />
    </div>
    <div class="routines-data">
      <div class="routines">
        <div class="routine-name-group">
          <p id="self-care-title">Self Care</p>
          <div class="three-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="routine-duration-group">
          <p id="self-care-duration">0hrs</p>
          <p id="previous-self-care-duration">Last Week - 0hrs</p>
        </div>
      </div>
    </div>
  </div>
`;

// fetch the data from the json file
const activityData = fetch('/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON
  })
  .then((data) => {
    // console.log('Data received:', data);
    return data;
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

// retrieve the DOM element
let theBody = document.querySelector('body');

// variables to store the results of the filter

// function to load initial html content
function loadContent() {
  theBody.appendChild(theContainer);
}

function loadDailyActivityData(whichActivity) {
  // work activity
  if (whichActivity.title === 'Work') {
    let workTitle = document.getElementById('work-title');
    workTitle.innerHTML = whichActivity.title;
    let workDuration = document.getElementById('work-duration');
    workDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousWorkDuration = document.getElementById(
      'previous-work-duration'
    );
    previousWorkDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }

  // play activity
  if (whichActivity.title === 'Play') {
    let playTitle = document.getElementById('play-title');
    playTitle.innerHTML = whichActivity.title;
    let playDuration = document.getElementById('play-duration');
    playDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousPlayDuration = document.getElementById(
      'previous-play-duration'
    );
    previousPlayDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }

  // study activity
  if (whichActivity.title === 'Study') {
    let studyTitle = document.getElementById('study-title');
    studyTitle.innerHTML = whichActivity.title;
    let studyDuration = document.getElementById('study-duration');
    studyDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousStudyDuration = document.getElementById(
      'previous-study-duration'
    );
    previousStudyDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }

  // exercise activity
  if (whichActivity.title === 'Exercise') {
    let exerciseTitle = document.getElementById('exercise-title');
    exerciseTitle.innerHTML = whichActivity.title;
    let exerciseDuration = document.getElementById('exercise-duration');
    exerciseDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousExerciseDuration = document.getElementById(
      'previous-exercise-duration'
    );
    previousExerciseDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }

  // social activity
  if (whichActivity.title === 'Social') {
    let socialTitle = document.getElementById('social-title');
    socialTitle.innerHTML = whichActivity.title;
    let socialDuration = document.getElementById('social-duration');
    socialDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousSocialDuration = document.getElementById(
      'previous-social-duration'
    );
    previousSocialDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }

  // self-care activity
  if (whichActivity.title === 'Self Care') {
    let selfCareTitle = document.getElementById('self-care-title');
    selfCareTitle.innerHTML = whichActivity.title;
    let selfCareDuration = document.getElementById('self-care-duration');
    selfCareDuration.innerHTML = `${whichActivity.timeframes.daily.current}hrs`;
    let previousSelfCareDuration = document.getElementById(
      'previous-self-care-duration'
    );
    previousSelfCareDuration.innerHTML = `Yesterday - ${whichActivity.timeframes.daily.previous}hrs`;

    return;
  }
}

function loadWeeklyActivityData(whichActivity) {
  // work activity
  if (whichActivity.title === 'Work') {
    let workTitle = document.getElementById('work-title');
    workTitle.innerHTML = whichActivity.title;
    let workDuration = document.getElementById('work-duration');
    workDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousWorkDuration = document.getElementById(
      'previous-work-duration'
    );
    previousWorkDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }

  // play activity
  if (whichActivity.title === 'Play') {
    let playTitle = document.getElementById('play-title');
    playTitle.innerHTML = whichActivity.title;
    let playDuration = document.getElementById('play-duration');
    playDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousPlayDuration = document.getElementById(
      'previous-play-duration'
    );
    previousPlayDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }

  // study activity
  if (whichActivity.title === 'Study') {
    let studyTitle = document.getElementById('study-title');
    studyTitle.innerHTML = whichActivity.title;
    let studyDuration = document.getElementById('study-duration');
    studyDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousStudyDuration = document.getElementById(
      'previous-study-duration'
    );
    previousStudyDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }

  // exercise activity
  if (whichActivity.title === 'Exercise') {
    let exerciseTitle = document.getElementById('exercise-title');
    exerciseTitle.innerHTML = whichActivity.title;
    let exerciseDuration = document.getElementById('exercise-duration');
    exerciseDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousExerciseDuration = document.getElementById(
      'previous-exercise-duration'
    );
    previousExerciseDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }

  // social activity
  if (whichActivity.title === 'Social') {
    let socialTitle = document.getElementById('social-title');
    socialTitle.innerHTML = whichActivity.title;
    let socialDuration = document.getElementById('social-duration');
    socialDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousSocialDuration = document.getElementById(
      'previous-social-duration'
    );
    previousSocialDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }

  // self-care activity
  if (whichActivity.title === 'Self Care') {
    let selfCareTitle = document.getElementById('self-care-title');
    selfCareTitle.innerHTML = whichActivity.title;
    let selfCareDuration = document.getElementById('self-care-duration');
    selfCareDuration.innerHTML = `${whichActivity.timeframes.weekly.current}hrs`;
    let previousSelfCareDuration = document.getElementById(
      'previous-self-care-duration'
    );
    previousSelfCareDuration.innerHTML = `Last Week - ${whichActivity.timeframes.weekly.previous}hrs`;

    return;
  }
}

function loadMonthlyActivityData(whichActivity) {
  // work activity
  if (whichActivity.title === 'Work') {
    let workTitle = document.getElementById('work-title');
    workTitle.innerHTML = whichActivity.title;
    let workDuration = document.getElementById('work-duration');
    workDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousWorkDuration = document.getElementById(
      'previous-work-duration'
    );
    previousWorkDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }

  // play activity
  if (whichActivity.title === 'Play') {
    let playTitle = document.getElementById('play-title');
    playTitle.innerHTML = whichActivity.title;
    let playDuration = document.getElementById('play-duration');
    playDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousPlayDuration = document.getElementById(
      'previous-play-duration'
    );
    previousPlayDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }

  // study activity
  if (whichActivity.title === 'Study') {
    let studyTitle = document.getElementById('study-title');
    studyTitle.innerHTML = whichActivity.title;
    let studyDuration = document.getElementById('study-duration');
    studyDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousStudyDuration = document.getElementById(
      'previous-study-duration'
    );
    previousStudyDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }

  // exercise activity
  if (whichActivity.title === 'Exercise') {
    let exerciseTitle = document.getElementById('exercise-title');
    exerciseTitle.innerHTML = whichActivity.title;
    let exerciseDuration = document.getElementById('exercise-duration');
    exerciseDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousExerciseDuration = document.getElementById(
      'previous-exercise-duration'
    );
    previousExerciseDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }

  // social activity
  if (whichActivity.title === 'Social') {
    let socialTitle = document.getElementById('social-title');
    socialTitle.innerHTML = whichActivity.title;
    let socialDuration = document.getElementById('social-duration');
    socialDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousSocialDuration = document.getElementById(
      'previous-social-duration'
    );
    previousSocialDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }

  // self-care activity
  if (whichActivity.title === 'Self Care') {
    let selfCareTitle = document.getElementById('self-care-title');
    selfCareTitle.innerHTML = whichActivity.title;
    let selfCareDuration = document.getElementById('self-care-duration');
    selfCareDuration.innerHTML = `${whichActivity.timeframes.monthly.current}hrs`;
    let previousSelfCareDuration = document.getElementById(
      'previous-self-care-duration'
    );
    previousSelfCareDuration.innerHTML = `Last Month - ${whichActivity.timeframes.monthly.previous}hrs`;

    return;
  }
}

// function to filter the data based on the interval
function filterData(interval) {
  activityData.then((data) => {
    for (let activity of data) {
      if (interval === 'daily') {
        console.log('Daily activity');
        loadDailyActivityData(activity);
      } else if (interval === 'weekly') {
        console.log('Weekly activity');
        loadWeeklyActivityData(activity);
      } else if (interval === 'monthly') {
        console.log('Monthly activity');
        loadMonthlyActivityData(activity);
      }
    }
  });
}

// application logic goes here
loadContent();

// event listeners
let dailyInterval = document.querySelector('#daily-interval');
let weeklyInterval = document.querySelector('#weekly-interval');
let monthlyInterval = document.querySelector('#monthly-interval');

dailyInterval.addEventListener('click', () => {
  console.log('Daily interval clicked');
  filterData('daily');
});

weeklyInterval.addEventListener('click', () => {
  console.log('Weekly interval clicked');
  filterData('weekly');
});

monthlyInterval.addEventListener('click', () => {
  console.log('Monthly interval clicked');
  filterData('monthly');
});
