import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    article: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();

  }

  loadArticles = () => {
    API.getArticle()
      .then(res => 
        // this.setState({ articles: res.data, article: "", date: "", url: "" })
        this.setState({ articles: res.data, article: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.article && this.state.date) {
      API.saveArtcile({
        article: this.state.article,
        date: this.state.date,
        url: this.state.url
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Articles Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.article}
                onChange={this.handleInputChange}
                name="article"
                placeholder="article (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.date && this.state.article)}
                onClick={this.handleFormSubmit}
              >
                Submit article
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/Articles/" + article._id}>
                      <strong>
                        {article.article} by {article.date}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletearticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
