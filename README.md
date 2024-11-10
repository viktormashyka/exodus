# Exodus Tattoo & Piercing Website

Exodus Tattoo & Piercing is a website dedicated to showcasing the work of
talented tattoo artists in Inverness and providing information about their
services.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout of the website.
- **JavaScript**: Interactivity and functionality.
- **SVG**: Favicon for the website.
- **Vite**: Frontend build tool for development.

## File Structure

- `index.html`: Main entry point of the website.
- `css/`: Directory containing CSS stylesheets.
- `partials/`: Directory containing HTML partials for different sections of the
  website.
- `main.js`: JavaScript file for adding interactivity and functionality.
- `images/`: Directory for storing images used on the website.
- `favicon.webp`: Website favicon.

## Usage

To view the website locally, open the `index.html` file in a web browser.

## Credits

- This website template was created using Vite, a frontend build tool.
- The design and content were developed by the Exodus Tattoo Salon team.

## Vanilla App Template

This project was created using Vite. To get started and explore additional
features, [refer to the documentation](https://vitejs.dev/).

## Getting Started

1. Make sure you have the LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Install the project's basic dependencies in the terminal with the command
   `npm install`.
3. Start the development mode by running the command `npm run dev` in the
   terminal.
4. Open your browser and go to [http://localhost:5173](http://localhost:5173).
   This page will automatically reload after saving changes to project files.

## Files and Folders

- Markup files of page components should be placed in the `src/partials` folder
  and imported into the `index.html` file. For example, create a header markup
  file named `header.html` in the `partials` folder and import it into
  `index.html`.
- Style files should be placed in the `src/css` folder and imported into HTML
  page files. For example, for `index.html`, the style file is named
  `index.css`.
- Add images to the `src/img` folder. The bundler optimizes them, but only
  during the deployment of the production version of the project. This happens
  in the cloud to avoid overloading your computer because on weak computers it
  can take a long time.

## Deployment

The production version of the project will be automatically built and deployed
to GitHub Pages in the `gh-pages` branch whenever the `main` branch is updated.
For example, after a direct push or a merged pull request.

```json
"build": "vite build",
```

Next, go to the settings of the GitHub repository (Settings > Pages) and set up
the distribution of the production version files from the /root folder of the
gh-pages branch if it wasn't done automatically.

### Deployment Status

The deployment status of the latest commit is indicated by an icon next to its
identifier.

- **Yellow Color** - Project build and deployment are in progress.
- **Green Color** - Deployment completed successfully.
- **Red Color** - Error occurred during linting, building, or deployment.

More detailed information about the status can be viewed by clicking on the icon
and navigating to the `Details` link.

### Live Page

After some time, typically a few minutes, you will be able to view the live page
at the address provided on the `Settings` > `Pages` tab in the repository
settings. For example, here is the link to the live version for this repository:

If a blank page opens, make sure there are no errors in the `Console` tab
related to incorrect paths to CSS and JS files in the project (**404**). Most
likely, you have an incorrect value for the `--base` flag in the `build` command
in the `package.json` file.

## How It Works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from the `.github/workflows/deploy.yml` file is
   triggered.
2. All files from the repository are copied to the server, where the project is
   initialized and goes through linting and building before deployment.
3. If all steps are successful, the production version of the project files is
   sent to the `gh-pages` branch. Otherwise, the execution log of the script
   will indicate the problem.
