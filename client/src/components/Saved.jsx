const React = require("react");
const SavedArticle = require('./main/SavedArticle');

var Saved = React.createClass({  
  render: function() {    
    return (
      <div>    
        {this.props.savedArticles.map( function (art, i) {
          return (
            <div key={i}>
              <SavedArticle artId={art._id} url={art.url} title={art.title} date={art.date} delete={this.props.delete} />
            </div>
          )
        }.bind(this))}
    </div>    
    )
  }
});

// Export the component back for use in other files
module.exports = Saved;
