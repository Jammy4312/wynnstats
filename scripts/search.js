function gotoStatsURL() {
  if ($("#searchbox")[0].value !== "") {
    if ($("#radp")[0].checked == true) {
      location.href = "./player.html?name=" + $("#searchbox")[0].value;
    }
    else {
      location.href = "./guild.html?name=" + $("#searchbox")[0].value;
    }
  }
  else {
    $("searchbox").focus();
    $("searchbox").addClass("invalid");
  }
}