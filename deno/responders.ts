export const guilds = [807302538558308352n, 804143990869590066n, 781913473872560189n, 748956745409232945n];
const [skytils, drm, dg, tricked] = guilds;

///////////////////////////////
/////////Responses/////////////
///////////////////////////////
export const responses = [
  {
    guilds: [drm],
    message: {
      content: `https://quantizr.github.io/posts/is-it-bannable/`,
    },
    triggers: [[`bann`]],
  },
  {
    guilds: [drm],
    message: {
      content: "https://quantizr.github.io/posts/how-to-install/"
    },
    triggers: [
        ["where", "how"],
        ["install", "get", "download"],
        ["drm", "dungeons rooms mod", "dungeon rooms mod", "dungeons room mod", "dungeon room mod", "this"]
    ]
  },
  {
    guilds: [drm],
    message: {
      content: `https://cdn.discordapp.com/attachments/827388251022950441/868187335215448124/waypointtts.mp4`,
    },
    triggers: [
      [`show`, "display"],
      [`dungeon`, `waypoint`, "up"],
    ],
  },
  {
    guilds: [drm],
    message: {
      content: `To remove the SBP secret images, you have to press a hotkey (which is configurable in the Minecraft controls menu). Default keys are O to open images, B for previous image, N for next image, and M to clear/remove images from the screen.`,
    },
    triggers: [
      [`next`, `change`, `move`, `close`, `rid`],
      [`image`, `pic`],
    ],
  },
  {
    guilds: [drm],
    message: {
      content: `https://discord.gg/2UjaFqfPwJ\n\n**Download sbp from this server**\nSkyblock personalized, this mod is Dungeon Rooms Mod.\nAgain, in addition to the Dungeon Rooms Mod you downloaded from this server, you need to download **SkyBlockPlus** from Skyblock Personalized Discord server`,
    },
    triggers: [
      [`how`, `get`, `where`],
      [`sbp`, `skyblockplus`, `personalized`],
    ],
  },

  {
    guilds: [dg],
    message: {
      content: `This mod, like all others is use at your own risk. Even though it is *use at your own risk*, there have no reports of users being banned from the mod, and it should follow all of the current hypixel mod rules.`,
    },
    triggers: [[`bannable`]],
  },

  {
    guilds: [skytils],
    message: {
      content: `You cant have a / infront of the alias or it wont work\nhttps://cdn.discordapp.com/attachments/807302538558308355/848490813657841694/unknown.png`,
    },
    triggers: [["aliases"]],
  },
  {
    guilds: [skytils],
    message: {
      content: `Locations are a bit wack atm will be fixed\nYou can use your scroll wheel to change the size and if that doesnt work delete your gui scales file to fix it ( .minecraft/config/skytils/guipositions.json ) `,
    },
    triggers: [[`location`]],
  },
  {
    guilds: [skytils],
    message: {
      content: `We dont have that bot smh`,
    },
    triggers: [[`.n`]],
  },
  {
    guilds: [skytils],
    message: {
      content: `https://cdn.discordapp.com/attachments/786149025098235918/867505281343553577/How_to_Download_101.mp4`,
    },
    triggers: [
      [`how`, `where`],
      [`download`, `mod`],
    ],
  },

  {
    guilds: [skytils, drm, dg],
    message: {
      content: `Win key + R and then type \`%appdata%\\.minecraft\\crash-reports\`\n` + `mac: \`~/Library/Application Support/minecraft\`\n` + `Linux: You should know this if your using linux\n` + `https://cdn.discordapp.com/attachments/807302782432051230/845361400288772126/2021-04-29T13-29-47.mp4`,
    },
    triggers: [[`send`], ["crash"]],
  }
];

///////////////////////////////
/////////Empty/////////////////
///////////////////////////////
/*
	{
		guilds: [],
		message: {
			content: ``,
		},
		triggers: [[], []],
	},
*/
