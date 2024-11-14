# 💥 TEDxUofW 💥
TEDxUofW is a student-run club at the University of Washington in Seattle, Washington. Each year, our dedicated club members organize an annual event that brings professionals from various industries to the university to share their stories, insights, and expertise. This is the github of our main website.

## Table of Contents
- [Technologies](#technologies)
- [Deploy a website](#deployment)
- [Running] (#running)
- [Make changes to the Project](#changes)

## Technologies
- **Tech Stack**: React, HTML, CSS, Firebase, and Bootstrap

## Deploy a website
1. Login to Netlify
2. Go to Netlify dashboard
3. Click on "Add New Site" or If never deploy a website on Netlify a website before then click "Import from Git"
4. Connect to the Github repository
5. Select the main branch
6. Make sure automatic deploys are turned on for **main** branch (Will be automatically push changes to the deployment site when the main branch changes)

## Running
1. Clone the repository:
   - git clone https://github.com/tedx-uofw/tedxuofw-website.git
2. Dowload all the modules:
   - cd tedx-uofw
   - npm install
3. Start the project:
   - npm run start 

## Make changes to the Project
1. Create an Issue in Github:
   - On github:
      - Navigate to Issues tab
      - Click on New Issue
      - Name the issue (Be specific as possible)
      - Click on Submit New Issue
2. Create a Branch for that issue (there's a link within the issue on the right panel under Development which says "Create a branch" for this issue).Develop within that branch until ready to make a PR.
   - On github:
      - ![Step 2](/public/readme/step2.png)
Go to Branch in Github and start PR. Add 2 Reviewers for Approval.
4a. If changes to Main have recently happened before completing your PR, update your current branch by running "git pull origin main" in branch, then push the merge from main to branch.
4b. If someone makes a Request for changes, address the changes and push them. Ask for re-approval
Once you get 2 approvals and your branch is up-to-date with main, Merge Pull Request with main.





