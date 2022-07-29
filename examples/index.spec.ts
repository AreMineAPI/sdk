import { getSkin, getProfile, getCape, getServer, getUUID, getBust, getBody, getHead, Achievement } from "../src";

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
    console.log(achievement);

    const icons = Achievement.getIcons();
    console.log(icons);
})();