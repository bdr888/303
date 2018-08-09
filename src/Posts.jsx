import React from 'react';
import { Excerpt, Post, PostWrapper, Title } from './Posts.styled';

const Posts = props => {
  return (
    <PostWrapper>
      {props.posts.map(post => (
        <Post key={post.id}>
          <Title>
            <a href={post.link} target="_blank">
              {post.title.rendered}
            </a>
          </Title>
          <Excerpt>{post.excerpt.rendered}</Excerpt>
        </Post>
      ))}
    </PostWrapper>
  );
};

export default Posts;
