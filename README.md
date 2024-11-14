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
1. Create an Issue in GitHub
   - Navigate to the **Issues** tab in your GitHub repository.
   - Click on **New Issue**.
      - <img src="/readme/step1a.png" alt="Step 1a" width="300">
   - Provide a **descriptive title** for the issue (be as specific as possible).
   - Add relevant details in the description (steps to reproduce, context, expected behavior, etc.).
   - Click **Submit New Issue** to create the issue.
      - <img src="/readme/step1b.png" alt="Step 1b" width="300">
2. Create a Branch for that issue (there's a link within the issue on the right panel under Development which says "Create a branch" for this issue).Develop within that branch until ready to make a PR.
   - On github:
      - <img src="/readme/step2.png" alt="Step 2" width="300">
   - After direct to your code editor:
      - Go into tedxuofw-website directory
      - Direct to the branch you created:
         - Navigate to the terminal
         - git checkout (name of the branch you want to go into)
   - Code
   - Commit the changes:
      - Navigate to the terminal
      - git add .
      - git commit -m "(message about the changes you made)"
      - git status 
         - Make sure you are on the right branch
      - git push 
4. Create a Pull Request (PR)
   - Once the changes are pushed to the branch, go to the **Branches** section in GitHub.
   - Click on **New Pull Request**.
      - <img src="/readme/step3a.png" alt="Step 3a" width="300">
   - Select the branch you created and compare it with the **main** branch.
   - Add **2 reviewers** for approval.
      - <img src="/readme/step3b.png" alt="Step 3b" width="300">
   - Click **Create Pull Request** to submit the PR.
4. If changes to Main have recently happened before completing your PR, update your current branch by running "git pull origin main" in branch, then push the merge from main to branch.
   - 4b. If someone makes a Request for changes, address the changes and push them. Ask for re-approval
   - Once you get 2 approvals and your branch is up-to-date with main, Merge Pull Request with main.
5. Sync Your Branch with Main if Needed
   - If the **main** branch has been updated before your PR is complete, you need to update your branch:
      - git pull origin main
   - Resolve any conflicts that arise and push the merge:
      - git push




