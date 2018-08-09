import styled from 'styled-components';

const PostWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0rem auto;
  max-width: 1000px;
`;

const Post = styled.div`
  max-width: 400px;
  margin: 1rem;
  background-color: whitesmoke;
`;

const Title = styled.div`
  font-size: 1.25rem;
  text-align: center;
`;

const Excerpt = styled.div`
  font-size: 1rem;
  margin: 1rem;
`;

export { Title, Excerpt, PostWrapper, Post };
