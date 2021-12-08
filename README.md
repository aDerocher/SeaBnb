# [SeaBnb](https://sea-bnb.herokuapp.com/)
Spun off of [Airbnb](https://wwww.airbnb.com), this clone focused on catering to yacht owners looking for a new revenue stream from one of their high-value assets

Contents:
 1. Overview
 2. Functionality
 3. Backend Summary
 4. FrontEnd Summary
 
### Overview

Seabnb is a travel website that enables users to make reservations or host their own spots on the worlds most beautiful, privately owned yachts. Once they have completed a stay, users can review how much they enjoyed the spot and book it again if they like.

![](demoPictures/splash.png)


### Using SeaBnB
SeaBnb style and use are very similar to Airbnb. The look and feel should be immediately familiar to anyone who has used the latter. You can browse the splash page to see some possible locations, or check the reservation possibilities using the 'Im Flexible' button that is front and center. 
Navigating to the profile page users will have options of viewing their past and upcoming trips. There is another section for posting their own yachts to rent out to other vacationers.

![](demoPictures/spot.PNG)

### Backend
The backend's API is built using Express and Sequelize. The most intricut portion is for the uploading of images to AWS. 
When hosting a new spot, certain details are required including at least 1 (and upto 5) images of their ship. There are many checks the algorithm makes for image uploads to ensure no errors are encountered when uploading multiple images.

---

### Frontend
SeaBnb's front end uses a React app to impliment the various state changes necessary for functions like leaving reviews and making new reservations.
![](demoPictures/my-reservations.PNG)



---
### Going Forward

Next steps for this project are:
  - [X] Fix the minor react bugs that are present during state changes
  - [X] Add ability of users to create their own spots that they could list.
  - [X] Include more dynamic data on spots such as price and rating.
  - [ ] Add a functional searchbar
  - [ ] Add a functional Google Map component
