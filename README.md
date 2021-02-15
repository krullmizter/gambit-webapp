# Gambit challenge #2 | Webapp
#### Made by: Samuel Granvik


### Option 2: Web or native app
"If the data conversion path in option 1 is not something that interests you, or you prefer a more graphical solution, create an app that retrieves and parses the data and presents it as is. The key point is to make use of data available in a backend, and present it in a mobile friendly way." 

---

### About
I chose to do option #2 because of my prior frontend skills, and working experiences. 
This project uses:
- [Vue.js](https://vuejs.org/)
- [Gridsome](https://gridsome.org/)
    * [GraphQL](https://graphql.org/)
- [SCSS](https://sass-lang.com/)
- [FontAwesome](https://fontawesome.com/)
- [GitHub pages](https://krullmizter.github.io/gambit-app/)

---

I chose Gridsome because if its simplicity and easy of use when working with smaller sets of data, and less UI intensive code + it uses the GraphQL for its data layer. I find Vue.js easy to work with, having both used it in my studies and in personal projects. SCSS is just a must have in todays frontend tasks. I really like this techstack, it's awesome 🤟

The data table is a custom CSS grid vue component that takes in data from the `data/registers.json` file. I can then query that data from the GraphQL data layer into the given component via the `page-query` block in vue. The `query` selector lets me choose the sorting and filtering order by which the data should be presented. I have then added a navigation / pagination that automaticly adds pagination based on the `perPage` variable in the `page-query`.

The FontAwesome SVG icons are imported as they are needed, so I don't have to load the entire FontAwesome library, just the SVG icons that I want to use.

The hosting was easy and simple to do when Gridsome is a JAMstack static generated website/webapp framework. So it's blazingly fast 🚀
