module.exports = `
@import "~carbon-components/scss/globals/scss/css--reset";
@import "~carbon-components/scss/globals/scss/styles";
@import "~carbon-components/scss/globals/scss/vars";
@import "~carbon-components/scss/globals/scss/colors";
@import "~carbon-components/scss/globals/scss/typography";

$wiot-gradient: linear-gradient(45deg, $carbon--purple-40, $carbon--blue-50);

// special characters (arrows)
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&text=←→↑↓↔↕↖↗↘↙↚↛↮⟵⟶⟷↰↱↲↳⬐⬎⬑⬏↴↵");

$font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
$font-family-mono: "IBM Plex Mono", "Menlo", "DejaVu Sans Mono",
  "Bitstream Vera Sans Mono", Courier, monospace;

// Typography
@include carbon--type-reset();

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
