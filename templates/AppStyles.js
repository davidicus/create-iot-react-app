module.exports = `
@import "~carbon-addons-iot-react/lib/scss/styles.scss";

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
  padding: $spacing-09 0 0 $spacing-09;
  width: 100%;

  // content under the page header
  &-content {
    padding: $spacing-05;
  }

  &-content p {
    margin-bottom: $layout-01;
  }
}
`;
