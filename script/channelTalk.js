ChannelIO("boot", {
  pluginKey: "9b5a2ca8-095c-48b8-a14b-accc891241dd",
  customLauncherSelector: ".channelTalk_btn",
  hideChannelButtonOnBoot: true,
});

document.querySelector(".channelTalk_btn").addEventListener("click", () => {
  ChannelIO("showMessenger");
});
