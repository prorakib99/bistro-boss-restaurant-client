# The Bistro Boss Restaurant Website

Welcome to The Bistro Boss Restaurant Website, a feature-rich web application designed to enhance your online experience. This project encompasses a wide array of functionalities and cutting-edge technologies to provide users with a seamless and enjoyable interaction.

## Project Description

The Bistro Boss Restaurant Website is a versatile web application that combines modern web development practices to deliver a comprehensive solution. From user authentication and role-based dashboards to efficient image optimization and dynamic UI components, this project is a showcase of best practices and innovative features.

### Key Features

- **404 Page:** A custom 404 page ensures a user-friendly experience even when unexpected errors occur.

- **Image Size Optimization:** Images are optimized for faster loading times and improved performance.

- **User Dashboard:**
  - **Home:** A dynamic home page providing users with personalized information and updates.
  - **Payment Component:** Integration of Stripe for secure card payments and demo cards for testing.
  - **Cart Page:** Display and delete cart items directly from the database in real time.
  - **Review:** Users can add reviews, which are stored in a MongoDB database.
  - **Bookings:** Admins can manage bookings, and users can view and delete their bookings.
  - **Reservation:** Users can reserve tables directly from their dashboard.
  - **Payment History:** A table component dynamically displays payment history.

- **Admin Dashboard:**
  - **Home:** Admin-specific dashboard utilizing Rechart Package to display dynamic stats data.
  - **Manage Items:** Admins can add, update, and delete items. User data is reused for UI display.
  - **All User Management:**
    - Admins can view all users and manage them by:
      - Deleting users.
      - Updating user roles to grant admin privileges.

  - **Add Menu Item:**
    - Admins can add new menu items to the system.

  - **Update Menu Items:**
    - Admins can modify existing menu items with updated information.

  - **Delete Menu Items:**
    - Admins can remove menu items that are no longer available or relevant.



- **Login and Authentication:**
  - **Captcha Verify:** Captcha verification is implemented during login.
  - **Social Login:** Users can log in via Google and Github.
  - **Firebase Authentication:** Firebase is integrated for login, registration, and user management.

- **UI/UX:**
  - **Toasts:** Separate toasts for login captcha verification, add to cart, and other notifications.
  - **Helmet:** Added Helmet to enhance security on specific components.
  - **Loader/Spinner:** Visual indicators for user status checks and loading times.
  - **Responsive Design:** User dashboard and other components designed to be responsive.
  - **React Query:** Add to cart functionality implemented using React Query.

- **Additional Features:**
  - **JWT Token:** Secure management of JWT tokens stored in local storage.
  - **Role-Based Dashboard:** Admin-specific UI updates based on user roles.
  - **Firebase User Profile Update:** Users can update their profile information.
  - **Redirect on Login:** Users are redirected to the home page after successful login.
  - **Register with Captcha:** Captcha verification during user registration.

- **Styling:**
  - **Chakra UI:** Styling components for a consistent and visually appealing design.
  - **Tailwindcss:** Integration of Tailwindcss for enhanced styling.

- **Testing:**
  - **React Hook Form:** Form validation implemented for a seamless user registration experience.

- **Packages Used:**
  - DaisyUI, Tailwindcss, PrimeReact, HeroIcons, and other essential packages installed.

This project is a culmination of efforts to create a robust and user-friendly web application. Feel free to explore the various features and functionalities, and we hope you have a delightful experience using The Bistro Boss Restaurant Website.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/prorakib99/bistro-boss-restaurant-client.git
   ```
   
2. Navigate to the project directory:

    ```bash
    cd bistro-boss-restaurant-client
    ```
3. Install the dependencies:

    ```bash
    npm install
    ```
5. Install the dependencies:

   ```bash
    npm run dev
    ```
Thank you for visit my project!
