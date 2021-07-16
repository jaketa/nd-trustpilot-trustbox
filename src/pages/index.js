import React from "react";
import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
              <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
            </Helmet>
            <div class="trustpilot-widget" data-locale="en-US" data-template-id="539ad60defb9600b94d7df2c" data-businessunit-id="571fa0520000ff00058c0de4" data-style-height="500px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="en">
              <a href="https://www.trustpilot.com/review/newdayusa.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        </div>
    );
  }
};

export default Application