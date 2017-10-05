const React = require("react");
const helpers = require("./helpers.jsx");

var ResultsArticle = React.createClass({
    save: function (article) {
        this.props.saveArticle(article);
    },
  render: function() {
    return (
        <div className="well">
            <a href={this.props.url} target="_blank"><h5>{this.props.title}</h5></a>
            <p>Date Published: {this.props.date}</p>
            <form>
                <button className="btn btn-primary" type="button" onClick={()=>{this.save(this.props.art)}}>Save Article</button>
            </form>
        </div>
    )       
  }      
});

module.exports = SavedArticle;
