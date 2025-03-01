/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Route, Switch, RouteComponentProps } from "react-router-dom";

import FAQHeader from "./components/FAQHeader";
import FAQFooter from "./components/FAQFooter";

import FAQHome from "./FAQHome";
import FAQSection from "./FAQSection";
import FAQQuestion from "./FAQQuestion";

const FAQPaths: { [key: string]: string } = {
  "/effectifs": "/section/effectifs",
  "/indicateur1": "/section/indicateur1",
  "/indicateur2": "/section/indicateur2",
  "/indicateur3": "/section/indicateur3",
  "/indicateur4": "/section/indicateur4",
  "/indicateur5": "/section/indicateur5",
  "/recapitulatif": "/section/resultat"
};

function mapDefaultPathnameToFAQPathname(
  location: RouteComponentProps["location"]
) {
  if (location.state && location.state.faq) {
    return location.state.faq;
  }
  const faqPath = FAQPaths[location.pathname];
  return faqPath ? faqPath : location.pathname;
}

function FAQ() {
  return (
    <Route
      render={({ location }) => {
        const locationFAQ = {
          pathname: mapDefaultPathnameToFAQPathname(location),
          search: "",
          hash: "",
          state: undefined
        };
        return (
          <div css={styles.container}>
            <FAQHeader location={locationFAQ} />

            <div css={styles.content} key={locationFAQ.pathname}>
              <Switch location={locationFAQ}>
                <Route
                  path={["/", "/simulateur"]}
                  exact
                  render={() => <FAQHome />}
                />

                <Route
                  exact
                  path="/section/:section"
                  render={({
                    match: {
                      params: { section }
                    }
                  }) => <FAQSection section={section} />}
                />

                <Route
                  exact
                  path="/part/:part/question/:indexQuestion"
                  render={({
                    history,
                    match: {
                      params: { part, indexQuestion }
                    }
                  }) => (
                    <FAQQuestion
                      history={history}
                      part={part}
                      indexQuestion={indexQuestion}
                    />
                  )}
                />
              </Switch>

              <FAQFooter />
            </div>
          </div>
        );
      }}
    />
  );
}

const styles = {
  container: css({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: "flex",
    flexDirection: "column"
  }),
  content: css({
    overflowY: "auto",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: "flex",
    flexDirection: "column",
    paddingRight: 29,
    paddingLeft: 29,
    paddingTop: 26,
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      // Only target IE11
      display: "block"
    }
  })
};

export default FAQ;
