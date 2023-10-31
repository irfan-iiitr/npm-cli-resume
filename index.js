#!/user/bin/env node

import chalk from "chalk";
import inquirer from  "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";

import { createSpinner } from "nanospinner";

// const resume = {
//   Education: `\n                                                                                        
//   B.Tech In Computer Science Engineering from IIIT Ranchi.           ${chalk.bgYellowBright("2022-2026")}          
//                                                                                         \n`,
                                                                                        
// Projects: `1. News Feed                                                                              
// https://github.com/irfan-iiitr/news                                                       
// • A web project that fetches and displays top and trending news across various categories.
// It uses a News API and has features such as infinite scrolling, alerts, popups, loaders.  
// • Technologies Used: React, Express, NodeJS                                               

// 2. The Third Eye                                                                          
// https://github.com/irfan-iiitr/AI_Base                                                    
// • A project which aims to list all the trending and latest AI tools and technologies.     
// It aims to make the search of AI tools easier.                                            
// • It has features such as User Login, Search Bar, Category Wise Listing.                  
// • Technologies Used: MongoDB, Express, React, NodeJS                                      

// 3. PDF Extracter                                                                         
// https://pdf-extract-3vk9.onrender.com                                                    
// • An API through which we can extract all the text that is available in the PDF.         
// We need to just provide the link of pdf and the rest of the work will be done by the API.
// • Technologies Used: Flask, Python Libraries, Host Service- Render                       \n`,                                                                            
//   Experience: "1. Cordinator - CP Wing of House Of Geeks  \n" ,
//   Tools: `${chalk.bgRed("Frontend ")} : HTML,CSS,Javascript,Bootstrap,Tailwind,React.\n
// ${chalk.bgRed("Backend ")} : Node.js, Express, MongoDB, Flask.\n
// ${chalk.bgRed("Database ")} : MongoDB , SQL\n`,
// };

// const mainf = async () => {
//   console.log(chalk.yellow(figlet.textSync("Irfan Ansari", { horizontalLayout: "full" })));

//   while (true) {
//     const { subfield } = await inquirer.prompt({
//       type: "list",
//       name: "subfield",
//       message: "Select a subfield:",
//       choices: ["Education", "Projects", "Experience", "Tools","Exit"]
//     });

//     if (subfield === "Exit") {
//       break;
//     }

//     const content = resume[subfield];
//     console.log(chalk.bgGreen(content));
//   }
// };

// mainf();

// module.exports = mainf;







export const resume = async () => {
  // function code here

  
const resume = {
  Education: `\n                                                                                        
  B.Tech In Computer Science Engineering from IIIT Ranchi.           ${chalk.bgYellowBright("2022-2026")}          
                                                                                        \n`,
                                                                                        
Projects: `1. News Feed                                                                              
https://github.com/irfan-iiitr/news                                                       
• A web project that fetches and displays top and trending news across various categories.
It uses a News API and has features such as infinite scrolling, alerts, popups, loaders.  
• Technologies Used: React, Express, NodeJS                                               

2. The Third Eye                                                                          
https://github.com/irfan-iiitr/AI_Base                                                    
• A project which aims to list all the trending and latest AI tools and technologies.     
It aims to make the search of AI tools easier.                                            
• It has features such as User Login, Search Bar, Category Wise Listing.                  
• Technologies Used: MongoDB, Express, React, NodeJS                                      

3. PDF Extracter                                                                         
https://pdf-extract-3vk9.onrender.com                                                    
• An API through which we can extract all the text that is available in the PDF.         
We need to just provide the link of pdf and the rest of the work will be done by the API.
• Technologies Used: Flask, Python Libraries, Host Service- Render                       \n`,                                                                            
  Experience: "1. Cordinator - CP Wing of House Of Geeks  \n" ,
  Tools: `${chalk.bgRed("Frontend ")} : HTML,CSS,Javascript,Bootstrap,Tailwind,React.\n
${chalk.bgRed("Backend ")} : Node.js, Express, MongoDB, Flask.\n
${chalk.bgRed("Database ")} : MongoDB , SQL\n`,
};


  console.log(chalk.yellow(figlet.textSync("Irfan Ansari", { horizontalLayout: "full" })));

  while (true) {
    const { subfield } = await inquirer.prompt({
      type: "list",
      name: "subfield",
      message: "Select a subfield:",
      choices: ["Education", "Projects", "Experience", "Tools","Exit"]
    });

    if (subfield === "Exit") {
      break;
    }

    const content = resume[subfield];
    console.log(chalk.bgGreen(content));
  }
};
