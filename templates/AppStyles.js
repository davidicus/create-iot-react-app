module.exports = `
@import "~carbon-addons-iot-react/lib/index.css";
@import "~carbon-components/scss/globals/scss/vars";
@import "~carbon-components/scss/globals/scss/colors";
@import "~carbon-components/scss/globals/scss/theme";

$wiot-gradient: linear-gradient(45deg, $carbon--purple-40, $carbon--blue-50);

/// Set the theme to Gray 10
@import "~@carbon/themes/scss/themes";
$carbon--theme: $carbon--theme--g10;
// Use the gray 10 theme
@include carbon--theme();

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
