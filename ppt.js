#!/user/bin/env node

import chalk from "chalk";
import inquirer from  "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";

import { createSpinner } from "nanospinner";

const slides = [
    {
        title: "Slide 1",
        content: "Hello, world!"
    },
    {
        title: "Slide 2",
        content: "This is the second slide."
    },
    {
        title: "Slide 3",
        content: "This is the third slide."
    }
];

const slidePrompt = async () => {
    let currentSlide = 0;

    while (currentSlide < slides.length) {
        const { action } = await inquirer.prompt({
            type: "input",
            name: "action",
            message: `${slides[currentSlide].title}\n\n${slides[currentSlide].content}\n\nType "Next" to continue or enter a slide number:`
        });

        if (action === "Next") {
            {currentSlide++;
                if(currentSlide === slides.length) {
                    console.log(chalk.green("The End!"));
                }
            }
        } else if (action.match(/^\d+$/)) {
            const slideNumber = parseInt(action, 10) - 1;
            if (slideNumber >= 0 && slideNumber < slides.length) {
                currentSlide = slideNumber;
            } else {
                console.log(chalk.red(`Invalid slide number: ${action}`));
            }
        } else {
            console.log(chalk.red(`Invalid action: ${action}`));
        }
    }
};

slidePrompt();

