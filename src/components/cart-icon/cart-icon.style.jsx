import styled from "styled-components";
import { ReactComponent as ShoppingSvgIcon } from "../../assets/shopping-bag.svg";


export const CartIconContainer = styled.div`
  width: 75px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShopingIcon = styled(ShoppingSvgIcon)`
  width: 60px;
  height: 40px;
`;

export const ItemCount = styled.span`
  position: absolute;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;

  color: rgb(216, 16, 16);
`;
