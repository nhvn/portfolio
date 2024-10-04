export const projects = [
  { 
    id: 'augmentai',
    title: 'AugmentAI',
    ongoing: true,
    app: 'Web Application',
    description: "A generative AI platform for data augmentation and synthetic image generation, submitted for the Dell x NVIDIA HackAI Hackathon to showcase the potential of generative AI in data augmentation.",
    role: 'Full Stack Developer',
    duration: 'Aug 2024 - Present',
    technologies: ['Python', 'PyTorch', 'Flask', 'NVIDIA AI Workbench', 'HTML/CSS', 'JavaScript'],
    codeLink: 'https://github.com/nhvn/data-aug',
    liveLink: '',
    prob: 'Data scarcity and diversity are significant challenges in machine learning, particularly for small to mid-sized projects. Many AI models require large, diverse datasets to achieve high accuracy. However, collecting and labeling these datasets is often time-consuming and expensive. Without sufficient data, models may suffer from bias, overfitting, or underperformance in real-world applications, limiting their generalization capabilities.',
    sol: 'AugmentAI provides an innovative solution by leveraging Generative Adversarial Networks (GANs) to generate synthetic images that expand and diversify datasets. By applying a variety of augmentation techniques like rotation, flipping, and color jittering, the platform helps users create enriched datasets with minimal effort. Integrated with NVIDIA AI Workbench, AugmentAI enables efficient and scalable model training, offering a user-friendly web interface where users can upload their datasets and receive augmented or synthetic images, dramatically enhancing their machine learning workflows.',
    contribution: 'Developed a GAN-based model, enhancing dataset diversity for machine learning tasks \n Implemented a user-friendly web interface allowing users to upload datasets and receive synthetic images \n Utilized NVIDIA AI Workbench for efficient model training, optimizing GPU resources and scalability',
    image: '/img/augment.png',
    sect1: '', 
    sect1content: '',
    sect1link: "", 
    sect1linkText: "",
    sect1img1: '',
    sect1img2: '',
    sect1img3: '',
    sect1sub1: '', 
    sect1sub1content: '',
    sect1sub1img1: '',
    sect1sub1link: "", 
    sect1sub1linkText: "",
    sect2: '',
    sect2content: '',
    sect2img1: '',
    sect2img2: '',
    sect2img3: '',
    sect3: '',
    sect3content: '',
    sect3img1: '',
    sect3img2: '',
    sect3img3: '',
    sect4: '',
    sect4content: "", 
  },
  {
    id: 'beFit',
    title: 'BeFit v2',
    ongoing: false,
    app: 'Mobile & Web Application',
    description: "BeFit v2 is your ultimate fitness companion, offering a seamless way to monitor your weight-loss progress, diet, and workouts. Whether you're new to fitness or a seasoned enthusiast, BeFit v2 empowers you to achieve your wellness goals with ease and precision.",
    role: 'APP & WEB DEVELOPER',
    duration: 'Feb 2024 - Aug 2024',
    technologies: ['Next.js', 'Shadcn UI', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'Swift'],
    codeLink: 'https://github.com/nhvn/befitv2app',
    liveLink: 'https://befit-v2.zachuri.com/login',
    contribution: 'Enabled users to input dates for varied weight measurements, enhancing tracking versatility \n Fixed various bugs including the inability to delete weights \n Transformed the web app into an iOS mobile application, using Swift',
    team: 'Two other software engineers',
    image: '/img/beFit.png',
    sect1: 'Intro',
    sect1content: 'BeFit V2 was born out of a desire to simplify and streamline the fitness tracking experience. As a fitness enthusiast and someone deeply invested in personal health, I recognized the challenges of managing multiple aspects of fitness—tracking workouts, monitoring dietary intake, and staying on top of health goals—across different platforms and tools. This fragmented approach often leads to inefficiencies and missed opportunities for progress. With BeFit V2, I aimed to create a comprehensive solution that brings together all these essential elements into a single, user-friendly platform. The app is designed to be more than just a fitness tracker; it’s a companion that empowers users to take control of their health journey with ease and confidence.',
    sect2: 'Problem',
    sect2content: 'Tracking fitness progress can be cumbersome and fragmented across different platforms and methods. Users often struggle with managing their workouts, dietary intake, and weight measurements in one place, leading to inconsistencies and difficulties in maintaining a holistic view of their health and fitness journey.',
    sect3: 'Solution',
    sect3content: 'BeFit v2 consolidates fitness tracking into a single, user-friendly platform. By allowing users to log workouts, monitor calorie intake, and track weight measurements all in one app, BeFit v2 provides a seamless and comprehensive approach to fitness management. This integration ensures users can easily stay on top of their fitness goals, receive insights into their progress, and make informed decisions to enhance their wellness journey.',
    sect4: 'Research & Discovery',
    sect4sub1: "User Research",
    sect4sub1content: 'Conducted surveys and interviews with fitness enthusiasts to understand their pain points and desires in fitness tracking. This research informed our feature prioritization and overall app direction.',
    sect4sub1link: "https://forms.gle/6VCiYpjxpUgyoQmy8",
    sect4sub1linkText: "Link to Survey",
    sect4sub2: 'Color Schemes & Font',
    sect4sub2content: "The color palette chosen for this project emphasizes contrast and readability, with a sleek, modern look. In dark mode, a black background is paired with white text and accents for a clean interface, while the light mode uses a white background with black text. The buttons are styled in black and white, with additional elements in blue and soft gray to guide user interaction and maintain visual harmony. The narrative section's text color is a soft blue-gray, creating a calming effect that aligns with the app's goal of promoting wellness.",
    sect4sub2img1: '/img/beFit-colors.png',
    sect5: 'Early Concepts',
    sect5content: 'For the website, I analyzed the layout and adapted it for a seamless mobile experience, focusing on consistency and ease of navigation across platforms. This is crucial for our fitness app, where user engagement and accessibility are key.',
    sect5sub1: 'Sketches',
    sect5sub1img1: '/img/beFit-Sketch.png',
    sect5sub2: 'Wireframing',
    sect5sub2content: "Created low-fidelity sketches and digital wireframes to map out the app's structure and user flow, ensuring a logical and intuitive layout before moving to detailed design.",
    sect5sub2img2: '/img/beFit-Sketch2.jpg',
    sect6: 'Design Development',
    sect6sub1: 'Prototyping',
    sect6sub1content: "Developed interactive prototypes using tools like Figma to visualize the user interface and interactions, allowing for early testing of the app's functionality and user experience.",
    sect6sub1img1: '/img/beFit-proto.png',
    sect6sub2: 'Iterative Design',
    sect6sub2content: "Continuously refined the app's design based on testing results, making incremental improvements to enhance usability and meet user needs more effectively.",
    sect7: 'Technical Architecture',
    sect7content: "I created a detailed architecture diagram to illustrate the interactions between UI, ViewModels, Data Management, and Networking. This diagram highlights key interactions, ensuring a cohesive and efficient user experience on both web and mobile.",
    sect7img1: '/img/beFitArch.png',
    sect8: 'Final Designs',
    sect8content: "The final design of BeFit V2 prioritizes clarity, ease of use, and visual appeal. Each screen is designed to present information in a logical, easily digestible manner, reducing cognitive load for users. The consistent use of color and typography across the app ensures a cohesive user experience, while intuitive icons and clear labels make navigation effortless.",
    sect8sub1: 'Dark Mode',
    sect8sub1img1: '/img/beFit-darkmode.png',
    sect8sub2: 'Dashboard',
    sect8sub2img1: '/img/beFit-dashboard.png',
    sect8sub3: 'Workout Tracking',
    sect8sub3img1: '/img/beFit-workout.png',
    sect8sub4: 'Diet Overview & Weight Tracking',
    sect8sub4img1: '/img/beFit-weight.png',
    sect9: 'Future Steps',
    sect9sub1: 'Potential Ideas',
    sect9sub1content:       <ul>
    <li>Implementing AI-powered workout recommendations based on user progress and goals</li>
    <li>Integrating with popular fitness wearables and smart scales for automatic data syncing</li>
    <li>Expanding the social features to include group challenges and virtual workout buddies</li>
    <li>Developing a nutrition planning feature with customized meal suggestions</li>
    <li>Creating a web dashboard for more detailed data analysis and goal tracking</li>
  </ul>,
    sect9sub2: 'Final Thoughts',
    sect9sub2content: `The BeFit v2 project was an enriching experience that allowed me to leverage my mobile and web development skills. This fitness companion app features a user-centric, intuitive interface integrating workout logging, dietary tracking, and social interaction. Through iterative design and collaboration with my team, we created a comprehensive tool that meets the real needs of fitness enthusiasts. The project emphasized the importance of attention to detail, agile methodologies, and user feedback. BeFit v2 aims to empower users on their fitness journeys, providing tools and community support to make achieving wellness goals easier and more enjoyable.`,
  },
  {
    id: 'taskmaster',
    title: 'Task Master',
    ongoing: false,
    app: 'Web Application',
    description: 'Task Master is a to-do list app that allows users to create, edit, and delete tasks, set due dates and priorities, and mark tasks as complete or incomplete. The app also features an ability to add sticky notes, a registration and login system, and secure data storage in a PostgreSQL database.',
    role: 'FULL-STACK DEVELOPER',
    duration: 'Apr 2023 - Jun 2023',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'HTML', 'CSS'],
    codeLink: 'https://github.com/nhvn/to-do-list',
    contribution: 'Built a secure PostgreSQL database from scratch and developed a robust API using Node.js and Express \n Created an intuitive user interface using React, integrating it with the back-end for seamless functionality \n Enhanced user experience with task completion tracking and responsive design elements \n Implemented "Today," "Agenda," and "Objectives" boxes, along with a "Bulletin Board" for quick note-taking',
    team: 'Two other software engineers',
    image: '/img/todo.png',
    sect1: 'Intro',
    sect1content: "Task Master is a user-friendly task management tool designed to help individuals stay organized and achieve their goals. Whether you're planning your day, setting long-term objectives, or capturing quick notes, Task Master provides a seamless way to keep track of everything that matters. Our intuitive interface and robust features make it easier than ever to manage your tasks efficiently, so you can focus on what truly counts.",
    sect2: 'Problem',
    sect2content: "Managing tasks and responsibilities can be overwhelming, often leading to missed deadlines and forgotten goals. Traditional methods like sticky notes and complex apps add confusion, making it hard to stay organized.",
    sect3: 'Solution',
    sect3content: 'Task Master simplifies task management with intuitive features like "Today," "Agenda," and "Objectives" boxes, along with a "Bulletin Board" for quick notes. It helps users stay focused, achieve their goals, and manage their day efficiently.',
    sect4: 'Early Concepts',
    sect4content: "In the early stages of developing Task Master, the focus was on creating a simple yet powerful tool to help users manage their daily tasks and long-term goals. The initial concept centered around an interface that would be easy to navigate, with features that allow users to quickly organize and track their tasks. The goal was to strike a balance between functionality and simplicity, ensuring that users could manage their responsibilities without feeling overwhelmed by the app itself.",
    sect4sub1: 'Early Ideation',
    sect4sub1content: 'During the ideation phase, various ideas were explored to determine the best way to present tasks and goals. Concepts like the "Today," "Agenda," and "Objectives" boxes emerged from the desire to categorize tasks by priority and time frame. The "Bulletin Board" feature was also conceptualized as a space for users to jot down random notes or reminders. Early sketches were made to visualize these features and to experiment with different layouts and user flows, ensuring that the app would be both intuitive and effective.',
    sect4sub1img1: '/img/todoSketch.png',
    sect4sub2: 'Digital Wireframe',
    sect4sub2content: 'The transition from sketches to digital wireframes allowed for a more refined visualization of the app’s structure. By creating digital wireframes, we were able to test and iterate on the design, ensuring that the layout was optimized for user experience before moving into the full development phase.',
    sect4sub2img1: '/img/todoWireframe.png',
    sect5: 'Design Development',
    sect5content: 'As Task Master moved from concept to reality, the focus shifted to refining the design and ensuring that the app met user needs. The design development phase involved turning wireframes into detailed prototypes and continuously improving the interface based on feedback and testing.',
    sect5sub1: 'Prototyping',
    sect5sub1content: 'Using Figma, high-fidelity prototypes were created to bring the design to life. These prototypes allowed for a closer look at the user interface, including the functionality of the "Today," "Agenda," and "Objectives" boxes, as well as the "Bulletin Board." Prototyping helped visualize the user experience, making it easier to identify and address any usability issues early on.',
    sect5sub1img1: '/img/todoPrototype.png',
    sect5sub2: 'Iterative Design',
    sect5sub2content: 'The design was refined through several iterations, incorporating user feedback and testing results. Adjustments were made to enhance the user experience, such as optimizing the layout, improving task tracking features, and ensuring responsive design across devices. This iterative process ensured that the final design was both user-friendly and effective.',
    sect6: 'Final Designs',
    sect6content: "Showcases the completed design elements and user interface of Task Master, offering a detailed view of the app's final look and overall functionality. This includes the polished design and user experience enhancements that contribute to a seamless and engaging interface. The presentation highlights how the design choices support effective task management and user interaction, reflecting the culmination of development efforts aimed at delivering a well-rounded and intuitive application.",
    sect6sub1: 'Home Page',
    sect6sub1img1: '/img/todoHome.png',
    sect6sub2: 'Dashboard',
    sect6sub2img1: '/img/todoDashboard.png',
    sect6sub2img2: '/img/todoBoxes.png',
    sect6sub2img3: '/img/todoBullet.png',
    sect7: 'Future Steps',
    sect7sub1: 'Potential Plans',
    sect7sub1content:<ul>
    <li>Integrate advanced analytics for tracking task completion patterns.</li>
    <li>Add collaborative features for team-based task management.</li>
    <li>Incorporate AI to provide personalized task recommendations.</li>
    <li>Explore mobile app development to reach a broader audience.</li>
    <li>Expand functionality to support additional languages.</li>
  </ul>,
    sect7sub2: 'Final Thoughts',
    sect7sub2content: "Task Master has effectively addressed core task management needs, but there's always room for growth. Reflecting on the development process, I've gained valuable insights into user-centered design and feature development. The experience has taught me the importance of iterative design and responsiveness to user feedback. Moving forward, I plan to refine features based on user input and stay adaptable to emerging technologies, continually enhancing both user experience and functionality.",
  },
  {
    id: 'smartLights',
    title: 'Smart Lighting Control System',
    ongoing: false,
    app: 'Physical + Digital Integration Product',
    description: "An automation solution for precise control of lights. This system enables control of up to 50 lights across 10 rooms with customizable schedules.",
    role: 'IoT Developer',
    duration: 'Feb 2023 - Mar 2023',
    technologies: ['Python', 'Flask', 'Raspberry Pi'],
    contribution: 'Engineered lighting automation solution using Python \n Utilized Raspberry Pi to interact with physical GPIO pins \n Used multithreading and Flask web framework to enable parallel control of lights \n Created web UI with Jinja templates for user management and scheduling',
    team: 'Two other software engineers',
    image: '/img/light.png',
    sect1: 'Sketches',
    sect1content: 'The initial phase of the Smart Lighting Control System project involved detailed sketches and wireframes to visualize the design and layout of the system. These sketches helped in planning the user interface and the flow of the control system, ensuring a user-friendly and efficient design.',
    sect1img1: '/img/lightSketch.png',
    sect2: 'Methodology',
    sect2content: 'The development process involved iterative prototyping and testing. I used Python for the core functionality and Flask for the web framework. Multithreading was implemented to allow parallel control of the lights, and Jinja templates were used to create the web UI. The system was tested thoroughly to ensure reliable performance.',
    sect3: 'Results',
    sect3content: 'The Smart Lighting Control System was successfully developed and implemented. It provided precise control of lights, allowing users to customize schedules and manage up to 50 lights across 10 rooms. The system was reliable and user-friendly, meeting the project’s goals.',
    sect3img1: '/img/lightResult.png',
    // sect3img2: '/img/lightResult2.png',
    sect4: 'Final Thoughts',
    sect4content: "Working on the Smart Lighting Control System project was a valuable experience that allowed me to apply my IoT development skills in a practical context. I learned a lot about integrating hardware and software to create a seamless and efficient solution. The project's success demonstrated the importance of iterative prototyping, thorough testing, and user-centric design.",
  },
  {
    id: 'pumpkin',
    title: 'Pumpkin Lostte Game',
    ongoing: false,
    app: 'Web Application',
    role: 'GAME DEVELOPER',
    description: 'This game is a twist on Flappy Bird, where players guide Jerry to rescue his lost pumpkin by skillfully dodging obstacles. It is a nostalgic journey with a meaningful objective, born from a love for classic games. Currently playable on Windows.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    codeLink: 'https://github.com/nhvn/first-browser-game',
    liveLink: 'https://pumpkin-lost-te.web.app/',
    image: '/img/pumpkin.png',
    contribution: 'Designed captivating game elements from scratch, ensuring a visually appealing and engaging user experience \n Developed the game using a combination of HTML, CSS, and JavaScript, implementing intricate game mechanics and interactions \n Managed the deployment process through Firebase, ensuring seamless integration and optimal performance across platforms',
    duration: 'Oct 2022 - Feb 2023',
    outcome: 'I developed ‘Pumpkin Lostte’, where players navigate through barriers to rescue a lost pumpkin, adding an actual destination to reach, unlike the endless gameplay of ‘Flappy Bird’.',
    sect1: 'Sketches',
    sect1content: 'The game design process was centered around crafting an immersive gameplay experience. The focus was on the game mechanics, where the player would have to navigate through a series of hurdles. The player character was constantly pursued, adding a layer of thrill and urgency to the game. This chase element was integral to the gameplay, challenging the player’s skills and decision-making in real-time. The design sketches reflected these mechanics, illustrating the dynamic and interactive nature of the game.',
    sect1img1: '/img/pumpkinSketch.png',
    sect1img2: '/img/pumpkinSketch2.png',
    sect2: 'Methodology',
    sect2content: 'The development process was iterative, beginning with a basic game loop and progressively incorporating features such as barrier navigation and game over conditions. A significant focus was placed on the individual designs of the game elements. The character “Jerry”, the “Pumpkin”, the “Chaser”, and the “Black Barriers” were all meticulously designed to enhance the gameplay experience. The designs for the “Chaser” and “Black Barriers” were particularly detailed, crafted carefully on my notes app. User feedback was integrated at each stage, further refining the game and enriching the player’s experience.',
    sect3: 'Results',
    sect3content: 'The final game provides a challenging yet enjoyable gaming experience. The unique twist of having an actual destination adds a new dimension to the gameplay, making it stand out from similar games. The Halloween-themed design was well-received by players, adding to the game’s appeal.',
    sect3img1: '/img/pumpkinResult.png',
    sect3img2: '/img/pumpkinResult2.png',
    sect4: 'Final Thoughts',
    sect4content: 'This project is my first milestone project from my bootcamp program, and I am proud of what I have accomplished so far. This is a JavaScript browser game built with HTML and CSS. I created this project around Halloween, so I decided to make it Halloween-themed. I designed some elements of the game from scratch, like the black barriers that players should avoid touching, or they lose. The game has room for improvement, but considering my knowledge at the time, I think it is awesome. Please feel free to try it out if you dare. It is a challenging game, so do not hesitate to give it multiple attempts.',
  },
  {
    id: 'oldPortfolio',
    title: 'Old Portfolio',
    ongoing: false,
    app: 'Web Application',
    description: 'My first ever portfolio to showcase of my skills, experiences, and projects. This simple website was designed to be responsive and user-friendly, providing visitors with easy access to my work and contact information. Feel free to explore my earlier phase of my career in tech.',
    role: 'WEB DEVELOPER',
    duration: 'Apr 2023 - Jun 2023',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/nhvn/nhvn.github.io',
    liveLink: 'https://nhvn.github.io/',
    contribution: 'Designed and developed the entire website from scratch \n Implemented responsive design principles to ensure a seamless experience across different devices \n Integrated a contact form for easy communication',
    image: '/img/portfolio.png',
    sect1: 'Sketches',
    sect1content: 'The project sketches visually represent the structure of the website, including the layout of the introduction, about, project, and contact sections. They also highlight the design elements of the navigation and footer. In addition, they depict how responsive design has been implemented to ensure a seamless user experience across different devices. Each sketch offers a clear depiction of the main components and their interplay, which enhances the understanding of the website’s design and functionality.',
    sect1img1: '/img/portfolioSketch.png',
    sect2: 'Methodology',
    sect2content: 'The project started with a design phase where the layout of the website was planned. The development phase involved coding the website using HTML, CSS, JavaScript, and Bootstrap. A contact form was integrated for easy communication. Responsive design principles were implemented to ensure the website looks good on all devices.',
    sect3: 'Results',
    sect3content: 'The portfolio website project yielded positive results. The website effectively showcases my skills, experiences, and projects, providing visitors with a comprehensive view of my capabilities. The responsive design ensures a seamless experience across different devices.',
    sect3img1: '/img/portfolioResult.png',
    sect4: 'Final Thoughts',
    sect4content: 'This is my first personal portfolio that I have ever made, after completing my program. It not only allowed me to showcase my skills and experiences but also gave me a platform to share my work with others. The project was a great opportunity to apply my full stack development skills in a real-world scenario.',
  },
  ];

  // >>>> THIS IS A TEMPLATE <<<<
  // { 
  //   id: '',
  //   title: '',
  //   ongoing: true,
  //   app: '',
  //   description: "",
  //   role: '',
  //   duration: '',
  //   technologies: ['', ''],
  //   codeLink: '',
  //   liveLink: '',
  //   prob: '',
  //   sol: '',
  //   contribution: '',
  //   team: '',
  //   image: '',
  //   sect1: '', SECTIONS
  //   sect1content: '',
  //   sect1link: "", LINKS
  //   sect1linkText: "",
  //   sect1img1: '',
  //   sect1img2: '',
  //   sect1img3: '',
  //   sect1sub1: '', SUBSECTIONS
  //   sect1sub1content: '',
  //   sect1sub1img1: '',
  //   sect1sub1link: "", SUBSECTION LINKS
  //   sect1sub1linkText: "",
  //   sect2: '',
  //   sect2content: '',
  //   sect2img1: '',
  //   sect2img2: '',
  //   sect2img3: '',
  //   sect3: '',
  //   sect3content: '',
  //   sect3img1: '',
  //   sect3img2: '',
  //   sect3img3: '',
  //   sect4: '',
  //   sect4content: "", GOES UP TO 10 SECTIONS
  // },