import React from "react";
import {Helmet} from "react-helmet";
import TrustBox from '../components/trustbox/trustbox'

 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
              <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
            </Helmet>
            <TrustBox></TrustBox>
        </div>
    );
  }
};

export default Application