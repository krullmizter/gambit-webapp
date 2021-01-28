# Gambit task #2 
### Made by: Samuel Granvik

### Option 2: Web or native app
"If the data conversion path in option 1 is not something that interests you, or you prefer a more graphical solution, create an app that retrieves and parses the data and presents it as is. The key point is to make use of data available in a backend, and present it in a mobile friendly way." 

### About
I chose to do option #2 because of my prior frontend skills, and working experiences. 
This project uses:
- Vue.js
- Gridsome (https://gridsome.org/)
- SCSS

I chose Gridsome because if its simplicity and easy of use when working with smaller sets of data, and less UI intensive code + it uses the GraphQL for its data layer. I find Vue.js easy to work with, having both used it in my studies and in personal projects. SCSS is just a must have in todays frontend tasks. I really like this techstack, it's awesome 🤟

The data table is a custom CSS grid vue component that takes in data from the `data/registers.json` file. I can then query that data from the GraphQL data layer into the given component via the `static-query` block in the vue component. The `query` selector lets me choose the sorting and filtering order by which the data should be presented.