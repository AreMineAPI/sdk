# [@mineapi/sdk](https://npmjs.com/package/@mineapi/sdk)
[Do you need my help? Visit our Discord server.](https://mineapi.me/discord)

![NPM Downloads](https://img.shields.io/npm/dm/@mineapi/sdk?style=for-the-badge)
![License](https://img.shields.io/npm/l/@mineapi/sdk?style=for-the-badge)
```bash
Node Version: 16.16.0
```

### Installation
```bash
npm i @mineapi/sdk --save
# or
yarn add @mineapi/sdk
```

## Usage
```js
// CJS
// const { getSkin, getProfile, getCape, getServer, getUUID, getBust, getBody, getHead, Achievement  } = require("@mineapi/sdk");

// ESM
import { getSkin, getProfile, getCape, getServer, getUUID, getBust, getBody, getHead } from "@mineapi/sdk";

(async () => {
    const skin = await getSkin("clquu");
    console.log(skin);

    const profile = await getProfile("clquu");
    console.log(profile);

    const cape = await getCape("clquu", "mojang");
    console.log(cape);

    const server = await getServer("mc.hypixel.net");
    console.log(server);

    const uuid = await getUUID("clquu");
    console.log(uuid);

    const bust = await getBust("clquu");
    console.log(bust);

    const body = await getBody("clquu");
    console.log(body);

    const head = await getHead("clquu");
    console.log(head);

    const achievement = new Achievement({ title: "Test", description: "sdk test", icon: "blockOfDiamond" }).create();
    console.log(image); // Return: Buffer

    const icons = Achievement.getIcons();
    console.log(icons);
})();
```

---
<h6 align="center">Developed with ❤️ by MineAPI</h6>
