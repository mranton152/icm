import React from "react";
import throttle from "lodash/throttle";
import MainContainerMenuMobile from "./MainContainerMenuMobile";
import MainContainerMenuList from "./MainContainerMenuList";

class MainContainerMenu extends React.Component {
  // const MenuMarkup = this.props.menuMarkup; // get the Menu markup, passed as prop

  // if (this.state.viewportWidth > this.props.mobileBreakPoint) {
  //   // viewportWidth is over the mobileBreakpoint - render menu as is
  //   return <MenuMarkup activeLinkKey={this.props.activeLinkKey} />;
  // }
  state = {
		viewportWidth: 0
	};

  componentDidMount() {
    // update viewportWidth on initial load
    this.saveViewportDimensions();
    // update viewportWidth whenever the viewport is resized
    window.addEventListener("resize", this.saveViewportDimensions);
  }

  componentWillUnmount() {
    // clean up - remove the listener before unmounting the component
    window.removeEventListener("resize", this.saveViewportDimensions);
  }

  // first of all notice lodash.throttle() helper
  // we do not want to run the saveViewportDimensions() hundreads of times
  // from start to finish whenever the viewport is being resized
  saveViewportDimensions = throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth
    });
  }, this.props.applyViewportChange); // default 250ms
  render() {
    return this.state.viewportWidth >= 1200 ? (
      <MainContainerMenuList {...this.props} />
    ) : (
      <MainContainerMenuMobile {...this.props} mobile />
		);		
  }
}

export default MainContainerMenu;
