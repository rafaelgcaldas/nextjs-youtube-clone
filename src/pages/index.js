import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="Youtube">
     <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: "NExt.js: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER {PARTE #01}",
      authorId: 1,
      authorName: "Rafael Gomes",
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "NExt.js: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER {PARTE #01}",
      authorId: 1,
      authorName: "Rafael Gomes",
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "NExt.js: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER {PARTE #01}",
      authorId: 1,
      authorName: "Rafael Gomes",
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "NExt.js: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER {PARTE #01}",
      authorId: 1,
      authorName: "Rafael Gomes",
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
    // revalidate: 15,
  };
}

// export async function getStaticProps() {
//   const data = await getVideos();

//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(data)),
//     }, // will be passed to the page component as props
//     revalidate: 15,
//   };
// }

export default Home;
