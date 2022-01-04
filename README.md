# bookmarklets
Browser add-ons to simplify stuff

## BitBucket Incremental PR
### Setup
Drag this link to your browser's bookmark bar: [Incremental PR](javascript:(function()%7Bconst%20destinationHash%20%3D%20window.getSelection().toString()%3Bif%20(destinationHash%20%3D%3D%3D%20'')%20%7Balert('Please%20first%20highlight%20the%20hash%20of%20the%20last%20commit%20you%20reviewed')%3Bthrow%20new%20Error('quitting')%7Dconst%20sourceHash%20%3D%20%24('div%5Bdata-qa%3D%22commit-hash-wrapper-0%22%5D').text()%3Bconst%20repo%20%3D%20window.location.href.split('pull-requests')%5B0%5D%3Bconst%20win%20%3D%20window.open(%60%24%7Brepo%7Dbranches%2Fcompare%2F%24%7BsourceHash%7D%250D%24%7BdestinationHash%7D%23diff%60%2C%20'_blank')%3Bif%20(!win)%20%7Balert('Please%20allow%20popups')%7D%7D)())

### Usage
1. Open the PR in BitBucket
2. Expand the list of commits
3. Highlight the commit hash (eg. 70b435f) of the last point you have reviewed
4. Click the "Incremental PR" bookmark in your browser's bookmark bar
