const React = require("react");
const ResultsArticle = require('./main/ScrappedArticle');

var Results = React.createClass({
  render: function() {    
    return (      
      <div>
        {this.props.results.map( function (art, i) {
          return (            
            <div key={i}>              
              <ResultsArticle key={i} art={art} url={art.web_url} title={art.headline.main} date={art.pub_date} saveArticle={this.props.saveArticle}/>            
            </div>            
          )
        }.bind(this))}            
      </div>
    );
  }
});

module.exports = ScrappedResults;
