import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "minHeight": 600
    },
    "*": {
        "fontFamily": "monaco !important"
    },
    "ulwebOption": {
        "WebkitPaddingStart": 0
    },
    "ul": {
        "WebkitPaddingStart": 0,
        "color": "black",
        "display": "block"
    },
    "html": {
        "height": "auto"
    },
    "body": {
        "height": "auto",
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
        "cursor": "crosshair",
        "display": "block"
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
        "position": "relative",
        "overflowX": "hidden"
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
    "headerweb-header": {},
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
    },
    "clearfix::after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "clearfix::before": {
        "content": " ",
        "display": "table"
    },
    "bold": {
        "color": "#000000",
        "fontWeight": 400,
        "fontSize": 16,
        "fontStyle": "normal"
    },
    "resume-wrapper": {
        "position": "relative",
        "textAlign": "center",
        "height": "100%"
    },
    "profile": {
        "background": "#fff",
        "width": "40%",
        "float": "right",
        "color": "#9099a0",
        "marginTop": -99
    },
    "profile name-wrapper": {
        "float": "left",
        "width": "60%"
    },
    "profile h1": {
        "fontSize": 2.4,
        "textAlign": "left",
        "fontFamily": "'Varela Round', sans-serif",
        "color": "#4a4e51",
        "textTransform": "uppercase",
        "lineHeight": 1,
        "paddingTop": 23
    },
    "profile li": {
        "marginBottom": 10,
        "color": "black"
    },
    "profile picture-resume-wrapper": {
        "width": "40%",
        "display": "block",
        "float": "left"
    },
    "profile picture-resume": {
        "width": 220,
        "height": 220,
        "backgroundSize": "cover",
        "borderRadius": "50%",
        "marginRight": 0,
        "display": "table",
        "position": "relative",
        "verticalAlign": "middle"
    },
    "profile picture-resume span": {
        "display": "table-cell",
        "verticalAlign": "middle",
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "zIndex": 10,
        "textAlign": "center"
    },
    "profile picture-resume img": {
        "borderRadius": "50%",
        "width": 130
    },
    "profile contact-info": {
        "fontWeight": 300
    },
    "profile list-titles": {
        "float": "left",
        "textAlign": "left",
        "fontWeight": 600,
        "width": "40%",
        "color": "#4a4e51"
    },
    "profile list-content": {
        "float": "left",
        "width": "60%",
        "textAlign": "left",
        "fontWeight": 300
    },
    "profile contact-presentation": {
        "textAlign": "left",
        "fontWeight": 300,
        "marginTop": 100,
        "marginBottom": 100
    },
    "profile svg": {
        "width": "100%",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "profile st0": {
        "fill": "#66cc99"
    },
    "profile st1": {
        "fill": "#66cc99"
    },
    "experience": {
        "background": "#080808",
        "width": "91%",
        "float": "left",
        "position": "relative",
        "color": "#9099a0",
        "fontWeight": 300,
        "minHeight": 100 * vh,
        "zIndex": 1
    },
    "experience h3experience-title": {
        "color": "rgba(32, 152, 209, 0.75)",
        "textAlign": "left",
        "textTransform": "uppercase",
        "fontSize": 1.2,
        "marginBottom": 20,
        "fontWeight": 400
    },
    "experience company-wrapper": {
        "width": "24%",
        "float": "left",
        "textAlign": "left",
        "paddingRight": "1%",
        "marginBottom": 20
    },
    "experience job-wrapper": {
        "width": "74%",
        "float": "left",
        "textAlign": "left",
        "paddingRight": "1%",
        "marginBottom": 60
    },
    "experience experience-title": {
        "color": "white",
        "marginBottom": 15
    },
    "section-padding": {
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 40,
        "paddingLeft": 40
    },
    "section-wrapper": {
        "width": "40%",
        "float": "left",
        "textAlign": "left",
        "color": "#9099a0",
        "fontWeight": 300,
        "marginBottom": 20
    },
    "section-wrapper:nth-child(3)": {
        "paddingRight": "8%"
    },
    "section-wrapper h3section-title": {
        "color": "#0e6b9e",
        "textAlign": "left",
        "textTransform": "uppercase",
        "fontSize": 1.2,
        "marginBottom": 20,
        "fontWeight": 400
    },
    "section-wrapper skill-percentage": {
        "marginBottom": 10,
        "position": "relative",
        "color": "white"
    },
    "section-wrapper skill-percentage::after": {
        "content": "",
        "width": "100%",
        "height": 6,
        "background": "#4a4e51",
        "display": "block",
        "marginTop": 3
    },
    "section-wrapper skill-percentage::before": {
        "content": "",
        "height": 6,
        "background": "#0e6b9e",
        "position": "absolute",
        "marginTop": 3,
        "bottom": 0
    },
    "section-wrapper skill-percentage:nth-child(1)::before": {
        "width": "100%",
        "WebkitAnimation": "skill_1 0.6s ease",
        "animation": "skill_1 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(2)::before": {
        "width": "100%",
        "WebkitAnimation": "skill_2 0.6s ease",
        "animation": "skill_2 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(3)::before": {
        "width": "80%",
        "WebkitAnimation": "skill_3 0.6s ease",
        "animation": "skill_3 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(4)::before": {
        "width": "80%",
        "WebkitAnimation": "skill_4 0.6s ease",
        "animation": "skill_4 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(5)::before": {
        "width": "70%",
        "WebkitAnimation": "skill_5 0.6s ease",
        "animation": "skill_5 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(6)::before": {
        "width": "60%",
        "WebkitAnimation": "skill_6 0.6s ease",
        "animation": "skill_6 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(7)::before": {
        "width": "80%",
        "WebkitAnimation": "skill_6 0.6s ease",
        "animation": "skill_6 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(8)::before": {
        "width": "100%",
        "WebkitAnimation": "skill_6 0.6s ease",
        "animation": "skill_6 0.6s ease"
    },
    "section-wrapper skill-percentage:nth-child(9)::before": {
        "width": "100%",
        "WebkitAnimation": "skill_6 0.6s ease",
        "animation": "skill_6 0.6s ease"
    },
    "phobbies-desc": {
        "paddingTop": 3
    },
    "explist": {
        "fontStyle": "italic"
    }
});