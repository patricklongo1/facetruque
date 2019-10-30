import React, { Component } from 'react';
import imageA from '../assets/Rectangle3.svg'
import imageB from '../assets/profile.svg'
import imageC from '../assets/Rectangle4.svg'
import imageD from '../assets/Rectangle6.svg'
import imageF from '../assets/Rectangle5.svg'
import PostItem from './PostItem.js';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Roger Romero',
          avatar: imageA,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, o que vocês estão achando do conteudo do bootcamp da RocketSeat?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: imageB,
            },
            date: '04 Jun 2019',
            content: 'Simplesmente #Delicinha',
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Almerinda Silva',
          avatar: imageD,
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza?\ncomo vocês estão psicológicamente, enquanto estão fazendo o bootcamp da RocketSeat?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Julio Lisboa',
              avatar: imageF,
            },
            date: '04 Jun 2019',
            content:'Simplesmente #FullDopamina',
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: imageC,
            },
            date: '04 Jun 2019',
            content:'#Delicinha',
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
