/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import './styles.css';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import bookmarker from '../../assets/bookmarker.svg';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { feed: [''] };
  }

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get('posts');

    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on('like', likePost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likePost._id ? likePost : post
        ),
      });
    });
  };

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  };

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="" />
            </header>
            <img src={`http://localhost:3333/files/${post.image}`} alt="" />

            <footer>
              <div className="buttons-area">
                <div className="actions">
                  <button
                    type="button"
                    onClick={() => this.handleLike(post._id)}
                  >
                    <img src={like} alt="" />
                  </button>
                  <button type="button">
                    <img src={comment} alt="" />
                  </button>
                  <button type="button">
                    <img src={send} alt="" />
                  </button>
                </div>
                <div className="book-marker">
                  <button type="button">
                    <img src={bookmarker} alt="" />
                  </button>
                </div>
              </div>

              <strong>{post.likes} curtidas </strong>
              <span className="user-likes">
                Curtido por<a href="#">Andrelino Silva</a>e
                <a href="#">outros 100k</a>
              </span>
              <div className="comment-area">
                <strong>{post.author}</strong> {post.description}
                <span className="hash-tags">{post.hashtags}</span>
                <div className="user-comments">
                  <span className="user-comment">
                    <a href="#">Andrelino Silva </a>O cara tá só na vida boa!
                  </span>

                  <span className="like-user-comment">
                    <button type="button">
                      <img src={like} alt="" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="add-comment">
                <input
                  type="text"
                  name=""
                  placeholder="Adicione um comentário..."
                />
                <button type="button" className="disable">
                  <span className="post-comment">Publicar</span>
                </button>
              </div>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
