2. Discuss how you managed the state in your assignment project.
Ans : 
   1.Course Data State:

The dataload state variable was used to hold the course data fetched from the courses.json file. It was initialized as an empty array using the useState hook.
The useEffect hook was employed to fetch and update this state variable when the component mounted. This ensured that the course data was retrieved and loaded into the application as soon as the component was rendered.

    2.Selected Courses State:

The selectedCourses state variable was used to keep track of the courses that were selected by the user. It was initialized as an empty array using the useState hook.
The handleSelectCourse function was responsible for updating this state when the user clicked the "Select" button. It added the selected course to the selectedCourses array.

      3.Total Credit Hour and Total Price State:

The totalCreditHour and totalPrice state variables were used to dynamically calculate and display the total credit hours and total price of the selected courses.
These state variables were updated within the handleSelectCourse function whenever a course was selected.

   4.Maximum Credit Hour Limit:

To enforce a maximum credit hour limit (20), the handleSelectCourse function checked whether adding a course would exceed this limit before updating the selectedCourses state. If the limit was exceeded, it displayed a toast message.
Visual Feedback for Selected Courses:

To provide visual feedback to the user about which courses were already selected, conditional rendering was used for the "Select" button. If a course was already in the selectedCourses array, the button was disabled and displayed as "Selected."
Displaying Remaining Credit Hours:

The remaining credit hours were dynamically calculated and displayed in the "Credit Hour Remaining" section based on the maximum limit and the current total credit hours.