# TCSEI Website

A beautiful, user-friendly educational platform for TCSEI with role-based dashboards for Admin, Student, and Teacher.

## Step-by-Step Setup Guide (No Coding Required)

### Step 1: Create Accounts
1. **GitHub Account**:
   - Go to [github.com](https://github.com) and sign up for a free account.
2. **Vercel Account**:
   - Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.
3. **MongoDB Atlas Account**:
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.

### Step 2: Set Up MongoDB Atlas
1. Log in to MongoDB Atlas.
2. Click "Create a New Cluster" (choose the free tier).
3. Once the cluster is created, click "Connect" > "Connect Your Application".
4. Copy the connection string (it looks like `mongodb+srv://<username>:<password>@cluster0...`).
5. Replace `<username>` and `<password>` in the connection string with a username and password you choose (save these securely).

### Step 3: Download and Prepare the Code
1. Download the code folder (`tcsei-website`) from the provided zip file or repository.
2. Inside the folder, find `.env.example` and rename it to `.env`.
3. Open `.env` in a text editor (like Notepad).
4. Paste your MongoDB connection string into `MONGO_URI`.
5. Set `JWT_SECRET` to a random string (e.g., `mysecret123456`).
6. Leave `PORT` and `NEXT_PUBLIC_API_URL` as is for now.

### Step 4: Upload Code to GitHub
1. Go to [github.com](https://github.com) and click "New Repository".
2. Name it `tcsei-website`, keep it public, and click "Create Repository".
3. Follow GitHub’s instructions to upload the `tcsei-website` folder:
   - Install Git (download from [git-scm.com](https://git-scm.com)).
   - Open a terminal/command prompt in the `tcsei-website` folder.
   - Run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

### Step 5: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click "New Project" > "Import Git Repository".
3. Select your `tcsei-website` repository from GitHub.
4. In the "Environment Variables" section, add:
   - `MONGO_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: Your random string from `.env`.
   - `NEXT_PUBLIC_API_URL`: Set to your Vercel app URL (e.g., `https://tcsei-website.vercel.app/api`) after deployment.
5. Click "Deploy". Vercel will build and deploy the site.
6. Once deployed, note the URL (e.g., `https://tcsei-website.vercel.app`).

### Step 6: Create an Admin Account
1. Visit your deployed site (e.g., `https://tcsei-website.vercel.app`).
2. Click "Login" on the homepage, select "Admin", and use temporary credentials (email: `admin@tcsei.com`, password: `admin123`).
3. Go to "Admin Dashboard" > "User Management".
4. Create a new admin account with your email, a secure password, and set "Admin Type" to "Super-Admin".
5. Log out and log in with your new admin account.

### Step 7: Manage the Website
- **Admin Panel**:
  - **User Management**: Add students and teachers for TCS Coaching or Sarvoday Gurukulam.
  - **Content Management**: Create courses for either division.
  - **Finance Dashboard**: View payment records and reports.
- **Student/Teacher Dashboards**: Access via login, tailored for each division.

### Troubleshooting
- If the site doesn’t load, check Vercel’s deployment logs.
- If login fails, ensure `MONGO_URI` and `JWT_SECRET` are correct in Vercel’s environment variables.
- Contact support@vercel.com or support@mongodb.com for help.

## Features
- Beautiful, responsive design with dark mode.
- Role-based dashboards for Admin, Student, Teacher.
- Unified admin panel for both divisions.
- Accessible (WCAG 2.1 AA compliant).
- Deployed on Vercel with MongoDB Atlas for easy management.

## Notes
- Replace placeholder images (`/images/tcs-coaching.jpg`, `/images/sarvoday-gurukulam.jpg`) with real images by uploading them to Vercel or a CDN.
- Keep your MongoDB credentials and JWT secret secure.