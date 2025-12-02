# dRTP Skills Website

[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red.svg)](https://jekyllrb.com/)
[![Minimal Mistakes](https://img.shields.io/badge/theme-Minimal%20Mistakes-blue.svg)](https://mmistakes.github.io/minimal-mistakes/)

Source code for the **dRTP Skills** website ([www.drtp-skills.ac.uk](https://www.drtp-skills.ac.uk)) - a resource hub for digital Research Technical Professionals (dRTPs), providing information on skills development, funding opportunities, events, and community resources.

## About

Research Technical Professionals (RTPs) are integral to modern scientific discovery. This website facilitates the discovery and development of digital research technical skills through:

- **Events & Workshops**: Upcoming and past training events, conferences, and hackathons
- **Funding Opportunities**: Information on grants and financial support for professional development, tools, and community initiatives
- **About Pages**: Details on CHARTED, DRIFT, and related projects supporting the dRTP community

## Technology Stack

- **Static Site Generator:** [Jekyll 4.x](https://jekyllrb.com/)
- **Theme:** [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) (remote theme)
- **Hosting:** GitHub Pages
- **Collections:** Custom `events` collection for event management
- **Plugins:** jekyll-paginate, jekyll-sitemap, jekyll-feed, jemoji, jekyll-include-cache

## Project Structure

```
drtp-skills.github.io/
├── _config.yml              # Jekyll configuration
├── _data/
│   └── navigation.yml       # Site navigation structure
├── _events/                 # Event markdown files (collection)
├── _includes/
│   ├── head.html           # Custom head includes
│   └── masthead.html       # Navigation header with dropdowns
├── _layouts/               # Custom page layouts
├── _pages/                 # Main content pages
│   ├── about*.md           # About pages (CHARTED, DRIFT, etc.)
│   ├── events.md           # Events listing page
│   ├── funds*.md           # Funding opportunity pages
│   └── contact-us.md       # Contact information
├── _sass/
│   └── minimal-mistakes/
│       └── skins/
│           └── _blue-theme.scss  # Custom color theme
├── assets/
│   ├── css/
│   │   ├── custom.css      # Custom styles (dropdowns, accordions, layout)
│   │   └── events-tags.css # Event tag filter styles
│   └── images/             # Site images and logos
├── Gemfile                 # Ruby dependencies
└── index.html              # Homepage

```

## Getting Started 

### Prerequisites

- Ruby 3.0 or higher
- Bundler gem (`gem install bundler`)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/drtp-skills/drtp-skills.github.io.git
   cd drtp-skills.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site:**
   Open your browser to [http://localhost:4000](http://localhost:4000)

### Building for Production and Deployment

On pushing to the main branch, the site will be automatically built and deployed through GitHub Actions.

## Content Management for dRTP Project Staff

If you would like to add an event, add other content, or report a bug, please submit an issue using the appropriate issue template.

## Content Management for Website Developers

### Adding an Event

1. Create a new markdown file in `_events/` with frontmatter:
   ```yaml
   ---
   title: "Your Event Title"
   date: "2025-12-15"
   tags: [training, workshop, infrastructure]
   layout: single
   classes: wide
   ---
   
   Event description and details here...
   ```

2. The event will automatically appear on the `/events/` page, sorted by date and categorised as "Upcoming" or "Past Events"

3. **Tag Filtering:** Users can filter events by clicking tag buttons on the events page

### Adding a Funding Opportunity

Create or edit markdown files in `_pages/` with the `funds-*.md` naming pattern. Use the accordion pattern for expandable sections:

```html
<details class="accordion">
<summary>Funding Category Title</summary>
<p>Description and details...</p>
</details>
```

## Styling

### Theme Colors

The site uses a custom blue-teal theme defined in:
- `_sass/minimal-mistakes/skins/_blue-theme.scss` — SCSS variables
- `assets/css/custom.css` — Additional custom styles

Primary colors:
- **Primary background:** `#0e5559` (dark teal)
- **Accent:** `#41bfc7` (light teal)
- **Hover/links:** `#47d2da` (bright cyan)

### Custom CSS

Custom styles in `assets/css/custom.css` include:
- **Dropdown menus** — Keyboard-accessible navigation dropdowns
- **Accordions** — Expandable content sections with chevron indicators
- **Image framing** — Framing for CHARTED/DRIFT logos
- **Wide layout** — Full-width page layout without sidebar
- **Tag filters** — Event filtering UI

### JavaScript Features

- **Dropdown keyboard navigation** — Keyboard accessibility for nav dropdowns
- **Event tag filtering** — Client-side filtering by event tags
- **Accordion toggles** — Native `<details>` elements with custom styling

## Contributing

1. Create a new branch for your changes: `git checkout -b feature/your-feature-name`
2. Make your changes and test locally with `bundle exec jekyll serve`
3. Commit with clear, descriptive messages
4. Push to your branch and open a pull request

## License

This project uses the [MIT Licensed](LICENSE) theme (Minimal Mistakes). Content and customisations are maintained by the dRTP Skills project team.

## Contact

Please visit the [Contact Us](/contact-us/) page or open an issue on GitHub.

---
