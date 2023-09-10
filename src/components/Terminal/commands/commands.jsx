/* eslint-disable import/no-anonymous-default-export */
import getcat from "../utils/cat"
// import getnp from "../utils/spotify"
import getRecentTracks from "../utils/spotify/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nmale\n20\nstudent\nsolodev\nweeb\ndumb\ndesigner\nvideo editor\nartist\noh dang I do possess a lot of skills xD\n\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/Naksh47983356', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/morpheus-30/', '_blank')
                return "opening github account..."
            }
        },
        artpage: {
            description: 'Opens my Art Page.',
            usage: 'artpage',
            fn: () => {
                window.open('https://www.instagram.com/naksh.draws.sometimes/', '_blank')
                return "opening art page..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'twitter',
            fn: () => {
                window.open('https://discordapp.com/users/909448163994247198', '_blank')
                return "opening discord account..."
            }
        },
        youtube: {
            description: 'Opens my Youtube Channel.',
            usage: 'youtube',
            fn: () => {
                window.open('https://www.youtube.com/channel/UCRmHd-SkHp1xspY5VhZH5IQ', '_blank')
                return "opening youtube channel..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 80%
                    hindi            - 100%
                    gen-z-langauge   - 00%
                    python           - 60%
                    javascript       - 60
                    dart             - 40%
                    C/C++            - 90%
                    Java             - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    Tech - 
                    flutter          - 80%
                    flask           - 70%
                    react js        - 60%
                    node js         - 60%
                    express js       - 60%
                    three js         - 50%
                    linux           -50%
                    git/github       - 80%
                    Non-Tech -
                    Adobe Illustrator  - 80%
                    Sony Vegas Pro     - 90%
                    Adobe After Effects - 20% - [learning]
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'NothingDude'                     | 'An advanced AI discord chat bot'                                   | 'python'
                    'ChadNotifications'         | 'Flutter app to send motivation notifs'                           | 'dart'
                    'Alchemy'                               | 'Awesome Portfolio'                                                                     | 'javascript'
                    'Street Guardian'              | 'App to register and detect nearest blackspots'    | 'javascript+python'
                    'Valo-WhosThePlayer'  | 'Discord bot to get Valorant stats'                                    | 'python'
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Discord Theme\n
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/morpheus-30/alchemyPortfolio.git", '_blank')
                return "opening repository..."
            }
        }
        
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
