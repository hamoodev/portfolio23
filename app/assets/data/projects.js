import cifar10 from '../images/projects/cifar10.png'
import comp2005 from '../images/projects/comp2005.png'
import coremenus from '../images/projects/coremenus.png'
import dhall from '../images/projects/dhall.png'
import gdq from '../images/projects/gdq.png'
import nacti from '../images/projects/nacti.jpg'
import school from '../images/projects/school.png'
import surgeon from '../images/projects/surgeon.png'
import token from '../images/projects/token.png'
import williamWick from '../images/projects/williamwick.png'

module.exports = [
    {
        name: "Wildlife Species Identification (ongoing)",
        description: "As part of my final year in Computer Science, I worked on my honors project and research, which focused on identifying species in images taken from the wild in Nova Scotia. I worked under the DIAG Lab from my university and NRR from Nova Scotia to make this happen.",
        tags: ["PyTorch", "OpenCV", "Python", "Deep Learning", "ResNet", "FasterRCNN", "Wandb"],
        link: "https://diaglab.cs.mun.ca/"
    },
    {
        name: "Maze Police Game",
        description: "Developed a game using ThreeJs where the player will be located in a randomized backtrack generated maze. The player has to escape the maze while avoid getting detected by the police. The police has patroling and chasing AI algorithm implemented.",
        tags: ["ThreeJS", "Javascript", "AI", "Game Development", "Algorithms"],
        link: "https://github.com/singhripudaman/game"
    },
    // {
    //     name: "NACTI Image Preprocessing and Classification",
    //     description: "My Teammate and I explored preprocessing techniques for image classification using the North America Camera Trap dataset and CIFAR10. I developed PyTorch models, employing AlexNet and ResNet50. Additionally, FasterRCNN was used for image segmentation. Find the project's source code, report, and presentation below.",
    //     tags: ["PyTorch", "OpenCV", "Python", "ResNet", "AlexNet", "FasterRCNN", "Wandb"],
    //     link: "https://github.com/MUN-McIntyre/course-project-project-hamood",
    //     imageURL: nacti,
    // },
    {
        name: "William Wick (Game Project)",
        description: "Developed a custom game engine with my team to build a top-down shooter game called William Wick. We used C++, SFML, and IMGUI to build the game engine. Everything in the game engine from physics to rendering was done from scratch.",
        tags: ["C++", "SFML", "IMGUI", "Game Physics", "Game Design", "ECS"],
        link: "https://www.youtube.com/watch?v=mbcTq0zukQ4",
        imageURL: williamWick,
    },
    {
        name: "CIFAR10 Classifier   ",
        description: "This a deep learning model for classifying cifar10 images. I used PyTorch and OpenCv to preprocess the images, and then build a custom model to classify the images. I ended up with a 93% accuracy on the test set.",
        tags: ["PyTorch", "Python3", "Machine Learning", "Deep Learning", "Image Classification", "OpenCV"],
        imageURL: cifar10,
        link: "https://github.com/MUN-McIntyre/course-project-project-hamood",
    },
    {
        name: "Coremenus",
        description: "Coremenus is a user-friendly software solution that simplifies the process of creating and managing digital menus for restaurants. It allows businesses to create visually appealing menus that can be easily updated in real-time. This project is my first SaaS model, and I learnt a lot building it.",
        tags: ["VueJs", "NuxtJs", "ExpressJs", "NodeJs", "MySQL", "AWS"],
        link: "https://coremenus.com",
        imageURL: coremenus
    },
    {
        name: "Mun Dhall Menu App",
        description: "This app allow MUN Residence students have easier access to MUN dining hall menu. It has favorite feature, which will notify the user when their favorite dish is offered at Dhall. I built this app with my friends just for fun and to learn React Native",
        tags: ["React Native", "Firebase", "Axios", "FCM"],
        imageURL: dhall,
        link: "https://github.com/Curtis-Idiots/MunCampusDish-App"
    },
    {
        name: "Surgeon Journal",
        description: "I built this web app to help my father track his surgeries easily. It makes it easier to select to input types of procedure. It is also a mobile first, so it's easier to access from anywhere.",
        tags: ["VueJs", "NuxtJs", "Firebase", "Axios", "FCM"],
        imageURL: surgeon
    },
    {
        name: "Hamood ERC20 Token",
        description: "I made this ERC20 smart contract while learning blockchain. After making a contact, I made a web app for trading the token I made. Users can buy and sell the token using MetaMask.",
        tags: ["VueJs", "NuxtJs", "Web 3.0", "MetaMask", "Solidity"],
        imageURL: token,
        link: 'https://github.com/hamoodev/hmdTokenSite'
    },
    {
        name: "School Dismissal",
        description: "I thought about this solution while picking up my siblings from school. This enables parents to safely call their kids from school. They can all them either using the mobile app, or by scanning the NFC card outside school. I also built an Arduino NFC scanner that connects to the server using Web Socket. It will call the right children that belongs to the NFC card.",
        tags: ["VueJs", "NuxtJs", "Web Socket", "C", "Arduino"],
        imageURL: school,
        link: 'https://github.com/hamoodev/school-dismissal'
    },
    {
        name: "Game Dev Qatar Website",
        description: "I volunteered to make Game Dev Qatar website. Game Dev Qatar is a game development community. They offer workshops to train people game development. They host game jams for fun.",
        tags: ["VueJs", "TailwindCss"],
        link: "https://gamedevqatar.com/",
        imageURL: gdq
    },
    {
        name: "Python Online IDE",
        description: "This is an academic project in Computer Science Software Engineering course. My team and I built a server side rendered python script IDE. It has features like saving authentication, saving code, sharing code, linting the code, and also running the script in Java. It was written in Python Flask.",
        tags: ["HTML", "CSS", "Python", "Flask"],
        imageURL: comp2005,
    },
    {
        name: "CSC Discord Bot",
        description: "I made a large discord bot that has tons of features. Moderation, economy, mini games, factions, pets, and a lot more.",
        tags: ["NodeJs", "DiscordJs", "MongoDB"],
        link: "https://github.com/hamoodev/maweather",
        imageURL: "http://droplr.com/wp-content/uploads/2020/09/discord-bots-e1635362784159.png"
    },
    {
        name: "I am Rich!",
        description: "This Flutter App is copy of the popular (I am rich) mobile app. It only shows an image of diamond.",
        tags: ["Flutter", "Dart"],
        link: 'https://github.com/hamoodev/iamrich'
    },
    {
        name: "Discord.style Discord Bot",
        description: "A bot for discord.style that would copy a discord template to an existing discord server. It help getting the template you need without having to create new server and move the members",
        tags: ["NodeJs", "DiscordJs"],
    },
    {
        name: "Weather App",
        description: "My first React Native project",
        tags: ["React Native", "Axios"],
        link: "https://github.com/hamoodev/maweather/tree/master/src"
    },


]