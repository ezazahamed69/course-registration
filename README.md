 1. Add at least 3 Project features
Ans :

 **Course Details and Descriptions**:
   - Include detailed course descriptions, prerequisites, and other relevant information.
   - Allow students to click on a course card to view more information about the course.
   - Provide a dedicated page for each course with a comprehensive description, instructor details, and a syllabus.

 **Course Registration Validation**:
   - Implement server-side validation to ensure that selected courses are still available at the time of registration.
   - Handle scenarios where courses may become unavailable or full between the time they are displayed and when a student attempts to register.
   - Notify students of any changes in course availability and offer alternatives if a course is no longer available.

 **Schedule Planner**:
   - Create a schedule planner feature that allows students to build their semester schedules by adding selected courses to a calendar view.
   - Provide drag-and-drop functionality to easily organize and adjust the schedule.
   - Highlight any scheduling conflicts or overlapping classes and offer suggestions for resolving them.

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

    5.Visual Feedback for Selected Courses:

To provide visual feedback to the user about which courses were already selected, conditional rendering was used for the "Select" button. If a course was already in the selectedCourses array, the button was disabled and displayed as "Selected."

   6.Displaying Remaining Credit Hours:

The remaining credit hours were dynamically calculated and displayed in the "Credit Hour Remaining" section based on the maximum limit and the current total credit hours.