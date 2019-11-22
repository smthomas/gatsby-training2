import React from 'react';
import { css } from "@emotion/core"

const Section = ({title, body}) => {
  const container = css`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const headingStyle = css`
    color: green;
  `;

  return (
    <div css={container}>
      <h2 css={headingStyle}>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Section;
