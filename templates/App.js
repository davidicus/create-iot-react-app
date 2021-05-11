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
  PageTitleBar,
  BarChartCard,
} from "carbon-addons-iot-react";

import "./App.scss";

const RouterComponent = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const barChartData = {
  quarters: [
    {
      quarter: "2020-Q1",
      city: "Amsterdam",
      particles: 447,
      temperature: 44,
      emissions: 120,
    },
    {
      quarter: "2020-Q2",
      city: "Amsterdam",
      particles: 450,
      temperature: 45,
      emissions: 240,
    },
    {
      quarter: "2020-Q3",
      city: "Amsterdam",
      particles: 512,
      temperature: 12,
      emissions: 300,
    },
    {
      quarter: "2020-Q4",
      city: "Amsterdam",
      particles: 565,
      temperature: 85,
      emissions: 200,
    },
    {
      quarter: "2020-Q1",
      city: "New York",
      particles: 528,
      temperature: 11,
      emissions: 130,
    },
    {
      quarter: "2020-Q2",
      city: "New York",
      particles: 365,
      temperature: 90,
      emissions: 160,
    },
    {
      quarter: "2020-Q3",
      city: "New York",
      particles: 442,
      temperature: 85,
      emissions: 240,
    },
    {
      quarter: "2020-Q4",
      city: "New York",
      particles: 453,
      temperature: 91,
      emissions: 220,
    },
    {
      quarter: "2020-Q1",
      city: "Bangkok",
      particles: 435,
      temperature: 32,
      emissions: 30,
    },
    {
      quarter: "2020-Q2",
      city: "Bangkok",
      particles: 410,
      temperature: 96,
      emissions: 210,
    },
    {
      quarter: "2020-Q3",
      city: "Bangkok",
      particles: 397,
      temperature: 10,
      emissions: 190,
    },
    {
      quarter: "2020-Q4",
      city: "Bangkok",
      particles: 412,
      temperature: 101,
      emissions: 300,
    },
    {
      quarter: "2020-Q1",
      city: "San Francisco",
      particles: 388,
      temperature: 120,
      emissions: 312,
    },
    {
      quarter: "2020-Q2",
      city: "San Francisco",
      particles: 341,
      temperature: 10,
      emissions: 210,
    },
    {
      quarter: "2020-Q3",
      city: "San Francisco",
      particles: 270,
      temperature: 50,
      emissions: 150,
    },
    {
      quarter: "2020-Q4",
      city: "San Francisco",
      particles: 489,
      temperature: 60,
      emissions: 200,
    },
  ],
  timestamps: [
    {
      timestamp: 1581265425000,
      city: "Amsterdam",
      particles: 447,
      emissions: 120,
    },
    {
      timestamp: 1581351825000,
      city: "Amsterdam",
      particles: 450,
      emissions: 150,
    },
    {
      timestamp: 1581438225000,
      city: "Amsterdam",
      particles: 512,
      emissions: 170,
    },
    {
      timestamp: 1581524625000,
      city: "Amsterdam",
      particles: 565,
      emissions: 200,
    },
    {
      timestamp: 1581265425000,
      city: "New York",
      particles: 528,
      emissions: 40,
    },
    {
      timestamp: 1581351825000,
      city: "New York",
      particles: 365,
      emissions: 10,
    },
    {
      timestamp: 1581438225000,
      city: "New York",
      particles: 442,
      emissions: 320,
    },
    {
      timestamp: 1581524625000,
      city: "New York",
      particles: 453,
      emissions: 210,
    },
    {
      timestamp: 1581265425000,
      city: "Bangkok",
      particles: 435,
      emissions: 160,
    },
    {
      timestamp: 1581351825000,
      city: "Bangkok",
      particles: 410,
      emissions: 70,
    },
    {
      timestamp: 1581438225000,
      city: "Bangkok",
      particles: 397,
      emissions: 130,
    },
    {
      timestamp: 1581524625000,
      city: "Bangkok",
      particles: 412,
      emissions: 120,
    },
    {
      timestamp: 1581265425000,
      city: "San Francisco",
      particles: 388,
      emissions: 120,
    },
    {
      timestamp: 1581351825000,
      city: "San Francisco",
      particles: 341,
      emissions: 200,
    },
    {
      timestamp: 1581438225000,
      city: "San Francisco",
      particles: 270,
      emissions: 180,
    },
    {
      timestamp: 1581524625000,
      city: "San Francisco",
      particles: 489,
      emissions: 130,
    },
  ],
};

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
            <BarChartCard
              title="Particles by city"
              id="simple-sample"
              isLoading={false}
              isEditable={true}
              isExpanded={false}
              content={{
                xLabel: "Cities",
                yLabel: "Particles",
                series: [
                  {
                    dataSourceId: "particles",
                    color: ["blue", "red", "green", "yellow"],
                  },
                ],
                timeDataSourceId: "timestamp",
                layout: "VERTICAL",
                unit: "P",
                type: "SIMPLE",
              }}
              values={barChartData.quarters.filter(
                (q) => q.quarter === "2020-Q1"
              )}
              size="MEDIUMWIDE"
              availableActions={{ expand: true }}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default App;


`;
