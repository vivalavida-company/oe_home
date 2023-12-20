ChannelIO("boot", {
  pluginKey: "9b5a2ca8-095c-48b8-a14b-accc891241dd",
  customLauncherSelector: ".channelTalk_btn",
  hideChannelButtonOnBoot: true,
});

document.getElementById("channel-talk").addEventListener("click", () => {
  ChannelIO("showMessenger");
});
