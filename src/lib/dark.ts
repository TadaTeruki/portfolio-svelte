export let darkState: "dark" | "light" | "system" = "system";

export function updateDarkMode() {
    let isDark = false;
    switch (darkState) {
        case "dark":
            isDark = true;
            break;
        case "light":
            isDark = false;
            break;
        case "system":
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            break;
    }

    localStorage.setItem("theme", darkState);
    document.body.classList.toggle("dark", isDark);
}

export function isDark() {
    return document.body.classList.contains("dark");
}
