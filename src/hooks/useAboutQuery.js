import { useStaticQuery, graphql } from 'gatsby';

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: { eq: 47 }) {
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  return data;
};