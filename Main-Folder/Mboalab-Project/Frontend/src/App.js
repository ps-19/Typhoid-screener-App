import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Location } from "@reach/router";

//internal imports
import routes from "./components/_routes/index";
import { AppLayout } from "./components/pages";

function App() {
  return (
    <Location>
      {({ location }) => <AppLayout location={location}>{routes}</AppLayout>}
    </Location>
  );
}

export default App;
