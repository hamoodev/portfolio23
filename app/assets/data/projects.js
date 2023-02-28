import dhall from '../images/projects/dhall.png'
import coremenus from '../images/projects/coremenus.png'
import surgeon from '../images/projects/surgeon.png'
import token from '../images/projects/token.png'
import school from '../images/projects/school.png'
import comp2005 from '../images/projects/comp2005.png'
import gdq from '../images/projects/gdq.png'

module.exports = [
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
    link: 'https://github.com/HaMoOoOd25/hmdTokenSite'
  },
  {
    name: "School Dismissal",
    description: "I thought about this solution while picking up my siblings from school. This enables parents to safely call their kids from school. They can all them either using the mobile app, or by scanning the NFC card outside school. I also built an Arduino NFC scanner that connects to the server using Web Socket. It will call the right children that belongs to the NFC card.",
    tags: ["VueJs", "NuxtJs", "Web Socket", "C", "Arduino"],
    imageURL: school,
    link: 'https://github.com/HaMoOoOd25/school-dismissal'
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
    link: "https://github.com/HaMoOoOd25/maweather",
    imageURL: "http://droplr.com/wp-content/uploads/2020/09/discord-bots-e1635362784159.png"
  },
  {
    name: "I am Rich!",
    description: "This Flutter App is copy of the popular (I am rich) mobile app. It only shows an image of diamond.",
    tags: ["Flutter", "Dart"],
    link: 'https://github.com/HaMoOoOd25/iamrich'
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
    link: "https://github.com/HaMoOoOd25/maweather/tree/master/src"
  },


]