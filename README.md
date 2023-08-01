# Rift Archive - A League of Legends Project
This project is deployed with Netlify.

https://astounding-starlight-b3e2f5.netlify.app/
## Responsive CSS

This project is built with TailwindCSS, ensuring a responsive design that adapts to various screen sizes and devices.

## Navigation

The application features a sticky navbar that remains fixed at the top of every page. It provides easy access to four main sections: Home, Champions, Items, and My Champions.

## Home Page
![Home page Preview](https://github.com/weixu1220/lol-project/blob/main/src/images/Screenshot1.png)

The home page includes a user-friendly form that requests the user's name. The provided name is stored in the local storage, and if it already exists, a personalized greeting is displayed.

## Champions and Items Pages
![Champion page Preview](https://github.com/weixu1220/lol-project/blob/main/src/images/Screenshot2.png)

![Item page Preview](https://github.com/weixu1220/lol-project/blob/main/src/images/Screenshot3.png)
### Fetching Data from APIs
![Preview](https://github.com/weixu1220/lol-project/blob/main/src/images/Screenshot4.png)

Data for champions and items are fetched separately from the Data Dragon API. The retrieved data is then stored and passed to components using useContext to be displayed on the champions and items pages.

### Interesting Challenge

The data set contains some information stored with tags. To ensure data cleanliness and readability, I developed a small tag remover utility to eliminate specific tags and present the information in a more organized manner.

### Future Enhancements

In the future, I have exciting plans to enhance the Rift Archive project further:

- **Expanded Data Analysis**: I aim to explore more data related to item effects and create an item list that showcases the combined effects. This will enable the application to display a full champion build, including the effects of selected items.
- **Interactive Item Selection**: I plan to implement drag-and-drop functionality, allowing users to drag items into slots, making the item selection process more engaging and user-friendly.
- **Improved Search and Filtering**: I intend to add search bars for champions and items to facilitate quick and efficient exploration. Additionally, I plan to introduce filters to sort champions and items based on various statistics.

## Linking with Parameters

Clicking on a champion or item will navigate users to a new page, providing more detailed information about the selected champion or item.

## My Champions

The "My Champions" feature enables users to add their favorite champions, which are then stored locally. The selected champions will be displayed for easy reference.

## Copyright

Data is collected from the [Data Dragon API](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html). All images and data belong to Riot Games, and full copyrights are acknowledged.
