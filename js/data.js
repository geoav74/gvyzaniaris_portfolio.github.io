/* Define entry data variables for projects and skills. Keeping them in separate 
arrays from the main logic (template_filler.js) for better organization,
readability and maintenance. 
*/

/*
Each object in this array represents one project card.
- img: path to the project image
- alt: alt text for accessibility
- title: the project title
- desc: a short description of the project
- url: link to view the project 
*/
const projects = [
{ img: 'images/projects/data_scientist_salaries.jpg', 
alt: 'A bag full of money attached to a lifted balloon representing life.', 
title: 'Data Scientists Salaries', 
desc: "Case study on how the DSs' standard of living is affected by their salaries.", 
url: 'https://github.com/geoav74/Data_Scientist_Salaries_in_EUR_2025',
status: 'completed'},

{ img: 'images/projects/scraping.avif', 
alt: 'A screen showing a piece of code for scraping a site.', 
title: 'Information Retrieval', 
desc: 'Case study on contact information retrieval and DB storing process.', 
url: 'https://github.com/geoav74/data_engineering/tree/main/etl_web',
status: 'completed'},

{ img: 'images/projects/choices.jpg',
    alt: 'A man thinking between laptop brands and his criteria.', 
    title: 'Laptop Selection', 
    desc: 'Forming and implementing a decision-making process for laptop selection.', 
    url: 'https://github.com/geoav74/laptop_selection', 
    status: 'completed'},

{ img: 'images/projects/madrid_terror.jpeg', 
alt: '2004 terrorist attack in Madrid', 
title: 'Exploring Terror in EUR', 
desc: 'Exploring the nature, lethality, and modus operandi of terrorist activity.', 
url: 'https://github.com/geoav74/Data_Scientist_Salaries_in_EUR_2025', 
status: 'on-going'},

{ img: 'images/projects/geo_incidents.avif', 
alt: 'A map with pins on it.', 
title: 'Geospatial Sec. Analysis', 
desc: 'Mapping historical security incidents to identify hotspots and regional patterns.', 
url: '', 
status: 'scheduled'}
];

/*
Each object in this array represents one skill.
- img: path to the icon image
- alt: alt text for accessibility
- name: the text label below the icon 
*/
const skills = [
{ img: 'images/skills/python.png', 
alt: 'Python', 
name: 'Python' },

{ img: 'images/skills/sql.png', 
alt: 'SQL', 
name: 'SQL' },

{ img: 'images/skills/data_visualization.png', 
alt: 'Data Visualization & Reporting', 
name: 'Data Visualization & Reporting' }, 

{ img: 'images/skills/etl_proc.png', 
alt: 'Data Pipeline Architecture & ETL', 
name: 'Data Pipeline Architecture & ETL' },

{ img: 'images/skills/ai.png', 
alt: 'AI Model Development & Optimization', 
name: 'AI Model Development & Optimization' },

{ img: 'images/skills/leader_strat_plan.png', 
alt: 'Leadership & Strategic Planning', 
name: 'Leadership & Strategic Planning' },

{ img: 'images/skills/data_story.png', 
alt: 'Data Storytelling', 
name: 'Data Storytelling' }
];






