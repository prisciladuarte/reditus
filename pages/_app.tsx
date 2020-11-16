import "@material/theme/dist/mdc.theme.css";
import "@rmwc/theme/theme.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/typography/dist/mdc.typography.css";
import "@material/button/dist/mdc.button.css";
import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/list/dist/mdc.list.css";
import "@material/ripple/dist/mdc.ripple.css";
import "@rmwc/icon/icon.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/radio/dist/mdc.radio.css";
import "@material/drawer/dist/mdc.drawer.css";

import "../styles.css";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
