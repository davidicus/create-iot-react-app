module.exports = `
import React, { Component } from "react";
import AppSwitcher from "@carbon/icons-react/lib/app-switcher/24";
import Chip from "@carbon/icons-react/lib/chip/24";
import Group from "@carbon/icons-react/lib/group/24";
import AddFilled16 from "@carbon/icons-react/lib/add--filled/16";
import {
  HeaderContainer,
  Header,
  SideNav,
  ButtonEnhanced,
  PageHero
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
                    btnContent: (
                      <p className="header-link">
                        JohnDoe@ibm.com<span>TenantId: Acme</span>
                      </p>
                    )
                  }
                ]}
                appName="Watson IoT"
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
          <PageHero
            className="main-page-hero"
            title="Watson IoT Starter App"
            blurb="You can add some descriptive text that is associated with your page by adding the blurb prop to the PageHero element."
          />
          <div className="main-content">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <ButtonEnhanced
              href="https://beta.carbon-addons-iot-react.com/"
              target="_blank"
              iconDescription="Button icon"
              onClick={() => {}}
              onFocus={() => {}}
              renderIcon={AddFilled16}
            >
              Get Components
            </ButtonEnhanced>
          </div>
        </section>
      </main>
    );
  }
}

export default App;


`;
