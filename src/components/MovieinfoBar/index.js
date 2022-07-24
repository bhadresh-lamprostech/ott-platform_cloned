import React from "react";
import { calcTime, convertMoney } from "../../helpers";
import { Wrapper, Content } from "../MovieinfoBar/MoveinfoBar.style";
import PropTypes from 'prop-types'
const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time:{calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>


        </Content>
    </Wrapper>
)
MovieInfoBar.propoType = {
    time: PropTypes.number,
    budget: PropTypes.number,
    Revenue: PropTypes.number,
}
export default MovieInfoBar















// // Convert time to hours and minutes
// export const calcTime = time => {
//     const hours = Math.floor(time / 60);
//     const mins = time % 60;
//     return `${hours}h ${mins}m`;
//   };
//   // Convert a number to money formatting
//   export const convertMoney = money => {
//     const formatter = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0,
//     });
//     return formatter.format(money);
//   };
  