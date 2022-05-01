import { Theme } from "../../interfaces/theme";

const light: Theme = {
  title: "light",

  colors: {
    sidebarBackground: "#ffffff",
    sidebarText: "#070B28",
    sidebarTextInactive: "#808291",

    cardBackground: "#ffffff",
    cardH4: "rgba(0, 0, 0, 0.75)",
    cardSpan: "rgba(0, 0, 0, 0.5)",
    cardSmall: "rgba(0, 0, 0, 0.35)",
    cardButton: "#3498db",
    cardButtonBackground: "rgba(52, 152, 219, 0.2)",
    cardHoverBorder: "#808291",
    cardHoverBorderShadow: "rgba(128, 130, 145, 0.25)",
    cardShadow1: "rgba(229, 229, 245, 0.25)",
    cardShadow2: "rgba(229, 229, 245, 0.189815)",
    cardShadow3: "rgba(229, 229, 245, 0.151852)",
    cardShadow4: "rgba(229, 229, 245, 0.125)",
    cardShadow5: "rgba(229, 229, 245, 0.0981481)",
    cardShadow6: "rgba(229, 229, 245, 0.0601852)",

    headerButtonBackground: "#5e51fc",
    headerButtonColor: "#ffffff",

    skeletonBackground: "rgba(81, 74, 166, 0.25)",
    skeletonHighlight: "rgba(128, 130, 145, 0.25)",

    primary: "#50514F",
    secondary: "#23CE6B",

    backgroundPrimary: "#F5F9FF",
    backgroundSecondary: "#e4e4e4",

    textPrimary: "#000000",
    textSecondary: "#000000",

    goUp: "#27AE60",
    goDown: "#EB5757",
    // notInformed: "#001eff",
    notInformed: "#F2994A",
  },
};

export default { ...light };
