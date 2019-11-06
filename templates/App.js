module.exports = `
import React, { Component } from "react";
import AppSwitcher from "@carbon/icons-react/lib/app-switcher/24";
import Chip from "@carbon/icons-react/lib/chip/24";
import Group from "@carbon/icons-react/lib/group/24";
import {
  HeaderContainer,
  Header,
  SideNav,
  Button,
  PageTitleBar
} from "carbon-addons-iot-react";

import "./App.scss";

const RouterComponent = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const links = [
  {
    icon: AppSwitcher,
    isEnabled: true,
    metaData: {
      onClick: () => {},
      tabIndex: 0,
      label: "Boards",
      element: RouterComponent
    },
    linkContent: "Boards"
  },
  {
    current: true,
    isEnabled: true,
    icon: Chip,
    metaData: {
      label: "Devices",
      href: "https://google.com",
      element: "a",
      target: "_blank"
    },
    linkContent: "Devices"
  },
  {
    isEnabled: true,
    icon: Group,
    metaData: {
      label: "Members",
      element: "button"
    },
    linkContent: "Members",
    childContent: [
      {
        metaData: {
          label: "Devices",
          onClick: () => {},
          element: "button"
        },
        content: "Yet another link"
      }
    ]
  }
];
class App extends Component {
  render() {
    return (
      <main className="app">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header
                actionItems={[
                  {
                    label: "user",
                    onClick: () => {},
                    btnContent: <Group />
                  }
                ]}
                appName="Watson IoT"
                headerPanel={{
                  className: "header-panel",
                  /* eslint-disable */
                  content: React.forwardRef((props, ref) => (
                    <a href="#" ref={ref} {...props}>
                      Header panel content
                    </a>
                  ))
                  /* eslint-enable */
                }}
                isSideNavExpanded={isSideNavExpanded}
                onClickSideNavExpand={onClickSideNavExpand}
              />
              <SideNav
                links={links}
                isSideNavExpanded={isSideNavExpanded}
                onClickSideNavExpand={onClickSideNavExpand}
              />
            </>
          )}
        />

        <section className="main">
          <PageTitleBar
            className="main-page-hero"
            title="Watson IoT Starter App"
            description="You can add some descriptive text that is associated with your page by adding the description prop to the PageTitleBar element."
          />
          <div className="main-content">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button
              href="https://carbon-addons-iot-react.com/"
              target="_blank"
              onClick={() => {}}
              onFocus={() => {}}
            >
              Get Components
            </Button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;


`;
