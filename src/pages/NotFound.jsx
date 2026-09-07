import {Link} from "react-router-dom"; import Page from "../components/common/Page"; import Icon from "../components/common/Icon";
export default function NotFound(){return <Page narrow><div className="notfound"><Icon name="Compass"/><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="btn" to="/">Go home</Link></div></Page>}
