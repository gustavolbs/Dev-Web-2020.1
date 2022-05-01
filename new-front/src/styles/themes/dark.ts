import { Theme } from "../../interfaces/theme";

const dark: Theme = {
  title: "dark",

  colors: {
    sidebarBackground: "#222338",
    sidebarText: "#ffffff",
    sidebarTextInactive: "#514AA6",

    cardBackground: "#26273B",
    cardH4: "#ffffff",
    cardSpan: "#B0BCD0",
    cardSmall: "rgba(255, 255, 255, 0.6)",
    cardButton: "#3498db",
    cardButtonBackground: "rgba(52, 152, 219, 0.2)",
    cardHoverBorder: "#514AA6",
    cardHoverBorderShadow: "rgba(81, 74, 166, 0.25)",
    cardShadow1: "rgba(26, 26, 50, 0.25)",
    cardShadow2: "rgba(26, 26, 50, 0.189815)",
    cardShadow3: "rgba(26, 26, 50, 0.151852)",
    cardShadow4: "rgba(26, 26, 50, 0.125)",
    cardShadow5: "rgba(26, 26, 50, 0.0981481)",
    cardShadow6: "rgba(26, 26, 50, 0.0601852)",

    headerButtonBackground: "#4E45BD",
    headerButtonColor: "#ffffff",

    skeletonBackground: "rgba(81, 74, 166, 0.25)",
    skeletonHighlight: "#4E45BD",

    primary: "#50514F",
    secondary: "#23CE6B",

    // backgroundPrimary: "#23232e",
    backgroundPrimary: "#1D1E33",
    backgroundSecondary: "#141418",

    textPrimary: "#F6F8FF",
    textSecondary: "#F6F8FF",

    goUp: "#27AE60",
    goDown: "#EB5757",
    // notInformed: "#e0d42b",
    notInformed: "#F2994A",
  },
};

export default { ...dark };
