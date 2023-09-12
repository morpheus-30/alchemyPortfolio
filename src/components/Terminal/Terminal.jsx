// import Terminal from 'react-console-emulator';
import Terminal from 'react-console-emulator';
import commands from './commands/commands'
import React from 'react'
import getRecentTracks from './utils/spotify/spotify';
import getcat from './utils/cat'
import { useNavigate } from 'react-router-dom';

export default function Term() {
    const cmds = commands.commands
    const owrs = commands.overwrites
    const terminal = React.createRef()  
    const [prompt, setPrompt] = React.useState('you@/alchemy:~$ ')
    const [home, sethome] = React.useState('nakshatr-ayo')
    const [dir, setdir] = React.useState({
        'nakshatr-ayo': []
    })
    const navigate = useNavigate();
    // console.log("Welcome to ashterm")
    const welcomeMessage = [
        "Welcome to alchemy!",
        "---",
        "Type 'help' to see a list of commands.",
        "---",
        "try starting with 'cat' (〜￣▽￣)〜",
        "---",
    ]
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={welcomeMessage}
            commands={{
                clear: {
                    description: 'Clears the terminal',
                    usage: 'clear',
                    fn: () => {
                        terminal.current.clearStdout()
                    }
                },
                cat: {
                    description: 'Get a random cute cat~',
                    usage: 'cat',
                    fn: async () => {
                        const url = await getcat()
                        terminal.current.pushToStdout("getting a cute cat for you..\n---\n")
                        terminal.current.pushToStdout(<img src={url} width="200px" height="200px" alt='cat'></img>)
                    }
                },
                cd: {
                    description: 'Change directory, not really, lol!',
                    usage: 'cd <directory>',
                    fn: (...args) => {
                        if (args.length === 1 && args[0] === '..') {
                            if (prompt === 'you@/ashterm:~$ ') {
                                return 'cannot go up'
                            } else {
                                setPrompt(prompt.substring(0, prompt.lastIndexOf('/')) + ":~$ ")
                                sethome(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/') - 1) + 1, prompt.lastIndexOf('/')))
                                //console.log(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                //console.log(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1))
                                //console.log(prompt.lastIndexOf('/'))
                                return 'changed directory'
                            }
                        } else {
                            if (dir[home].includes(args[0])) {
                                setPrompt(`${prompt.slice(0, -4) + "/" + args.join('/') + ":~$ "}`)
                                sethome(args.join('/'))
                                //console.log(prompt.slice(0, -4)+ "/" + args.join('/'))
                                return 'changed directory'
                            } else {
                                return 'cannot find directory'
                            }
                        }

                    }
                },
                exit:{
                    description: 'Exit the terminal',
                    usage: 'exit',
                    fn: () => {
                        navigate('/',{replace:true});
                    }
                },
                ls: {
                    description: 'List files in the current directory',
                    usage: 'ls',
                    fn: () => {
                        if (dir[home].length === 0) {
                            return 'nothing here :(\nUse mkdir to create a dir inside this one.'
                        } else {
                            return dir[home].join('\n')
                        }
                    }

                },
                mkdir: {
                    description: 'Make a directory',
                    usage: 'mkdir <directory>',
                    fn: (...args) => {
                        if (args.length === 1) {
                            setdir({
                                ...dir,
                                [home]: [...dir[home], args[0]],
                                [args[0]]: []
                            })
                            //console.log(dir)
                            return `created directory ${args[0]}.`
                        } else {
                            return 'invalid arguments'
                        }
                    }
                },
                help: {
                    description: 'List all available commands',
                    usage: 'help',
                    fn: () => {
                        return `
                            ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12 - cmd.length)} | ${owrs[cmd].description}${" ".repeat(39 - owrs[cmd].description.length)} | ${owrs[cmd].usage}`).join('\n')}
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12 - cmd.length)} | ${cmds[cmd].description}${" ".repeat(39 - cmds[cmd].description.length)} | ${cmds[cmd].usage}`).join('\n')}
                        `
                    }
                },
                spotify: {
                    description: 'Get info about my recently played song.',
                    usage: 'spotify',
                    fn: async () => {
                        const items = await getRecentTracks()
                        console.log("spotify");
                        // console.log();
                        terminal.current.pushToStdout(<button onClick={() => window.open("https://open.spotify.com/user/31qq3ubwipw3px4sazc6wxkw5f6u", '_blank')}><img src='https://i.ibb.co/r2vknFx/Screenshot-from-2023-09-10-16-46-11.png' width="200px" height="200px"></img></button>)
                        terminal.current.pushToStdout("Here's my spotify profile, Maybe try some of my playlists :D? \n")
                        terminal.current.pushToStdout("Also Um, Here's my 5 recent tracks, if you wanna try em you can click on the image ;) \n")
                        console.log(items);
                        for (let i = 0; i < items.length; i++) {
                            let url = items[i].url

                            if (items[i].image === null) {
                                terminal.current.pushToStdout(<button onClick={() => window.open(url)}>Click me!</button>)
                            }
                            else {
                                terminal.current.pushToStdout(<button onClick={() => window.open(url)}><img src={items[i].image} width="100px" height="100px" alt='song'></img></button>)
                                // terminal.current.pushToStdout("Trust me, listen to this song, just click the image \n")
                            }
                            let returnString = `
                            Song: ${items[i].name}\n
                            Artist: ${items[i].artist}\n
                            Album: ${items[i].album}\n
                            ---\n
                            `
                            console.log(returnString);
                            terminal.current.pushToStdout(returnString)

                        }

                        // terminal.current.pushToStdout("hi")
                    }
                },
                ...cmds
            }
            }
            promptLabel={prompt}
            autoFocus
            style={{
                backgroundColor: null,
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#00FF00', fontWeight: 'normal', paddingLeft: null }} // Text colour
            promptLabelStyle={{ color: '#00FF00', fontWeight: 'normal' }} // Prompt label colour
            inputTextStyle={{ color: '#ffffff', fontWeight: 'normal' }}
            messageStyle={{ color: '#ffffff', fontWeight: 'normal', paddingLeft: null }}
            scrollBehavior='auto'
            noDefaults
        />
    )
}