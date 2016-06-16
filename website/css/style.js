import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "display": "flex"
    },
    "*": {
        "fontFamily": "monaco"
    },
    "ulwebOption": {
        "WebkitPaddingStart": 0
    },
    "ul": {
        "WebkitPaddingStart": 0
    },
    "html": {
        "height": "100%"
    },
    "body": {
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "wrapper": {
        "display": "flex",
        "WebkitFlexFlow": "row wrap",
        "flexFlow": "row wrap",
        "fontWeight": "bold",
        "textAlign": "center"
    },
    "wrapper > *": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "flex": "1 100%"
    },
    "a": {
        "textDecoration": "none",
        "color": "black",
        "WebkitPaddingStart": 0,
        "cursor": "crosshair"
    },
    "header": {
        "background": "black",
        "paddingTop": .5 * vw,
        "paddingRight": .5 * vw,
        "paddingBottom": .5 * vw,
        "paddingLeft": .5 * vw,
        "fontSize": 0,
        "display": "flex",
        "MsFlexWrap": "wrap",
        "MsFlexDirection": "column",
        "WebkitFlexFlow": "row wrap",
        "flexFlow": "row wrap"
    },
    "footer": {
        "fontFamily": "monaco",
        "fontSize": 10,
        "color": "blue"
    },
    "main": {
        "textAlign": "left"
    },
    "aside-1": {
        "fontSize": 14,
        "textDecoration": "none",
        "fontFamily": "\"Lucida Console\", Monaco, monospace"
    },
    "back-button": {
        "color": "black",
        "fontFamily": "monaco"
    },
    "aside-2": {
        "overflowY": "scroll",
        "position": "relative"
    },
    "experimentsTab": {
        "WebkitTransition": "all linear 0.5s",
        "transition": "all linear 0.5s",
        "fontSize": 10
    },
    "header div": {
        "WebkitBoxFlex": "auto",
        "MsFlex": "auto",
        "flex": "auto",
        "width": 200,
        "zIndex": 2
    },
    "header div img": {
        "width": "100%",
        "height": "auto",
        "zIndex": 2
    },
    "li": {
        "listStyle": "none"
    },
    "fade-in": {
        "opacity": 0,
        "WebkitAnimation": "fadeIn ease-in 1",
        "MozAnimation": "fadeIn ease-in 1",
        "animation": "fadeIn ease-in 1",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDuration": "1s",
        "MozAnimationDuration": "1s",
        "animationDuration": "1s"
    },
    "fade-inone": {
        "WebkitAnimationDelay": "0.7s",
        "MozAnimationDelay": "0.7s",
        "animationDelay": "0.7s"
    },
    "fade-inoneSub": {
        "WebkitAnimationDelay": "0.4s",
        "MozAnimationDelay": "0.4s",
        "animationDelay": "0.4s"
    },
    "fade-intwo": {
        "WebkitAnimationDelay": "1.2s",
        "MozAnimationDelay": "1.2s",
        "animationDelay": "1.2s"
    },
    "fade-inthree": {
        "WebkitAnimationDelay": "1.6s",
        "MozAnimationDelay": "1.6s",
        "animationDelay": "1.6s"
    },
    "fade-infour": {
        "WebkitAnimationDelay": "2s",
        "MozAnimationDelay": "2s",
        "animationDelay": "2s"
    },
    "fade-infive": {
        "WebkitAnimationDelay": "2.4s",
        "MozAnimationDelay": "2.4s",
        "animationDelay": "2.4s"
    },
    "pdetails": {
        "fontSize": 12,
        "color": "white",
        "marginTop": 10,
        "marginBottom": 20,
        "fontStyle": "italic"
    },
    "headerweb-header": {
        "marginTop": 119.2 * vw
    },
    "h5": {
        "fontFamily": "monaco"
    },
    "flexcontainer": {
        "display": "flex",
        "WebkitFlexDirection": "row",
        "flexDirection": "row",
        "WebkitJustifyContent": "flex-end",
        "justifyContent": "flex-end"
    },
    "articlemainvideo-mainng-scope": {
        "top": 10
    }
});