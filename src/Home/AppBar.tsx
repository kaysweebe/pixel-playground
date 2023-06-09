import {
    Box,
    Button,
    Header,
    Text,
} from "grommet";
import { Moon, Sun } from "grommet-icons";
import { Router, NavLink } from "react-router-dom";

const AppBarTheme = (props: any) => (
    <Header
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      {...props}
    />
   );


interface AppBarProps {
    dark: boolean,
    onClick: any,
}
const AppBar = (props: AppBarProps) => {
    const {dark, onClick} = props;

    return (
    <AppBarTheme>
          <Button href="/">
            <Text size="large">Pixel Playground</Text>
          </Button>
      <Button
        a11yTitle={dark ? "Switch to light mode" : "Switch to dark mode"}
        icon={dark ? <Moon /> : <Sun />}
        onClick = {() => onClick()}
        tip={{
          content: (
            <Box
              pad="small"
              round="small"
              background={dark ? "dark-1" : "light-3"}
            >
              {dark ? "Switch to light mode" : "Switch to dark mode"}
            </Box>
          )
        }}
      />
   </AppBarTheme>
)}

export default AppBar;
