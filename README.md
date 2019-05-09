# Babysitter Kata

## Background
This kata simulates a babysitter getting paid for a night spent babysitting. 

## Building and Running Tests
NodeJS and (NPM or YARN) are **required** and must be installed prior to building / testing.<br/>

<p align="center">
  <b>Prerequisite Software Links:</b><br/>
  <a href="https://nodejs.org/en/">NodeJS</a> |
  <a href="https://www.npmjs.com/get-npm">NPM</a> |
  <a href="https://yarnpkg.com/">YARN</a>
</p>

1. Install dependencies 
```
npm install
```

2. Run tests
```
npm run test
```

3. Run demo
```
node index.js
```

The demo is setup to show the requirements below (Family A, B, C, etc.), but the specifics can be modified within the index.js file. 

## Requirements
The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- only babysits for one family per night
- gets paid for full hours (no fractional hours)
- should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)

The job:
- Pays different rates for each family (based on bedtimes, kids and pets, etc...)
- Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
- Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
- Family C pays $21 per hour before 9pm, then $15 the rest of the night
- The time ranges are the same as the babysitter (5pm through 4am)

Deliverable:
- Calculate total pay, based on babysitter start and end time, and a family.
