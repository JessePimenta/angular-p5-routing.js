import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "hvr-grow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-grow:hover": {
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-grow:focus": {
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-grow:active": {
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-shrink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-shrink:hover": {
        "WebkitTransform": "scale(0.9)",
        "transform": "scale(0.9)"
    },
    "hvr-shrink:focus": {
        "WebkitTransform": "scale(0.9)",
        "transform": "scale(0.9)"
    },
    "hvr-shrink:active": {
        "WebkitTransform": "scale(0.9)",
        "transform": "scale(0.9)"
    },
    "hvr-pulse": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-pulse:hover": {
        "WebkitAnimationName": "hvr-pulse",
        "animationName": "hvr-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-pulse:focus": {
        "WebkitAnimationName": "hvr-pulse",
        "animationName": "hvr-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-pulse:active": {
        "WebkitAnimationName": "hvr-pulse",
        "animationName": "hvr-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-pulse-grow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-pulse-grow:hover": {
        "WebkitAnimationName": "hvr-pulse-grow",
        "animationName": "hvr-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-pulse-grow:focus": {
        "WebkitAnimationName": "hvr-pulse-grow",
        "animationName": "hvr-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-pulse-grow:active": {
        "WebkitAnimationName": "hvr-pulse-grow",
        "animationName": "hvr-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-pulse-shrink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-pulse-shrink:hover": {
        "WebkitAnimationName": "hvr-pulse-shrink",
        "animationName": "hvr-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-pulse-shrink:focus": {
        "WebkitAnimationName": "hvr-pulse-shrink",
        "animationName": "hvr-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-pulse-shrink:active": {
        "WebkitAnimationName": "hvr-pulse-shrink",
        "animationName": "hvr-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-push": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-push:hover": {
        "WebkitAnimationName": "hvr-push",
        "animationName": "hvr-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-push:focus": {
        "WebkitAnimationName": "hvr-push",
        "animationName": "hvr-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-push:active": {
        "WebkitAnimationName": "hvr-push",
        "animationName": "hvr-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-pop": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-pop:hover": {
        "WebkitAnimationName": "hvr-pop",
        "animationName": "hvr-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-pop:focus": {
        "WebkitAnimationName": "hvr-pop",
        "animationName": "hvr-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-pop:active": {
        "WebkitAnimationName": "hvr-pop",
        "animationName": "hvr-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-bounce-in": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-in:hover": {
        "WebkitTransform": "scale(1.2)",
        "transform": "scale(1.2)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-bounce-in:focus": {
        "WebkitTransform": "scale(1.2)",
        "transform": "scale(1.2)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-bounce-in:active": {
        "WebkitTransform": "scale(1.2)",
        "transform": "scale(1.2)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-bounce-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-out:hover": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-bounce-out:focus": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-bounce-out:active": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-rotate": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-rotate:hover": {
        "WebkitTransform": "rotate(4deg)",
        "transform": "rotate(4deg)"
    },
    "hvr-rotate:focus": {
        "WebkitTransform": "rotate(4deg)",
        "transform": "rotate(4deg)"
    },
    "hvr-rotate:active": {
        "WebkitTransform": "rotate(4deg)",
        "transform": "rotate(4deg)"
    },
    "hvr-grow-rotate": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-grow-rotate:hover": {
        "WebkitTransform": "scale(1.1) rotate(4deg)",
        "transform": "scale(1.1) rotate(4deg)"
    },
    "hvr-grow-rotate:focus": {
        "WebkitTransform": "scale(1.1) rotate(4deg)",
        "transform": "scale(1.1) rotate(4deg)"
    },
    "hvr-grow-rotate:active": {
        "WebkitTransform": "scale(1.1) rotate(4deg)",
        "transform": "scale(1.1) rotate(4deg)"
    },
    "hvr-float": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-float:hover": {
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "hvr-float:focus": {
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "hvr-float:active": {
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "hvr-sink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-sink:hover": {
        "WebkitTransform": "translateY(8px)",
        "transform": "translateY(8px)"
    },
    "hvr-sink:focus": {
        "WebkitTransform": "translateY(8px)",
        "transform": "translateY(8px)"
    },
    "hvr-sink:active": {
        "WebkitTransform": "translateY(8px)",
        "transform": "translateY(8px)"
    },
    "hvr-bob": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-bob:hover": {
        "WebkitAnimationName": "hvr-bob-float, hvr-bob",
        "animationName": "hvr-bob-float, hvr-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-bob:focus": {
        "WebkitAnimationName": "hvr-bob-float, hvr-bob",
        "animationName": "hvr-bob-float, hvr-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-bob:active": {
        "WebkitAnimationName": "hvr-bob-float, hvr-bob",
        "animationName": "hvr-bob-float, hvr-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-hang": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-hang:hover": {
        "WebkitAnimationName": "hvr-hang-sink, hvr-hang",
        "animationName": "hvr-hang-sink, hvr-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-hang:focus": {
        "WebkitAnimationName": "hvr-hang-sink, hvr-hang",
        "animationName": "hvr-hang-sink, hvr-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-hang:active": {
        "WebkitAnimationName": "hvr-hang-sink, hvr-hang",
        "animationName": "hvr-hang-sink, hvr-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-skew": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-skew:hover": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew:focus": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew:active": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew-forward": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransformOrigin": "0 100%",
        "transformOrigin": "0 100%"
    },
    "hvr-skew-forward:hover": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew-forward:focus": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew-forward:active": {
        "WebkitTransform": "skew(-10deg)",
        "transform": "skew(-10deg)"
    },
    "hvr-skew-backward": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransformOrigin": "0 100%",
        "transformOrigin": "0 100%"
    },
    "hvr-skew-backward:hover": {
        "WebkitTransform": "skew(10deg)",
        "transform": "skew(10deg)"
    },
    "hvr-skew-backward:focus": {
        "WebkitTransform": "skew(10deg)",
        "transform": "skew(10deg)"
    },
    "hvr-skew-backward:active": {
        "WebkitTransform": "skew(10deg)",
        "transform": "skew(10deg)"
    },
    "hvr-wobble-vertical": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-wobble-vertical:hover": {
        "WebkitAnimationName": "hvr-wobble-vertical",
        "animationName": "hvr-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-vertical:focus": {
        "WebkitAnimationName": "hvr-wobble-vertical",
        "animationName": "hvr-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-vertical:active": {
        "WebkitAnimationName": "hvr-wobble-vertical",
        "animationName": "hvr-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-horizontal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-wobble-horizontal:hover": {
        "WebkitAnimationName": "hvr-wobble-horizontal",
        "animationName": "hvr-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-horizontal:focus": {
        "WebkitAnimationName": "hvr-wobble-horizontal",
        "animationName": "hvr-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-horizontal:active": {
        "WebkitAnimationName": "hvr-wobble-horizontal",
        "animationName": "hvr-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-bottom-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-wobble-to-bottom-right:hover": {
        "WebkitAnimationName": "hvr-wobble-to-bottom-right",
        "animationName": "hvr-wobble-to-bottom-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-bottom-right:focus": {
        "WebkitAnimationName": "hvr-wobble-to-bottom-right",
        "animationName": "hvr-wobble-to-bottom-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-bottom-right:active": {
        "WebkitAnimationName": "hvr-wobble-to-bottom-right",
        "animationName": "hvr-wobble-to-bottom-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-top-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-wobble-to-top-right:hover": {
        "WebkitAnimationName": "hvr-wobble-to-top-right",
        "animationName": "hvr-wobble-to-top-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-top-right:focus": {
        "WebkitAnimationName": "hvr-wobble-to-top-right",
        "animationName": "hvr-wobble-to-top-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-to-top-right:active": {
        "WebkitAnimationName": "hvr-wobble-to-top-right",
        "animationName": "hvr-wobble-to-top-right",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-top": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransformOrigin": "0 100%",
        "transformOrigin": "0 100%"
    },
    "hvr-wobble-top:hover": {
        "WebkitAnimationName": "hvr-wobble-top",
        "animationName": "hvr-wobble-top",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-top:focus": {
        "WebkitAnimationName": "hvr-wobble-top",
        "animationName": "hvr-wobble-top",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-top:active": {
        "WebkitAnimationName": "hvr-wobble-top",
        "animationName": "hvr-wobble-top",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-bottom": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransformOrigin": "100% 0",
        "transformOrigin": "100% 0"
    },
    "hvr-wobble-bottom:hover": {
        "WebkitAnimationName": "hvr-wobble-bottom",
        "animationName": "hvr-wobble-bottom",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-bottom:focus": {
        "WebkitAnimationName": "hvr-wobble-bottom",
        "animationName": "hvr-wobble-bottom",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-bottom:active": {
        "WebkitAnimationName": "hvr-wobble-bottom",
        "animationName": "hvr-wobble-bottom",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-skew": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-wobble-skew:hover": {
        "WebkitAnimationName": "hvr-wobble-skew",
        "animationName": "hvr-wobble-skew",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-skew:focus": {
        "WebkitAnimationName": "hvr-wobble-skew",
        "animationName": "hvr-wobble-skew",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-wobble-skew:active": {
        "WebkitAnimationName": "hvr-wobble-skew",
        "animationName": "hvr-wobble-skew",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-buzz": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-buzz:hover": {
        "WebkitAnimationName": "hvr-buzz",
        "animationName": "hvr-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-buzz:focus": {
        "WebkitAnimationName": "hvr-buzz",
        "animationName": "hvr-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-buzz:active": {
        "WebkitAnimationName": "hvr-buzz",
        "animationName": "hvr-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-buzz-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale"
    },
    "hvr-buzz-out:hover": {
        "WebkitAnimationName": "hvr-buzz-out",
        "animationName": "hvr-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-buzz-out:focus": {
        "WebkitAnimationName": "hvr-buzz-out",
        "animationName": "hvr-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-buzz-out:active": {
        "WebkitAnimationName": "hvr-buzz-out",
        "animationName": "hvr-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-fade": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "overflow": "hidden",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "color, background-color",
        "transitionProperty": "color, background-color"
    },
    "hvr-fade:hover": {
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-fade:focus": {
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-fade:active": {
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-back-pulse": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "overflow": "hidden",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionProperty": "color, background-color",
        "transitionProperty": "color, background-color"
    },
    "hvr-back-pulse:hover": {
        "WebkitAnimationName": "hvr-back-pulse",
        "animationName": "hvr-back-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationDelay": "0.5s",
        "animationDelay": "0.5s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-back-pulse:focus": {
        "WebkitAnimationName": "hvr-back-pulse",
        "animationName": "hvr-back-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationDelay": "0.5s",
        "animationDelay": "0.5s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-back-pulse:active": {
        "WebkitAnimationName": "hvr-back-pulse",
        "animationName": "hvr-back-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationDelay": "0.5s",
        "animationDelay": "0.5s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "backgroundColor": "#2098d1",
        "color": "white"
    },
    "hvr-sweep-to-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-sweep-to-right:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransformOrigin": "0 50%",
        "transformOrigin": "0 50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-sweep-to-right:hover": {
        "color": "white"
    },
    "hvr-sweep-to-right:focus": {
        "color": "white"
    },
    "hvr-sweep-to-right:active": {
        "color": "white"
    },
    "hvr-sweep-to-right:hover:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-right:focus:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-right:active:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-sweep-to-left:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransformOrigin": "100% 50%",
        "transformOrigin": "100% 50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-sweep-to-left:hover": {
        "color": "white"
    },
    "hvr-sweep-to-left:focus": {
        "color": "white"
    },
    "hvr-sweep-to-left:active": {
        "color": "white"
    },
    "hvr-sweep-to-left:hover:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-left:focus:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-left:active:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-sweep-to-bottom": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-sweep-to-bottom:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)",
        "WebkitTransformOrigin": "50% 0",
        "transformOrigin": "50% 0",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-sweep-to-bottom:hover": {
        "color": "white"
    },
    "hvr-sweep-to-bottom:focus": {
        "color": "white"
    },
    "hvr-sweep-to-bottom:active": {
        "color": "white"
    },
    "hvr-sweep-to-bottom:hover:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-sweep-to-bottom:focus:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-sweep-to-bottom:active:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-sweep-to-top": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-sweep-to-top:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)",
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-sweep-to-top:hover": {
        "color": "white"
    },
    "hvr-sweep-to-top:focus": {
        "color": "white"
    },
    "hvr-sweep-to-top:active": {
        "color": "white"
    },
    "hvr-sweep-to-top:hover:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-sweep-to-top:focus:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-sweep-to-top:active:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-bounce-to-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-to-right:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransformOrigin": "0 50%",
        "transformOrigin": "0 50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-bounce-to-right:hover": {
        "color": "white"
    },
    "hvr-bounce-to-right:focus": {
        "color": "white"
    },
    "hvr-bounce-to-right:active": {
        "color": "white"
    },
    "hvr-bounce-to-right:hover:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-right:focus:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-right:active:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-to-left:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransformOrigin": "100% 50%",
        "transformOrigin": "100% 50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-bounce-to-left:hover": {
        "color": "white"
    },
    "hvr-bounce-to-left:focus": {
        "color": "white"
    },
    "hvr-bounce-to-left:active": {
        "color": "white"
    },
    "hvr-bounce-to-left:hover:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-left:focus:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-left:active:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-bottom": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-to-bottom:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)",
        "WebkitTransformOrigin": "50% 0",
        "transformOrigin": "50% 0",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-bounce-to-bottom:hover": {
        "color": "white"
    },
    "hvr-bounce-to-bottom:focus": {
        "color": "white"
    },
    "hvr-bounce-to-bottom:active": {
        "color": "white"
    },
    "hvr-bounce-to-bottom:hover:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-bottom:focus:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-bottom:active:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-top": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s"
    },
    "hvr-bounce-to-top:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)",
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-bounce-to-top:hover": {
        "color": "white"
    },
    "hvr-bounce-to-top:focus": {
        "color": "white"
    },
    "hvr-bounce-to-top:active": {
        "color": "white"
    },
    "hvr-bounce-to-top:hover:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-top:focus:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-bounce-to-top:active:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "transitionTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-radial-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden",
        "background": "#e1e1e1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-radial-out:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "borderRadius": "100%",
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-radial-out:hover": {
        "color": "white"
    },
    "hvr-radial-out:focus": {
        "color": "white"
    },
    "hvr-radial-out:active": {
        "color": "white"
    },
    "hvr-radial-out:hover:before": {
        "WebkitTransform": "scale(2)",
        "transform": "scale(2)"
    },
    "hvr-radial-out:focus:before": {
        "WebkitTransform": "scale(2)",
        "transform": "scale(2)"
    },
    "hvr-radial-out:active:before": {
        "WebkitTransform": "scale(2)",
        "transform": "scale(2)"
    },
    "hvr-radial-in": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden",
        "background": "#2098d1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-radial-in:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#e1e1e1",
        "borderRadius": "100%",
        "WebkitTransform": "scale(2)",
        "transform": "scale(2)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-radial-in:hover": {
        "color": "white"
    },
    "hvr-radial-in:focus": {
        "color": "white"
    },
    "hvr-radial-in:active": {
        "color": "white"
    },
    "hvr-radial-in:hover:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-radial-in:focus:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-radial-in:active:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-rectangle-in": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#2098d1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-rectangle-in:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#e1e1e1",
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-rectangle-in:hover": {
        "color": "white"
    },
    "hvr-rectangle-in:focus": {
        "color": "white"
    },
    "hvr-rectangle-in:active": {
        "color": "white"
    },
    "hvr-rectangle-in:hover:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-rectangle-in:focus:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-rectangle-in:active:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "hvr-rectangle-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#e1e1e1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-rectangle-out:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-rectangle-out:hover": {
        "color": "white"
    },
    "hvr-rectangle-out:focus": {
        "color": "white"
    },
    "hvr-rectangle-out:active": {
        "color": "white"
    },
    "hvr-rectangle-out:hover:before": {
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "hvr-rectangle-out:focus:before": {
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "hvr-rectangle-out:active:before": {
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "hvr-shutter-in-horizontal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#2098d1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-shutter-in-horizontal:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "#e1e1e1",
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-shutter-in-horizontal:hover": {
        "color": "white"
    },
    "hvr-shutter-in-horizontal:focus": {
        "color": "white"
    },
    "hvr-shutter-in-horizontal:active": {
        "color": "white"
    },
    "hvr-shutter-in-horizontal:hover:before": {
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)"
    },
    "hvr-shutter-in-horizontal:focus:before": {
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)"
    },
    "hvr-shutter-in-horizontal:active:before": {
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)"
    },
    "hvr-shutter-out-horizontal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#e1e1e1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-shutter-out-horizontal:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-shutter-out-horizontal:hover": {
        "color": "white"
    },
    "hvr-shutter-out-horizontal:focus": {
        "color": "white"
    },
    "hvr-shutter-out-horizontal:active": {
        "color": "white"
    },
    "hvr-shutter-out-horizontal:hover:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-shutter-out-horizontal:focus:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-shutter-out-horizontal:active:before": {
        "WebkitTransform": "scaleX(1)",
        "transform": "scaleX(1)"
    },
    "hvr-shutter-in-vertical": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#2098d1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-shutter-in-vertical:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "#e1e1e1",
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-shutter-in-vertical:hover": {
        "color": "white"
    },
    "hvr-shutter-in-vertical:focus": {
        "color": "white"
    },
    "hvr-shutter-in-vertical:active": {
        "color": "white"
    },
    "hvr-shutter-in-vertical:hover:before": {
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)"
    },
    "hvr-shutter-in-vertical:focus:before": {
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)"
    },
    "hvr-shutter-in-vertical:active:before": {
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)"
    },
    "hvr-shutter-out-vertical": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "background": "#e1e1e1",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-shutter-out-vertical:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "#2098d1",
        "WebkitTransform": "scaleY(0)",
        "transform": "scaleY(0)",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-shutter-out-vertical:hover": {
        "color": "white"
    },
    "hvr-shutter-out-vertical:focus": {
        "color": "white"
    },
    "hvr-shutter-out-vertical:active": {
        "color": "white"
    },
    "hvr-shutter-out-vertical:hover:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-shutter-out-vertical:focus:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-shutter-out-vertical:active:before": {
        "WebkitTransform": "scaleY(1)",
        "transform": "scaleY(1)"
    },
    "hvr-border-fade": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow",
        "transitionProperty": "box-shadow"
    },
    "hvr-border-fade:hover": {
        "boxShadow": "inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-border-fade:focus": {
        "boxShadow": "inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-border-fade:active": {
        "boxShadow": "inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-hollow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "background",
        "transitionProperty": "background"
    },
    "hvr-hollow:hover": {
        "background": "none"
    },
    "hvr-hollow:focus": {
        "background": "none"
    },
    "hvr-hollow:active": {
        "background": "none"
    },
    "hvr-trim": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-trim:before": {
        "content": "''",
        "position": "absolute",
        "border": "white solid 4px",
        "top": 4,
        "left": 4,
        "right": 4,
        "bottom": 4,
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity"
    },
    "hvr-trim:hover:before": {
        "opacity": 1
    },
    "hvr-trim:focus:before": {
        "opacity": 1
    },
    "hvr-trim:active:before": {
        "opacity": 1
    },
    "hvr-ripple-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-ripple-out:before": {
        "content": "''",
        "position": "absolute",
        "border": "#e1e1e1 solid 6px",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s"
    },
    "hvr-ripple-out:hover:before": {
        "WebkitAnimationName": "hvr-ripple-out",
        "animationName": "hvr-ripple-out"
    },
    "hvr-ripple-out:focus:before": {
        "WebkitAnimationName": "hvr-ripple-out",
        "animationName": "hvr-ripple-out"
    },
    "hvr-ripple-out:active:before": {
        "WebkitAnimationName": "hvr-ripple-out",
        "animationName": "hvr-ripple-out"
    },
    "hvr-ripple-in": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-ripple-in:before": {
        "content": "''",
        "position": "absolute",
        "border": "#e1e1e1 solid 4px",
        "top": -12,
        "right": -12,
        "bottom": -12,
        "left": -12,
        "opacity": 0,
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s"
    },
    "hvr-ripple-in:hover:before": {
        "WebkitAnimationName": "hvr-ripple-in",
        "animationName": "hvr-ripple-in"
    },
    "hvr-ripple-in:focus:before": {
        "WebkitAnimationName": "hvr-ripple-in",
        "animationName": "hvr-ripple-in"
    },
    "hvr-ripple-in:active:before": {
        "WebkitAnimationName": "hvr-ripple-in",
        "animationName": "hvr-ripple-in"
    },
    "hvr-outline-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-outline-out:before": {
        "content": "''",
        "position": "absolute",
        "border": "#e1e1e1 solid 4px",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "top, right, bottom, left",
        "transitionProperty": "top, right, bottom, left"
    },
    "hvr-outline-out:hover:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8
    },
    "hvr-outline-out:focus:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8
    },
    "hvr-outline-out:active:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8
    },
    "hvr-outline-in": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-outline-in:before": {
        "pointerEvents": "none",
        "content": "''",
        "position": "absolute",
        "border": "#e1e1e1 solid 4px",
        "top": -16,
        "right": -16,
        "bottom": -16,
        "left": -16,
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "top, right, bottom, left",
        "transitionProperty": "top, right, bottom, left"
    },
    "hvr-outline-in:hover:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8,
        "opacity": 1
    },
    "hvr-outline-in:focus:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8,
        "opacity": 1
    },
    "hvr-outline-in:active:before": {
        "top": -8,
        "right": -8,
        "bottom": -8,
        "left": -8,
        "opacity": 1
    },
    "hvr-round-corners": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "border-radius",
        "transitionProperty": "border-radius"
    },
    "hvr-round-corners:hover": {
        "borderRadius": 1
    },
    "hvr-round-corners:focus": {
        "borderRadius": 1
    },
    "hvr-round-corners:active": {
        "borderRadius": 1
    },
    "hvr-underline-from-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-underline-from-left:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": 0,
        "right": "100%",
        "bottom": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "right",
        "transitionProperty": "right",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-underline-from-left:hover:before": {
        "right": 0
    },
    "hvr-underline-from-left:focus:before": {
        "right": 0
    },
    "hvr-underline-from-left:active:before": {
        "right": 0
    },
    "hvr-underline-from-center": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-underline-from-center:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": "50%",
        "right": "50%",
        "bottom": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "left, right",
        "transitionProperty": "left, right",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-underline-from-center:hover:before": {
        "left": 0,
        "right": 0
    },
    "hvr-underline-from-center:focus:before": {
        "left": 0,
        "right": 0
    },
    "hvr-underline-from-center:active:before": {
        "left": 0,
        "right": 0
    },
    "hvr-underline-from-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-underline-from-right:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": "100%",
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "left",
        "transitionProperty": "left",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-underline-from-right:hover:before": {
        "left": 0
    },
    "hvr-underline-from-right:focus:before": {
        "left": 0
    },
    "hvr-underline-from-right:active:before": {
        "left": 0
    },
    "hvr-overline-from-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-overline-from-left:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": 0,
        "right": "100%",
        "top": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "right",
        "transitionProperty": "right",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-overline-from-left:hover:before": {
        "right": 0
    },
    "hvr-overline-from-left:focus:before": {
        "right": 0
    },
    "hvr-overline-from-left:active:before": {
        "right": 0
    },
    "hvr-overline-from-center": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-overline-from-center:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": "50%",
        "right": "50%",
        "top": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "left, right",
        "transitionProperty": "left, right",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-overline-from-center:hover:before": {
        "left": 0,
        "right": 0
    },
    "hvr-overline-from-center:focus:before": {
        "left": 0,
        "right": 0
    },
    "hvr-overline-from-center:active:before": {
        "left": 0,
        "right": 0
    },
    "hvr-overline-from-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-overline-from-right:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": "100%",
        "right": 0,
        "top": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransitionProperty": "left",
        "transitionProperty": "left",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-overline-from-right:hover:before": {
        "left": 0
    },
    "hvr-overline-from-right:focus:before": {
        "left": 0
    },
    "hvr-overline-from-right:active:before": {
        "left": 0
    },
    "hvr-reveal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-reveal:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "borderColor": "#2098d1",
        "borderStyle": "solid",
        "borderWidth": 0,
        "WebkitTransitionProperty": "border-width",
        "transitionProperty": "border-width",
        "WebkitTransitionDuration": "0.1s",
        "transitionDuration": "0.1s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-reveal:hover:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)",
        "borderWidth": 4
    },
    "hvr-reveal:focus:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)",
        "borderWidth": 4
    },
    "hvr-reveal:active:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)",
        "borderWidth": 4
    },
    "hvr-underline-reveal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-underline-reveal:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransform": "translateY(4px)",
        "transform": "translateY(4px)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-underline-reveal:hover:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-underline-reveal:focus:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-underline-reveal:active:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-overline-reveal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "overflow": "hidden"
    },
    "hvr-overline-reveal:before": {
        "content": "",
        "position": "absolute",
        "zIndex": -1,
        "left": 0,
        "right": 0,
        "top": 0,
        "background": "#2098d1",
        "height": 4,
        "WebkitTransform": "translateY(-4px)",
        "transform": "translateY(-4px)",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-overline-reveal:hover:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-overline-reveal:focus:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-overline-reveal:active:before": {
        "WebkitTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "hvr-glow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow",
        "transitionProperty": "box-shadow"
    },
    "hvr-glow:hover": {
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)"
    },
    "hvr-glow:focus": {
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)"
    },
    "hvr-glow:active": {
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)"
    },
    "hvr-shadow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow",
        "transitionProperty": "box-shadow"
    },
    "hvr-shadow:hover": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
    },
    "hvr-shadow:focus": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
    },
    "hvr-shadow:active": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
    },
    "hvr-grow-shadow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow, transform",
        "transitionProperty": "box-shadow, transform"
    },
    "hvr-grow-shadow:hover": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-grow-shadow:focus": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-grow-shadow:active": {
        "boxShadow": "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
        "WebkitTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "hvr-box-shadow-outset": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow",
        "transitionProperty": "box-shadow"
    },
    "hvr-box-shadow-outset:hover": {
        "boxShadow": "2px 2px 2px rgba(0, 0, 0, 0.6)"
    },
    "hvr-box-shadow-outset:focus": {
        "boxShadow": "2px 2px 2px rgba(0, 0, 0, 0.6)"
    },
    "hvr-box-shadow-outset:active": {
        "boxShadow": "2px 2px 2px rgba(0, 0, 0, 0.6)"
    },
    "hvr-box-shadow-inset": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "box-shadow",
        "transitionProperty": "box-shadow"
    },
    "hvr-box-shadow-inset:hover": {
        "boxShadow": "inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-box-shadow-inset:focus": {
        "boxShadow": "inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-box-shadow-inset:active": {
        "boxShadow": "inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0)"
    },
    "hvr-float-shadow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-float-shadow:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "top": "100%",
        "left": "5%",
        "height": 10,
        "width": "90%",
        "opacity": 0,
        "background": "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform, opacity",
        "transitionProperty": "transform, opacity"
    },
    "hvr-float-shadow:hover": {
        "WebkitTransform": "translateY(-5px)",
        "transform": "translateY(-5px)"
    },
    "hvr-float-shadow:focus": {
        "WebkitTransform": "translateY(-5px)",
        "transform": "translateY(-5px)"
    },
    "hvr-float-shadow:active": {
        "WebkitTransform": "translateY(-5px)",
        "transform": "translateY(-5px)"
    },
    "hvr-float-shadow:hover:before": {
        "opacity": 1,
        "WebkitTransform": "translateY(5px)",
        "transform": "translateY(5px)"
    },
    "hvr-float-shadow:focus:before": {
        "opacity": 1,
        "WebkitTransform": "translateY(5px)",
        "transform": "translateY(5px)"
    },
    "hvr-float-shadow:active:before": {
        "opacity": 1,
        "WebkitTransform": "translateY(5px)",
        "transform": "translateY(5px)"
    },
    "hvr-shadow-radial": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-shadow-radial:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "left": 0,
        "width": "100%",
        "boxSizing": "border-box",
        "backgroundRepeat": "no-repeat",
        "height": 5,
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity",
        "bottom": "100%",
        "background": "radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%)"
    },
    "hvr-shadow-radial:after": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "left": 0,
        "width": "100%",
        "boxSizing": "border-box",
        "backgroundRepeat": "no-repeat",
        "height": 5,
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity",
        "top": "100%",
        "background": "radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%)"
    },
    "hvr-shadow-radial:hover:before": {
        "opacity": 1
    },
    "hvr-shadow-radial:focus:before": {
        "opacity": 1
    },
    "hvr-shadow-radial:active:before": {
        "opacity": 1
    },
    "hvr-shadow-radial:hover:after": {
        "opacity": 1
    },
    "hvr-shadow-radial:focus:after": {
        "opacity": 1
    },
    "hvr-shadow-radial:active:after": {
        "opacity": 1
    },
    "hvr-bubble-top": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-bubble-top:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "borderStyle": "solid",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "left": "calc(50% - 10px)",
        "top": 0,
        "borderWidth": "0 10px 10px 10px",
        "borderColor": "transparent transparent #e1e1e1 transparent"
    },
    "hvr-bubble-top:hover:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-top:focus:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-top:active:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-bubble-right:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "borderStyle": "solid",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "top": "calc(50% - 10px)",
        "right": 0,
        "borderWidth": "10px 0 10px 10px",
        "borderColor": "transparent transparent transparent #e1e1e1"
    },
    "hvr-bubble-right:hover:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-right:focus:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-right:active:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-bottom": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-bubble-bottom:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "borderStyle": "solid",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "left": "calc(50% - 10px)",
        "bottom": 0,
        "borderWidth": "10px 10px 0 10px",
        "borderColor": "#e1e1e1 transparent transparent transparent"
    },
    "hvr-bubble-bottom:hover:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-bottom:focus:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-bottom:active:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-bubble-left:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "borderStyle": "solid",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "top": "calc(50% - 10px)",
        "left": 0,
        "borderWidth": "10px 10px 10px 0",
        "borderColor": "transparent #e1e1e1 transparent transparent"
    },
    "hvr-bubble-left:hover:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-left:focus:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-left:active:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-top": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-top:before": {
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "left": "calc(50% - 10px)",
        "top": 0,
        "borderStyle": "solid",
        "borderWidth": "0 10px 10px 10px",
        "borderColor": "transparent transparent #e1e1e1 transparent",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-top:hover": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-top:focus": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-top:active": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-top:hover:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-top:focus:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-top:active:before": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-right:before": {
        "position": "absolute",
        "zIndex": -1,
        "top": "calc(50% - 10px)",
        "right": 0,
        "content": "''",
        "borderStyle": "solid",
        "borderWidth": "10px 0 10px 10px",
        "borderColor": "transparent transparent transparent #e1e1e1",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-right:hover": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-right:focus": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-right:active": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-right:hover:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-right:focus:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-right:active:before": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-bottom": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-bottom:before": {
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "left": "calc(50% - 10px)",
        "bottom": 0,
        "borderStyle": "solid",
        "borderWidth": "10px 10px 0 10px",
        "borderColor": "#e1e1e1 transparent transparent transparent",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-bottom:hover": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-bottom:focus": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-bottom:active": {
        "WebkitTransform": "translateY(-10px)",
        "transform": "translateY(-10px)"
    },
    "hvr-bubble-float-bottom:hover:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-bottom:focus:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-bottom:active:before": {
        "WebkitTransform": "translateY(10px)",
        "transform": "translateY(10px)"
    },
    "hvr-bubble-float-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-left:before": {
        "position": "absolute",
        "zIndex": -1,
        "content": "''",
        "top": "calc(50% - 10px)",
        "left": 0,
        "borderStyle": "solid",
        "borderWidth": "10px 10px 10px 0",
        "borderColor": "transparent #e1e1e1 transparent transparent",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform"
    },
    "hvr-bubble-float-left:hover": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-left:focus": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-left:active": {
        "WebkitTransform": "translateX(10px)",
        "transform": "translateX(10px)"
    },
    "hvr-bubble-float-left:hover:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-left:focus:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-bubble-float-left:active:before": {
        "WebkitTransform": "translateX(-10px)",
        "transform": "translateX(-10px)"
    },
    "hvr-icon-back": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingLeft": 2.2,
        "WebkitTransitionDuration": "0.1s",
        "transitionDuration": "0.1s"
    },
    "hvr-icon-back:before": {
        "content": "\\f137",
        "position": "absolute",
        "left": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.1s",
        "transitionDuration": "0.1s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-back:hover:before": {
        "WebkitTransform": "translateX(-4px)",
        "transform": "translateX(-4px)"
    },
    "hvr-icon-back:focus:before": {
        "WebkitTransform": "translateX(-4px)",
        "transform": "translateX(-4px)"
    },
    "hvr-icon-back:active:before": {
        "WebkitTransform": "translateX(-4px)",
        "transform": "translateX(-4px)"
    },
    "hvr-icon-forward": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.1s",
        "transitionDuration": "0.1s"
    },
    "hvr-icon-forward:before": {
        "content": "\\f138",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.1s",
        "transitionDuration": "0.1s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-forward:hover:before": {
        "WebkitTransform": "translateX(4px)",
        "transform": "translateX(4px)"
    },
    "hvr-icon-forward:focus:before": {
        "WebkitTransform": "translateX(4px)",
        "transform": "translateX(4px)"
    },
    "hvr-icon-forward:active:before": {
        "WebkitTransform": "translateX(4px)",
        "transform": "translateX(4px)"
    },
    "hvr-icon-down": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-down:before": {
        "content": "\\f01a",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-down:hover:before": {
        "WebkitAnimationName": "hvr-icon-down",
        "animationName": "hvr-icon-down",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-down:focus:before": {
        "WebkitAnimationName": "hvr-icon-down",
        "animationName": "hvr-icon-down",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-down:active:before": {
        "WebkitAnimationName": "hvr-icon-down",
        "animationName": "hvr-icon-down",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-up": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-up:before": {
        "content": "\\f01b",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-up:hover:before": {
        "WebkitAnimationName": "hvr-icon-up",
        "animationName": "hvr-icon-up",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-up:focus:before": {
        "WebkitAnimationName": "hvr-icon-up",
        "animationName": "hvr-icon-up",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-up:active:before": {
        "WebkitAnimationName": "hvr-icon-up",
        "animationName": "hvr-icon-up",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-spin": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-spin:before": {
        "content": "\\f021",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransitionDuration": "1s",
        "transitionDuration": "1s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-in-out",
        "transitionTimingFunction": "ease-in-out"
    },
    "hvr-icon-spin:hover:before": {
        "WebkitTransform": "rotate(360deg)",
        "transform": "rotate(360deg)"
    },
    "hvr-icon-spin:focus:before": {
        "WebkitTransform": "rotate(360deg)",
        "transform": "rotate(360deg)"
    },
    "hvr-icon-spin:active:before": {
        "WebkitTransform": "rotate(360deg)",
        "transform": "rotate(360deg)"
    },
    "hvr-icon-drop": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-drop:before": {
        "content": "\\f041",
        "position": "absolute",
        "right": 1,
        "opacity": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-drop:hover:before": {
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitAnimationName": "hvr-icon-drop",
        "animationName": "hvr-icon-drop",
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationDelay": "0.3s",
        "animationDelay": "0.3s",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "animationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-icon-drop:focus:before": {
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitAnimationName": "hvr-icon-drop",
        "animationName": "hvr-icon-drop",
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationDelay": "0.3s",
        "animationDelay": "0.3s",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "animationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-icon-drop:active:before": {
        "opacity": 0,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitAnimationName": "hvr-icon-drop",
        "animationName": "hvr-icon-drop",
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationDelay": "0.3s",
        "animationDelay": "0.3s",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)",
        "animationTimingFunction": "cubic-bezier(0.52, 1.64, 0.37, 0.66)"
    },
    "hvr-icon-fade": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-fade:before": {
        "content": "\\f00c",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionProperty": "color",
        "transitionProperty": "color"
    },
    "hvr-icon-fade:hover:before": {
        "color": "#0F9E5E"
    },
    "hvr-icon-fade:focus:before": {
        "color": "#0F9E5E"
    },
    "hvr-icon-fade:active:before": {
        "color": "#0F9E5E"
    },
    "hvr-icon-float-away": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-float-away:before": {
        "content": "\\f055",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome"
    },
    "hvr-icon-float-away:after": {
        "content": "\\f055",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "opacity": 0,
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "hvr-icon-float-away:hover:after": {
        "WebkitAnimationName": "hvr-icon-float-away",
        "animationName": "hvr-icon-float-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-float-away:focus:after": {
        "WebkitAnimationName": "hvr-icon-float-away",
        "animationName": "hvr-icon-float-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-float-away:active:after": {
        "WebkitAnimationName": "hvr-icon-float-away",
        "animationName": "hvr-icon-float-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-sink-away": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-sink-away:before": {
        "content": "\\f056",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-sink-away:after": {
        "content": "\\f056",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "opacity": 0,
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "hvr-icon-sink-away:hover:after": {
        "WebkitAnimationName": "hvr-icon-sink-away",
        "animationName": "hvr-icon-sink-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-sink-away:focus:after": {
        "WebkitAnimationName": "hvr-icon-sink-away",
        "animationName": "hvr-icon-sink-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-sink-away:active:after": {
        "WebkitAnimationName": "hvr-icon-sink-away",
        "animationName": "hvr-icon-sink-away",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "hvr-icon-grow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-grow:before": {
        "content": "\\f118",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-grow:hover:before": {
        "WebkitTransform": "scale(1.3) translateZ(0)",
        "transform": "scale(1.3) translateZ(0)"
    },
    "hvr-icon-grow:focus:before": {
        "WebkitTransform": "scale(1.3) translateZ(0)",
        "transform": "scale(1.3) translateZ(0)"
    },
    "hvr-icon-grow:active:before": {
        "WebkitTransform": "scale(1.3) translateZ(0)",
        "transform": "scale(1.3) translateZ(0)"
    },
    "hvr-icon-shrink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-shrink:before": {
        "content": "\\f119",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-shrink:hover:before": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)"
    },
    "hvr-icon-shrink:focus:before": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)"
    },
    "hvr-icon-shrink:active:before": {
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)"
    },
    "hvr-icon-pulse": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-pulse:before": {
        "content": "\\f015",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-pulse:hover:before": {
        "WebkitAnimationName": "hvr-icon-pulse",
        "animationName": "hvr-icon-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-pulse:focus:before": {
        "WebkitAnimationName": "hvr-icon-pulse",
        "animationName": "hvr-icon-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-pulse:active:before": {
        "WebkitAnimationName": "hvr-icon-pulse",
        "animationName": "hvr-icon-pulse",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-pulse-grow": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-pulse-grow:before": {
        "content": "\\f015",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-pulse-grow:hover:before": {
        "WebkitAnimationName": "hvr-icon-pulse-grow",
        "animationName": "hvr-icon-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-pulse-grow:focus:before": {
        "WebkitAnimationName": "hvr-icon-pulse-grow",
        "animationName": "hvr-icon-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-pulse-grow:active:before": {
        "WebkitAnimationName": "hvr-icon-pulse-grow",
        "animationName": "hvr-icon-pulse-grow",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-pulse-shrink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2
    },
    "hvr-icon-pulse-shrink:before": {
        "content": "\\f015",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-pulse-shrink:hover:before": {
        "WebkitAnimationName": "hvr-icon-pulse-shrink",
        "animationName": "hvr-icon-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-pulse-shrink:focus:before": {
        "WebkitAnimationName": "hvr-icon-pulse-shrink",
        "animationName": "hvr-icon-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-pulse-shrink:active:before": {
        "WebkitAnimationName": "hvr-icon-pulse-shrink",
        "animationName": "hvr-icon-pulse-shrink",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationDirection": "alternate",
        "animationDirection": "alternate"
    },
    "hvr-icon-push": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-push:before": {
        "content": "\\f006",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-push:hover:before": {
        "WebkitAnimationName": "hvr-icon-push",
        "animationName": "hvr-icon-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-push:focus:before": {
        "WebkitAnimationName": "hvr-icon-push",
        "animationName": "hvr-icon-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-push:active:before": {
        "WebkitAnimationName": "hvr-icon-push",
        "animationName": "hvr-icon-push",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-pop": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-pop:before": {
        "content": "\\f005",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-pop:hover:before": {
        "WebkitAnimationName": "hvr-icon-pop",
        "animationName": "hvr-icon-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-pop:focus:before": {
        "WebkitAnimationName": "hvr-icon-pop",
        "animationName": "hvr-icon-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-pop:active:before": {
        "WebkitAnimationName": "hvr-icon-pop",
        "animationName": "hvr-icon-pop",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-bounce": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-bounce:before": {
        "content": "\\f087",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-bounce:hover:before": {
        "WebkitTransform": "scale(1.5)",
        "transform": "scale(1.5)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-icon-bounce:focus:before": {
        "WebkitTransform": "scale(1.5)",
        "transform": "scale(1.5)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-icon-bounce:active:before": {
        "WebkitTransform": "scale(1.5)",
        "transform": "scale(1.5)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
        "transitionTimingFunction": "cubic-bezier(0.47, 2.02, 0.31, -0.36)"
    },
    "hvr-icon-rotate": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-rotate:before": {
        "content": "\\f0c6",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-rotate:hover:before": {
        "WebkitTransform": "rotate(20deg)",
        "transform": "rotate(20deg)"
    },
    "hvr-icon-rotate:focus:before": {
        "WebkitTransform": "rotate(20deg)",
        "transform": "rotate(20deg)"
    },
    "hvr-icon-rotate:active:before": {
        "WebkitTransform": "rotate(20deg)",
        "transform": "rotate(20deg)"
    },
    "hvr-icon-grow-rotate": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-grow-rotate:before": {
        "content": "\\f095",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-grow-rotate:hover:before": {
        "WebkitTransform": "scale(1.5) rotate(12deg)",
        "transform": "scale(1.5) rotate(12deg)"
    },
    "hvr-icon-grow-rotate:focus:before": {
        "WebkitTransform": "scale(1.5) rotate(12deg)",
        "transform": "scale(1.5) rotate(12deg)"
    },
    "hvr-icon-grow-rotate:active:before": {
        "WebkitTransform": "scale(1.5) rotate(12deg)",
        "transform": "scale(1.5) rotate(12deg)"
    },
    "hvr-icon-float": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-float:before": {
        "content": "\\f01b",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-float:hover:before": {
        "WebkitTransform": "translateY(-4px)",
        "transform": "translateY(-4px)"
    },
    "hvr-icon-float:focus:before": {
        "WebkitTransform": "translateY(-4px)",
        "transform": "translateY(-4px)"
    },
    "hvr-icon-float:active:before": {
        "WebkitTransform": "translateY(-4px)",
        "transform": "translateY(-4px)"
    },
    "hvr-icon-sink": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-sink:before": {
        "content": "\\f01a",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-icon-sink:hover:before": {
        "WebkitTransform": "translateY(4px)",
        "transform": "translateY(4px)"
    },
    "hvr-icon-sink:focus:before": {
        "WebkitTransform": "translateY(4px)",
        "transform": "translateY(4px)"
    },
    "hvr-icon-sink:active:before": {
        "WebkitTransform": "translateY(4px)",
        "transform": "translateY(4px)"
    },
    "hvr-icon-bob": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-bob:before": {
        "content": "\\f077",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-bob:hover:before": {
        "WebkitAnimationName": "hvr-icon-bob-float, hvr-icon-bob",
        "animationName": "hvr-icon-bob-float, hvr-icon-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-bob:focus:before": {
        "WebkitAnimationName": "hvr-icon-bob-float, hvr-icon-bob",
        "animationName": "hvr-icon-bob-float, hvr-icon-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-bob:active:before": {
        "WebkitAnimationName": "hvr-icon-bob-float, hvr-icon-bob",
        "animationName": "hvr-icon-bob-float, hvr-icon-bob",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-hang": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-hang:before": {
        "content": "\\f078",
        "position": "absolute",
        "right": 2,
        "top": -0.6,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "fontSize": 8
    },
    "hvr-icon-hang:hover:before": {
        "WebkitAnimationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "animationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-hang:focus:before": {
        "WebkitAnimationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "animationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-hang:active:before": {
        "WebkitAnimationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "animationName": "hvr-icon-hang-sink, hvr-icon-hang",
        "WebkitAnimationDuration": ".3s, 1.5s",
        "animationDuration": ".3s, 1.5s",
        "WebkitAnimationDelay": "0s, .3s",
        "animationDelay": "0s, .3s",
        "WebkitAnimationTimingFunction": "ease-out, ease-in-out",
        "animationTimingFunction": "ease-out, ease-in-out",
        "WebkitAnimationIterationCount": "1, infinite",
        "animationIterationCount": "1, infinite",
        "WebkitAnimationFillMode": "forwards",
        "animationFillMode": "forwards",
        "WebkitAnimationDirection": "normal, alternate",
        "animationDirection": "normal, alternate"
    },
    "hvr-icon-wobble-horizontal": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-wobble-horizontal:before": {
        "content": "\\f061",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-wobble-horizontal:hover:before": {
        "WebkitAnimationName": "hvr-icon-wobble-horizontal",
        "animationName": "hvr-icon-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-wobble-horizontal:focus:before": {
        "WebkitAnimationName": "hvr-icon-wobble-horizontal",
        "animationName": "hvr-icon-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-wobble-horizontal:active:before": {
        "WebkitAnimationName": "hvr-icon-wobble-horizontal",
        "animationName": "hvr-icon-wobble-horizontal",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-wobble-vertical": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-wobble-vertical:before": {
        "content": "\\f062",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-wobble-vertical:hover:before": {
        "WebkitAnimationName": "hvr-icon-wobble-vertical",
        "animationName": "hvr-icon-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-wobble-vertical:focus:before": {
        "WebkitAnimationName": "hvr-icon-wobble-vertical",
        "animationName": "hvr-icon-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-wobble-vertical:active:before": {
        "WebkitAnimationName": "hvr-icon-wobble-vertical",
        "animationName": "hvr-icon-wobble-vertical",
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-buzz": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-buzz:before": {
        "content": "\\f017",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-buzz:hover:before": {
        "WebkitAnimationName": "hvr-icon-buzz",
        "animationName": "hvr-icon-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-buzz:focus:before": {
        "WebkitAnimationName": "hvr-icon-buzz",
        "animationName": "hvr-icon-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-buzz:active:before": {
        "WebkitAnimationName": "hvr-icon-buzz",
        "animationName": "hvr-icon-buzz",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "hvr-icon-buzz-out": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative",
        "paddingRight": 2.2,
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "hvr-icon-buzz-out:before": {
        "content": "\\f023",
        "position": "absolute",
        "right": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "fontFamily": "FontAwesome",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)"
    },
    "hvr-icon-buzz-out:hover:before": {
        "WebkitAnimationName": "hvr-icon-buzz-out",
        "animationName": "hvr-icon-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-buzz-out:focus:before": {
        "WebkitAnimationName": "hvr-icon-buzz-out",
        "animationName": "hvr-icon-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-icon-buzz-out:active:before": {
        "WebkitAnimationName": "hvr-icon-buzz-out",
        "animationName": "hvr-icon-buzz-out",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s",
        "WebkitAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": 1,
        "animationIterationCount": 1
    },
    "hvr-curl-top-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-curl-top-left:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "height": 0,
        "width": 0,
        "top": 0,
        "left": 0,
        "background": "linear-gradient(135deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000')",
        "zIndex": 1000,
        "boxShadow": "1px 1px 1px rgba(0, 0, 0, 0.4)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "width, height",
        "transitionProperty": "width, height"
    },
    "hvr-curl-top-left:hover:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-top-left:focus:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-top-left:active:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-top-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-curl-top-right:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "height": 0,
        "width": 0,
        "top": 0,
        "right": 0,
        "background": "linear-gradient(225deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%)",
        "boxShadow": "-1px 1px 1px rgba(0, 0, 0, 0.4)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "width, height",
        "transitionProperty": "width, height"
    },
    "hvr-curl-top-right:hover:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-top-right:focus:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-top-right:active:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-right": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-curl-bottom-right:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "height": 0,
        "width": 0,
        "bottom": 0,
        "right": 0,
        "background": "linear-gradient(315deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%)",
        "boxShadow": "-1px -1px 1px rgba(0, 0, 0, 0.4)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "width, height",
        "transitionProperty": "width, height"
    },
    "hvr-curl-bottom-right:hover:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-right:focus:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-right:active:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-left": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "boxShadow": "0 0 1px rgba(0, 0, 0, 0)",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "MozOsxFontSmoothing": "grayscale",
        "position": "relative"
    },
    "hvr-curl-bottom-left:before": {
        "pointerEvents": "none",
        "position": "absolute",
        "content": "''",
        "height": 0,
        "width": 0,
        "bottom": 0,
        "left": 0,
        "background": "linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%)",
        "boxShadow": "1px -1px 1px rgba(0, 0, 0, 0.4)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "width, height",
        "transitionProperty": "width, height"
    },
    "hvr-curl-bottom-left:hover:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-left:focus:before": {
        "width": 25,
        "height": 25
    },
    "hvr-curl-bottom-left:active:before": {
        "width": 25,
        "height": 25
    }
});