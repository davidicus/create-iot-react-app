module.exports = `
@import "~carbon-addons-iot-react/lib/css/carbon-addons-iot-react.css";
@import "~carbon-addons-iot-react/lib/scss/globals/scss/vars";
@import "~carbon-addons-iot-react/lib/scss/globals/scss/colors";
@import "~carbon-addons-iot-react/lib/scss/globals/scss/theme";



html,
body,
#root,
.app {
  height: 100%;
  width: 100%;
}

// add border for sidenav
.bx--header ~ .bx--side-nav {
  border-right: 1px solid #efefef;
}

// change link content color white
.header-link {
  color: #fff;
}

// main container of page
.main {
  background-color: $ui-background;
  color: $text-01;
  height: 100%;
  width: 100%;
  padding: 3rem 0 0 3rem;

  // content under the page header
  &-content {
    padding: 1rem;
  }

  &-content p {
    margin-bottom: $layout-01;
  }
}

`;
