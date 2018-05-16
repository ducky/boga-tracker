// import React from 'react';
// import styled from 'styled-components';

// import theme from 'styles/theme';

// import Currency from 'components/Currency';
// import Stat from 'components/Stat';

// const StyledActionBar = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
//   background: ${theme.B400};
//   padding: 15px;
//   box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
//   z-index: 1;

//   .ActionBar__left {
//     margin-right: 15px;
//   }

//   .ActionBar__right {
//     display: flex;
//     margin-left: auto;
//   }

//   select {
//     background: rgba(0, 0, 0, 0.2);
//     border: 1px solid rgba(0, 0, 0, 0.2);
//   }
// `;

// const ActionBar = ({ startingBalance, totalBalance, totalPaid, currentProgress, right }) => (
//   <StyledActionBar>
//     <div className="ActionBar__left">
//       <Stat title="Starting Balance">
//         <Currency quantity={startingBalance} pattern="!##,### " />
//       </Stat>
//       <Stat title="Remaining Balance">
//         <Currency quantity={totalBalance} pattern="!##,### " />
//       </Stat>
//       <Stat title="Total Paid">
//         <Currency quantity={totalPaid} pattern="!##,### " />
//       </Stat>
//       <Stat title="Progress">{`${currentProgress}%`}</Stat>
//     </div>
//     <div className="ActionBar__right">{right}</div>
//   </StyledActionBar>
// );

// TODO - Add Stats for Call Duration, etc.
const ActionBar = () => null;

export default ActionBar;
