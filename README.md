# HoloArchive
HoloArchive is the go to resource for finding streams from the 70+ talents from Hololive. Through this application you can select your talent of choice and be provided a complete list of their channels content from which you can search for or select your desired vods.

**Link to project:** https://hololivestreamarchive.onrender.com/

![alt tag](https://jharringtondev.netlify.app/images/holoarchive.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React.js

This project started as a personal tool I wanted as a Hololive fan. As someone who uses YouTube a lot, I've always found it frustrating when creators don't organize their videos and streams into YouTube's built-in playlist feature. Even some creators who have playlists have a lot of missed content that didn't get cataloged. So I set out to make a solution for that, at least for Hololive fans.

I chose React for this application to handle a massive amount of information with a quick, seamless user experience. After creating the React app and setting up the talent components, I implemented a template from HTML5 UP to improve the UI. From there, I used the YouTube Data API to handle the information. I configured it to modularly provide all the public content from the Hololive talent's YouTube channels, divided by the generations that the talents belong to. 

This information is stored in a separate component that can then be imported into the matching talent page and sorted according to the user's requests. When on a talent page, the user can select a search from a drop-down of options based on standard video titling conventions for Hololive talents using Fuse.js. If they want to search on their own, the user is also provided with a search bar where they can look for their own choice of streams as an alternative to scrolling through the selection to find results the dropdown may have missed.

## Optimizations

I want to improve how the data is retrieved and stored for use within the application, with automation to update the results at the same time as fetching them from the API, without having to go in and initiate the process manually. This is a crucial feature, as among the 74 talents currently active, an average of 20 new streams is added to the results per day. I would also like to find a better way to handle the selection drop-down for the wide variety of title formats, along with localized names of games being played. Finally, at the top of the list, I would like to implement a feature similar to the early stages of this project, when you can search by game instead of only talents, so if the user has a favorite game they'd like to watch, they can select that game and see all the talents that have played it.

## Lessons Learned:

I've learned a lot about organizing React components and making them as modular as possible to handle a wide variety of data across multiple languages. This project has pushed me to think about how to handle large amounts of data and optimize its use to make the user's experience as fast and seamless as possible.




