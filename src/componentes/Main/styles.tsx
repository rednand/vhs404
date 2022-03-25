import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: inline-flex;
  min-height: 100vh;
  justify-content: space-around;
`;

export const MainLeft = styled.div`
  position: relative;
  display: inline-flex;
  width: 60%;
  margin: 4% 8%;
`;

export const TimeLine = styled.div`
  width: 3%;
  z-index: 5;
  margin: 0;
  background-color: #d41d24;
`;

export const Section = styled.div`
  width: 25%;
  margin-right: 3%;
  color: var(--bg200);
  background: var(--bg900);
  margin: 4% 8%;
  text-decoration: none;
  .sectionH3 {
    font-size: 1.7rem;
    font-weight: 900;
  }
  .itens {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2rem;
  }
`;
export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  .h2Class {
    color: var(--bg200);
    font-size: 3rem;
    text-align: center;
    background: var(--bg900);
    margin: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  margin: 8% 0;
  word-spacing: 5px;
  color: var(--bg200);
  outline: none;
  background: var(--bg900);
  display: flex;
  flex-wrap: wrap;

  .card {
    border: none;
    background: var(--bg900);
  }
  .titleItem {
    font-size: 2rem;
    margin: 3rem 0 0 2rem;
    width: 50%;
  }
  .releaseItem {
    position: absolute;
    top: -10%;
    left: -3%;
    width: 50%;
    text-align: center;
    background: #d41d24;
    color: var(--bg200);
    letter-spacing: 0.2rem;
    font-size: 1.9rem;
  }

  .overviewItem {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 19px;
    width: 93%;
    margin: 1rem 2rem;
  }
  .cardMedia {
    width: 100%;
    margin: 2%;
  }
  .posterItem {
    width: 30%;
    height: 25rem;
    margin: auto 2%;
  }
  .videoItem {
    width: 60%;
    height: 25rem;
    margin: auto 3%;
  }
  .buttonGenre {
    display: inline-flex;
    margin: 4%;
    .pbuttonGenre {
      margin-right: 3rem;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 700;
      font-size: 19px;
      padding: 0.6rem 1.2rem;
      color: var(--bg100);
      background-color: var(--bg900);
      border-width: 1px;
      border-color: #d41d24;
    }
  }
`;
