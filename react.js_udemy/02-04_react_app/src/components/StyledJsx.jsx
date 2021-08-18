// yarn add styled-jsx
export const StyledJsx = () => {
  return (
    <>
      <div className='container'>
        <p className='title'>- Styled JSX -</p>
        <button className='button'>FIGHT!!!</button>
      </div>
      {/* 疑似要素は使えない */}
      {/* Next.jsで標準に入っている */}
      <style jsx='true'>{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
